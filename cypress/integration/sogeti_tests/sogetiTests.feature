Feature: Sogeti - Coding Challenge

    This is the feature file for Sogeti test scenarios

    Scenario: Verify 'Automation screen and Automation text' is displayed and Services and Automation are selected.
    Given User is on the homepage
    When User hover over Services and click on automation link
    Then User lands on Automation page with heading 'Automation'
    Then Hover over again on Services link, Services and Automation are selected

    
    Scenario: Verify Contact Form Submission on Automation page.
    Given User is on the homepage
    When User hover over Services and click on automation link
    When User scrolls down to the Contact us Form and fill all the fields with Random Generated Data
    When User checks I agree checkbox
    When User click on Submit button
    Then The form is submitted and Thank you message is displayed

    
    Scenario: Verify country specific links are working in Worldwide dropdown.
    Given User is on the homepage
    When User clicks on Worldwide dropdown link in page header to see Country specific Sogeti links
    Then All the country specific Sogeti links are working properly