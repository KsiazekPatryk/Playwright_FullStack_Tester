import { test, expect } from '@playwright/test';

test.describe('The Internet Home Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/login');
        await expect(page).toHaveTitle('The Internet');
    });

    test('find by css', async ({ page }) => {
        const loginbutton = page.getByText("Login").last();

        await expect(loginbutton).toBeVisible();
    });
     
});