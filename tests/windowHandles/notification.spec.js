
import { test } from "@playwright/test";
test("notification",async({browser})=>{

    let context=await browser.newContext({permissions:["notifications"]})  // granted permission
    let page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.getByRole("button",{name:"Notification"}).click();
    //validation of permission status
   let result = await page.evaluate(()=>{return Notification.requestPermission()})
    console.log(`permissions:${result}`)

    //to revoke all permission
    await context.clearPermissions()
    let result2 = await page.evaluate(()=>{return Notification.requestPermission()})
    console.log(`permissions:${result2}`)

})