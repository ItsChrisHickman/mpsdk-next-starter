// types/global.d.ts

type Nullable<T> = T | null;

interface IInitParams {
  modelId: string;
  appKey: string;
}

interface WebComponentParams {
  config: WebComponentConfig;
  setMpSdk: Dispatch<any>;
}

interface SdkParams {
  config: SdkConfig;
  setMpSdk: Dispatch<any>;
}

/**
 * WebComponentConfig - Parameters - https://support.matterport.com/s/article/URL-Parameters
 *
 * @interface
 * @public
 */
interface WebComponentConfig {
  /** Model Id */
  modelId: string;

  /** Asset Base e.g. '/assets' */
  assetBase: string;

  /** Container class name */
  containerClassName: string;

  /** Component class name */
  componentClassName: string;

  // Launching 3D Showcase
  /** Launching 3D Showcase: help */
  help?: Help;

  /** Launching 3D Showcase: nt. Only for mobile */
  openBehavior?: OpenBehavior;

  /** Launching 3D Showcase: qs */
  quickstart?: Quickstart;

  // Visibility
  /** Visibility: brand */
  brand?: Brand;

  /** Visibility: dh */
  dollhouse?: Dollhouse;

  /** Visibility: tour */
  tour?: Tour;

  /** Visibility: gt */
  guidedTour?: GuidedTour;

  /** Visibility: hr */
  highlightReel?: HighlightReel;

  /** Visibility: mls */
  mlsBehavior?: MlsBehavior;

  /** Visibility: mt */
  mattertags?: Mattertags;

  /** Visibility: tagNavigation */
  tagNavigation?: TagNavigation;

  /** Visibility: pin */
  pin?: Pin;

  /** Visibility: portal */
  portal?: Portal;

  // User Interface
  /** User Interface: f */
  switchFloors?: SwitchFloors;

  /** User Interface: fp */
  floorPlanView?: FloorPlanView;

  /** User Interface: lang */
  language?: Language;

  /** User Interface: nozoom */
  zoom?: Zoom;

  /** User Interface: search */
  search?: Search;

  // Guided Tours
  /** Guided Tours: kb */
  guidedTourPan?: GuidedTourPan;

  /** Guided Tours: lp */
  loopBack?: LoopBack;

  /** Guided Tours: title */
  title?: Title;

  /** Guided Tours: tourcta */
  guidedTourCallToAction?: GuidedTourCallToAction;

  /** Guided Tours: ts. Set this parameter to start the tour automatically and define the number of seconds after initial fly-in before the Guided Tour automatically starts. Help is not shown. Set to a negative number to not start the Guided Tour. */
  timeBeforeGuidedTour?: number;

  /** Guided Tours: hl */
  highlightReelBehavior?: HighlightReelBehavior;

  // Virtual Reality
  /** Virtual Reality: vr */
  virtualReality?: VirtualReality;
}

/**
 * SdkConfig - Parameters - https://support.matterport.com/s/article/URL-Parameters
 *
 * @extends WebComponentConfig
 * @interface
 * @public
 */
interface SdkConfig extends WebComponentConfig {
  // Launching 3D Showcase
  /** Launching 3D Showcase: play */
  play?: Play;

  // User Interface
  /** User Interface: wheel */
  wheel?: Wheel;
}
