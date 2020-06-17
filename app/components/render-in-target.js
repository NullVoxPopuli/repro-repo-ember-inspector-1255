import Component from '@glimmer/component';

export default class extends Component {
  constructor(owner, args) {
    super(owner, args);

    this.element = document.querySelector('#target');
  }
}
