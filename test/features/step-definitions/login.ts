import { Given,When,Then } from "@cucumber/cucumber";
import { homePages } from '../../pageObjects/homePage'

Given(/^Website homepage$/, async function () {
    console.log('Before opening browser...');
    await browser.url("https://www.saucedemo.com/")
    await browser.pause(1000)
    console.log('After opening browser...');
})
When(/^User input username (.*)$/, async function(username){
    await $(homePages.homePagesV1.field.username).setValue(username)
})
When(/^User input password (.*)$/, async function (password) {
    await $(homePages.homePagesV1.field.password).setValue(password)
})
Then(/^User click login button$/, async function () {
    await $(homePages.homePagesV1.buttonLogin).click();
})