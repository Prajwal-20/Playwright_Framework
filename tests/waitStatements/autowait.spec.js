

import { test } from "@playwright/test";
//test.use({actionTimeout:5000})  // applicable on all testscripts inside this file but only on action methods
test("fill 1",async({page})=>{
  // page.setDefaultTimeout(3000)     // applicable only to this testscript
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("//input[@id='username']").fill("student");     
    await page.locator("//button[@class='btn']").click();
})

test.only("fill 2",async({page})=>{
  await page.goto("https://practicetestautomation.com/practice-test-login/")
  await page.locator("//input[@id='username']").fill("student");
})