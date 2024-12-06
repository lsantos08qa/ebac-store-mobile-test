const { expect, driver } = require('webdriverio')
const homePage = require('../pageobjects/home.page.js')
const loginPage = require('../pageobjects/login.page.js')
const profilePage = require('../pageobjects/profile.page.js')
const exp = require('constants');

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await loginPage.login('cliente@ebac.art.br', 'GB*peTOHNJ1#c$sgk08EaYJQ')
        await homePage.openMenu('profile')
        expect((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeTruthy()
    });
})