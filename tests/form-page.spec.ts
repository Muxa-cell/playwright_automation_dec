import { chromium, test, expect } from '@playwright/test';

// it.describe('FORM PAGE', () => {

//     it.beforeEach(async() => {
//         console.log('Before each test')
//     })
//     it.afterEach(async() => {
//         console.log('Before each test')
//     })
//     it.afterAll(async() => {
//         console.log('After all tests')
//     })

//     it('Test 1',() => {
//         console.log('Test 1')
//     })
//     it('Test 2', () => {
//         console.log('Test 2')
//     })
// })

test.describe('FORM PAGE', () => {
    test.only('Fill the form', async ({ page }) => {
    //    const browser = await chromium.launch()
    //    const context = await browser.newContext()
    //    const page = await context.newPage() 
        await page.pause()
        await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo')
        await page.locator('#name').fill('Mike Smith')
        // await page.fill('#name','Mike Smith')
        await page.pause()
        await page.locator("[class=\"w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5\"][type = 'email']")
        .pressSequentially("mike@example.com", { delay: 200 })
        await page.locator("input[placeholder=Password]").fill("Test@1234")
        await page.locator("[for=\"companyname\"] ~ input#company").fill("LambasTest")
        await page.selectOption('select[name = \'country\']', {label: 'United States'})
        await page.locator('label:has-text("City") ~ input#inputCity').fill('Orland')
        await page.locator('label:has-text("website") ~ input#websitename').fill('coding.pasv.us')
        await page.getByPlaceholder('Address 1').fill('Baker Street 212')
        await page.getByPlaceholder('Address 2').fill('Baker Street 213')
        await page.getByRole('textbox', {name: "Zip Code"}).fill('32801')
        await page.getByRole('textbox', {name: "State"}).fill('Florida')
        await page.getByRole('button', {name: 'Submit'}).click()
        await expect(page.locator('h2:has-text("Input form validations")')).toBeVisible()
        await page.pause
    })
})
test.describe('FILL FORM 2', () =>{
    test('DEMOQA form', async ({ page }) => {
        await page.pause()
        await page.goto('https://demoqa.com/automation-practice-form')
        await page.locator('#firstName').fill('Bill')
        await page.locator('#lastName').fill('Smith')
        await page.locator('#userEmail').fill('nick@example.com')
        // await page.selectOption('select[name = "gender"]', {label: 'Man'})
        await page.locator('#userNumber').fill('4405558989')
        await page.getByText('Female').click()
        await page.getByPlaceholder('Current Address').fill("Baker Str. 212")
        await page.getByRole('button', {name: 'Submit'}).click()
        await page.pause()
    })
})
test.describe('FILL FORM 3', () => {
    test('TESTPAGE', async ({ page }) => {
        await page.pause()
        await page.goto('https://testpages.eviltester.com/pages/forms/html-form/')
        await page.locator('input[name="username"]').fill('Bob Smith')
        await page.locator('input[name="password"]').fill('1234test')

        // await page.locator('#username').fill('Bob Smith')
        // await page.locator('#password').fill('1234test')
        //await page.locator('#comments').fill('I like this website')
        // await page.getByRole('button', {name: 'submit'}).click()
        await page.pause()
    })
})