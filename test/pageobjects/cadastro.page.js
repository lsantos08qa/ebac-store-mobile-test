class CadastroPage {
    get inputFirstName() {
        return $('id:firstName')
    }
    get inputLastName() {
        return $('id:lastName')
    }
    get inputPhoneNumber() {
        return $('id:phone')
    }
    get inputEmail() {
        return $('id:email')
    }
    get inputPassword() {
        return $('id:password')
    }
    get inputRePassword() {
        return $('id:repassword')
    }
    get btnCreate() {
        return $('id:create')
    }

    async preencherCadastro(firstName, lastName, phone, email, password) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputPhoneNumber.setValue(phone);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputRePassword.setValue(password);
    }

    async clicarCriarConta() {
        await this.btnCreate.click();
    }
}

module.exports = new CadastroPage();
