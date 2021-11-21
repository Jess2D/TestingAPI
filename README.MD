# Testing API Project

This is API testing Project that uses Javascript and Cypress framework. The purpose of API testing is to check functionality, reability, performance and securuty of programming interfaces.

## Assignment

Perform an automated test given the URL of an API and acceptance criteria.
1.API [URL](https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false)
2.Acceptance Criteria:
-Name = "Carbon credits"
-CanRelist = true
-The Promotions element with Name = "Gallery" has a Description that contains the text "Good position in category"

## Why Cypress?

One of the biggest [SDLC] (https://snyk.io/learn/sdlc-software-development-life-cycle/?utm_medium=Paid-Search&utm_source=google&utm_campaign=nb_ba_cnas&utm_content=sdlc&utm_term=sdlc&gclid=CjwKCAiA1uKMBhAGEiwAxzvX99WKQSVUUTPYfScMKqBtc9WUNyjEC61ipONjoRSBGA3PfkFwVfhl0xoCXzoQAvD_BwE) questions is how to test APIs and prepare data to interact with third-party servers.

Cypress provides the functionality to make an HTTP request. Using Cypress’s Request() method, we can validate GET, POST, PUT, and DELETE API Endpoints.

## Usage requirement

To run this application you must have [Node](https://nodejs.org/en/) and [npm](https://docs.npmjs.com/about-npm) installed.

In the project, inside the [ cypress > integration ] folder we have the _api.spec.json_ file where all the test cases are.

Use `npx cypress open` to run all automated test scripts.
