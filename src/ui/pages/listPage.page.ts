import { BasePage } from "./basePage.page";

export class ListPage extends BasePage {
  pageName: string;

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

  get ["Chip buttons container"]() {
    return `#chip-buttons`
  }

  get ["Chip buttons"]() {
    return `#chip-buttons div.chip`
  }

  get ["Chip button by value"]() {
    return (value: string) => `//div[contains(@class, 'chip')][.='${value}']`
  }
  
  get ["Close chip button by value"]() {
    return (value: string) => `${this["Chip button by value"](value)}/i`
  }

  getButtonSelectorByUniqueValue(button: "Details" | "Edit" | "Delete", uniqueValue: string) {
    const btn = button + " button";
      return `${this["Table row by unique value"](uniqueValue)}//${this[btn]}`;
  }

  
  async getListOfEntitiesFromTable() {
    return browser.execute(` 
      const entities = []; 
      const headers = [...document.querySelectorAll('th')].reduce((res,e,i,arr) => {
        if(i < arr.length-2) res.push(e.innerText)
        return res;}, []);

      document.querySelectorAll('table > tbody > tr').forEach(i => {
        if(i.style.display !== 'none') {
          const values = [...i.querySelectorAll('td')].reduce((res,e,i,arr) => {
            if(i < arr.length-2) res.push(e.innerText)
            return res;}, []);
          entities.push(Object.assign(...headers.map((k, i) => ({[k]: values[i]})))); 
        }
      }); 
      return entities; 
  `) as Promise<[]>;
}
}
