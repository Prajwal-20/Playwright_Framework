import {test,expect} from '@playwright/test'
test("login",async({page})=>{

    await page.goto("https://demoblaze.com/");
  let pageTitle= await page.title();
   console.log(pageTitle);
   await expect(page).toHaveTitle("STORE");

   let pageURL=await page.url();
   console.log(pageURL);

   await expect(page).toHaveURL("https://demoblaze.com/");

   await page.locator("#login2").click();
   await page.locator("input[id='loginusername']").fill("pavanol");
   await page.locator("input[id='loginpassword']").fill("test@123");
  await page.locator("//button[text()='Log in']").click();
  await expect (page.locator("#logout2")).toBeVisible();
  
  let products=await  page.locator("//div[@id='tbodyid']//h4/a").allTextContents();
//console.log(products);
for(let product of products){

    if(product=="Nexus 6"){
       
console.log(product)
}
}
  
})

test("orangeLogin",async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.getByPlaceholder("Username").fill("Admin");
await page.getByPlaceholder("Password").fill("admin123");
await page.getByRole("button",{type:"submit"}).click();

let userName=await page.locator("//img[@alt='profile picture']/following-sibling::p").textContent();
console.log(userName);
let user=await page.getByText(userName);
await expect(user).toBeVisible();


})

test.only("textValidation",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
await page.getByPlaceholder("Enter Name").fill("prajju")
let mail=await page.getByPlaceholder("Enter EMail").innerText();
console.log(mail)

})

