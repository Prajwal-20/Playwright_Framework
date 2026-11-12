
import { test } from "@playwright/test";

test("locators",async({page})=>{
await page.goto("https://practicetestautomation.com/practice-test-login/")

//username textfield locator
await page.locator("input#username").fill("student");
//pwd textfield
await page.locator("input#password").fill("Password123");
//submit button
await page.locator("[class='btn']").click;

})

test.only("xpath",async({page})=>{
await page.goto("https://practicetestautomation.com/practice-test-login/");
 await page.locator("//input[@name='username']").fill("student");
 await page.locator("//input[@id='password']").fill("Password123");
   await page.locator("//button[text()='Submit']").click();
})