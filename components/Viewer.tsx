'use client';
import { Fragment } from 'react';
import dynamic from 'next/dynamic';

// Use dynamic to disable SSR, Matterport SDK requires global `window`.
export const Viewer = dynamic(
  async () => {
    const { Viewer: Component } = await import('./ViewerMatterport');
    return Component;
  },
  {
    ssr: false,
    loading: ({ error }) => {
      if (error) {
        console.log('Failed to load Viewer', error);
      }
      return error ? <p>{error.message}</p> : <Fragment />;
    },
  }
);
