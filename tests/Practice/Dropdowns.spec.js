import{test,expect} from "@playwright/test"
test("singledrop",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#country").scrollIntoViewIfNeeded();
    await page.locator("#country").selectOption("India");
    await page.waitForTimeout(3000);
})

test("allTextContents",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
let options=await page.locator("#country option").allTextContents();
//console.log(options)
   let status=false;
for(let opt of options){
    
if(opt.includes("India")){
status=true;
break;
}  
}
 await expect(status).toBeTruthy()


})

