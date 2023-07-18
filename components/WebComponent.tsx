import { useEffect, useRef, useState } from 'react';

export function WebComponent() {
  const [sdk, setSdk] = useState(null);
  const container = useRef<HTMLDivElement>(null);
  let started = false;
  useEffect(() => {
    async function loadSdk() {
      if (!started && container.current) {
        started = true;
        // This gets past ReferenceError: self is not defined
        const { MpSdk, setupSdk } = await import('@matterport/webcomponent');
        const newWebComponent = document.createElement('matterport-viewer');
        newWebComponent.setAttribute('m', 'SxQL3iGyoDo');
        newWebComponent.setAttribute(
          'application-key',
          '3nhn5rm8hmr1x74hsr46t7fud'
        );
        newWebComponent.setAttribute('asset-base', 'assets');
        container.current.appendChild(newWebComponent);
      }
    }
    loadSdk();
  }, [sdk]);

  return (
    <div className="webcomponent">
      <div className="container" ref={container}></div>
    </div>
  );
}
