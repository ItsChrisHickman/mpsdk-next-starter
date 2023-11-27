import { useEffect, useRef, useState } from "react";
import { MpSdk } from "@matterport/webcomponent";
const appKey = "3nhn5rm8hmr1x74hsr46t7fud";

export function WebComponent() {
  const [sdk, setSdk] = useState(null);
  const container = useRef<HTMLDivElement>(null);
  let started = false;
  useEffect(() => {
    async function loadSdk() {
      if (!started && container.current) {
        console.log("Loading SDK...");
        started = true;
        // This gets past ReferenceError: self is not defined
        const newWebComponent = document.createElement("matterport-viewer");
        newWebComponent.setAttribute("m", "SxQL3iGyoDo");
        newWebComponent.setAttribute("application-key", appKey);
        newWebComponent.setAttribute("asset-base", "/assets");
        container.current.appendChild(newWebComponent);

        newWebComponent?.addEventListener("mpSdkPlaying", (evt: any) => {
          console.log("SDK is playing");
          const mpSdk = evt.detail.mpSdk;
          onSdkPlaying(mpSdk);
        });
      }
    }
    loadSdk();
  }, []);

  return (
    <div className="webcomponent">
      <div className="container" ref={container}></div>
    </div>
  );
}

async function onSdkPlaying(mpSdk: MpSdk) {
  console.log("WebComponent Connected to the SDK", mpSdk);
}
