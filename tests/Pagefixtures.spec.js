
import { test } from "@playwright/test";

test("fixtures",async({page})=>{
  await page.goto("https://www.amazon.in/")     // page.goto is used to launch the browser
})

