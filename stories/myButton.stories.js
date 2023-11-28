import {html} from 'lit-html';
import { action } from '@storybook/addon-actions';

export default {
  title: 'My Button',
  component: 'c-my-button'
};

export const Overview = () => html`
  <c-my-button></c-my-button>
`;

export const SlotContent = () => html`
  <c-my-button><span>slot content</span></c-my-button>
`;

export const InnerText = () => html`
  <wc-my-button-slot></wc-my-button-slot>
`;

InnerText.args = {
  slotContent: 'slot content'
}

export const TypeSubmit = () => html`
  <c-my-button type="submit"><span>Submit</span></c-my-button>
`;

export const OnmyclickEvent = (args) => html`
  <c-my-button @myclick="${args.handleMyClick}"><span>myclick</span></c-my-button>
`;

OnmyclickEvent.args = {
  handleMyClick: action('myclick event')
}