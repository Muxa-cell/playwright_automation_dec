import { chromium, FullConfig } from "@playwright/test"

async function globalSetup(config:FullConfig){
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage() 
    
    await page.goto(`https://demoqa.com/login`, {waitUntil: 'domcontentloaded'})
    await page.getByPlaceholder('Username').fill('muxa1234')
    await page.getByPlaceholder('Password').fill('TestPassword1234!')
    await page.getByRole('button', {name: 'Login'}).click()
    await page.waitForURL('https://demoqa.com/profile', {waitUntil: 'domcontentloaded'})

    const user = await page.locator('#userName-value').innerText();
    if(user !== 'muxa1234'){
        throw new Error('Authentication failed during global setup')
    }
    await context.storageState({path: './.auth/user.json'})
    await browser.close()
    
}
export default globalSetup;