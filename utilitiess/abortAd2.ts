import { Page } from "@playwright/test";


export async function blockAds2(page: Page):Promise<void> {
    await page.route('//*ads*', route => route.abort());
}