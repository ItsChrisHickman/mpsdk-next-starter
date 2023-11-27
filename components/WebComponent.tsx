import { useEffect, useRef, useState } from "react";
import "../styles/WebComponent.module.css";
import { MpSdk } from "@matterport/webcomponent";

const appKey = "3nhn5rm8hmr1x74hsr46t7fud";

export function WebComponent() {
  const [sdk, setSdk] = useState(null);
  const [started, setStarted] = useState(false);

  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    async function loadSdk() {
      // Dynamically import to Avoid SSR / ReferenceError: self is not defined
      const { MpSdk } = await import("@matterport/webcomponent");
      if (!started && container.current) {
        console.log("Loading SDK...");
        setStarted(true);
        const newWebComponent = document.createElement("matterport-viewer");
        newWebComponent.setAttribute("m", "JGPnGQ6hosj");
        newWebComponent.setAttribute("application-key", appKey);
        newWebComponent.setAttribute("qs", "1");
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
