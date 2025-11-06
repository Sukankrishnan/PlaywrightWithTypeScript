Hooks - Helps to run before and after tests.

    test.beforeAll(), test.beforeEach(), test.afterAll(), test.afterEach()

Annotations - Report has details based on annotations

    skip(), fail(), fixme(), only(), slow()

Tags - Run the tests based on tags. Add below line in playwright config file

    grep: [new RegExp("@smoke")] - Run only smoke tests

    grepInvert: [new RegExp("@smoke")] - Run except smoke tests

Grouping tests - test.describe() makes a group of tests run for before/after hooks.
