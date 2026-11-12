
import { test } from "@playwright/test";
test("keyBoard actions",async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
   //  await page.locator("#name").fill("prajwal");

     //type
    // await page.locator("#name").type("prajwal");
   //  await page.type("#name","prajwal");
    //  await page.locator("#name").click();
    //  await page.keyboard.type("prajwal")
    //  await page.waitForTimeout(2000);

    //  //insertText()
      await page.locator("#name").click();
     await page.keyboard.insertText("prajwal");
      await page.waitForTimeout(2000);

     // down and up
     await page.keyboard.down("Space")
     await page.keyboard.up("Space")
     await page.keyboard.down("H")
     await page.keyboard.up("H") 
     await page.waitForTimeout(2000); 

     //press
     await page.keyboard.press("Tab");
     await page.keyboard.type("aa@gmail.com");
     await page.waitForTimeout(2000);
     await page.keyboard.press("Control+A")
     await page.keyboard.press("Control+C")
     await page.keyboard.press("Tab");
     await page.keyboard.press("Control+v")
     await page.waitForTimeout(2000);

})

test.only("scrolling",async({page})=>{
await page.goto("https://www.amazon.in/")

for(let index=1; index<=11; index++){
    await page.keyboard.press("ArrowDown")
}
await page.waitForTimeout(2000);
for(let index=1; index<=6; index++){
    await page.keyboard.press("ArrowUp")
}
await page.waitForTimeout(2000);
})