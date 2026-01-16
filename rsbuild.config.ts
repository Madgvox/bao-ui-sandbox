import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './index.html',
  },
  tools: {
    rspack: {
      // externals: {
      //   react: 'react',
      //   'react-dom': 'react-dom',
      //   'react-dom/client': 'react-dom/client',
      // },
    }
  }
});
