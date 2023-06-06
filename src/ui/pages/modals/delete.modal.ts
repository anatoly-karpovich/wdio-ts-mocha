import { Modal } from "./modal";

class DeleteModal extends Modal {
  get ['Delete button']() {
    return `div.modal-footer button.btn-danger`
  }

  get ['Cancel button']() {
    return `div.modal-footer button.btn-secondary`
  }

  get ['Close button']() {
    return `div.modal-header button.btn-close`
  }

  get ['Modal Text']() {
    return `div.modal-body p`
  }

  get ['Modal Title']() {
    return `div.modal-header h5`
  }
}

export default new DeleteModal();