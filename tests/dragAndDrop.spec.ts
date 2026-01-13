import {test} from "@playwright/test"
import { DragAndDrop } from "../page-object/dragAndDrop";

test.describe('DRAG AND DROP', () => {
    test('Drag and drop Element', async ({page}) => {
        const dragAndDrop = new DragAndDrop(page);
        //Navigate to drag and drop page
        const url = 'https://www.lambdatest.com/selenium-playground/drag-and-drop-demo'
        await page.goto(url)


        await dragAndDrop.dragANdDropElement('Draggable 1')
        await dragAndDrop.dragANdDropElement('Draggable 2')

        await page.reload();

        await dragAndDrop.dragAndDropElementOption2('Draggable 1')
        await dragAndDrop.dragAndDropElementOption2('Draggable 2')
    })

})