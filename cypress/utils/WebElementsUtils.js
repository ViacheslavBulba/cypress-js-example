// export async function getTextFromElements(locator) {
//   const results = [];
//   cy.get(locator)
//     .each((el) => results.push(el.text()));
//   return results;
// }

export function log(text) {
  cy.task('log', text);
}

export function printNumberOfElements(locator) {
  cy.get(locator)
    .then((value) => {
      cy.task('log', `found ${value.length} elements`);
    });
  // usage - printNumberOfElements(locatorBankNames);
}


export function assertNumberOfElements(locator, amount) {
  cy.get(locator)
    .should('have.length', amount);;
  // usage - assertNumberOfElements(locatorBankNames, 12);
}



// //Collect the items then print
// const items = []
// cy.get('#items li')
// .each(($li) => items.push($li.text()))
// .then(() => {
// cy.log(items.join(', '))
// })