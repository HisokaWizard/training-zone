import {CheckBoxList, RadioButtonItem, RangeOfDates, RangeOfNumbers} from "@/filter-experiments/backendFilterModels";

// Structure equals for backend and frontend (only for fields which will use in the filtration)
export type Employee = {
  id: string; // not using for filter
  name: string; // not using for filter
  age: number;
  birthday: Date;
  workPosition: {
    code: string;
    value: string;
  };
  salary: number;
  sex: 'male' | 'female';
}

export enum EmployeeKeys {
  name = 'name',
  age = 'age',
  birthday = 'birthday',
  workPosition = 'workPosition',
  salary = 'salary',
  sex = 'sex',
}

export type EmployeeFilterConfig = {
  age: {
    rangeOfNumbers: RangeOfNumbers;
  };
  birthday: {
    rangeOfDates: RangeOfDates;
  };
  workPosition: {
    checkBoxList: CheckBoxList;
  };
  salary: {
    rangeOfNumbers: RangeOfNumbers;
  };
  sex: {
    radioButtonItem: RadioButtonItem;
  };
}

export const sendFilterConfig = <T, C>(entities: T[], entityConfig: C) => {
  const entityConfigKeys = Object.keys(entityConfig);
  let updatedEntities: any[] = entities;
  entityConfigKeys.forEach((key, index, keys) => {
    if ((entityConfig as any)[key]['rangeOfNumbers']) {
      const rangeOfNumber = (entityConfig as any)[key]['rangeOfNumbers'];
      if (rangeOfNumber.from > 0 && rangeOfNumber.to > 0) {
        updatedEntities = updatedEntities.filter((it: any) => (it as any)[key] > rangeOfNumber.from && (it as any)[key] < rangeOfNumber.to);
      }
    }
    if ((entityConfig as any)[key]['checkBoxList']) {
      const checkBoxList = (entityConfig as any)[key]['checkBoxList'].list;
      if (checkBoxList.length > 0) {
        // Checkbox check support field [code] to compare with checkbox list
        // It is bottle neck - need to clarify it clearly or add correct documentation
        // maybe one of variants is key array [code, key, id, type ...ect] which will use in the method
        updatedEntities = updatedEntities.filter((it: any) => checkBoxList.find((check: any) => (it as any)[key].code === check));
      }
    }
    if ((entityConfig as any)[key]['rangeOfDates']) {
      const rangeOfDates = (entityConfig as any)[key]['rangeOfDates'];
      if (rangeOfDates.from && rangeOfDates.to) {
        updatedEntities = updatedEntities.filter((it: any) => (it as any)[key] > rangeOfDates.from && (it as any)[key] < rangeOfDates.to);
      }
    }
    if ((entityConfig as any)[key]['radioButtonItem']) {
      const radioButtonItem = (entityConfig as any)[key]['radioButtonItem'].item;
      if (radioButtonItem) {
        updatedEntities = updatedEntities.filter((it: any) => (it as any)[key] === radioButtonItem);
      }
    }
  })
  return updatedEntities;
}