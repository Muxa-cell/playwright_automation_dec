import { FrameLocator, Page } from "@playwright/test";


export class Iframe {
    private page: Page;
    private frameBottom: FrameLocator;
    constructor(page: Page) {
        this.page = page;
        this.frameBottom = page.frameLocator('[name="frame-bottom"]');
    }

    async navigate(): Promise<void>{
        await this.page.goto('https://www.lambdatest.com/selenium-playground/nested-frames/');
    }
    async getLeftFrametext(): Promise<string | null> {
        return await this.frameBottom
        .frameLocator('[name="frame-left"]')
        .locator('body')
        .textContent()
    }
    async getMiddleFrameText(): Promise<string | null> {
        return await this.frameBottom
        .frameLocator('[name="frame-middle"]')
        .locator('body')
        .textContent()
    }

    async getRightFrameText(): Promise<string | null> {
        return await this.frameBottom
        .frameLocator('[name="frame-right"]')
        .locator('body')
        .textContent()
    }
}