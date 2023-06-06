import { ICustomer, IOrder, IProduct } from "../../services/types";
import { apiKeysMapper } from "../../utils/mappers";
import DetailsModal from "../pages/modals/details.modal";

class DetailsSteps {
  async verifyDetailsModalData(entiti: ICustomer | IProduct | IOrder) {
    const detailsData = await DetailsModal.getDetailsData();
    const expected = Object.keys(entiti).reduce((acc, key) => {
      acc[apiKeysMapper[key]] = String(entiti[key]);
      return acc;
    }, {})
    expect(detailsData).toMatchObject(expected)
  }

  async closeDetailsModal() {
    await DetailsModal.waitForElementAndClick(DetailsModal["Close button"])
    await DetailsModal.waitForDisplayed(DetailsModal.uniqueElement, true);
  }

  async openEditPage(page) {
    await DetailsModal.waitForElementAndClick(DetailsModal["Edit button"])
    await page.waitForPage(page.uniqueElement);
  }

}

export default new DetailsSteps();