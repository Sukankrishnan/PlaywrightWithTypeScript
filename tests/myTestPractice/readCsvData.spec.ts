import {test} from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import {parse} from 'csv-parse/sync';
import papa from 'papaparse';


interface LoginData {
    username: string;
    password: string;
}

// Read CSV file
const orangeHRMData = parse(fs.readFileSync(path.join(__dirname, './testData/orangeHRMCred.csv')), {
    columns: true,
    skip_empty_lines: true
}) as LoginData[];
    
const [values]=orangeHRMData
test('OrangeHRM Login with valid credentials', async ({page}) => {
    if (!values) {
        throw new Error('No login data found in CSV file.');
    }
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //username and password input
    await page.locator('[name="username"]').fill(values.username);
    await page.locator('[name="password"]').fill(values.password);
    console.log(`Using credentials - Username: ${values.username}, Password: ${values.password}`);
    //click on login button
    await page.locator('button[type="submit"]').click();
    //logout
    await page.locator(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
    await page.locator('text=Logout').click();
});


test('OrangeHRM Login with invalid credentials', async ({page}) => {
    if (!values) {
        throw new Error('No login data found in CSV file.');
    }
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //username and password input
    await page.locator('[name="username"]').fill(values.username);
    await page.locator('[name="password"]').fill(values.password);
    console.log(`Testing with username: ${values.username} and password: ${values.password}`);
    //click on login button
    await page.locator('button[type="submit"]').click();
    //logout
    await page.locator(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
    await page.locator('text=Logout').click();
    await page.close();
});