import {test, expect} from '@playwright/test';

test('OrangeHRM Login', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    //username and password input
   // await page.locator('[name="username"]').fill('Admin');
    //await page.locator('[name="password"]').fill('admin123');

    //click on login button
    //await page.locator('button[type="submit"]').click();

    //logout
    //await page.locator(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
    //await page.locator('text=Logout').click();
    //await page.close();
})