import { useEffect, useRef, useState } from "react";
const appKey = "3nhn5rm8hmr1x74hsr46t7fud";
import { MpSdk } from "@matterport/sdk";

export function Showcase() {
  const [sdk, setSdk] = useState(null);
  const container = useRef<HTMLDivElement>(null);
  let started = false;
  useEffect(() => {
    async function loadSDK() {
      // This gets past ReferenceError: self is not defined
      const { setupSdk } = await import("@matterport/sdk");
      if (!started && container.current) {
        started = true;
        const mpSdk = await setupSdk(appKey, {
          space: "rjASUFc5Mxn",
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
