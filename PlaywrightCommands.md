To run headless mode

        npx playwright test

To run specific test. Copy the relative path of a test.

        npx playwright test ./tests/firstTest.spec.ts

To run multiple tests

        npx playwright test firstTest.spec.ts secondTest.spec.ts

        or

        npx playwright test firstTest secondTest

To run in headed mode

        npx playwright test --headed

        or

        add Headless: false in playwright.config.ts

To run only in specific browser in headed mode

        npx playwright test firstTest --project=chromium --headed

To run in all the 3 browsers parallely

        npx playwright test workers 3

To run specific test function

        npx playwright test -g 'secondFunction'

To run in debug mode

        npx playwright test --project=chromium --debug

To autogenerate code (By default, it is chromium)

        npx playwright codegen

To autogenerate code in specific browser

        npx playwright codegen --browser webkit

To autogenerate code and save in the file 

        npx playwright codegen -o ./tests/codeGenCode.spec.ts (-o is output file)


To view the browser window size

        npx playwright codegen --viewport-size=800,700

To view the browser in device screen size

        npx playwright codegen --device="iPhone 11 pro"

To get help for codegen

        npx playwright codegen --help

To view trace

        npx playwright show-trace ./test-results/codeGenCode-test-chromium-retry1/trace.zip

To enable trace while running

        npx playwright test --trace on

        npx playwright test --trace off

        npx playwright test --trace retain-on-failure

        npx playwright test --trace on-first-retry

        npx playwright test --trace on-all-retries

To install report using Allure

        npm install -D allure-playwright

        npm install -g allure-commandline

To generate allure results (in json format)

        allure generate allure-results --clean -o allure-report

To view the allure report in human readable

        allure open allure-report

To install Cucumber

        Install from plugins

        npm i @cucumber/cucumber -D

        npm i ts-node -D

To comment ctrl+/