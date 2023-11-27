import { type Preview, setCustomElements, type Parameters} from "@storybook/web-components";
import '@lwc/synthetic-shadow';

import './build/main-storybook'

import customElements from './build/custom-elements.json';

setCustomElements(customElements)

export const parameters: Parameters = {
  docs: {
    iframeHeight: '200px',
  },
  options: {
    storySort: (a, b) => {
      const sa = a[1].kind+"/"+a[1].name
      const sb = b[1].kind+"/"+b[1].name
      //console.log("Stories: "+sa+", "+sb)
      return sa.localeCompare(sb);
    },
  },
};

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
