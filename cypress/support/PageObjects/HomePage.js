class HomePage{

    constructor(){
        this.cookieButtonLocator = '.acceptCookie'
        this.servicesLinkText = 'Services'
        this.automationLinkText = 'Automation'
        this.worldwideDropdownLocator = '.sprite-header.sprite-global-arrowdown'
        this.countryListLocator = '#country-list-id'
    }

    acceptCookies() {
        cy.get(this.cookieButtonLocator).click()
    }

    HoverOverOnServices(){
        cy.contains(this.servicesLinkText).invoke('show')
    }

    clickOnAutomation(){
        cy.contains(this.automationLinkText).click({ force: true })
    }

    clickOnWorldwideDropdown(){
        cy.get(this.worldwideDropdownLocator).click()
    }

    verifyCountryLinksInWorldwide(){
        cy.get(this.countryListLocator).find('a').each(($link) => {
            const href = $link.attr('href')
            if (href) {
                cy.request(href) // Send a request to the href URL
                    .its('status') // Check the status code of the response
                    .should('eq', 200) // Assert that the status code is 200 (OK)
            }
        })
    }
}
export default HomePage