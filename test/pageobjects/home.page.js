
class HomePage {
    async openMenu(menu) {
        await $(`id:tab-${menu}`).click();
    }
}

module.exports = new HomePage();
