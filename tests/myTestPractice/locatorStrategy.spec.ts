import {test} from '@playwright/test';

test('Locator strategy', async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    //await page.locator('id="user-name"').fill('standard_user')
   // await page.locator('[id="user-name"]').fill('standard_user') //CSS selector
    await page.locator("#user-name").fill('standard_user');
   //await page.locator('input[@name="user-name"]').fill("standard_user"); //XPath selector

   //await page.locator('text="Login"').click(); //Text selector
   await page.locator('input:has-text("Login")').click(); //Text selector with input
await page.pause();
})