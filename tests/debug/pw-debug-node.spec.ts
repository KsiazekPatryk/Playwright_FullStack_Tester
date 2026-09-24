import { test, expect } from '@playwright/test';
import { getRandomName, getRandomPassword } from './debug-utils/debug-random-credentials.utils';

test.describe('The Internet - debug', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/login');
        await expect(page).toHaveTitle('The Internet');
    });

    test('pw debug mode', async ({ page }) => {
        //Arrange 
        const username = getRandomName();
        const password = getRandomPassword();

        console.log('us')

        //Act
        await page.getByLabel("Username").last();
        await page.getByLabel("Password").last();
        await page.getByRole('button', { name:'Login'}).click();
        
        //Assert
        await expect(page.locator("#flash")).toContainText("Your username is invalid!");
        await expect(page.locator("#flash")).toHaveClass('flash error');



    });
     
});