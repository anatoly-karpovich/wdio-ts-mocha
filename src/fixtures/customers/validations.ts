import type { ValidationFixture } from "../types";

export const names: ValidationFixture = [
  {
    testName: 'customer name with 41 characters',
    value: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    message: "Customer's name should contain only 1-40 alphabetical characters and one space between",
  },
  {
    testName: 'customer name with 0 characters',
    value: "",
    message: "Customer's name should contain only 1-40 alphabetical characters and one space between",
  },
  {
    testName: 'customer name with special characters',
    value: "Tony!@#",
    message: "Customer's name should contain only 1-40 alphabetical characters and one space between",
  },
  {
    testName: 'customer name with only spaces',
    value: "    ",
    message: "Customer's name should contain only 1-40 alphabetical characters and one space between",
  },
  {
    testName: 'customer name with two spaces between words',
    value: "aa  aa",
    message: "Customer's name should contain only 1-40 alphabetical characters and one space between",
  },
  {
    testName: 'customer name with cyrillic characters',
    value: "Анатолий",
    message: "Customer's name should contain only 1-40 alphabetical characters and one space between",
  },
  {
    testName: 'customer name with digits',
    value: "Tony1",
    message: "Customer's name should contain only 1-40 alphabetical characters and one space between",
  },
];

export const cities: ValidationFixture = [
  {
    testName: 'city with 21 characters',
    value: "aaaaaaaaaaaaaaaaaaaaa",
    message: "City's name should contain only 1-20 alphabetical characters and one space between",
  },
  {
    testName: 'city with special characters',
    value: "!@#",
    message: "City's name should contain only 1-20 alphabetical characters and one space between",
  },
  {
    testName: 'city with only spaces',
    value: "    ",
    message: "City's name should contain only 1-20 alphabetical characters and one space between",
  },
  {
    testName: 'city with two spaces between words',
    value: "aa  aa",
    message: "City's name should contain only 1-20 alphabetical characters and one space between",
  },
  {
    testName: 'city with cyrillic characters',
    value: "Минск",
    message: "City's name should contain only 1-20 alphabetical characters and one space between",
  },
  {
    testName: 'city with digits',
    value: "Minsk1",
    message: "City's name should contain only 1-20 alphabetical characters and one space between",
  },
]
