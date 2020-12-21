import {col, row, css} from '../utils';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHtml () {
    throw new Error('Method toHtml must be implemented!');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const {tag = 'h1', styles} = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const {styles} = this.options;
    return row(col(`<p>${this.value}</p>`), css(styles));
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const {styles} = this.options;
    const html = this.value.map(column => col(column))
    return row(html.join(''), css(styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const {styles, imageStyles} = this.options;
    return row(col(`<img src='${this.value}' style='${css(imageStyles)}'/>`), css(styles));
  }
}