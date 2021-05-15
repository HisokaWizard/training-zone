import React, {FC, useMemo, useState} from "react";
import {
  FilterCheckboxList,
  FilterRadioButtonItem,
  FilterRangeOfDates,
  FilterRangeOfNumbers
} from "@/filter-experiments/filters";
import {filterActions} from "@/redux/filterExperiments/reducer";
import {testData} from "@/filter-experiments/data";
import {Button, Table, TableHead, TableCell, Paper, TableContainer, TableBody, TableRow} from "@material-ui/core";
import {useFilterState} from "@/redux/filterExperiments/hooks";
import {sendFilterConfig} from "@/filter-experiments/backendImmitation";
import {useAppDispatch} from "@/redux/hooks";

export const FilterExperiments: FC = () => {
  const dispatch = useAppDispatch();
  const {setAge, setWorkPosition, setSex, setSalaryRangeOfNumbers, setBirthday, clearState} = filterActions;
  const filterState = useFilterState();
  const [data, setData] = useState(testData);
  const [clear, setClear] = useState(false);

  const workPositionItems = useMemo(() => ['mfedev', 'waiter', 'managho', 'autotest'], [data]);
  const sexItems = useMemo(() => ['male', 'female'], [data]);

  const sendConfigToServer = () => {
    setClear(false);
    setData(sendFilterConfig(testData, filterState));
  }

  const clearFilter = () => {
    setData(testData);
    setClear(true);
    dispatch(clearState());
  }

  return <div style={{display: 'flex', flexDirection: 'column', padding: '20px'}}>
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Position in the company</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Sex</TableCell>
          </TableHead>
          <TableBody>
            {data.map(item => {
              return <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.birthday.toDateString()}</TableCell>
                <TableCell>{item.workPosition.value}</TableCell>
                <TableCell>{item.salary}</TableCell>
                <TableCell>{item.sex}</TableCell>
              </TableRow>
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{padding: '10px 30px', width: '400px'}}>
        <FilterRangeOfNumbers label='Age' setRangeOfNumbers={setAge} clear={clear}/>
        <FilterCheckboxList label='Work position' setCheckBoxList={setWorkPosition} items={workPositionItems}
                            clear={clear}/>
        <FilterRadioButtonItem label='Sex' setRadioButtonItem={setSex} items={sexItems} clear={clear}/>
        <FilterRangeOfNumbers label='Salary range' setRangeOfNumbers={setSalaryRangeOfNumbers} clear={clear}/>
        <FilterRangeOfDates label='Birthday' setRangeOfDates={setBirthday} clear={clear}/>
        <div style={{display: 'flex'}}>
          <Button variant='outlined' color='primary' onClick={sendConfigToServer}>Apply</Button>
          <Button variant='outlined' color='secondary' onClick={clearFilter}>Clear</Button>
        </div>
      </div>
    </div>
  </div>
}