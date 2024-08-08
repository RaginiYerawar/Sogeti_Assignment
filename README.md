# SogetiHomeAssignment : UI
This repository contains UI tests for requested scenarios. 

**Prerequisite:** Node.js should installed on your system for both UI and API tests to be run

**Technology Stack:**
- Windows64 OS
- Cypress
- Javascript
- Page Object Model (POM) for a clean and maintainable test structure
- Cucumber BDD framework
- Cucumber Html Report: can be downloaded from [here](https://drive.google.com/drive/folders/1iScmpYimCYOReW6HA7baktqCGgoV_tl-?usp=sharing)

**How to Use:**

    Clone the repository to your local machine.

    git clone [https://github.com/RaginiYerawar/Sogeti_Assignment.git]

    Open the project in your preferred IDE (e.g., Visual Studio).

    Run the tests using the test runner integrated with your IDE or through the command line. 

    commands to follow:
    1. cd <cloned project path>
    2. npm install
    3. npx cypress run

# SogetiHomeAssignment : API
For API testing I used POSTMAN as tests were pretty straight forward. More info can be found collection overview.
I have kept these tests on public collection [here](https://www.postman.com/raginiyerawar/workspace/public-workspace-raginiyerawar/collection/12711521-45a134c6-df09-4133-bcb6-7dfb2fcb3910?action=share&creator=12711521)
and test file [here](https://drive.google.com/drive/folders/1XPWorQMSc_SrwWjL7rM99ZbMjug6ZVuq?usp=sharing)

**How to Run:**

    1. Through POSTMAN desktop app or browser app
      - Open collection in POSTMAN
      - Click on run collection
      - Make sure all the tests are selected
      - Select the downloaded test_data.csv file
      - Run the collection

    2. Through comand line using newman
      - Download collection from https://drive.google.com/drive/folders/1XPWorQMSc_SrwWjL7rM99ZbMjug6ZVuq?usp=sharing
      - Open cmd in the downloaded collection and testData directory and run command:
        - npm install -g newman
        - newman run "API Tests Sogeti.postman_collection.json" -d test_data.csv
