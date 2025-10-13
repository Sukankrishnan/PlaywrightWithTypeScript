import { test, expect } from '@playwright/test'
import type { Locator, Page, Browser } from '@playwright/test'
import {webkit,chromium,firefox} from 'playwright'

test.setTimeout(30000);


test('Register new user', async ({ page }) => {

    //launch chromium browser in headed mode
    const browser: Browser = await chromium.launch({ headless: false });
    //create a new page
    const newPage: Page = await browser.newPage();
    //navigate to the registration page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    
    //fill the registration form
    const firstName: Locator = page.locator('#input-firstname')
    await firstName.fill('Testing')
    const lastName: Locator = page.locator('#input-lastname')
    await lastName.fill('Automation')
    const emailID: Locator = page.locator('#input-email');
    await emailID.fill('testingautomation@gmail.com');
    const telephone: Locator = page.locator('#input-telephone')
    await telephone.fill('1234567890')
    const password: Locator = page.locator('#input-password')
    await password.fill('Testing@123')
    const confirmPassword: Locator = page.locator('#input-confirm')
    await confirmPassword.fill('Testing@123')
    console.log(emailID, telephone, password, confirmPassword);

    //Check the privacy policy checkbox and click on continue button
    const privacyPolicy: Locator = page.locator('input[name="agree"]')
    await privacyPolicy.check()
    const continueButton: Locator = page.locator('input[value="Continue"]')
    await continueButton.click()

    //validation for the successful registration
    const successMessage: Locator = page.locator('div#content h1')
    await expect(successMessage).toBeVisible()
    await expect(successMessage).toHaveText('Your Account Has Been Created!')

    //close the browser
    await browser.close();
    
});