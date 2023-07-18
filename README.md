# Matterport SDK Next.js Starter

This is an attempt to create a Next.js starter that shows how to integrate both the [https://www.npmjs.com/package/@matterport/webcomponent](Matterport WebComponent) and [https://www.npmjs.com/package/@matterport/sdk](@matterport/sdk).

If you test this within Stackblitz, you will get an `<iframe>` error due to CORS for the NPM Package.

The WebComponent is loaded dynamically as our NPM Package is not compatible with server side rendering.

Try it on Stackblitz.com: [https://stackblitz.com/edit/mpsdk-next-starter](https://stackblitz.com/edit/mpsdk-next-starter) -- you'll need to install the webcomponent every time because Stackblitz is being annoying -- just terminate node, then npm install @matterport/webcomponent, then run `npm run dev`

You may need to:

`yarn add @matterport/webcomponent yarn matterport-assets public/assets`
