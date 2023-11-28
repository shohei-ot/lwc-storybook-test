import { LightningElement, api } from "lwc";

/**
 * @slot - this component supports an unnamed slot
 */
export default class MyButton extends LightningElement {

  /**
   * @typedef {('button'|'submit'|'reset')} ButtonTypes
   */

  /**
   * @type {ButtonTypes}
   */
  @api
  type = 'button';

  handleClick(e) {
    e.preventDefault();
    const event = new CustomEvent('myclick');
    this.dispatchEvent(event);
  }
}

//customElements.define('c-my-button', MyButton.CustomElementConstructor);
