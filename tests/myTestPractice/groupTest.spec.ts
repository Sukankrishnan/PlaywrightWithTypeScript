import {test} from '@playwright/test';

//grouping tests with describe block
test.describe("Group of tests - myTestPractice", ()=>{
    test.beforeAll(async()=>{
    console.log("Database connection set up");
})

test.beforeEach(async()=> {
    console.log("Clear cookies");
})

test.afterEach(async()=>{
    console.log("Cache removal");
})

test.afterAll(async()=>{
    console.log("Database connection closed");
})

test("Test block 1", async()=>{
    console.log("Executing test block 1");
})

test("Test block 2", async()=>{
    console.log("Executing test block 2");
})


});


test("Test block 3", async()=>{
    console.log("Executing test block 3");
})      

test("Test block 4", async()=>{
    console.log("Executing test block 4");
})