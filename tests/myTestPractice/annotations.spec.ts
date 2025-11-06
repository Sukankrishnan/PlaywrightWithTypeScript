import {test} from '@playwright/test';

test.skip("Skip Test", async()=>{
    console.log("I am a skipped test");
});

test("Skip test with condition", async({page, browserName})=>{
    test.skip(browserName==='webkit', 'Skipping test on webkit browser');
})

test.fail("Fail Test", async()=>{
    console.log("I am a failed test");
})

test("Fail test with condition", async({page, browserName})=>{
    test.fail(browserName==="webkit", "Failing test on webkit browser as this feature is not implemented in webkit");
})

// Fix me is used to mark a test that is expected to be broken or not working. Mark this for future fixing.
test.fixme("Fixme Test", async()=>{
    console.log("I am a fixme test");
});

// slow is used to mark a test that is expected to take more time than usual.
test('Slow test', async()=>{
    console.log("I am a slow test");
    test.slow();
})


test("Slow test with condition", async({page, browserName})=>{
    test.slow(browserName==="webkit", "Marking test as slow on webkit browser");
})  

test.only("Only Test", async()=>{
    console.log("I am the only test to be executed");
});

