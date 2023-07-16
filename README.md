# Matterport SDK Next.js Starter

This is an attempt to create a Next.js starter that shows how to integrate both the [https://www.npmjs.com/package/@matterport/webcomponent](Matterport WebComponent) and [https://www.npmjs.com/package/@matterport/sdk](@matterport/sdk).

I'm getting the `<iframe>` blocked due to CORS errors within Next when testing in Stackblitz.com, and the WebComponent doesn't seem to want to load properly.

Both NPM packages, when imported - e.g. - `import '@matterport/webcomponent'` cause the following Next.js specific error to occur:

`ReferenceError: self is not defined`

The way to get around this is to load it via an EffectHook, however, this does not work with the WebComponent (and we're still blocked when it comes to the iframe).

Try it on Stackblitz.com: [https://stackblitz.com/edit/mpsdk-next-starter](https://stackblitz.com/edit/mpsdk-next-starter)
