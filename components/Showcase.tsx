import { useEffect, useRef, useState } from 'react';

export function Showcase() {
  const [sdk, setSdk] = useState(null);
  const container = useRef<HTMLDivElement>(null);
  let started = false;
  useEffect(async () => {
    // This gets past ReferenceError: self is not defined
    const { MpSdk, setupSdk } = await import('@matterport/sdk');
    if (!started && container.current) {
      started = true;
      setupSdk('yxszifc05b1bidcsqfr60806d', {
        container: container.current,
        space: 'j4RZx7ZGM6T',
        iframeQueryParams: { qs: 1 },
      }).then(setSdk);
    }
  }, []);

  return (
    <div className="showcase">
      <div className="container" id="showcase" ref={container}></div>
    </div>
  );
}
