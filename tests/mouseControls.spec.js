
import { test } from "@playwright/test";
test("basic mouse actions",async({page})=>{
//  await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
//  await page.locator("//button[@id='btn']").click();   //left click
//  await page.waitForTimeout(2000);
//  await page.locator("//a[text()='Right Click']").click({modifiers:["Shift"]});   // shift+click
//  await page.waitForTimeout(2000);
 //=====right click
//  await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1");
//  await page.locator("#btn_a").click({button:"right"});
//  await page.waitForTimeout(2000);

 //=========double click
//  await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2");
//  await page.locator("//button[@id='btn_a']").dblclick();
//  //await page.locator("//button[@id='btn_a']").click({clickCount:2});    // double click using count option
//  await page.waitForTimeout(2000);

 //======down and up
 await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0");
 await page.locator("#circle").hover();
 await page.mouse.down();
 await page.waitForTimeout(2000);
 await page.mouse.up();

// disabled or hidden buttons
await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4");
 //await page.locator("#submit").click({force:true})
await page.locator("#submit").dispatchEvent('click')
await page.waitForTimeout(2000);

//mouse hover
// await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
// await page.locator("//img[@class='w-5 h-5 mt-5 ml-3 cursor-pointer ']").hover();
// await page.waitForTimeout(2000);
// await page.mouse.move(100,200);
// await page.waitForTimeout(2000);
//to scroll to an element
await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
await page.waitForTimeout(2000);
await page.locator("//input[@type='checkbox']").scrollIntoViewIfNeeded();
await page.waitForTimeout(2000);
})

test.only("drag and drop",async({page})=>{
  // drag and drop mouse actions
//   await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0");
//   await page.locator("//div[text()='Drag Me']").hover();
//  await page.waitForTimeout(2000);
//  await page.mouse.down();
//  await page.mouse.move(200,500);
//  await page.waitForTimeout(2000);
//  await page.mouse.up();

 // drag and drop to target
//  await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
//  await page.locator("//div[text()='Mobile Charger']").hover();
//  await page.waitForTimeout(2000);
//  await page.mouse.down();
//  await page.locator("//div[text()='Mobile Accessories']/parent::div").hover();
//  await page.mouse.up();
//  await page.waitForTimeout(2000);
  
//  //drag and drop by taking ele location
//  await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
//  await page.locator("//div[text()='Mobile Charger']").hover();
//  await page.mouse.down();
//  await page.waitForTimeout(2000);
//  let box=await page.locator("//div[text()='Mobile Accessories']/parent::div").boundingBox() //boundig box will return the object ie location of element
// await page.mouse.move(box.x,box.y) 
// await page.mouse.up();
// await page.waitForTimeout(2000);

// // using dragTo()
await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
let source= page.locator("//div[text()='Mobile Charger']")
let target= page.locator("//div[text()='Mobile Accessories']/parent::div");
await page.waitForTimeout(5000);
await source.dragTo(target)
await page.waitForTimeout(2000);

})