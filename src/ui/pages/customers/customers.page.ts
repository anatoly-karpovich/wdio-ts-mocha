import {findElement, findArrayOfElements} from "../../../utils/dom"
import { ListPage } from "../listPage.page"
class CustomersPage extends ListPage {

    uniqueElement = `//h2[text()[normalize-space()='Customers List']]`

    get ['Add New Customer button']() {
        return `button.pageTitle`
    }

    get ['Title']() {
        return `h2.pageTitle`
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