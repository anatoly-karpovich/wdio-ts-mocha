export enum COUNTRIES {
  USA = 'USA',
  Canada = 'Canada',
  Belarus = 'Belarus',
  Ukraine = 'Ukraine',
  Germany = 'Germany',
  France = 'France',
  Great_Britain = 'Great Britain',
  Russia = 'Russia',
}

export interface ICustomer {
  "email": string;
  "name": string;
  "country": COUNTRIES;
  "city": string;
  "street": string;
  "house": number;
  "flat": number;
  "phone": string;
  "notes"?: string;
}

export interface ICustomerResponse extends ICustomer {
_id: string;
};