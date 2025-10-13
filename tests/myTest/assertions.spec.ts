import {test, expect} from '@playwright/test';

test("Assertions-Visible/Hidden", async ({page}) =>{

    await page.goto("https://sripriyakulkarni.com");
    await page.locator('text=Automation Practice').click();
    await expect(page.locator('#displayed-text')).toBeVisible
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden
    await page.locator('#show-textbox').click();
    await expect(page.locator('#displayed-text')).toBeVisible
    await page.close();
})

test("Assertions-Present/Not Present", async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await expect(page.locator('.added-manually')).not.toHaveCount(1);
    await page.locator('text=Add Element').click();
    await expect(page.locator('.added-manually')).toHaveCount(1);
    await page.locator('text=Add Element').click();
    await expect(page.locator('.added-manually')).toHaveCount(2);
    await page.close();
})

test.only("Assertions-Enabled/Disabled", async ({page})=>{

    await page.goto('https://letcode.in/button');
    await expect(page.locator('#property')).toBeEnabled();
    await expect(page.locator('[title="Disabled button"]')).toBeDisabled();
    await page.close();
})

test ("Assertions-Text match/Mismatch", async ({page})=>{

    await page.goto('https://letcode.in/buttons');
    await expect(page.locator('[id="color"]')).toHaveText('What is my color?');
    await expect(page.locator('[id="color"]')).not.toHaveText('asdfWhat is my color?');
    await page.close();
})

test("Assertions-Elements Attributes", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('name','username');
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('class',/.*oxd-input/);
    await page.close();

})

test("Assertions-PageURL", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/");

    //Full URL assertion
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //Partial URL assertion - no quotes needed
    await expect(page).toHaveURL(/demo.orangehrmlive.com/)
    await page.close();
})

test("Assertions-Title", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/");

    //Full title assertion
    await expect(page).toHaveTitle('OrangeHRM');

    //Partial title assertion - no quotes needed
    await expect(page).toHaveTitle(/.*OrangeHRM/);
    await page.close();
})

test("Assertions-Screenshot", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await expect(page).toHaveScreenshot();
    await page.close();
})