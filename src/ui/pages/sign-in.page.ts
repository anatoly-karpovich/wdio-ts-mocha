import { BasePage } from "./basePage.page"

class SignInPage extends BasePage{
    uniqueElement = `.img-fluid`

    get ['Email']() {
        return `#emailinput`
    }

    get ['Password'] () {
        return `#passwordinput`
    }

    get ['Error Message']() {
        return `#errorMessage`
    }

    get ['Login button']() {
        return `.btn-lg`
    }

    async login(email: string, password: string) {
        await this.waitForElementAndSetValue(this.Email, email)
        await this.waitForElementAndSetValue(this.Password, password)
        await this.waitForElementAndClick(this["Login button"])
    }
}

export default new SignInPage()