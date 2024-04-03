import {useEffect, useRef, useState} from 'react';
import {MpSdk} from '@matterport/sdk';

// 'NEXT_PUBLIC_APP_KEY' can be used here as it's prefixed by 'NEXT_PUBLIC_'.
// It will be transformed at build time to `'abcdefghij0123456789abcde'`.
const appKey = process.env.NEXT_PUBLIC_APP_KEY;

export const Showcase = ({modelId, containerClassName, className}) => {
  const [sdk, setSdk] = useState(null);
  const [started, setStarted] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadSDK = async () => {
      // Dynamically import to Avoid SSR / ReferenceError: self is not defined
      const {setupSdk} = await import('@matterport/sdk');
      const currentContainer = container.current;
      const hasChildNodes = currentContainer.hasChildNodes();
      const frames = document.getElementsByTagName('iframe');

      //TODO: hasChildNodes() does not return IFrame children. frames.length is allways 0
      if (frames != null) {
        const length = frames.length;
        console.debug('frames length: ', length);
        console.debug('frames: ', frames);
      }

      console.debug('started: ', started);
      console.debug('currentContainer: ', currentContainer);
      console.debug('hasChildNodes: ', hasChildNodes);

      if (!started && currentContainer) {
        setStarted(true);

        if (!hasChildNodes) {
          await LoadSdkIFrame(setupSdk, currentContainer, modelId);
        }
      }
    };

    loadSDK();
  }, [modelId, sdk, started]);

  const LoadSdkIFrame = async (setupSdk: any, currentContainer: HTMLDivElement, modelId: string) => {
    console.debug('Loading SDK...');

    const hasChildNodes = currentContainer.hasChildNodes();
    const frames = document.getElementsByTagName('iframe');

    console.debug('LoadSdkIFrame - hasChildNodes: ', hasChildNodes);

    if (frames != null) {
      const length = frames.length;
      console.debug('LoadSdkIFrame - frames length: ', length);
    }

    const mpSdk: MpSdk = await setupSdk(appKey, {
      space: modelId,
      container: currentContainer,
      iframeQueryParams: {
        qs: '1',
      },
    });

    setSdk(mpSdk);
    console.debug('SDK started.');
    await startApp(mpSdk);
  };

  return (
    <div className={containerClassName}>
      <div className={className} ref={container}></div>
    </div>
  );
};

const startApp = async (mpSdk: MpSdk) => {
  console.debug('SDK NPM Package Loaded', mpSdk);
};
