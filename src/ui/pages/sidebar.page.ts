import { BasePage } from "./basePage.page"

class SideBarPage extends BasePage {
    get ['Home']() {
        return `a[onClick="sideMenuClickHandler('Home');"]`
    }

    get ['Orders']() {
        return `a[onClick="sideMenuClickHandler('Orders');"]`
    }

    get ['Products']() {
        return `a[onClick="sideMenuClickHandler('Products');"]`
    }

    get ['Customers']() {
        return `a[onClick="sideMenuClickHandler('Customers');"]`
    }
}

export default new SideBarPage()