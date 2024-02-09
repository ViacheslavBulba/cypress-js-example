import { log } from "../utils/WebElementsUtils";

describe('cypress demo test set', () => {

  beforeEach(() => {
    // const startUrl = 'https://www.target.com/';
    // cy.task('log', `open page ${startUrl}`);
    // cy.visit(startUrl);
  })

  it('target.com search', () => {
    const locatorSearchResults = '[data-test="product-title"]';
    const productToSearch = 'AirPods Pro (2nd generation) with MagSafe Case (USB‑C)';

    const startUrl = 'https://www.target.com/';
    log(`open page ${startUrl}`);
    cy.visit(startUrl);

    log(`enter [${productToSearch}] into search field on the top and press enter`);
    cy.get('#search').type(`${productToSearch}{enter}`);

    const productsFound = [];
    cy.get(locatorSearchResults)
      .each((el) => productsFound.push(el.text()));
    log('found products');
    log(productsFound);

    log(`assert that the first product in search results is: ${productToSearch}`);
    cy.get(locatorSearchResults).first().should('have.text', productToSearch);
  });

  it('FDIC first column header text', () => {
    const locatorTableHeaders = '.dtfullname';
    const expectedHeader = 'Bank Name';

    const startUrl = 'https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list/index.html';
    log(`open page ${startUrl}`);
    cy.visit(startUrl);

    log(`assert that the first column header text is: ${expectedHeader}`);
    cy.get(locatorTableHeaders).first().should('have.text', expectedHeader);
  });

  it('FDIC search Bank of Wausau', () => {
    const locatorSearchInput = '.data-table--header [type="search"]';
    const locatorTableRows = '.dataTables-content-main tr';
    const textToSearch = 'Bank of Wausau';

    const startUrl = 'https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list/index.html';
    log(`open page ${startUrl}`);
    cy.visit(startUrl);

    log(`type in search field: ${textToSearch}`);
    cy.get(locatorSearchInput).type(`${textToSearch}`);

    log(`assert that there is only 1 row in the table with search results`);
    cy.get(locatorTableRows).should('have.length', 1);
  });

});