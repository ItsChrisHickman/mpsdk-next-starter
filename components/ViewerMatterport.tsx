import { MatterportViewer, MpSdk } from '@matterport/webcomponent';
import { useState } from 'react';

export function Viewer() {
  const [sdk, setSdk] = useState<MpSdk>();

  return (
    <>
      <MatterportViewer
        m="j4RZx7ZGM6T"
        assetBase="/assets/"
        applicationKey="yxszifc05b1bidcsqfr60806d"
        onReady={(mpSdk: MpSdk) => setSdk(mpSdk)}
      />
    </>
  );
}
