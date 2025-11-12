import { type Page, type Locator } from '@playwright/test';

export class LandingPage {
    readonly page: Page;
    readonly signInButton: Locator

    constructor(page: Page){
        this.page = page
        this.signInButton = page.locator('//a[normalize-space()="Sign in"]');
        
    }

    async clickOnSignInButton(){
        await this.signInButton.click();
    }
}