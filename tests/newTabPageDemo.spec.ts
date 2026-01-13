import {test, expect} from "@playwright/test"
import { NewTabPageDemo } from "../page-object/new-tab-page-demo"
import { blockAds2 } from "../utilitiess/abortAd2"

test.describe("New Tab Page Demo", () => {
    test('new tab link', async ({page}) => {
      await blockAds2(page)
      const newTabPageDemo =   new NewTabPageDemo(page)
      await newTabPageDemo.navigateToNewTabDemoPage()
      const newPage = await newTabPageDemo.newTabOpenDemo()
      const textContent = await newPage.locator('h1').textContent();

      test.expect(textContent).toContain('This is a sample page')
    })
})