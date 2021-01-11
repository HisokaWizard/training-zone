import {formBlock} from '../utils';
import { TextBlock, TitleBlock } from './block';

export class SideBar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.add.bind(this))
  }

  get template() {
    return [
      formBlock('title'),
      formBlock('text')
    ].join('');
  }

  add(event) {
    event.preventDefault();
    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;
    
    const newBlock = type === 'title'
      ? new TitleBlock(value, {styles: styles})
      : new TextBlock(value, {styles: styles});
    
    this.update(newBlock);

    event.target.value.value = '';
    event.target.styles.value = '';
  }
}