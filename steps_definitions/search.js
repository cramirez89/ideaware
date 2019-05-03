
const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^The page of "([^"]*)"$/, homepage => {
  return client.url('http://www.cnn.com/')
    .windowMaximize()
    .waitForElementVisible('body', 1000);
});

When(/^The main logo is displayed$/, () => {
  return client.waitForElementPresent('a[id=logo]');
});

Then(/^I click in search button$/, () => {
  return client.click('form[name=headerSearch]')
    .pause(2000)
});

Then(/^I type for "([^"]*)"$/, word => {
  return client.setValue('input[name=q]', word)
    .pause(2000)
});

Then(/^No error messages are found$/, () => {
  return client.waitForElementNotPresent('div[class=cnn-search__no-results no-results--returned]')
    .pause(2000);
});

Then(/^I see an error message$/, () => {
  return client.waitForElementPresent('div[class=cnn-search cnn-search--no-results]')
    .pause(2000);
});

Then(/^I type "([^"]*)"$/, word2 => {
  return client.setValue('input[name=q]', word2)
    .pause(2000)
});

Then(/^I click submit button$/, () => {
  return client.click('button[id=submit-button]')
    .pause(10000)
});