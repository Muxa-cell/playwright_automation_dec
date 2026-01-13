// import {test, expect} from '@playwright/test';
// import {DatePicker} from "../page-object/date-picker"
import { test} from '../page-object/base-page'

// test.describe('DATE PICKER', () => {
//    test("Navigate to date picker page", async ({ page }) => {
//       const dataPicker = new DatePicker(page)
//       await dataPicker.navigateToDatePicker()
//       await dataPicker.verifyHeader()
//       await dataPicker.dateFromToday()
//       console.log(page.url())
//       await expect(page).toHaveURL(/.*jquery-date-picker-demo/)
//    })
//    test.only("DATE PICKER TO", async ({ page }) => {
//       const dataPicker = new DatePicker(page)
//       await dataPicker.navigateToDatePicker()
//       await dataPicker.verifyHeader()
//       await dataPicker.dateFromToday2()
//       console.log(page.url())
//       await expect(page).toHaveURL(/.*jquery-date-picker-demo/)
//    })
// })
test.describe('DATE PICKER', () => {
   test("Navigate to date picker page", async ({ datePicker }) => {
      await datePicker.navigateToDatePicker()
      await datePicker.verifyHeader()
      await datePicker.dateFromToday()
   })
})