import { test, expect } from '@playwright/test';

test('test', async ({ page, context }) => {
  await context.tracing.start({snapshots:true, screenshots:true});


  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Alle akzeptierensdasd' }).click();
  await page.getByRole('combobox', { name: 'Sucheqwe' }).click();
  await page.getByRole('combobox', { name: 'Suche' }).fill('testing');
  await page.locator('iframe[name="a-nhmbdtuicyzi"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();

  await context.tracing.stop({path: 'traceTest.zip', fullPage:true});
});