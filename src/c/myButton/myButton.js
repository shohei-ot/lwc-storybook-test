import { LightningElement, api } from "lwc";

export default class MyButton extends LightningElement {

  /**
   * @typedef {('button'|'submit'|'reset')} ButtonTypes
   */

  /**
   * @type {ButtonTypes}
   */
  @api
  type = 'button';
}