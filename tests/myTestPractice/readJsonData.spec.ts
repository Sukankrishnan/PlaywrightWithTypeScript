import {test, expect} from '@playwright/test';
import orangeHrmData from './testData/orangeHRMCredentials.json' with { type: 'json' };

test('OrangeHRM Login with valid credentials', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //username and password input
    await page.locator('[name="username"]').fill(orangeHrmData.validCredentials.username);
    await page.locator('[name="password"]').fill(orangeHrmData.validCredentials.password);
    //click on login button
    await page.locator('button[type="submit"]').click();
    //logout
    await page.locator(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
    await page.locator('text=Logout').click();
    await page.close();
})

test('OrangeHRM Login with invalid credentials', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //username and password input
    await page.locator('[name="username"]').fill(orangeHrmData.invalidCredentials.username);
    await page.locator('[name="password"]').fill(orangeHrmData.invalidCredentials.password);
    //click on login button
    await page.locator('button[type="submit"]').click();
    //logout
    await page.locator(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
    await page.locator('text=Logout').click();
    await page.close();
})