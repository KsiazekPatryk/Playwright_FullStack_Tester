import { test, expect } from '@playwright/test';

test.describe('The Internet Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('The Internet'); 
  });

  test('tha page has correct title', async ({ page }) => { 
    await expect(page.getByText('Welcome to the-internet')).toBeVisible();
  });

  test('page has clickable links', async ({ page }) => {
    await page.getByText('Form Authentication').click();
    await expect(page.getByText('Login Page')).toBeVisible();
  });
});