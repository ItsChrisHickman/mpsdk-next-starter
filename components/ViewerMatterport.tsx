import { MatterportViewer, MpSdk } from '@matterport/webcomponent';
import { useState } from 'react';

export function Viewer() {
  const [sdk, setSdk] = useState<MpSdk>();

  return (
    <>
      <div style="position: relative">
        <matterport-viewer
          m="j4RZx7ZGM6T"
          asset-base="../assets/"
          application-key="yxszifc05b1bidcsqfr60806d"
          onReady={(mpSdk: MpSdk) => setSdk(mpSdk)}
        />
      </div>
    </>
  );
}
