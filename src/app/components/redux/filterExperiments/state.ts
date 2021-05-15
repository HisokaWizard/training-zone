import {EmployeeFilterConfig} from "@/filter-experiments/backendImmitation";

export const initialEmployeeFilterState: EmployeeFilterConfig = {
  age: {
    rangeOfNumbers: {
      from: undefined,
      to: undefined,
    }
  },
  birthday: {
    rangeOfDates: {
      from: undefined,
      to: undefined,
    }
  },
  salary: {
    rangeOfNumbers: {
      from: undefined,
      to: undefined,
    }
  },
  sex: {
    radioButtonItem: {
      item: undefined,
    }
  },
  workPosition: {
    checkBoxList: {
      list: []
    }
  }
}

