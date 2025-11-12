import {test, expect} from '@playwright/test';
import {LandingPage} from "./pages/landingPage.js";

test('Landing Page Sign In button test', async ({page})=>{
    await page.goto("https://react-redux.realworld.io")
    const landingPage = new LandingPage(page);

    await landingPage.clickOnSignInButton();
    await expect(page).toHaveURL(/conduit/);
})