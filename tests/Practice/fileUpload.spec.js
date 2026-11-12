
import {test,expect} from "@playwright/test"
test("fileupload",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
await page.locator("#singleFileInput").setInputFiles("C:/Users/USER/OneDrive/Desktop/Resume/Prajwal__cv.pdf")
await page.getByRole("button",{name:"Upload Single File"}).click()
await expect(page.locator("#singleFileStatus")).toContainText("Prajwal__cv")

})


