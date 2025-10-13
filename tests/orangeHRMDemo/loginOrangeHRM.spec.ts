import { test, expect } from '@playwright/test';

test("Login to OrangeHRM", async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //expect a title to have OrangeHRM
    await expect(page).toHaveTitle(/OrangeHRM/)

    //username and password input
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[name="password"]').fill('admin123');
    //click on login button
    await page.locator('button[type="submit"]').click();

    //validation for dashboard page
    await page.waitForURL('**/dashboard/index');
    const dashboardLink = page.locator('//span[text()="Dashboard"]');
    await expect(dashboardLink).toBeVisible();
    await expect(dashboardLink).toHaveText('Dashboard');
    //dashboardLink.screenshot({path:'dashboard.png'});
    
})