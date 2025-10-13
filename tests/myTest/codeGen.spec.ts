import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.getByRole('button', { name: 'Alle akzeptieren' }).click();
  await page.getByRole('combobox', { name: 'Suche' }).click();
  await page.getByRole('combobox', { name: 'Suche' }).fill('What is playwright?');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DWhat%2Bis%2Bplaywright%253F%26sca_esv%3D6cf83e9191071241%26source%3Dhp%26ei%3DbhU_aKWECv3skdUPrNzPqQs%26iflsig%3DAOw8s4IAAAAAaD8jfs6pcsXFhDWyk28YiOJE1uuWfsoK%26ved%3D0ahUKEwil84CmydWNAxV9dqQEHSzuM7UQ4dUDCA8%26uact%3D5%26oq%3DWhat%2Bis%2Bplaywright%253F%26gs_lp%3DEgdnd3Mtd2l6IhNXaGF0IGlzIHBsYXl3cmlnaHQ_MgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTSPw0UNELWK0ycAF4AJABAJgBZqABrwmqAQQxOC4xuAEDyAEA-AEBmAIUoAKECqgCCsICChAAGAMY6gIYjwHCAgoQLhgDGOoCGI8BwgILEAAYgAQYsQMYgwHCAgUQABiABMICBRAuGIAEwgIIEC4YgAQYsQPCAg4QABiABBixAxiDARiKBcICCBAAGIAEGLEDwgILEC4YgAQYsQMY1ALCAhAQABiABBixAxiDARiKBRgKwgIOEC4YgAQYsQMYgwEY1ALCAgYQABgWGB7CAggQABgWGAoYHpgDC_EFN667BcJX7d2SBwQxOS4xoAeBhgGyBwQxOC4xuAf5CcIHCDAuNC4xNS4xyAdI%26sclient%3Dgws-wiz%26sei%3DehU_aK7OE5WL9u8PntqR8QY&q=EgRd0cj7GPqq_MEGIjBYLl3QliaPgOYGh2ocU6XWzXIgZqZ4uKq0Z9PHlXcpFJYZ1ho9vwAWG4Kz9KcDOaAyAVJaAUM');
});