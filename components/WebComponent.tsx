import { useEffect, useRef, useState } from 'react';

export function WebComponent() {
  const [sdk, setSdk] = useState(null);
  const container = useRef<HTMLDivElement>(null);
  let started = false;
  useEffect(async () => {
    console.log('Hello world');
    if (!started && container.current) {
      started = true;
      // This gets past ReferenceError: self is not defined
      const { MpSdk, setupSdk } = await import('@matterport/webcomponent');
      const newWebComponent = document.createElement('matterport-viewer');
      newWebComponent.setAttribute('m', 'SxQL3iGyoDo');
      newWebComponent.setAttribute(
        'application-key',
        'yxszifc05b1bidcsqfr60806d'
      );
      //newWebComponent.setAttribute('asset-base', '../assets/');
      container.current.appendChild(newWebComponent);
    }
  }, []);

  return (
    <div className="webcomponent">
      <div className="container" id="showcase" ref={container}></div>
    </div>
  );
}
