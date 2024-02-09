describe('wikipedia spec', () => {

  const usernameInputSelector = '#wpName1';
  const passwordInputSelector = '#wpPassword1';
  const loginButtonSelector = '#wpLoginAttempt';
  const watchListUpperMenuSelector = '#pt-watchlist-2';
  const addToWatchListStarIconSelector = '#ca-watch';
  const watchButtonSelector = '[value="Watch"]';

  beforeEach(() => {
    cy.visit('https://en.wikipedia.org/wiki/Main_Page')
  })

  it('add two articles to watchlist and remove one of them', () => {

    const username = 'Endpoint-test';
    const password = 'Testing123';
    const firstArticle = 'JavaScript';
    const secondArticle = 'SOLID';

    signOutIfSignedIn();
    signIn(username, password);
    goToWatchList();
    deleteAllFromWatchListIfAny();
    searchOnWiki(firstArticle);
    addToWatchList(firstArticle);
    assertTextIsPresent('Your watchlist has 1 page');
    searchOnWiki(secondArticle);
    addToWatchList(secondArticle);
    assertTextIsPresent('Your watchlist has 2 pages');
    removeFromWatchList(secondArticle);
    assertTextIsPresent('Your watchlist has 1 page');
    clickOnText('Edit your list of watched pages');
    assertTextIsPresent(firstArticle);
    if (!firstArticle.includes(secondArticle)) { // for the case when we have the same text in both, e.g. Java & JavaScript
      assertTextIsMissing(secondArticle);
    }
    clickOnText(firstArticle);
    assertArticleTitleHasText(firstArticle);
  })

  function signOutIfSignedIn() {
    cy.get('body').then((body) => {
      if (body.find('[title="Log out"]').length > 0) {
        cy.contains('Log out').click();
        cy.contains('Submit').click();
      }
    });
  }

  function signIn(username, password) {
    cy.contains('Log in').click();
    cy.get(usernameInputSelector).clear().type(username);
    cy.get(passwordInputSelector).clear().type(password);
    cy.get(loginButtonSelector).click();
    cy.contains('Watchlist');
  }

  function goToWatchList() {
    cy.contains('Watchlist');
    cy.get(watchListUpperMenuSelector).click();
    cy.contains('Edit your list of watched pages');
  }

  function deleteAllFromWatchListIfAny() {
    cy.get('body').then((body) => {
      if (body.find(':contains(You have no items on your watchlist)').length == 0) {
        cy.contains('Edit your list of watched pages').click();
        cy.contains('Remove titles from watchlist');
        cy.get('.oo-ui-checkboxInputWidget > input').click({ multiple: true });
        cy.get('button[value="Remove titles"]').click();
        cy.contains('removed from your watchlist');
        cy.get(watchListUpperMenuSelector).click();
        cy.contains('You have no items on your watchlist.');
      }
    });
  }

  function searchOnWiki(text) {
    cy.get('#searchInput').type(text);
    cy.wait(3000);
    cy.contains('button', 'Search').click();
    cy.get('body').then((body) => { // additional logic for few results page
      if (body.find(':contains(From Wikipedia, the free encyclopedia)').length == 0) {
        cy.contains('Search results'); 
        cy.get('a > .searchmatch').first().click(); // open the first result by default
      }
    });
    cy.contains('From Wikipedia, the free encyclopedia');
  }

  function addToWatchList(text) {
    cy.get(addToWatchListStarIconSelector).click();
    cy.get('body').then((body) => {
      if (body.find(':contains(Add to watchlist)').length > 0) {
        cy.get(watchButtonSelector).click()
      }
    });
    cy.contains('and its talk page have been added to your watchlist permanently.');
    // check that it was added
    cy.get(watchListUpperMenuSelector).click();
    cy.contains('Edit your list of watched pages').click();
    cy.contains(text);
    cy.get(watchListUpperMenuSelector).click(); // go back to whatchlist page
  }

  function removeFromWatchList(text) {
    cy.get(watchListUpperMenuSelector).click();
    cy.contains('Edit your list of watched pages').click();
    cy.contains('Remove titles from watchlist');
    cy.contains(text);
    cy.get('body').then((body) => {
      if (body.find('input[value="' + text + '"]').length > 0) {
        cy.get('input[value="' + text + '"]').first().click();
      } else if (body.find('input[value*="' + text + '"]').length > 0) {
        cy.get('input[value*="' + text + '"]').first().click();
      } else {
        throw new Error('Cannot find article with text [' + text + '] in the watchlist')
      }
    });
    cy.get('button[value="Remove titles"]').click();
    cy.contains('removed from your watchlist');
    cy.get(watchListUpperMenuSelector).click();
  }

  function assertTextIsPresent(text) {
    cy.contains(text);
  }

  function assertTextIsMissing(text) {
    cy.get('body').then((body) => {
      if (body.find(':contains(' + text + ')').length > 0) {
        throw new Error('Text ' + text + ' should not be present on the page');
      }
    });
  }

  function clickOnText(text) {
    cy.contains(text).click();
  }

  function assertArticleTitleHasText(text) {
    cy.get('.mw-page-title-main').should('include.text', text);
  }

})