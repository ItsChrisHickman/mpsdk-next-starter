import { useEffect, useRef, useState } from "react";
const appKey = "3nhn5rm8hmr1x74hsr46t7fud";
import { MpSdk } from "@matterport/sdk";

export function Showcase() {
  const [sdk, setSdk] = useState(null);
  const [started, setStarted] = useState(false);

  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    async function loadSDK() {
      // Dynamically import to Avoid SSR / ReferenceError: self is not defined
      const { setupSdk } = await import("@matterport/sdk");
      if (!started && container.current) {
        setStarted(true);
        const mpSdk = await setupSdk(appKey, {
          space: "JGPnGQ6hosj",
          container: container.current,
          iframeQueryParams: {
            qs: "1",
          },
        });
        startApp(mpSdk);
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

async function startApp(mpSdk: MpSdk) {
  console.log("SDK NPM Package Loaded", mpSdk);
}
