import {test, expect} from '@playwright/test';

test('My first test', async ({page})=>{ // page is a fixture provided by playwright, create an isolated page inside a browser context

    //navigate to Google.com
    await page.goto('https://google.com');

    //check if the title is correct and the heading is present
    await expect(page).toHaveTitle(/Google/);
})