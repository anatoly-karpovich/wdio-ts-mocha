export enum MANUFACTURERS {
  Apple = "Apple",
  Samsung = "Samsung",
  Google = "Google",
  Microsoft = "Microsoft",
  Sony = "Sony",
  Xiaomi = "Xiaomi",
  Amazon = "Amazon",
  Tesla = "Tesla",
}

export interface IProduct {
  _id?: string;
  name: string;
  amount: number;
  price: number;
  manufacturer: MANUFACTURERS;
  createdOn: number;
  notes?: string;
}