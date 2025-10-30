import { test} from "@playwright/test";
let page: any;

test.beforeAll(async()=>{
    console.log("Before all hook")
})

test.beforeEach(async({browser})=>{
    console.log("Before each hook")
    page = await browser.newPage();
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

})

test.afterEach(async()=>{
    console.log("After each hook");
    await page.locator("#react-burger-menu-btn").click();
    await page.locator("#logout_sidebar_link").click();
})          

test.afterAll(async()=>{
    console.log("After all hook")
})

test("Add first item to the cart and check out", async()=>{
    console.log("Add first item to the cart and check out");
    await page.locator("#add-to-cart-sauce-labs-backpack").click();
    await page.locator(".shopping_cart_link").click();
    await page.locator("#checkout").click();
    
})

test("Add first item and remove from the cart", async()=>{
    console.log("Add first item and remove from the cart");
    await page.locator("#add-to-cart-sauce-labs-backpack").click();
    await page.locator(".shopping_cart_link").click();
    await page.locator("#remove-sauce-labs-backpack").click()

})
