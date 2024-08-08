import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/PageObjects/HomePage";
import AutomationPage from "../../../support/PageObjects/AutomationPage";

const homePage = new HomePage()
const automationPage = new AutomationPage()

Given('User is on the homepage', () => {
    cy.visit(Cypress.env("url"))
    homePage.acceptCookies()
})

When('User hover over Services and click on automation link', () => {
    homePage.HoverOverOnServices()
    homePage.clickOnAutomation()
})

Then('User lands on Automation page with heading {string}', pageHeading => {
    automationPage.verifyPageTitle(pageHeading)
    automationPage.verifyPageHeading(pageHeading)
})

Then('Hover over again on Services link, Services and Automation are selected', () => {
    homePage.HoverOverOnServices()
    // Verify that the "Services" link is selected
    automationPage.verifyServicesSelected()
    // Verify that the "Automation" link is also selected in the dropdown
    automationPage.verifyAutomationSelected()
})

When('User scrolls down to the Contact us Form and fill all the fields with Random Generated Data', () => {
    automationPage.goToContactUsForm()
    automationPage.fillContactUsFormWithRandomData()
})

When('User checks I agree checkbox', () => {
    automationPage.clickOnIAgreeCheckbox()
})

When('User click on Submit button', () => {
    //This step and next step cannot be automated because captcha needs to be accepted to click on submit button
    //Captcha feature is made to avoid scripting/automating/bot
    //Captcha can be disabled in test environment to fully automate this test case 

})

Then('The form is submitted and Thank you message is displayed', () => {

})

When('User clicks on Worldwide dropdown link in page header to see Country specific Sogeti links', () => {
    homePage.clickOnWorldwideDropdown()
})

Then('All the country specific Sogeti links are working properly', () => {
    homePage.verifyCountryLinksInWorldwide()
})