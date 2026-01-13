import {expect, test} from '@playwright/test';

test.describe('UI test', () => {
    // test.beforeEach(async ({page})=>{
    //     await page.goto('https://demoqa.com/login')
    // })
    test('Verify authentication and log out button', async ({page, browserName}) => {
        await page.goto('https://demoqa.com/login')
        await page.goto('https://demoqa.com/books');
        const logOutButton = page.locator('#submit')
        await page.waitForTimeout(2000)
        await expect(logOutButton).toHaveText('Log out')

        await page.screenshot({path: `screenshots/${browserName}-profile.png`})
    })
    test.only('Verify on PASV ', async ({page, browserName}) => {
        await page.goto('https://coding.pasv.us/user/login')
    })
})