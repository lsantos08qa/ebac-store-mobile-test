import { $ } from '@wdio/globals'

class LoginPage {
    get email (){
        return $('id:email')
    }
    get passaword (){
        return $('android=new UiSelector().text("Password")')
    }
    get btnLogin(){
        return $('~Login')
    }

    async login(email,password){
        await this.email
    }
}
export default new LoginPage();