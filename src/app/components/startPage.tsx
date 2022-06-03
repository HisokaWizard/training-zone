import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown } from 'react-bootstrap';
import {
  convertValueToExcelNumberFormat,
  useFilterDependencyArray,
  currencyConverter,
  GeometricFormulas,
  Tile,
} from './PracticeTasks';

export const StartPage = () => {
  console.log(convertValueToExcelNumberFormat(456.65));
  console.log(convertValueToExcelNumberFormat(456));
  console.log(convertValueToExcelNumberFormat(0));
  console.log(convertValueToExcelNumberFormat(null));
  console.log(convertValueToExcelNumberFormat(undefined));
  console.log(convertValueToExcelNumberFormat(-456.1111));

  const result = useFilterDependencyArray('33', 'dependValue');
  console.log(result);

  const res = currencyConverter(5000, 'RUB', 'EUR');
  console.log(res);

  return (
    <div>
      <Dropdown style={{ margin: '10px' }}>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          Algorithms
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to='/algorithms/sort'>Sorting</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to='/algorithms/binary-search'>Binary Search</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div style={{ margin: '10px' }}>
        <Link to='/redux-experiments'>
          <Button variant='primary'>Redux experiments</Button>
        </Link>
      </div>
      <div style={{ margin: '10px' }}>
        <Link to='/colonialists'>
          <Button variant='primary'>Colonialists</Button>
        </Link>
      </div>
      <div style={{ margin: '10px' }}>
        <Link to='/filter-experiments'>
          <Button variant='primary'>Filter experiments</Button>
        </Link>
      </div>
      <div style={{ margin: '10px' }}>
        <GeometricFormulas radius={5} a={10} b={6} h={5} />
      </div>
      <div style={{ margin: '10px' }}>
        <Tile title='Color change Tile' width={800} height={600} />
      </div>
    </div>
  );
};
