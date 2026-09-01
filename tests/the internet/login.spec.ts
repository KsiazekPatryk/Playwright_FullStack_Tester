import { test, expect } from '@playwright/test';

test.describe('The Internet Home Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/login');
        await expect(page).toHaveTitle('The Internet');
  });

    test('login with valid credentials', async ({ page }) => {
        //Arange
        const username = 'tomsmith';
        const password = 'SuperSecretPassword!';
        const expectedMessage = 'You logged into a secure area!';
        //Act
        await page.locator('#username').fill(username);
        await page.locator('#password').fill(password);
        await page.locator('button[type="submit"]').click();
        //Assert
        await expect(page.getByText(expectedMessage)).toBeVisible();
    });

    test('login with valid credentials - record', async ({ page }) => {
        await page.getByLabel('Username').fill('tomsmith');
        await page.getByLabel('Password').fill('SuperSecretPassword!');
        await page.getByRole('button', {name: 'Login'}).click();

        await expect(page.getByRole('heading', {name: 'Welcome to the Secure Area.'})).toBeVisible();
        });
});