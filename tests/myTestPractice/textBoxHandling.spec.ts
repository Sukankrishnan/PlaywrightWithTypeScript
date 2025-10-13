import {test, expect} from '@playwright/test';

test('Fill handling', async({page})=> {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.close();
})

test.only('Press sequentially', async({page})=> {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').pressSequentially('Admin',{delay:200});
    await page.locator('input[name="password"]').pressSequentially('admin123');
    await page.locator('input[name="password"]').press('Enter');
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.close();
})
