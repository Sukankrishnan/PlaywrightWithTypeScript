import {test, expect} from '@playwright/test';

test('Second test', async ({page})=> {

    await page.goto('http://google.com');
    await expect(page).toHaveTitle('Google');
})