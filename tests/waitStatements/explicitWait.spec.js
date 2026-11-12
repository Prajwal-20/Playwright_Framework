
import { test } from "@playwright/test";
test("wait for test",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill("shoes");
    await page.locator("//div[@role='row']",{hasText:" for men sports"}).waitFor({timeout:5000}); // explicit wait to load all autosuggestion
    let autosugg=await page.locator("//div[@role='row']").allTextContents();
    console.log(autosugg)
})

test("wait for timeout",async({page})=>{
await page.goto("https://www.amazon.in/")
await page.locator("input#twotabsearchtextbox").waitFor({timeout:2000})  //explicit wait to load the element
await page.locator("//div[@role='row']",{hasText:" for men sports"});
let autosugg=await page.locator("//div[@role='row']").allTextContents();
    console.log(autosugg)
})

test("wait for element state",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").waitFor({state:"visible",timeout:4000})  
    await page.locator("//div[@role='row']",{hasText:" for men sports"});
    let autosugg=await page.locator("//div[@role='row']").allTextContents();
        console.log(autosugg)
})

test("wait for selector",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForSelector("input#twotabsearchtextbox",{state:"visible"}); // explicit wait to visible the element
    await page.locator("input#twotabsearchtextbox").fill("shoes");
    await page.locator("//div[@role='row']",{hasText:" for men sports"}).waitFor(); 
    let autosugg=await page.locator("//div[@role='row']").allTextContents();
    console.log(autosugg)
})

test("wait for navigation",async({page})=>{
    await page.goto("https://www.amazon.in/")
  //  await Promise.all([
   //page.waitForNavigation(),
   //page.click("#nav-cart-count-container")
   // ])
   await page.waitForLoadState("load");  // wait for all images,css styles,html or js codes are loaded
   await page.waitForLoadState("domcontentloaded"); // wait till only skeleton ie html document is loaded
   await page.waitForLoadState("networkidle",{timeout:2000})  // if u wont pass networkidle then by default it is load state
})
test("wait for event",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.fill("#writeArea","i am downloading the file");
    // this is an event so we have to execute parallely
     let [downloadFile]= await Promise.all([        // promise.all() will return array of object
        //event triggering action should be written first
        page.waitForEvent("download"),   //event is download  
         page.click("#downloadButton")])
        console.log(await downloadFile.path());
      
})

test("custom waits1",async({page})=>{
 await page.goto("https://www.amazon.in/")
 await page.locator("input#twotabsearchtextbox").fill("HP laptops");
 await page.waitForFunction(()=>{let ele=document.querySelectorAll(".s-suggestion-container")  //we should use only css selector
    return ele.length>2
 })
 let allautosugg=await page.locator("//div[@class='s-suggestion-container']") .allTextContents();
 console.log(allautosugg);

})

test.only("custom waits2",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForFunction(()=>{return document.readyState==="complete"})
    await page.locator("input#twotabsearchtextbox").fill("HP laptops");
})



