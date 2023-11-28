import { LightningElement, api } from 'lwc'

export default class HelloWorld extends LightningElement {
  @api
  name = 'User';
}

//customElements.define('hello-world', HelloWorld.CustomElementConstructor);