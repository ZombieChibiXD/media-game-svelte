import type { Preview } from '@storybook/sveltekit'
// @ts-ignore
import '../src/app.css'
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;