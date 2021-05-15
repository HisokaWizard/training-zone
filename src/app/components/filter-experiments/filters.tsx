import React, {FC, useEffect, useRef, useState} from 'react';
import {useAppDispatch} from "@/redux/hooks";
import {Checkbox, FormControlLabel, InputLabel, Radio, TextField} from "@material-ui/core";
import {ActionCreatorWithOptionalPayload} from "@reduxjs/toolkit";
import {CheckBoxList, RadioButtonItem, RangeOfDates, RangeOfNumbers} from "@/filter-experiments/backendFilterModels";
/* Filter items:

  - Range of numbers - example: price form 500 to 1000
  - Checkbox list - example: name of the devices, companies or colors
  - Radio button list - example: variant of the delivery (only one variant must be)
  - Date range - example: birthday from 1990-2010
*/

/*
* Filter config example for current test data
*
* const configWithType = {
*   name: {}
*   age: {
*     rangeOfNumber: { from: 25, to: 40 }
*   }
*   birthday: {
*     rangeOfDate: {from: 1990, to: undefined}
*   }
*   workPosition: {
*     checkBoxList: ["fedev", "devops"]
*   }
*   salary: {
*     rangeOfNumber: { from: 25, to: 40 }
*   }
*   sex: {
*     radioButtonList: 'male',
*   }
* }
*
*
* */

type FilterRangeOfNumbersProps = {
  label: string;
  setRangeOfNumbers: ActionCreatorWithOptionalPayload<RangeOfNumbers>;
  clear: boolean;
}

export const FilterRangeOfNumbers: FC<FilterRangeOfNumbersProps> = ({label, setRangeOfNumbers, clear}) => {
  const dispatch = useAppDispatch();
  const [fromV, setFromV] = useState<number>(undefined);
  const [toV, setToV] = useState<number>(undefined);
  const fromVRef = useRef(null);
  const toVRef = useRef(null);

  useEffect(() => {
    if (fromV && typeof +fromV === 'number' || toV && typeof +toV === 'number') {
      dispatch(setRangeOfNumbers({
        from: fromV,
        to: toV
      }));
    }
  }, [fromV, toV, setRangeOfNumbers])

  useEffect(() => {
    if (clear) {
      setFromV(undefined);
      setToV(undefined);
      fromVRef.current.value = '';
      toVRef.current.value = '';
    }
  }, [clear])

  return <div style={{display: 'flex', flexDirection: 'column', padding: '10x', width: '100%'}}>
    <FormControlLabel control={<InputLabel/>} label={label}/>
    <div>
      <div style={{padding: '10px'}}>
        <TextField inputRef={fromVRef} label='From' value={fromV} fullWidth
                   onChange={(event) => setFromV(event.target.value as any)}/>
      </div>
      <div style={{padding: '10px'}}>
        <TextField inputRef={toVRef} label='To' value={toV} fullWidth
                   onChange={(event) => setToV(event.target.value as any)}/>
      </div>
    </div>
  </div>
}

type FilterCheckboxListProps = {
  label: string;
  items: any[];
  setCheckBoxList: ActionCreatorWithOptionalPayload<CheckBoxList>;
  clear: boolean;
}

export const FilterCheckboxList: FC<FilterCheckboxListProps> = ({label, setCheckBoxList, items, clear}) => {
  const dispatch = useAppDispatch();
  const [checkedItems, setCheckedItems] = useState<{ value: any, checked: boolean }[]>([]);

  const initBaseCheckedItems = (items: any[]) => {
    const baseCheckedItems = items.map((it) => ({value: it, checked: false}));
    setCheckedItems(baseCheckedItems);
  }

  useEffect(() => {
    if (checkedItems.length === 0) {
      initBaseCheckedItems(items);
    }
  }, [items])

  const onChange = (value: string) => {
    const updatedItems = checkedItems.map(it => (it.value === value ? {...it, checked: !it.checked} : {...it}));
    setCheckedItems(updatedItems);
    dispatch(setCheckBoxList({list: updatedItems.filter(it => it.checked).map(it => it.value)}));
  }

  useEffect(() => {
    if (clear) {
      initBaseCheckedItems(items);
    }
  }, [clear, items])

  return <div style={{display: 'flex', flexDirection: 'column', padding: '10x'}}>
    <FormControlLabel control={<InputLabel/>} label={label}/>
    {checkedItems.map(it => {
      return <FormControlLabel
        control={
          <Checkbox
            checked={it.checked}
            onChange={() => onChange(it.value)}
            name="items"
            color="primary"
          />
        }
        label={it.value}
        key={it.value}
      />
    })}
  </div>
}

type FilterRadioButtonItemProps = {
  label: string;
  items: string[];
  setRadioButtonItem: ActionCreatorWithOptionalPayload<RadioButtonItem>;
  clear: boolean;
}

export const FilterRadioButtonItem: FC<FilterRadioButtonItemProps> = ({label, setRadioButtonItem, items, clear,}) => {
  const dispatch = useAppDispatch();
  const [checkedItems, setCheckedItems] = useState<{ value: string, checked: boolean }[]>([]);

  const initBaseCheckedItems = (items: any[]) => {
    const baseCheckedItems = items.map((it) => ({value: it, checked: false}));
    setCheckedItems(baseCheckedItems);
  }

  useEffect(() => {
    if (checkedItems.length === 0) {
      initBaseCheckedItems(items);
    }
  }, [items])

  const onChange = (value: string) => {
    const updatedItems = checkedItems.map(it => (it.value === value ? {...it, checked: true} : {
      ...it,
      checked: false
    }));
    setCheckedItems(updatedItems);
    dispatch(setRadioButtonItem({item: value}));
  }

  useEffect(() => {
    if (clear) {
      initBaseCheckedItems(items);
    }
  }, [clear, items])

  return <div style={{display: 'flex', flexDirection: 'column', padding: '10x'}}>
    <FormControlLabel control={<InputLabel/>} label={label}/>
    {checkedItems.map(it => {
      return <FormControlLabel
        control={
          <Radio
            checked={it.checked}
            onChange={() => onChange(it.value)}
            name="items"
            color="primary"
          />
        }
        label={it.value}
        key={it.value}
      />
    })}
  </div>
}

type FilterRangeOfDatesProps = {
  label: string;
  setRangeOfDates: ActionCreatorWithOptionalPayload<RangeOfDates>;
  clear: boolean;
}

export const FilterRangeOfDates: FC<FilterRangeOfDatesProps> = ({label, setRangeOfDates, clear}) => {
  const dispatch = useAppDispatch();

  const [dateFrom, setDateFrom] = useState<Date>(null);
  const [dateTo, setDateTo] = useState<Date>(null);
  const dateFromRef = useRef(null);
  const dateToRef = useRef(null);

  useEffect(() => {
    if (dateFrom && dateFrom instanceof Date || dateTo && dateTo instanceof Date) {
      dispatch(setRangeOfDates({
        from: dateFrom,
        to: dateTo
      }));
    }
  }, [dateFrom, dateTo, setRangeOfDates])

  useEffect(() => {
    if (clear) {
      setDateFrom(null);
      setDateTo(null);
      dateFromRef.current.value = null;
      dateToRef.current.value = null;
    }
  }, [clear])

  return <div style={{display: 'flex', flexDirection: 'column', padding: '10x'}}>
    <FormControlLabel control={<InputLabel/>} label={label}/>
    <div>
      <div style={{padding: '10px'}}>
        <TextField
          inputRef={dateFromRef}
          label="From"
          type="date"
          defaultValue={dateFrom}
          onChange={(event) => {
            setDateFrom(new Date(event.target.value));
          }}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </div>
      <div style={{padding: '10px'}}>
        <TextField
          inputRef={dateToRef}
          label="To"
          type="date"
          defaultValue={dateTo}
          onChange={(event) => {
            setDateTo(new Date(event.target.value));
          }}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </div>
    </div>
  </div>
}