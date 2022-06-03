import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react';

// 1. ConvertValueToExcelNumberFormat (120 / 123.54 / 0 / null / undefined) => num,num (155,30)
export const convertValueToExcelNumberFormat = (value: number): string => {
  if (!value) return '0,00';
  const dotPosition = value.toString().search(/[.]/g);
  if (dotPosition !== -1) {
    return value
      .toString()
      .replace('.', ',')
      .substring(0, dotPosition + 3);
  }
  return value + ',00';
};

// 2. Form a component with some other component -> struct and complete root component
// Tile with header, action for edit, left panel with params, right panel with canvas
// Logic Tile passive, to make it active need to push on the edit action and action stay cancel edit
// in left panel we have three input number - 0-255 for change color in the canvas background real time
interface TileProps {
  title: string;
  height: number;
  width: number;
}

export const Tile = ({ title, height, width }: TileProps) => {
  const [edit, setEdit] = useState(false);
  const [color, setColor] = useState('');

  const toggle = useCallback(() => {
    setEdit(!edit);
  }, [edit]);

  const onColorHandler = useCallback((colorTemplate: string) => {
    setColor(colorTemplate);
  }, []);

  return (
    <div style={{ height, width, border: '1px solid blue' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <h2>{title}</h2>
        <button onClick={toggle}>{!edit ? 'Edit' : 'Cancel edit'}</button>
      </div>
      {edit && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <LeftPanel onColorHandler={onColorHandler} />
          <RightPanel color={color} />
        </div>
      )}
    </div>
  );
};

interface LeftPanelProps {
  onColorHandler: (color: string) => void;
}

const LeftPanel = ({ onColorHandler }: LeftPanelProps) => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const template = (red: number, green: number, blue: number) => `rgb(${red}, ${green}, ${blue})`;

  const onRedChange = useCallback(
    (event) => {
      const color = event?.target?.value as number;
      setRed(color);
      onColorHandler(template(color, green, blue));
    },
    [green, blue]
  );

  const onGreenChange = useCallback(
    (event) => {
      const color = event?.target?.value;
      setGreen(color);
      onColorHandler(template(red, color, blue));
    },
    [red, blue]
  );

  const onBlueChange = useCallback(
    (event) => {
      const color = event?.target?.value;
      setBlue(color);
      onColorHandler(template(red, green, color));
    },
    [red, green]
  );

  return (
    <div>
      <div>
        <input type={'number'} value={red} min={0} max={255} onChange={onRedChange} />
      </div>
      <div>
        <input type={'number'} value={green} min={0} max={255} onChange={onGreenChange} />
      </div>
      <div>
        <input type={'number'} value={blue} min={0} max={255} onChange={onBlueChange} />
      </div>
    </div>
  );
};

interface RightPanelProps {
  color: string;
}

export const RightPanel = ({ color }: RightPanelProps) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = color;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, [color]);

  return <canvas ref={canvasRef} id='canvas' width={300} height={200} />;
};

// 3. Hook which has param value and must filter external array if param change
type DependType = {
  code: string;
  value: string;
  dependValue: string;
};

export const useFilterDependencyArray = (value: string, key: keyof DependType) => {
  const array: DependType[] = [
    { code: '1', value: '1', dependValue: '11' },
    { code: '2', value: '2', dependValue: '22' },
    { code: '3', value: '3', dependValue: '33' },
    { code: '3.5', value: '3.5', dependValue: '33' },
    { code: '3.99', value: '3.99', dependValue: '33' },
  ];

  return array.filter((it) => it?.[key] === value);
};

useFilterDependencyArray('33', 'dependValue');

// 4. Function-service to convert one cureency to other and return correct value in necessary currency
// input: {value: number, currentCurrency: Iso, necessaryCurrency: Iso}
// output: {value: number}
type ISO = 'RUB' | 'USD' | 'EUR' | 'BTC';
const serverConverterURLconstructor = (value: number, currentCur: ISO, necessaryCur: ISO) =>
  `https://currency-converter.com/?value=${value}&current=${currentCur}&necessary=${necessaryCur}`;

export const currencyConverter = async (value: number, currentCur: ISO, necessaryCur: ISO) => {
  if (!value || !currentCur || !necessaryCur) return new Error('Need all params');
  try {
    const result = await fetch(serverConverterURLconstructor(value, currentCur, necessaryCur));
    const necessaryValue = await result.json();
    return necessaryValue as number;
  } catch (error) {
    return error as Error;
  }
};

// 5. Componet which render some data with correct and optimal rendering
// Every prop has special handler before render
// площадь круга / длина окружности / площадь трапеции
// radius => радиус
// a => основание
// b => шапка
// h => высота

interface Props {
  radius: number;
  a: number;
  b: number;
  h: number;
}

export const GeometricFormulas = ({ radius, a, b, h }: Props) => {
  const circleSquare = useMemo(() => Math.PI * Math.pow(radius, 2), [radius]);

  const curcumference = useMemo(() => 2 * Math.PI * radius, [radius]);

  const trapezoidSquare = useMemo(() => ((a + b) / 2) * h, [a, b, h]);

  return (
    <div>
      <div>1. Circle square: {circleSquare}</div>
      <div>2. Curcumference: {curcumference}</div>
      <div>3. Trapezoid square: {trapezoidSquare}</div>
    </div>
  );
};
