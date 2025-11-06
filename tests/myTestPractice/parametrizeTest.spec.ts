import {test} from '@playwright/test';

const credentials = [
    {
        username: 'Admin',
        password: 'admin123'
    },
    {
        username: 'Admin1',
        password: 'admin1234'
    }
]

credentials.forEach(cred=>{
    test(`Login with valid credentials ${cred.username} + ${cred.password}`, async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('[name="username"]').fill(cred.username);
    await page.locator('[name="password"]').fill(cred.password);
    await page.locator('button[type="submit"]').click();
    console.log("Login successful");
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
});
})