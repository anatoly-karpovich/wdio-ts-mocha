import { ICustomer } from "../../../services/types";
import forEach from "../../../utils/array/forEach";
import { findArrayOfElements } from "../../../utils/dom";
import { Modal } from "./modal";

class DetailsModal extends Modal {
  uniqueElement = 'div.modal-dialog';

  get ['TItle']() {
    return `${this.uniqueElement} h5.modal-title`
  }

  get ['Close icon']() {
    return `${this.uniqueElement} button.btn-close`
  }
  
  get ['Edit button']() {
    return `.modal-footer button.btn-primary`
  }

  get ['Close button']() {
    return `.modal-footer button.btn-secondary`
  }

  get ['Row']() {
    return `${this.uniqueElement} p`
  }

  get ['Row label']() {
    return (label: string) => `//strong[.='${label}:']`
  }

  get ['Row value']() {
    return (label: string) => `//p[./strong[.='${label}:']]`
  }

  async getDetailsData() {
    const detailsData = {}
    const rows = await findArrayOfElements(this.Row)
    await forEach(rows, async (row) => {
      const [label, value] = (await row.getText()).split(':\n');
      detailsData[label] = value;
    })
    return detailsData as ICustomer;
  }
}

export default new DetailsModal();