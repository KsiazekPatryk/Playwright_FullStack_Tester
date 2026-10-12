import { test, expect } from '@playwright/test';

test.describe('Basic Examples', () => {

    //1. page is loaded to the test a fixture - isolated page for this test run.
    //2. page can call different methods: goto(), toHaveTitle()
    //3. waitUntil - domcontentloaded, load, networkidle, commit
    // domcontent loaded - (html is loaded but css and js not yet) - consider operation to be finished whem the DOMContentLoaded event is fired.
    // load - (html, css, js are loaded) - consider operation to be finished when the load event is fired.
    // networkidle - ***DISCOURAGED*** consider operation to be finished when there are no network connections for at least 500 ms.
    // commit - consider operation to be finished when the network response is received and the document is committed.

    test('example test', async ({ page }) => {

        await page.goto('https://pwts.dev', {});
        
        //await page.reload();
        //await page.goBack();
        //await page.goForward();
        
        await expect(page.getByText('')).toBeVisible();

        //locator
        page.locator('#id');
        page.getByRole('button', {name: 'Submit'});

        //Actions
        await page.click('#button');
        await page.click('#another-button', {clickCount: 10});
        await page.click('#yet-another-button', {button: 'right'});
        await page.click('#addToCart',{modifiers: ['Alt', 'Control']});
        await page.dblclick('#AddToCart');
        await page.check('#checkbox');
        await page.uncheck('#checkbox');
        await page.fill('#input', 'text');
       
        // Assertions
        

    });
});