import _ from "lodash";
import services from "../../services/servicesFactory";
import forEach from "../../utils/array/forEach";
import { findArrayOfElements } from "../../utils/dom";
import { apiKeysMapper, tableHeaders } from "../../utils/mappers";
import { IChipsData } from "../data/types";
import CustomersPage from "../pages/customers/customers.page";
import { ListPage } from "../pages/listPage.page";
import DeleteModal from "../pages/modals/delete.modal";
import CommonSteps from "./common.steps";
import find from "../../utils/array/find";

class ListSteps {
  /**
   * Performs search in table by unique value
   * @param {string} value Any string to be pasted into search input
   */
  async searchInTable(page: ListPage, value: string) {
    await page.waitForElementAndSetValue(CustomersPage["Search input"], value);
    await page.waitForElementAndClick(CustomersPage["Search button"]);
    const chipSelector = page["Chip button by value"](value)
    await page.waitForDisplayed(chipSelector);
  }

  async clickOnEditButtinByUniqueValue(uniqueValue: string) {
    await CustomersPage.waitForElementAndClick(CustomersPage.getButtonSelectorByUniqueValue("Edit", uniqueValue));
  }

  async clickOnDetailsButtinByUniqueValue(uniqueValue: string) {
    await CustomersPage.waitForElementAndClick(CustomersPage.getButtonSelectorByUniqueValue("Details", uniqueValue));
  }

  async clickOnDeleteButtinByUniqueValue(uniqueValue: string) {
    await CustomersPage.waitForElementAndClick(CustomersPage.getButtonSelectorByUniqueValue("Delete", uniqueValue));
  }

  async deleteEntryByUniqueValue(uniqueValue: string) {
    await CustomersPage.waitForElementAndClick(CustomersPage.getButtonSelectorByUniqueValue("Delete", uniqueValue));
    await DeleteModal.waitForElementAndClick(DeleteModal["Delete button"]);
  }

  async checkChipButtonByText(text: string) {
    await CustomersPage.checkElementText(CustomersPage["Chip button by value"](text), text);
  }

  async getSearchChipButtonText(page: ListPage) {
    const chips = await findArrayOfElements(CustomersPage["Chip buttons"]);
    const chip = await find(chips, async (chip) => await chip.getAttribute(`data-chip-${page.pageName}`) === 'search')
    const text = await chip.getText();
    return text
  }

  async verifyTableData(page: ListPage) {
    let expected = await this.getApiDataMappedToTableHeaders(page);
    const chipsData = await this.getChipButtons(page);
    if (chipsData) {
      expected = this.filterAndSearchInTableData(expected, chipsData);
    }
    const actual = await CustomersPage.getListOfEntitiesFromTable();
    expect(actual.length).toBe(expected.length);
    for(const obj of expected) {
      expect(actual).toContainEqual(obj);
    }
  }

  private async getApiDataMappedToTableHeaders(page: ListPage): Promise<Record<string, string>[]> {
    const token = await CommonSteps.getAuthorizationToken();
    const data = (await services[page.pageName].get({ token })).data[_.capitalize(page.pageName)].map((entiti) => {
      const result = {};
      for (const key of tableHeaders[page.pageName]) {
        result[apiKeysMapper[key]] = entiti[key];
      }
      return result;
    });
    return data;
  }

  private async getChipButtons(page: ListPage): Promise<IChipsData | null> {
    const chips = await findArrayOfElements(CustomersPage["Chip buttons"]);
    if (chips.length) {
      const chipsData: IChipsData = {};
      await forEach(chips, async (chip) => {
        const context = await chip.getAttribute(`data-chip-${page.pageName}`);
        if (context === "search") {
          chipsData[context] = await chip.getText();
        } else {
          let text = await chip.getText();
          Array.isArray(chipsData["filtering"]) ? chipsData["filtering"].push(text) : (chipsData["filtering"] = [text]);
        }
      });
      return chipsData;
    } else {
      return null;
    }
  }

  private filterAndSearchInTableData(tableData: Record<string, string>[], chipsData: IChipsData) {
    const { search, filtering } = chipsData;
    const searchedAndFiltered = tableData.reduce((result, entiti) => {
      if (search && filtering && filtering.length) {
        if (Object.values(entiti).some((v) => v.toLowerCase().includes(search.toLowerCase())) && filtering.includes(Object.values(entiti).at(-1))) {
          result.push(entiti);
        }
      } else if (search) {
        if (Object.values(entiti).some((v) => v.toLowerCase().includes(search.toLowerCase()))) {
          result.push(entiti);
        }
      } else if (filtering && filtering.length) {
        if (filtering.includes(Object.values(entiti).at(-1))) {
          result.push(entiti);
        }
      }
      return result;
    }, []);
    return searchedAndFiltered;
  }
}

export default new ListSteps();
