import {test as setup, expect} from '@playwright/test';

const authFile ='./.auth/.json'

// setup('authenticate', async ({page})=> {
//     await page.goto(`https://demoqa.com/login`)
//     await page.getByPlaceholder('Username').fill('muxa1234')
//     await page.getByPlaceholder('Password').fill('TestPassword1234!')
//     await page.getByRole('button', {name: 'Login'}).click()

//     await page.waitForURL('https://demoqa.com/profile')
//     await expect(page.locator('#username-value')).toHaveText('muxa1234');

//     await page.context().storageState({path: authFile})

// })
// setup('Log in pasv', async ({page}) => {
//     await page.goto(`https://coding.pasv.us/user/login`)
//     await page.locator('[id=normal_login_email]').fill('galasbogdan367@gmail.com')
//     await page.locator('[id=normal_login_password]').fill('fas672gr')
//     await page.getByRole('button',{name: 'Войти', exact: true}).click()
//     await expect(page.locator('.me-2 ~ h1')).toContainText('Bohdan Halas')
//     await page.context().storageState({path: authFile})
// })


