import { Locator, Page } from "@playwright/test";

export class NewTabPage {
    private readonly page: Page;
    public readonly newTabLink: Locator
    constructor(page: Page) {
        this.page = page;
        this.newTabLink = page.locator('a[href="/windows/new"]');
    }
    // Navigate to New Tab Page
    public async navigateToNewTabPage(): Promise<void> {
        await this.page.goto("https://practice.expandtesting.com/windows");
    }

    public async newTabOpen(): Promise<Page> {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.newTabLink.click()
        ]);
        await newPage.waitForLoadState();
        return newPage;
    }

    
}