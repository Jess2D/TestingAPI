/// <reference types="Cypress" />
describe('Testing API with Cypress', () => {
	it('Name should be equal to *Carbon credits*', () => {
		cy.request(
			'https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=true'
		).as('Categories')
		cy.get('@Categories')
			.its('body')
			.should('include', { Name: 'Carbon credits' })
	})
})
