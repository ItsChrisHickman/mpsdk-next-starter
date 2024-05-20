import {RefObject, useEffect, useRef, useState} from 'react';
import {setIframeQueryParams} from '@/lib/Util';

// 'NEXT_PUBLIC_APP_KEY' can be used here as it's prefixed by 'NEXT_PUBLIC_'.
// It will be transformed at build time to `'abcdefghij0123456789abcde'`.
const appKey = process.env.NEXT_PUBLIC_APP_KEY;

/**
 * Showcase wrapper for @matterport/sdk (IFrame HTML element).
 *
 * @param {any} param
 * @param {SdkConfig} param.config Sdk Config
 * @param {any} param.setMpSdk Pased setMpSdk useStat setter function.
 * @returns {JSX.Element} Component
 * @component
 */
export const Showcase = ({config, setMpSdk}: SdkParams) => {
  const [sdk, setSdk] = useState<any>();
  const [started, setStarted] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const containerClassName = config.containerClassName;
  const componentClassName = config.componentClassName;

  useEffect(() => {
    const loadSDK = async () => {
      // Dynamically import to Avoid SSR / ReferenceError: self is not defined
      const {setupSdk} = await import('@matterport/sdk');

      if (!started) {
        setStarted(true);
        await LoadSdkIFrame(setupSdk, container);
      }
    };

    loadSDK();
  });

  const LoadSdkIFrame = async (setupSdk: any, container: RefObject<HTMLDivElement>) => {
    console.debug('Loading Showcase SDK ...');

    const currentContainer = container.current;
    const mpSdk: any = await setupSdk(appKey, {
      space: config.modelId,
      container: currentContainer,
      iframeQueryParams: setIframeQueryParams(config),
    });

    setSdk(mpSdk);
    console.debug('Showcase SDK started.');
    await startApp(mpSdk);
  };

  return (
    // Main Container
    <div className={containerClassName}>
      {/* Component Container */}
      <div className={componentClassName} ref={container}></div>
    </div>
  );
};

const startApp = async (mpSdk: any) => {
  console.debug('SDK NPM Package Loaded', mpSdk);
};
