import { LightningElement } from "lwc";

export default class MyButtonSlot extends LightningElement {
  handleMyClick(e) {
    console.debug('handleMyClick from MyButtonSlot',e)
  }
}