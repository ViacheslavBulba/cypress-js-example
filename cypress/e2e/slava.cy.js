import { log } from "../utils/WebElementsUtils";

describe('cypress demo test set', () => {

  // beforeEach(() => {
  //   // const startUrl = 'https://www.target.com/';
  //   // cy.task('log', `open page ${startUrl}`);
  //   // cy.visit(startUrl);
  // })

  // ---------------------------------------------------------

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

  // ---------------------------------------------------------

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

    // input
    log(`type in search field: ${textToSearch}`);
    cy.get(locatorSearchInput).type(`${textToSearch}`).should('have.value', textToSearch);

    log(`assert that there is only 1 row in the table with search results`);
    cy.get(locatorTableRows).should('have.length', 1);
  });

  // ---------------------------------------------------------

  it.only('paging', () => {
    const locatorSearchInput = '.data-table--header [type="search"]';
    const locatorBankNames = '.dataTables-content-main tr td a';
    const textToSearch = 'Bank of Wausau';

    const startUrl = 'https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list/index.html';
    log(`open page ${startUrl}`);
    cy.visit(startUrl);

    cy.get(locatorBankNames)
      .should('have.length.gt', 0) // or .gte for greater or equal
      .should('have.length', 13);

    const bankNames = []
    cy.get(locatorBankNames)
      .each((bank) => bankNames.push(bank.text()))
      .then(() => {
        // cy.log(bankNames.join(', '));
        log(bankNames.join(', '));
      });




    // log(`type in search field: ${textToSearch}`);
    // cy.get(locatorSearchInput).type(`${textToSearch}`);

    // cy.wait(3000);

    // const amount = getNumberOfElements(locatorBankNames);
    // log(`${amount}`);

    // assertNumberOfElements(locatorBankNames, 12);

    // getNumberOfElements(locatorBankNames).then((value) => {
    //   if (value.length === 12) {
    //     cy.log('TRUE');
    //   } else if (value.length === 0) {
    //     cy.log('Not found');
    //   }
    // });

    // log(`${amount}`);


    // log(`assert that there is only 1 row in the table with search results`);
    // cy.get(locatorTableRows).should('have.length', 1);
  });

  // ---------------------------------------------------------

});