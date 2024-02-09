// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Cypress.on('window:before:load', function (window) {
//   const original = window.EventTarget.prototype.addEventListener

//   window.EventTarget.prototype.addEventListener = function () {
//     if (arguments && arguments[0] === 'beforeunload') {
//       return
//     }
//     return original.apply(this, arguments)
//   }

//   Object.defineProperty(window, 'onbeforeunload', {
//     get: function () { },
//     set: function () { }
//   })
// })

// Cypress.on('window:load', function(window) {
//   const original = window.addEventListener;
//   window.addEventListener = function() {
//       if (arguments && arguments[0] === 'beforeunload') {
//           return;
//       }
//       return original.apply(this, arguments);
//   };
// });

// Cypress.on('window:load', function(window) {
//   Object.defineProperty(window, 'onbeforeunload', {
//     get: function() {},
//     set: function() {}
//   });
// });

// Cypress.on('window:before:unload', e => {
//   e.stopImmediatePropagation()
// })





 // cy.clearCookies();

  // // cy.window().then((win) =>  {
  // //   win.onbeforeunload = null;
  // // })

  // // cy.on('window:before:unload', e => {
  // //   e.stopImmediatePropagation()
  // // })

  // // cy.intercept('/service-worker.js', {
  // //   body: undefined
  // // })


  // cy.origin('https://www.cars.com', () => {
  //   cy.on('uncaught:exception', (e) => {
  //     if (e.message.includes('')) {
  //       return false
  //     }
  //   })
  // })



  // cy.contains('Accept all cookies').click()

  // // cy.get('select')
  // //   .select(['apples', 'bananas'])

  // cy.get('cars-search-form').shadow().find('[label="Make"]').shadow().find('#input').click()











//   import { log } from "../utils/WebElementsUtils";

// describe('cypress demo test set', () => {
//   beforeEach(() => {
//     // const startUrl = 'https://www.target.com/';
//     // cy.task('log', `open page ${startUrl}`);
//     // cy.visit(startUrl);
//   })

//   it('target search', () => {

//     const locatorSearchResults = '[data-test="product-title"]';

//     const productToSearch = 'AirPods Pro (2nd generation) with MagSafe Case (USB‑C)';

//     const startUrl = 'https://www.target.com/';
//     // cy.task('log', `open page ${startUrl}`);
//     log(`open page ${startUrl}`);
//     cy.visit(startUrl);

//     // cy.task('log', `enter [${productToSearch}] into search field on the top and press enter`);
//     log(`enter [${productToSearch}] into search field on the top and press enter`);
//     cy.get('#search').type(`${productToSearch}{enter}`);

//     const productsFound = [];
//     cy.get(locatorSearchResults)
//       .each((el) => productsFound.push(el.text()));
//     // cy.task('log', 'found products');
//     log('found products');
//     // cy.task('log', productsFound);
//     log(productsFound);

//     // cy.task('log', `assert that the first product in search results is: ${productToSearch}`);
//     log(`assert that the first product in search results is: ${productToSearch}`);
//     cy.get(locatorSearchResults).first().should('have.text', productToSearch);
//   });

// });