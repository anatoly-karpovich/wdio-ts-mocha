import { Page } from "./page";

export class BasePage extends Page {
  get ["Spinner"]() {
    return `.spinner-border`;
  }

  get ["Notification"]() {
    return `div#toast`
  }

  get ["Notification text"]() {
    return `${this.Notification} div.toast-body`
  }

  get ["Notification close button"]() {
    return `${this.Notification} button`
  }
}
