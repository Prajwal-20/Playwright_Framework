
import{test,expect} from "@playwright/test";
test("switching frames",async({browser})=>{
       let context= await browser.newContext();
       let page= await context.newPage();
       await page.goto("https://ui.vision/demo/webtest/frames/");
      let frame1= await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
     await frame1.locator("//input[@name='mytext1']").fill("aaa");
await page.waitForTimeout(3000);
       
})

test("tabs",async({browser})=>{
let context=await browser.newContext();
let page=await context.newPage();
await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2");
 let [page2]=await Promise.all([
      page.waitForEvent("popup"),
     page.getByRole("button",{name:"Shop Now"}).click()
 ])
 await page2.locator("//button[text()='Add to Cart']").click();
let  page2Title=await page2.title();
 
 await expect(page2).toHaveTitle("Demoapps - Luxury Watch");


})

test.only("switchWindows",async({browser})=>{
     let context=await browser.newContext();
     let page=await context.newPage();
     await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2");
      let [page2]=await Promise.all([
          page.waitForEvent("popup"),
          page.getByRole("button",{name:"Shop Now"}).waitFor({state:"visible"}),
          page.getByRole("button",{name:"Shop Now"}).click()
      ])
      await expect(page2).toHaveTitle("Demoapps - Luxury Watch");

})



