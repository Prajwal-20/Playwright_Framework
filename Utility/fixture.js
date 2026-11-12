
import{test as basetest} from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export const test=basetest.extend({

loggedInPage:async({page},use)=>{

await page.goto(process.env.Base_Url);
await page.fill('#username',process.env.Username);
await page.fill('#password',process.env.Password);
await page.click('#login');

await page.waitForLoadState("networkidle");

await use(page);
}

})