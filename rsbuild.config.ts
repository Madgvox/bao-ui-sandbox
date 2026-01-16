import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact(), pluginSvgr()],
  html: {
    template: './index.html',
  },
  resolve: {
    alias: {
      '@': './src',
      '@public': './public',
    },
  }
});
