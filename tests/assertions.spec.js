
import {test,expect} from '@playwright/test'
test("orangeLogo",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin");
await page.getByPlaceholder("Password").fill("admin123");
await page.getByRole("button",{type:"submit"}).click();
let logo=await page.locator(".oxd-brand-banner");
await expect(logo).toBeVisible();
})

