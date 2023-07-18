import { useEffect, useRef, useState } from 'react';

export function Showcase() {
  const [sdk, setSdk] = useState(null);
  const container = useRef<HTMLDivElement>(null);
  let started = false;
  useEffect(() => {
    async function loadSDK() {
      // This gets past ReferenceError: self is not defined
      const { MpSdk, setupSdk } = await import('@matterport/sdk');
      if (!started && container.current) {
        started = true;
        setupSdk('3nhn5rm8hmr1x74hsr46t7fud', {
          container: container.current,
          space: 'j4RZx7ZGM6T',
          iframeQueryParams: { qs: 1 },
        }).then(setSdk);
      }
    }
    loadSDK();
  }, []);

  return (
    <div className="showcase">
      <div className="container" ref={container}></div>
    </div>
  );
}
