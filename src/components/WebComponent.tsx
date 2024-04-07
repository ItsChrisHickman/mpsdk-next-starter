import {useEffect, useRef, useState} from 'react';
import {MpSdk} from '@matterport/webcomponent';

// 'NEXT_PUBLIC_APP_KEY' can be used here as it's prefixed by 'NEXT_PUBLIC_'.
// It will be transformed at build time to `'abcdefghij0123456789abcde'`.
const appKey = process.env.NEXT_PUBLIC_APP_KEY;

export const WebComponent = ({modelId, containerClassName, className, setMpSdk}: IWebComponentParams) => {
  const [sdk, setSdk] = useState<MpSdk>(null);
  const [started, setStarted] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadSdk = async () => {
      // Dynamically import to Avoid SSR / ReferenceError: self is not defined
      const {MpSdk} = await import('@matterport/webcomponent');
      const currentContainer = container.current;
      const hasChildNodes = currentContainer.hasChildNodes();

      if (!started && currentContainer) {
        setStarted(true);

        if (!hasChildNodes) {
          LoadWebComponent(currentContainer, modelId);
        }
      }
    };

    loadSdk();
  });

  const LoadWebComponent = (currentContainer: HTMLDivElement, modelId: string): MpSdk => {
    console.debug('Loading SDK...');

    const newWebComponent = document.createElement('matterport-viewer');

    // URL Parameters - https://support.matterport.com/s/article/URL-Parameters?language=en_US
    newWebComponent.setAttribute('m', modelId);
    newWebComponent.setAttribute('application-key', appKey);
    newWebComponent.setAttribute('qs', '1');
    newWebComponent.setAttribute('asset-base', '/assets');

    currentContainer.appendChild(newWebComponent);

    newWebComponent?.addEventListener('mpSdkPlaying', async (evt: any) => {
      const mpSdk = evt.detail.mpSdk;

      setSdk(mpSdk);
      setMpSdk(mpSdk);
      console.debug('SDK is playing.');
      await onSdkPlaying(mpSdk);
    });
  };

  return (
    <div className={containerClassName}>
      <div className={className} ref={container}></div>
    </div>
  );
};

const onSdkPlaying = async (mpSdk: MpSdk) => {
  console.debug('WebComponent Connected to the SDK', mpSdk);
};
