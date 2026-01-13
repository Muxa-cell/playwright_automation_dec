import { HomePage } from './homapage'
import { expect, Locator, Page } from "@playwright/test"
import _ from 'lodash';
 export class DatePicker extends HomePage {
    static dateFromToday() {
       throw new Error('Method not implemented.');
    }
     static verifyHeader() {
         throw new Error('Method not implemented.');
     }
     static navigateToDatePicker() {
         throw new Error('Method not implemented.');
     }
    constructor(page:Page){
        super(page)
    }
    get header() {
    return "h1";
  }
  get fromInput() {
    return "#from";
  }
  get toInput() {
    return "#to";
  }
  get monthOfTheYear() {
    return '[class="ui-datepicker-month"]';
  }
  get prevMonth() {
    return '[title="Prev"]';
  }
  get nextMonth() {
    return '[title="Next"]';
  }
  get getDate() {
    return ".ui-state-default";
  }
  get dateFromComponent() {
    return "#ui-datepicker-div";
  }
  get dateOfTheYear() {
    return '[class="ui-datepicker-year"]';
  }
  get dateOfTheMonth() {
    return '[class="ui-datepicker-month"]';
  }
  get dateToComponent() {
    return "#ui-datepicker-div"
  }
  public async verifyHeader(){
    const header: Locator = this.page.locator(this.header)
    await expect(header).toContainText('Date Picker')
  }
  async navigateToDatePicker():Promise<void>{
    await this.gotoweb('/jquery-date-picker-demo')
  }

  randomNumberForDate =  _.random(1,50)

  date = _.random(1,31)
  public async dateFromToday(){
    const obj = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12"
    }
    await this.page.locator(this.fromInput).click();
    for(let i = 0; i < this.randomNumberForDate; i++) {
      await this.page.locator(this.prevMonth).click()
    } 
    let year = await this.page.locator(this.dateOfTheYear).textContent();
    let month = await this.page.locator(this.dateOfTheMonth).locator('[selected="selected"]').textContent();
    console.log(year, 'year')
    console.log(month, 'month')
    console.log(this.date,'date')
    await this.page.locator(this.dateFromComponent).getByRole('link', {name: this.date.toString()}).click();
    const formatterMonth = obj[month as keyof typeof obj];
    const paddedDate = String(this.date).padStart(2, '0');
    // npx playwright test tests/datepicker.spec.ts --debug
    await this.page.pause()
    expect(await this.page.locator(this.fromInput).inputValue()).toBe(`${formatterMonth}/${paddedDate}/${year}`);
  }
  public async dateFromToday2(){
    const obj = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12"
    }
    await this.page.locator(this.toInput).click();
    for(let i = 0; i < this.randomNumberForDate; i++) {
      await this.page.locator(this.prevMonth).click()
    } 
    let year = await this.page.locator(this.dateOfTheYear).textContent();
    let month = await this.page.locator(this.dateOfTheMonth).locator('[selected="selected"]').textContent();
    console.log(year, 'year')
    console.log(month, 'month')
    console.log(this.date,'date')
    await this.page.locator(this.dateFromComponent).getByRole('link', {name: this.date.toString()}).click();
    const formatterMonth = obj[month as keyof typeof obj];
    const paddedDate = String(this.date).padStart(2, '0');
    // npx playwright test tests/datepicker.spec.ts --debug
    await this.page.pause()
    expect(await this.page.locator(this.toInput).inputValue()).toBe(`${formatterMonth}/${paddedDate}/${year}`);
  }
}