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

  it('paging', () => {
    const locatorSearchInput = '.data-table--header [type="search"]';
    const locatorBankNames = '.dataTables-content-main tr td a';
    const textToSearch = 'Bank of Wausau';

    const startUrl = 'https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list/index.html';
    log(`open page ${startUrl}`);
    cy.visit(startUrl);

    cy.get(locatorBankNames)
      .should('have.length.gt', 0) // or .gte for greater or equal
      .should('have.length', 12);

    const bankNames = []
    cy.get(locatorBankNames)
      .each((bank) => bankNames.push(bank.text()))
      .then(() => {
        // cy.log(bankNames.join(', '));
        log(bankNames.join(', '));
      });


    // cy.wait(1000);
    // cy.xpath('//a[text()="5"]').last().click();
    // cy.wait(5000);

    for (let i = 2; i < 5; i++) {
      cy.wait(1000);
      cy.xpath(`//a[text()="${i}"]`).last().click();
      cy.wait(5000);
    }


    // cy.get('body').then((body) => {
    //   if (body.find('[title="Log out"]').length > 0) {
    //     cy.contains('Log out').click();
    //     cy.contains('Submit').click();
    //   }
    // });

    // // .paginate_button[data-dt-idx="48"]
    //       cy.get('.dataTables_paginate')
    //         .each((bank) => bankNames.push(bank.text()))
    //         .then(() => {
    //           // cy.log(bankNames.join(', '));
    //           log(bankNames.join(', '));
    //         });
  });

  // ---------------------------------------------------------

});