const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: './reports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome'
        },
        device: 'Test machine',
        platform: {
            name: 'Windows',
            version: '10'
        },
        "Environment": "Staging",

    }
});