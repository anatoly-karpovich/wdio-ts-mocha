import { COUNTRIES, ICustomer } from "./" 
import { IProduct } from "./product.types";

export enum ORDER_STATUSES {
  DRAFT = "Draft",
  IN_PROCESS = "In Process",
  PARTIALLY_RECEIVED = "Partially Received",
  RECEIVED = "Received",
  CANCELED = "Canceled",
}

export enum ORDER_HISTORY_ACTIONS {
  CREATED = "Order created",
  CUSTOMER_CHANGED = "Customer changed",
  REQUIRED_PRODUCTS_CHANGED = "Requested products changed",
  PROCESSED = "Order processing started",
  DELIVERY_SCHEDULED = "Delivery Scheduled",
  DELIVERY_EDITED = "Delivery Edited",
  RECEIVED = "Received",
  RECEIVED_ALL = "All products received",
  CANCELED = "Order canceled",
}

export enum DELIVERY_CONDITIONS {
  DELIVERY = "Delivery",
  PICK_UP = "Pickup",
}

export interface IDelivery {
  finalDate: string;
  condition: DELIVERY_CONDITIONS;
  address: {
    country: COUNTRIES;
    city: string;
    street: string;
    house: number;
    flat: number;
  };
}

export interface IHistory {
  readonly action: ORDER_HISTORY_ACTIONS
  readonly status: string;
  readonly customer: string;
  readonly products: IProduct[];
  readonly delivery: IDelivery | null;
  readonly total_price: number;
  readonly changedOn: string;
}

export interface IComment {
  readonly _id?: string;
  readonly text: string;
  readonly createdOn: string;
}

export interface IOrderData {
  _id?: string;
  customer: string;
  products: string[];
}

export interface IOrder {
  readonly _id?: string;
  readonly status: ORDER_STATUSES;
  readonly customer: ICustomer;
  readonly products: IProduct[];
  readonly delivery: IDelivery | null;
  readonly total_price: number;
  readonly createdOn: string;
  readonly history: IHistory[];
  readonly comments: IComment[];
}