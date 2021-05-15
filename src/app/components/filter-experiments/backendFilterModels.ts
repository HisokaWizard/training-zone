/* Filter items:

  - Range of numbers - example: price form 500 to 1000
  - Checkbox list - example: name of the devices, companies or colors
  - Radio button list - example: variant of the delivery (only one variant must be)
  - Date range - example: birthday from 1990-2010
*/


export type RangeOfNumbers = {
  from: number;
  to: number;
}

export type CheckBoxList = {
  list: string[];
}

export type RadioButtonItem = {
  item: string;
}

export type RangeOfDates = {
  from: Date;
  to: Date;
};

