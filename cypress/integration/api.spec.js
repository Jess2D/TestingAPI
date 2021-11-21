/**
 * @description Represents a test script
 *              whose purpose is to verify
 *              that the API given has the following Acceptance Criteria:
 *
 *               A) Name = "Carbon credits"
 *               B) CanRelist = true
 *               C) The Promotions element with Name = "Gallery" has a Description that contains the text "Good position in category"
 *
 */

/// <reference types="Cypress" />

describe('Testing API with Cypress', () => {
	/**
	 * @description Represents the first Acceptance Criteria
	 */
	it('Name should be equal to *Carbon credits*', () => {
		cy.request(
			'https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=true'
		).as('Categories')
		cy.get('@Categories')
			.its('body')
			.should('include', { Name: 'Carbon credits' })
	})

	/**
	 * @description Represents the second Acceptance Criteria
	 */
	it('CanRelist shoud be true', () => {
		cy.request(
			'https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=true'
		).as('Categories')
		cy.get('@Categories').its('body').should('include', { CanRelist: true })
	})

	/**
	 * @description Represents the third Acceptance Criteria:
	 */

	it('The Promotions element with Name = *Gallery* has a Description that contains the text *Good position in category*', () => {
		cy.request(
			'https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=true'
		).as('Categories')
		cy.get('@Categories')
			.its('body')
			.its('Promotions')
			.then((list) => Cypress._.map(list, 'Name', 'Description'))
			.should('include', 'Gallery', 'Good position in category')
	})
})
