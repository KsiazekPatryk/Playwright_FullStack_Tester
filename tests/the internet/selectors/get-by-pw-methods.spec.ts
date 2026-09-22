import { test, expect } from '@playwright/test';

test.describe('The Internet Home Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/login');
        await expect(page).toHaveTitle('The Internet');
    });

    test('get by pw methods', async ({ page }) => {
        const loginbutton = page.getByLabel("Username").last();
        const passwordInput = page.getByLabel("Password").last();
        const loginButton = page.getByRole('button', { name: 'Login' });

        await loginbutton.fill('myUsername');
        await passwordInput.fill('myPassword'); 
        await loginButton.click();

        await expect(loginbutton).toBeVisible();
        await expect(passwordInput).toBeVisible();
        await expect(loginButton).toBeVisible();

        await expect(page.getByText("Your username is invalid!")).toBeVisible();
    });
     
});