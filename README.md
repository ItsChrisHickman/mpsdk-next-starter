# Matterport SDK Next.js Starter

This is an attempt to create a Next.js starter that shows how to integrate both the [Matterport WebComponent](https://www.npmjs.com/package/@matterport/webcomponent) and [@matterport/sdk](https://www.npmjs.com/package/@matterport/sdk).

If you test this within Stackblitz, you will get an `<iframe>` error due to CORS for the NPM Package.  Please click 'open in new tab' to see the SDK for Embeds NPM Package in the demo.

The WebComponent is loaded dynamically as our NPM Package is not compatible with server side rendering.

Try it on Stackblitz.com: [https://stackblitz.com/edit/mpsdk-next-starter](https://stackblitz.com/edit/mpsdk-next-starter) -- you'll need to click 'Open in New Tab' on the preview to see the @matterport/sdk preview as StackBlitz.com has CORS restrictions that prevent the IFRAME from rendering.
