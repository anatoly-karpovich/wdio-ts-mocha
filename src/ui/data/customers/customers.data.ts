import { faker } from '@faker-js/faker';

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
    email: string;
    name: string;
    country: COUNTRIES;
    city: string;
    street: string;
    house: number;
    flat: number;
    phone: string;
    notes?: string;
}

export interface ICustomerResponse extends ICustomer {
  _id: string;
};

export const generateNewCustomer = (params?: Partial<ICustomerResponse>): ICustomer | ICustomerResponse => {
	return {
		email: faker.internet.email(),
		name: `AQA ${faker.string.alpha(20)}`,
		country: COUNTRIES.Belarus,
		city: 'Minsk',
		street: 'Best',
		house: 1,
		flat: 2,
		phone: '+3751234567890',
		notes: 'some notes',
		...params,
	};
};