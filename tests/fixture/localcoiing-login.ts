

import {test as base, chromium, Page} from '@playwright/test';

type MyFixtures = {
    loggedInPage: Page

}

export const test = base.extend<MyFixtures>({
    loggedInPage: async ({}, use) => {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://coding.pasv.us/user/login');
        await page.locator('[id="normal_login_email"]').fill('galasbogdan367@gmail.com');
        await page.locator('[id="normal_login_password"]').fill('fas672gr');
        await page.getByRole('button', {name: 'Войти', exact: true}).click();

        await page.waitForURL('**/profile/**')
        await use(page);

        await browser.close();
    }
})

export {expect} from '@playwright/test';