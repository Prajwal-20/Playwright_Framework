
import { chromium, test } from "@playwright/test";
test("browser controls",async({page})=>{
     await page.goto("https://www.google.com");
     console.log(await page.title())

    //  let size=await page.viewportSize();      // it will capture the current window size
    //  console.log(size);

    //  await page.setViewportSize({width:1000,height:500})   //it will set the window size

    //  let size1=await page.viewportSize();      // it will capture the current window size
    //  console.log(size1);

     await page.goto("https://www.amazon.in/")
     console.log(await page.title())
})
test("browser cookies",async({browser})=>{
   let context= await browser.newContext();
     let page=  await context.newPage();
     console.log(await context.cookies())
     
    await page.goto("https://www.amazon.in/")
    console.log(await context.cookies());
})

test("launch instance",async({browserName})=>{
    let browser=await chromium.launch();
     console.log( browserName);
     let context=await browser.newContext();
     let page=await context.newPage();
    //  await browser.close();        // close the browser
     await page.goto("https://www.google.com");
})

test.only("screenshot",async({page})=>{
    await page.goto("https://www.google.com");
    let time=new Date().getTime();
    await page.screenshot({path:`screenshot/${time}.png`})

})
