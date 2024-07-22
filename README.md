Note: I have 3 years experience in JavaScript and 1 year in React and React Native.
I've used express.js but never Angular. I chose to use Angular on purpose to demonstrate
how I can pick things up in a short amount of time.

This task I achieved everything except the auto refresh. If manually refreshed you will see the status update.
With more time I would have solved this too. I hope this work shows my capability in a good light. Thank you
for the opporttunity.

# Angular UI Repository
First setup the RestAPI repository and whilst that server is running, run this application
Welcome to the Angular UI repository. This project is an Angular application that includes a monitoring component and is set up for end-to-end testing with Cypress.

## Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup Instructions

Follow these steps to set up the Angular UI repository:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/AbuNavsa/angular-monitoring-system.git
   cd your-angular-ui-repo

2. **Install Dependencies**

   ```bash
   npm install

3. **Run Application**
   ```bash
   ng serve

## Testing Setup

1. **Install Cypress**
   ```bash
   npm install cypress --save-dev


2. **Install Cypress**
   ```bash
   npm install cypress --save-dev

Cypress configuration is set up in cypress.config.js (or cypress.config.ts if using TypeScript). 
By default, it uses http://localhost:4200 as the base URL. Ensure this matches the URL where your
Angular app will be served.

// cypress.config.js

`  module.exports = {
    e2e: {
    baseUrl: 'http://localhost:4200',
    supportFile: 'cypress/support/e2e.ts',
    },
  };`

3. **Run Cypress in UI**
  `npx cypress open
  `

4. **Run Cypress without UI from terminal**
`   npx cypress run
`
