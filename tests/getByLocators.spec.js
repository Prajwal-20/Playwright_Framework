
import { test } from "@playwright/test";

test("getBy",async({page})=>{
 //await page.goto("https://demo.nopcommerce.com/login");

 //await page.getByLabel("Email:").fill("aa@gmail.com");

 //await page.getByLabel("Email",{exact:false}).fill("aa@gmail.com");  //exact works as contains so tha we can use partial text if we give it as false

 // get by placeholder
 //await page.getByPlaceholder("Search store").fill("computers");

 //getByText
 //await page.getByText("Electronics").click({force:true});


 //xpath
 //await page.locator("//ul[@class='sublist']/descendant::a[text()=' Camera & photo ']").click();

 //getByAltText
 //await page.getByAltText("nopCommerce demo store",{exact:true}).click();

 //getByTitle
 //await page.getByTitle("Show products in category Camera & photo").first().click();

//getByRole
//await page.getByRole("link",{name:" Camera & photo "}).click();

//=========================getByTestId==============
await page.goto("https://www.saucedemo.com/")
await page.getByTestId("password").fill("ghfhjd")


})