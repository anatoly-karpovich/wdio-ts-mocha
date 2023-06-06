import { findArrayOfElements } from "../../../utils/dom"
import { ListPage } from "../listPage.page"
class CustomersPage extends ListPage {

    uniqueElement = `//h2[text()[normalize-space()='Customers List']]`

    pageName = "customers"

    get ['Add New Customer button']() {
        return `button.pageTitle`
    }

    get ['Title']() {
        return `h2.pageTitle`
    }

    get ['Email in table']() {
        return (value: string) => `${this["Table row by unique value"](value)}/td[1]`
    }

    get ['Name in table']() {
        return (value: string) => `${this["Table row by unique value"](value)}/td[2]`
    }

    get ['Country in table']() {
        return (value: string) => `${this["Table row by unique value"](value)}/td[3]`
    }

    get ['Created in table']() {
        return (value: string) => `${this["Table row by unique value"](value)}/td[4]`
    }

    async getTableRowByCustomerEmail(email: string) {
        const rows = await findArrayOfElements(this["Table rows"])
        if(rows) {
            const row = rows.find(async (el) => {await el.$(`td:nth-of-type(1)`).getText() === email})
            if(row) return row
        }
    }

    async clickEditButtonForCustomerByEmail(email:string) {
        const row = await this.getTableRowByCustomerEmail(email)
        if(row) {
            await this.waitForElementAndClick(this["Edit button"])
        }
    }
}

export default new CustomersPage()