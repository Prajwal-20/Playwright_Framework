import { test } from "@playwright/test";
test("elementControl",async({page})=>{

// await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

// //allTextContents
//  let multipleText=await page.locator("//section[@class='poppins text-[14px]']").allTextContents();
//  await page.waitForTimeout(5000)
//  console.log(multipleText);


//getAttribute
// await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
// let a=await page.locator("//input[@id='male']").getAttribute("value");
// console.log(a)

//all()
await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
await page.locator("//section[@class='poppins text-[14px]']").first().waitFor();
let b=await page.locator("//section[@class='poppins text-[14px]']").all()
console.log(b)

//isVisible()
// await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//  await page.locator("//input[@id='phone']").waitFor();
// let c= await page.locator("//input[@id='phone']").isVisible();
// console.log(c);

})