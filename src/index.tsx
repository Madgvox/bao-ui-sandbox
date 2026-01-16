import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './routes/Root';
import Plugin from './routes/Plugin';

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: Root,
      },
      {
        path: "/plugin/*",
        Component: Plugin,
      }
    ]
  },
], {
  basename: '/bao-plugin-test'
});

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
