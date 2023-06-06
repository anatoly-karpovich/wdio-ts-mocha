export const apiKeysMapper = {
  "_id": 'Order Number',
  "email": "Email",
  "name": "Name",
  "country": "Country",
  "city": "City",
  "address": "Address",
  "house": "House",
  "flat": "Flat",
  "street": "Street",
  "phone": "Phone",
  "createdOn": "Created On",
  "notes": "Notes",
  "manufacturer": "Manufacturer",
  "price": "Price",
  "amount": "Amount",
  "status": "Order Status",
  "delivery": "Delivery",
  "condition": "Delivery Type",
  "finalDate": "Delivery Date",
  "total_price": "Total Price",
  "customer": "Customer",
}

export const tableHeaders = {
  customers: ["email", "name", "country"],
  products: ['name', 'price', 'manufacturer'],
  orders: ['_id', 'customer', 'price', 'status']
}