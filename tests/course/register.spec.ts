import {test,expect, Browser, Page, Locator} from '@playwright/test'
import {webkit,chromium,firefox} from 'playwright'

test.setTimeout(30000);


test('Register new user', async ({ page }) => {
    const browser: Browser = await chromium.launch({ headless: false });
    const newPage: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    
    const firstName: Locator = await page.locator('#input-firstname')
    const lastName: Locator = await page.locator('#input-lastname')
    const emailID: Locator = await page.locator('#input-email').fill('testing@gmail.com')
    const telephone: Locator = await page.locator('#input-telephone').fill('1234567890')
    const password: Locator = await page.locator('#input-password').fill('Testing@123')
    const confirmPassword: Locator = await page.locator('#input-confirm').fill('Testing@123')
    

    
});