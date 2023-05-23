import { BasePage } from "./basePage.page"

class HomePage extends BasePage {
    uniqueElement = `div#myCarousel`

    get ['User Dropdown']() {
        return `#dropdownUser1`
    }

    get ['SignOut button']() {
        return `a#signOut`
    }

    get ['Orders button']() {
        return `button#orders-from-home`
    }

    get ['Products button']() {
        return `button#products-from-home`
    }

    get ['Customers button']() {
        return `button#customers-from-home`
    }
}

export default new HomePage()