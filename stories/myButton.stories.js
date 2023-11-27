import {html} from 'lit-html';

export default {
  title: 'My Button',
  component: 'c-my-button'
};

export const Overview = () => html`
  <c-my-button></c-my-button>
`;

export const InnerText = () => html`
  <c-my-button><span>テキスト指定</span></c-my-button>
`;

export const TypeSubmit = () => html`
  <c-my-button type="submit"><span>Submit</span></c-my-button>
`;