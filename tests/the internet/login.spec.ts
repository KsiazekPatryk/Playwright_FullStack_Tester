import { test, expect } from '@playwright/test';

test.describe('The Internet Home Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login');
        await expect(page).toHaveTitle('The Internet');
  });

    test('login with valid credentials', async ({ page }) => {
        await page.locator('#username').fill('tomsmith');
        await page.locator('#password').fill('SuperSecretPassword!');
        await page.locator('button[type="submit"]').click();
        await expect(page.getByText('You logged into a secure area!')).toBeVisible();
    });
});