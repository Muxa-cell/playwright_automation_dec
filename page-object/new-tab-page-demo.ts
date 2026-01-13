import { Locator, Page } from "@playwright/test";


export class NewTabPageDemo {
    private readonly page : Page;
    private readonly newTabLinkDemo: Locator
    constructor(page: Page) {
        this.page = page
        this.newTabLinkDemo = page.locator('[id="tabButton"]')
    }
    public async navigateToNewTabDemoPage(): Promise<void> {
        await this.page.goto("https://demoqa.com/browser-windows");
    }
    
    public async newTabOpenDemo(): Promise<Page> {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.newTabLinkDemo.click()
        ]);
        await newPage.waitForLoadState();
        return newPage;
    }
    
}