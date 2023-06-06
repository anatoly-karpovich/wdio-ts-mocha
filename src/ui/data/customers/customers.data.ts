import { faker } from '@faker-js/faker';
import { COUNTRIES, ICustomer, ICustomerResponse } from '../../../services/types';

export const generateNewCustomer = (params?: Partial<ICustomerResponse>): ICustomer | ICustomerResponse => {
	return {
		email: faker.internet.email(),
		name: `Name ${faker.string.alpha(35)}`,
		country: COUNTRIES.Belarus,
		city: `City ${faker.string.alpha(15)}`,
		street: `Street ${faker.string.alphanumeric(33)}`,
		house: faker.number.int(999),
		flat: faker.number.int(9999),
		phone: `+${faker.number.int(999999999999)}`,
		notes: `Notes ${faker.string.alpha(244)}`,
		...params,
	};
};
