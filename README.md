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

- no default logger or html report
- does not search elements in shadow dom by default, need to use commands to switch many times like in selenium
- support less programming languages
- support less browsers
- cannot open bestbuy.com or cars.com
- do not support xpath out of the box
- no async assertions out of the box
- poor support of the community from the dev side, bugs are not fixed for years, new features that community is asking to add never implemented, they never fix or add something that the community is asking
- api tests in cypress are 2 times slower than in playwright
- no convenient vs code plugin
- tool for developers, not for QA
- cypress is promised based - so in order to use it you should first learn and understand how JS Promises work

# Html Reporter

npm i --save-dev cypress-mochawesome-reporter