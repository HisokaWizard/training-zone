import universe from '../assets/universe.jpg';
import universe2 from '../assets/universe2.jpg';
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/block';

const imageGlobalStyles = {
  width: '330px',
  border: '2px solid blue',
  'border-radius': '5px',
  margin: '0.5rem',
};

const imageStyles = {
  width: '300px',
  padding: '1rem',
};

export const model = [
  new TitleBlock('Hello world from JS', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
    }
  }),
  new TextBlock('Some text to the browser UI', {
    styles: {
      'font-style': 'initial',
      padding: '1.5rem',
      'font-size': '1rem',
    }
  }),
  new ColumnsBlock(['text 1', 'text 2', 'text 3', 'text 4'], {
    styles: {
      padding: '1rem',
      border: '2px solid blueviolet',
      'border-radius': '5px',
      margin: '0.5rem',
    }
  }),
  new ImageBlock(universe, {
    imageStyles: imageStyles, styles: imageGlobalStyles,
  }),
  new ImageBlock(universe2, {
    imageStyles: imageStyles, styles: imageGlobalStyles,
  }),
];