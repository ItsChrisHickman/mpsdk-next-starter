import {RefObject, useEffect, useRef, useState} from 'react';
import {setComponentAttributes} from '@/lib/Util';

/**
 * WebComponent wrapper for @matterport/webcomponent (matterport-viewer HTML element) web component.
 *
 * @param {any} param
 * @param {WebComponentConfig} param.config WebComponent Config
 * @param {any} param.setMpSdk Pased setMpSdk useStat setter function.
 * @returns {JSX.Element} Component
 * @component
 */
export const WebComponent = ({config, setMpSdk}: WebComponentParams) => {
  const [started, setStarted] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const containerClassName = config.containerClassName;
  const componentClassName = config.componentClassName;

  useEffect(() => {
    const loadSdk = async () => {
      // Dynamically import to Avoid SSR / ReferenceError: self is not defined
      const {MpSdk} = await import('@matterport/webcomponent');

      if (!started) {
        setStarted(true);
        LoadWebComponent(container);
      }
    };

    loadSdk();
  });

  const LoadWebComponent = (container: RefObject<HTMLDivElement>) => {
    console.debug('Loading Web Component ...');
    const currentContainer = container?.current;
    if (currentContainer == null) {
      return;
    }

    const newWebComponent = document.createElement('matterport-viewer');
    if (newWebComponent == null) {
      return;
    }
    setComponentAttributes(newWebComponent, config);

    currentContainer.appendChild(newWebComponent);
    newWebComponent?.addEventListener('mpSdkPlaying', async (evt: any) => {
      const mpSdk = evt.detail.mpSdk;

      setMpSdk(mpSdk);
      console.debug('Web Component started.');
      await onSdkPlaying(mpSdk);
    });
  };

  return (
    // Main Container
    <div className={containerClassName}>
      {/* Component Container */}
      <div className={componentClassName} ref={container}></div>
    </div>
  );
};

const onSdkPlaying = async (mpSdk: any) => {
  console.debug('WebComponent Connected to the SDK', mpSdk);
};
