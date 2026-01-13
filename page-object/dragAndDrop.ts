import { Locator, Page, expect} from "@playwright/test";


export class DragAndDrop {

    private readonly page: Page
    public readonly dragEl: Locator
    public readonly dropZone: Locator
    public readonly dropList: Locator
    public constructor(page:Page) {
      this.page = page;
      this.dragEl = page.locator('[draggable="true"]')
      this.dropZone = page.locator('#mydropzone')
      this.dropList = page.locator('#droppedlist')
    }
    

    //Add JSDoc to the function 
    /**
     * Perform drag and drop using Playwright dragTo method
     * @param text - Text content of the draggable element
     */
    public async dragANdDropElement(text: string):Promise<void>{
        const dragSource = this.dragEl.filter({hasText: text})
        await dragSource.dragTo(this.dropZone)

    }

    public async dragAndDropElementOption2(text: string):Promise<void>{
        const dragSource = this.dragEl.filter({hasText: text})
        await dragSource.hover();
        await this.page.mouse.down()
        await this.dropZone.hover();
        await this.page.mouse.up();
        await this.verifyDrop(text);
    }

    /**
     * 
     * @param text - Text content of the draggable element
     */

    private async verifyDrop(text: string):Promise<void>{
        const dropListText = await this.dropList.textContent();
        console.log(dropListText, 'dropListText')
        expect(dropListText).toContain(text);  
    }
}