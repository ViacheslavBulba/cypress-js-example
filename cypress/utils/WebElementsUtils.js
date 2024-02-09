export async function getTextFromElements(locator) {
  const results = [];
  cy.get(locator)
    .each((el) => results.push(el.text()));
  return results;
}

export function log(text) {
  cy.task('log', text);
}