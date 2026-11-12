
import { test,expect } from "@playwright/test";
test("radioButton",async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
  //  await page.locator("//input[@value='Upi']").click(); 
    await page.locator("//input[@value='Upi']").check();  // work same as click( only for radio and checkbox)
    await page.waitForTimeout(2000)
    // this not for assertion only for our understanding and to print on console it will return boolean
    //console.log(await page.locator("//input[@value='Upi']").isChecked())
    
    // doing assertion
    await expect(await page.locator("//input[@value='Upi']")).toBeChecked(); 
  // await expect(await page.locator("//input[@value='Upi']").isChecked()).toBeFalsy();  // for negative scenario

})

test("checkBox",async({page})=>{
  await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
  await page.locator("//input[@id='domain_b']").check();
  await page.waitForTimeout(2000);
  await expect(await page.locator("//input[@id='domain_b']")).toBeChecked();
  await page.locator("//input[@id='domain_b']").uncheck();
  await page.waitForTimeout(2000);
  //await expect(await page.locator("//input[@id='domain_b']")).toBeChecked();
 await expect(await page.locator("//input[@id='domain_b']").isChecked()).toBeFalsy();
 await page.waitForTimeout(2000);

})

test("dropdowns",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//     await page.waitForTimeout(2000);
//    // await page.locator("#select3").selectOption({value:"India"})  // selecting through value
//      await page.locator("#select3").selectOption({label:"Poland"})  // selecting through label(text)
//     // await page.locator("#select3").selectOption({index:7})  // selecting through index
//     // await page.locator("#select3").selectOption("India")  // direct=> first it will check value then label
//     await page.waitForTimeout(2000);

    // multiple dropdown
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    await page.waitForTimeout(2000);
     await page.locator("#select-multiple-native").selectOption([{value:"Mens Casual Premium Slim Fit T-Shirts "},{value:"Mens Cotton Jacket"}])
     await page.waitForTimeout(2000);
     await page.locator("//button[text()='Add']").click();
     await page.waitForTimeout(2000);

// custom dropdowns
  await page.goto("https://www.amazon.in/s?k=shoes&ref=nb_sb_noss")
    await page.locator("#s-result-sort-select").click({force:true});
    await page.locator("//a[@class='a-dropdown-link']").first().waitFor();
    let options=await page.locator("//a[@class='a-dropdown-link']").all();
    // for(let option of options){
    //     let text=await option.textContent();
    //     if(text.includes("Best ")){

    //         await option.click();
    //     }
    // }
    // await page.waitForTimeout(2000);

    // directly by xpath

    let text="Price: High to Low";
    await page.locator(`//a[@class='a-dropdown-link' and text()="${text}"]`).click();
    await page.waitForTimeout(2000);
})

test.only("autosuggestions",async({page})=>{

    await page.goto("https://www.amazon.in/");
    await page.locator("input#twotabsearchtextbox").fill("shoes");
    await page.waitForTimeout(2000)
    await page.waitForSelector("(//div[@class='s-suggestion-container'])[1]")
    // let autosugg=await page.locator("//div[@class='s-suggestion-container']").all();
    // for(let option of autosugg){

    //    let text=await option.textContent();
    //    if(text.includes(" for woman")){
    //     option.click();
    // break;
    //    }
    // }
    // await page.waitForTimeout(3000);

    //using keyboard
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);


})