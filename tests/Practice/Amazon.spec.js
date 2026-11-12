
import{test,expect} from "@playwright/test"
test("amazon search",async ({browser})=>{
const context=await browser.newContext();
 const page=await context.newPage();
 await page.goto("https://www.amazon.in/")
 let search=await page.getByPlaceholder("Search Amazon.in");
 await search.fill("iphone 17");
 await page.locator("#nav-search-submit-button").click();
 await page.waitForLoadState('load')
 let phones=await page.locator("//a[@class='a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal']").allTextContents();

 for(let name of phones){
console.log(await name);
 }

})
test("autosuggestion",async({page})=>{
await page.goto("https://www.amazon.in/")
await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
await page.getByPlaceholder("Search Amazon.in").fill("iphone");
await page.locator("//div[@class='s-suggestion-container']//span[@class='s-heavy']").last().waitFor();
let autosuggesgtionLocator=await page.locator("//div[@class='s-suggestion-container']//span[@class='s-heavy']");
let text= await autosuggesgtionLocator.allTextContents()
for(let sugg of text){
console.log(sugg)
}

let elements=await autosuggesgtionLocator.all();
for(let e of elements){
let value=await e.textContent()
if(value.includes(" 16 pro 256gb")){
await e.click()
break;
}
}

})


test.only("search", async({browser})=>{
      const context=await browser.newContext()
      const page=await context.newPage()
      await page.goto("https://www.amazon.in/")
     let searchBar= await page.locator("[name='field-keywords']")
     await searchBar.fill("iphone 18 pro")
     await page.getByRole("button",{name:"Go", exact:true}).click()
     await page.pause()

})
