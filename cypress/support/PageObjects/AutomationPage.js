class AutomationPage {

    constructor() {
        this.pageHeadingLocator = '.page-heading > h1 > span'
        this.servicesLinkText = 'Services'
        this.automationLinkText = 'Automation'
        this.contactUsFormLocator = '#__field_'
        this.contactUsInputFieldsLocator = '.Form__MainBody #__field_ label + input'
        this.contactUsMessageFieldLocator = '.Form__MainBody #__field_ label + textarea'
        this.contactUsCountryLocator = '.selectwrapper select'
        this.iAgreeCheckboxLocator = 'input[value="I agree"]  + label'
    }

    verifyPageTitle(expectedPageTitle) {
        cy.title().should('eq', expectedPageTitle)
    }

    verifyPageHeading(expectedHeading) {
        cy.get(this.pageHeadingLocator).invoke('text').then((actualHeading) => {
            actualHeading = actualHeading.trim()
            expect(actualHeading).to.equal(expectedHeading)
        })
    }

    verifyServicesSelected() {
        cy.contains(this.servicesLinkText).parents('li').should('have.class', 'selected')
    }

    verifyAutomationSelected() {
        cy.contains(this.automationLinkText).parents('li').should('have.class', 'selected')
    }

    goToContactUsForm() {
        cy.get(this.contactUsFormLocator).scrollIntoView()
    }

    fillContactUsFormWithRandomData() {
        // Generate random data
        const randomString = () => Math.random().toString(36).substring(7);
        const firstName = `First${randomString()}`;
        const lastName = `Last${randomString()}`;
        const email = `test${randomString()}@random.com`;
        const phone = `123-456-${Math.floor(Math.random() * 10000)}`;
        const company = `Company${randomString()}`;
        const message = `Message${randomString()}`;

        // Fill in the contact form
        cy.get(this.contactUsInputFieldsLocator).first().type(firstName);
        cy.get(this.contactUsInputFieldsLocator).eq(1).type(lastName);
        cy.get(this.contactUsInputFieldsLocator).eq(2).type(email);
        cy.get(this.contactUsInputFieldsLocator).eq(3).type(phone);
        cy.get(this.contactUsInputFieldsLocator).eq(4).type(company);

        cy.get(this.contactUsCountryLocator).select('Germany')

        cy.get(this.contactUsMessageFieldLocator).type(message);
    }

    clickOnIAgreeCheckbox(){
        cy.get(this.iAgreeCheckboxLocator).click()
    }
}
export default AutomationPage