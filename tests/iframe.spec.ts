import { test, expect, Page} from "@playwright/test"
import { Iframe } from "../page-object/iframe"
test.describe("iframe", () => {
    test('iframe test', async ({page}: {page:Page}) =>{
        await page.goto('https://www.lambdatest.com/selenium-playground/nested-frames/')
        const iframePage = new Iframe(page)
        await iframePage.navigate()

        // const frameBottom: FrameLocator = page.frameLocator('iframe[src="frame-bottom"]');

        // const leftFrameText: string | null = await frameBottom.frameLocator('[name="frame-left"]').locator('body').textContent();

        // const middleFrameText: string | null = await frameBottom.frameLocator('[name="frame-middle"]').locator('body').textContent();

        // const rightFrameText: string | null = await frameBottom.frameLocator('[name="frame-right"]').locator('body').textContent();
        
        const left = await iframePage.getLeftFrametext();
        const middle = await iframePage.getMiddleFrameText();
        const right = await iframePage.getRightFrameText();
        console.log('Left frame text: ', left);
        console.log('Middle frame text: ', middle);
        console.log('Right frame text: ', right);
        //Assertions
        expect(left).toContain('Left');
        expect(middle).toContain('Middle');
        expect(right).toContain('Right');

    })
})