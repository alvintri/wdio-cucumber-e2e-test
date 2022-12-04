import { Given,When,Then } from "@cucumber/cucumber";


Given(/^Google page is opened$/, async function () {
    console.log('Before opening browser...');
    await browser.url("https://www.google.com")
    await browser.pause(1000)
    console.log('After opening browser...');
})
When(/^Search with (.*)$/, async function(SearchItem){
    console.log('>> SearchItem: ' + SearchItem);
    let ele = await $('[name=q]')
    await ele.setValue(SearchItem)
    await browser.keys("Enter")
})
Then(/^Click on the first search result$/, async function () {
    let ele = await $('<h3>')
    ele.click()
})
Then(/^Url should match (.*)$/, async function (ExpectedURL) {
    console.log('>> expectedURL:' + ExpectedURL);
    let url = await browser.getUrl();
})

// Web interactions

Given(/^A web page is opened$/, async function () {
    await browser.url("/inputs")
    await browser.setTimeout({implicit: 15000, pageLoad : 10000})
    await browser.maximizeWindow()
})

When(/^Peform web Interactions$/, async function () {
    //1. Input box
    //Actions:
    //1. Type into input box
    //2. Clear the field and type or just addValue
    //3. Click and type
    //4. Slow typiing
    let strNum = "12345"

    let ele= await $('[type=number')
    //await ele.setValue(strNum)

    await ele.click()

    for(let i=0;i<strNum.length;i++){
        let charStr = strNum.charAt(i)
        await browser.pause(1000)
        await browser.keys(charStr)
    }

    //await browser.debug()
    browser.pause(3000) 
})

