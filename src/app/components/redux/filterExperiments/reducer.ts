import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {initialEmployeeFilterState} from "@/redux/filterExperiments/state";
import {CheckBoxList, RadioButtonItem, RangeOfDates, RangeOfNumbers} from "@/filter-experiments/backendFilterModels";

const filterSlice = createSlice({
  name: 'colonialists',
  initialState: initialEmployeeFilterState,
  reducers: {
    setAge: (state, action: PayloadAction<RangeOfNumbers>) => {
      state.age.rangeOfNumbers = action.payload;
    },
    setBirthday: (state, action: PayloadAction<RangeOfDates>) => {
      state.birthday.rangeOfDates = action.payload;
    },
    setSalaryRangeOfNumbers: (state, action: PayloadAction<RangeOfNumbers>) => {
      state.salary.rangeOfNumbers = action.payload;
    },
    setSex: (state, action: PayloadAction<RadioButtonItem>) => {
      state.sex.radioButtonItem = action.payload;
    },
    setWorkPosition: (state, action: PayloadAction<CheckBoxList>) => {
      state.workPosition.checkBoxList = action.payload;
    },
    clearState: (state) => {
      state.age = {...initialEmployeeFilterState.age};
      state.workPosition = {...initialEmployeeFilterState.workPosition};
      state.sex = {...initialEmployeeFilterState.sex};
      state.salary = {...initialEmployeeFilterState.salary};
      state.birthday = {...initialEmployeeFilterState.birthday};
    }
  }
})

const {reducer, actions} = filterSlice;
export const filterReducer = reducer;
export const filterActions = {
  setAge: actions.setAge,
  setBirthday: actions.setBirthday,
  setSalaryRangeOfNumbers: actions.setSalaryRangeOfNumbers,
  setSex: actions.setSex,
  setWorkPosition: actions.setWorkPosition,
  clearState: actions.clearState,
};