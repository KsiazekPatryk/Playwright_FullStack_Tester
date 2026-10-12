import { test, expect } from '@playwright/test';   

test.describe('Basic Examples', () => {
    test('input', { tag: '@pwbasic', '@wip' }, async ({ page }) => {
        await page.goto("/login");
        await page.fill("#username", "Michael");

        // {force: true} bypasses actionability checks, default is false.

        await page.fill("#password", "password123", {force: true});

        // Method deprecated
        //await page.type("#username", "Michael");

        await page.locator('#input').pressSequentially('Michael', {delay: 1000});

        // Assertions
        await expect(page.locator('#input')).toHaveValue('text');

    });
});