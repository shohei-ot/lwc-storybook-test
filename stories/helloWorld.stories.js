import { html } from 'lit-html';

const meta = {
  title: 'Hello World',
  component: 'c-hello-world'
}

export default meta;

export const Overview = () => html`<c-hello-world></c-hello-world>`;

export const You = () => html`<c-hello-world name="You"></c-hello-world>`;