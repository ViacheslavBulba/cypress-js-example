npx cypress open

v13.6.4

cypress supported browsers
- chrome
- electron
- firefox

npx cypress run

```npx cypress run --spec "cypress/e2e/slava.cy.js" --headed```

```npx cypress run --spec "cypress/e2e/wikipedia-test-spec.cy.js" --headed```

By default, `cypress run` will run all tests headlessly.

# Cypress Cons

- No default logger or html reporter
- Does not search elements in shadow dom by default, need to use commands to switch many times back and forth like in selenium
- Support less programming languages - JS only
- Support less browsers - Firefox and Chrome
- Due to the same-origin policy, it cannot open some websites like www.bestbuy.com or www.cars.com - it means it is not E2E testing tool, more like component & unit testing tool for local development purposes
- Do not support xpath out of the box
- No async assertions out of the box
- Poor support of the community from the dev side - bugs are not fixed for years, new features that the community is asking to add - never implemented
- API tests in Cypress are few times slower than in Playwright
- No convenient vs code plugin
- Cypress is promised based - so in order to use it you should first learn and understand how JS Promises work - and you will have nested .then() hell
- Cannot run tests on selenium grid
- Could not find a way to implement simple test to go through pagination elements on the web page
- Cypress cannot drive two browsers at the same time, cannot open more than one browser instance or tab in a test
- Lack of a cy.hover() command
- No any native or mobile events support
- Limited support for iframes
- Conclusion - Cypress is not a bad tool, every tool has its pros and cons - it's just a tool for developers, not for QA

# Html Reporter

npm i --save-dev cypress-mochawesome-reporter

# XPath support

npm install -D cypress-xpath