
import { test } from "@playwright/test";
test("test annotations",async({page})=>{
    await console.log("test 1")
})


test.skip("test 2",async({browserName})=>{       // this test will skip because we are using test.skip annotation
  //  test.skip(browserName==="chromium")     //  conditional skip
                                        
await console.log("test 2")   
})

test("test 3",async({page})=>{
await console.log("test 3")
})