import Component from '@glimmer/component';
import { assert } from '@ember/debug';

export default class extends Component {
  constructor(owner, args) {
    super(owner, args);

    this.element = document.querySelector(`#${args.id}`);

    assert(`element not found for id: ${args.id}`, this.element);
  }
}
