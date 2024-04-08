'use client';

import {useState, useEffect, Dispatch} from 'react';
import {Showcase} from '@/components/Showcase';
import {MpSdk} from '@matterport/webcomponent';
import {WebComponent} from '@/components/WebComponent';
import {Brand, Dollhouse, Help, OpenBehavior, Play, Quickstart, Tour, GuidedTour, HighlightReel, MlsBehavior, Mattertags, TagNavigation, Pin, Portal, SwitchFloors, FloorPlanView, Language, Zoom, Search, Wheel, GuidedTourPan, LoopBack, Title, GuidedTourCallToAction, HighlightReelBehavior, VirtualReality} from '@/types/enums';

//TODO: Add getStaticProps() - https://blog.logrocket.com/using-next-js-with-typescript/
const Home = () => {
  const [sdk, setSdk] = useState<MpSdk>(null);
  const configSdk: SdkConfig = {
    modelId: process.env.NEXT_PUBLIC_MODEL_ID,
    assetBase: '/assets',
    containerClassName: 'showcase flex h-screen p-2 bg-teal-500',
    componentClassName: 'relative flex-1',
    help: Help.Hide,
    openBehavior: OpenBehavior.SameBrowserTab,
    quickstart: Quickstart.Enable,
    play: Play.Manual,
    brand: Brand.Hide,
    dollhouse: Dollhouse.Show,
    tour: Tour.Model,
    guidedTour: GuidedTour.Show,
    highlightReel: HighlightReel.Show,
    mlsBehavior: MlsBehavior.Branding,
    mattertags: Mattertags.Show,
    tagNavigation: TagNavigation.Show,
    pin: Pin.Show,
    portal: Portal.Show,
    switchFloors: SwitchFloors.Enable,
    floorPlanView: FloorPlanView.Enable,
    language: Language.Default,
    zoom: Zoom.Enable,
    search: Search.Enable,
    wheel: Wheel.Enable,
    guidedTourPan: GuidedTourPan.Disable,
    loopBack: LoopBack.Disable,
    title: Title.Enable,
    guidedTourCallToAction: GuidedTourCallToAction.Large,
    timeBeforeGuidedTour: null,
    highlightReelBehavior: HighlightReelBehavior.Expended,
    virtualReality: VirtualReality.Hide,
  };

  const config: WebComponentConfig = {
    modelId: process.env.NEXT_PUBLIC_MODEL_ID,
    assetBase: '/assets',
    containerClassName: 'showcase flex h-screen p-2 bg-teal-500',
    componentClassName: 'relative flex-1',
    help: Help.Hide,
    openBehavior: OpenBehavior.SameBrowserTab,
    quickstart: Quickstart.Enable,
    brand: Brand.Hide,
    dollhouse: Dollhouse.Show,
    tour: Tour.Model,
    guidedTour: GuidedTour.Show,
    highlightReel: HighlightReel.Show,
    mlsBehavior: MlsBehavior.Branding,
    mattertags: Mattertags.Show,
    tagNavigation: TagNavigation.Show,
    pin: Pin.Show,
    portal: Portal.Show,
    switchFloors: SwitchFloors.Enable,
    floorPlanView: FloorPlanView.Enable,
    language: Language.Default,
    zoom: Zoom.Enable,
    search: Search.Enable,
    guidedTourPan: GuidedTourPan.Disable,
    loopBack: LoopBack.Disable,
    title: Title.Enable,
    guidedTourCallToAction: GuidedTourCallToAction.Large,
    timeBeforeGuidedTour: null,
    highlightReelBehavior: HighlightReelBehavior.Expended,
    virtualReality: VirtualReality.Hide,
  };

  useEffect(() => {
    const init = async () => {
      if (sdk != null) {
        console.debug('Home: sdk', sdk);
      }
    };

    init();
  });

  return (
    <div className="flex flex-col h-screen p-2 bg-gray-200">
      {/* TODO: Avoid 2 instances loading */}
      {/* <h2>Showcase SDK</h2>
      <Showcase config={configSdk} setMpSdk={setSdk} /> */}

      <h2>Web Component</h2>
      <WebComponent config={config} setMpSdk={setSdk} />
    </div>
  );
};

export default Home;
