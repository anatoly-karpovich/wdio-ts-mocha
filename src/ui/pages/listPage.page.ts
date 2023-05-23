import find from "../../utils/array/find";
import { findArrayOfElements } from "../../utils/dom";
import { BasePage } from "./basePage.page";

export class ListPage extends BasePage {
  get ["Search input"]() {
    return `input[type="search"]`;
  }

  get ["Search button"]() {
    return `button[id*="search"]`;
  }

  get ["Filter button"]() {
    return `button#filter`;
  }

  get ["Details button"]() {
    return `button[@title='Details']`;
  }

  get ["Delete button"]() {
    return `button[@title='Delete']`;
  }

  get ["Edit button"]() {
    return `button[@title='Edit']`;
  }

  get ["Table"]() {
    return `table.table`;
  }

  get ["Table headers"]() {
    return `${this.Table} thead th`;
  }

  get ["Table body"]() {
    return `${this.Table} tbody`;
  }

  get ["Table rows"]() {
    return `${this["Table body"]} tr`;
  }

  get ["Table row by unique value"]() {
    return (value: string) => `//tr[./td[.='${value}']]`;
  }

  getButtonSelectorByUniqueValue(button: "Details" | "Edit" | "Delete", uniqueValue: string) {
    const btn = button + " button";
    return `${this["Table row by unique value"](uniqueValue)}//${this[btn]}`;
  }
}
