import { Site } from './site';
import { SideBar } from './sidebar';

export class App {
  constructor(model) {
    this.model = model;
  }

  init() {
    const site = new Site('#site');
    site.render(this.model);

    const updateContent = block => {
      this.model.push(block);
      site.render(this.model);
    }

    new SideBar('#panel', updateContent);
  }
}