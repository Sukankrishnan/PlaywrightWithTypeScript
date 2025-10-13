import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Alle akzeptierensdasd' }).click();
  await page.getByRole('combobox', { name: 'Suche' }).click();
  await page.getByRole('combobox', { name: 'Suche' }).fill('testing');
  await page.locator('iframe[name="a-nhmbdtuicyzi"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
});