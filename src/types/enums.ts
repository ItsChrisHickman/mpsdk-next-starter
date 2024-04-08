// WebComponentConfig Parameters - https://support.matterport.com/s/article/URL-Parameters

// Launching 3D Showcase
/** Launching 3D Showcase: Help (help) */
export enum Help {
  /** (Default) Do not show help at all. */
  Hide = 'hide', // 0,

  /** Always show help when the Matterport model opens. More concise help text. */
  ShowWithDetail = 'show with detail', // 1

  /** Always show help when the Matterport model opens. */
  Show = 'show', // 2,
}

/** Launching 3D Showcase: OpenBehavior (nt). Only for mobile */
export enum OpenBehavior {
  /** (Default) If a Matterport model is embedded on a webpage, then when user presses the play button 3D Showcase opens in the same browser tab. */
  SameBrowserTab = 'opens in the same browser tab', // 0

  /** If a Matterport model is embedded on a webpage, then when user presses the play button, 3D Showcase opens in a new browser tab. */
  NewBrowserTab = 'opens in a new browser tab', // 1
}

/** Launching 3D Showcase: Play (play). Only for SDK (IFrame) */
export enum Play {
  /** (Default) Shows a Play button ▶️️ on the iframe. The user must press the Play button ▶️️ to open the Matterport model. */
  Manual = 'manual', // 0

  /**
   * Automatically opens the Matterport model when the iframe loads on the page. If the 3D Showcase is opened via a link (not embedded in an iframe), this option is chosen automatically. When embedding Showcase within an iframe, play=1 will only work if the iframe is large enough on the user’s screen to provide a good user experience. Specifically, on mobile devices, the iframe has to cover at
   * least 60% of the screen.
   */
  Auto = 'auto', // 1
}

/** Launching 3D Showcase: Quickstart (qs) */
export enum Quickstart {
  /** (Default) Disable Quickstart (when the Matterport model first opens, zoom in from Dollhouse View). */
  Disable = 'disable', // 0

  /** Enable Quickstart (when the Matterport model first opens, go straight into Inside View). */
  Enable = 'enable', // 1
}

// Visibility
/** Visibility: Brand (brand) */
export enum Brand {
  /** Hide 'Presented By' details when model opens. Hide contact details in the "About" panel (top-left grey corner of 3D Showcase). */
  Hide = 'hide', // 0

  /** (Default) Display all branding information in the "About" panel (top-left corner of 3D Showcase). */
  Show = 'show', // 1
}

/** Visibility: Dollhouse (dh) */
export enum Dollhouse {
  /** Hide Dollhouse View in introductory fly-in. Hide Dollhouse Button in the bottom left corner of the 3D Showcase UI. Hides Dollhouse and Floorplan view snapshots in the highlight reel. */
  Hide = 'hide', // 0

  /** (Default) Show Dollhouse View. */
  Show = 'show', // 1
}

/** Visibility: Tour (tour) */
export enum Tour {
  /** No tour controls or highlight reel appear. */
  Hide = 'hide', // 0

  /** (Default) The tour mode saved in the model is used. */
  Model = 'model', // 1

  /** Story mode tour is used. */
  Story = 'story', // 2

  /** Highlight reel mode tour is used. */
  HighlightReel = 'highlight reel', // 3
}

/** Visibility: GuidedTour (gt) */
export enum GuidedTour {
  /** Hide Guided Tour buttons in the bottom left corner of the 3D Showcase UI. */
  Hide = 'hide', // 0

  /** (Default) Show Guided Tour buttons. */
  Show = 'show', // 1
}

/** Visibility: HighlightReel (hr) */
export enum HighlightReel {
  /** Hide highlight reel at the bottom of the 3D Showcase UI. */
  Hide = 'hide', // 0

  /** (Default) Show highlight reel. */
  Show = 'show', // 1
}

/** Visibility: MlsBehavior (mls) */
export enum MlsBehavior {
  /** (Default) Show branding information, links in Mattertag™ Posts, and VR. */
  Branding = 'branding', // 0

  /** Show the MLS-friendly version of the Matterport model. This removes branding, removes links in Mattertag™ Posts, and removes VR. */
  MlsFriendly = 'MLS friendly', // 1

  /** Same behavior as MlsFriendly, but also removes the "About" panel in the top-left corner after loading. */
  MlsFriendlyNoAbout = 'MLS friendly, no about', // 2
}

/** Visibility: Mattertags (mt) */
export enum Mattertags {
  /** Hide Mattertags and "Mattertag Content" toggle in the "About" panel. */
  Hide = 'hide', // 0

  /** (Default) Show Mattertag Posts, */
  Show = 'show', // 1
}

/** Visibility: TagNavigation (tagNav) */
export enum TagNavigation {
  /** Hides the <and> buttons from Tags and disables navigating through Tags using the "," and "." keys. */
  Hide = 'hide', // 0

  /** (Default) Shows the <and> buttons for Tags and enables navigating through Tags using the "," and "." keys. */
  Show = 'show', // 1
}

/** Visibility: Pin (pin) */
export enum Pin {
  /** Hide placed 360º Views pins in Dollhouse and Floor Plan. */
  Hide = 'hide', // 0

  /** (Default) Show placed 360º Views pins in Dollhouse and Floor Plan. */
  Show = 'show', // 1
}

/** Visibility: Portal (portal) */
export enum Portal {
  /** Hide placed 360º Views connection portals while in Inside View. */
  Hide = 'hide', // 0

  /** (Default) Show placed 360º Views connection portals while in Inside View. */
  Show = 'show', // 1
}

// User Interface
/** User Interface: SwitchFloors (f) */
export enum SwitchFloors {
  /** Remove the option to switch floors. This treats the Matterport model as "all one floor". */
  Disable = 'disable', // 0

  /** (Default) Let the user navigate the 3D model floor by floor. */
  Enable = 'enable', // 1
}

/** User Interface: FloorPlanView (fp) */
export enum FloorPlanView {
  /** Remove the floor plan view button from the bottom-left corner of the 3D Showcase UI. */
  Disable = 'disable', // 0

  /** (Default) Show the floor plan view button in the bottom-left corner of the 3D Showcase UI. */
  Enable = 'enable', // 1
}

/** User Interface: Language (lang) */
export enum Language {
  /** (Default) Shows the 3D Showcase user interface (help, tooltips, terms of service, etc) in the language set by the viewer's browser. If the language in the viewer's browser is not supported by 3D Showcase, it will default to American English. */
  Default = '', // ''

  /** Shows the 3D Showcase UI in American English. */
  English = 'en', //

  /** Shows the 3D Showcase UI in American Spanish. */
  Spanish = 'es', //

  /** Shows the 3D Showcase UI in American French. */
  French = 'fr', //

  /** Shows the 3D Showcase UI in American German. */
  German = 'de', //

  /** Shows the 3D Showcase UI in American Russian. */
  Russian = 'ru', //

  /** Shows the 3D Showcase UI in American Chinese. */
  Chinese = 'zh', //

  /** Shows the 3D Showcase UI in American Japanese. */
  Japanese = 'ja', //

  /** Shows the 3D Showcase UI in American Korean. */
  Korean = 'ko', //

  /** Shows the 3D Showcase UI in American Dutch. */
  Dutch = 'nl', //

  /** Shows the 3D Showcase UI in American Portuguese. */
  Portuguese = 'pt', //
}

/** User Interface: Zoom (nozoom) */
export enum Zoom {
  /** Disable zooming in 3D Showcase */
  Disable = 'disable', // 1

  /** (Default) Enable zooming in 3D Showcase. */
  Enable = 'enable', // 0
}

/** User Interface: Search (search) */
export enum Search {
  /** Remove the magnifying glass (search) icon from the upper-left corner of the 3D Showcase UI. */
  Disable = 'disable', // 0

  /** (Default) Show the magnifying glass (search) icon in the upper-left corner of the 3D Showcase UI. If Space Search is disabled at the account level, this parameter has no effect. */
  Enable = 'enable', // 1
}

/** User Interface: Wheel (wh) - SDK (IFrame) */
export enum Wheel {
  /** Ignore scroll wheel input from the mouse. Scroll wheel input will cause the entire webpage to move up and down. This parameter is only valid when the model is embedded with an iframe. */
  Disable = 'disable', // 0

  /** (Default) Enables scroll wheel input from the mouse, so the 3D model can zoom in. 3D Showcase will only listen to scroll wheel input if the cursor is over the iframe. */
  Enable = 'enable', // 1
}

// Guided Tours
/** Guided Tours: Guided Tours (kb) */
export enum GuidedTourPan {
  /** Do not pan when you reach a new highlight in a Guided Tour. */
  Disable = 'disable', // 0

  /** (Default) Gently pan once you reach a new highlight in a Guided Tour. */
  Enable = 'enable', // 1
}

/** Guided Tours: LoopBack (lp) */
export enum LoopBack {
  /** (Default) Stop once you reach the end of the Guided Tour. */
  Disable = 'disable', // 0

  /** Loop back to the beginning once you reach the end. */
  Enable = 'enable', // 1
}

/** Guided Tours: Title (title) */
export enum Title {
  /** Space title is not displayed. Top-left about panel not displayed. */
  Disable = 'disable', // 0

  /** (Default) Space title is displayed. Top-left about panel is displayed. */
  Enable = 'enable', // 1
}

/** Guided Tours: GuidedTourCallToAction (tourcta) */
export enum GuidedTourCallToAction {
  /** No call to action at the end of a a Guided Tour. */
  Disable = 'disable', // 0

  /** (Default) Large call to action at the end of a Guided Tour. */
  Large = 'large', // 1

  /** Small call to action at the end of a Guided Tour. */
  Small = 'small', // 2
}

/** Guided Tours: HighlightReelBehavior (hl) */
export enum HighlightReelBehavior {
  /** (Default if highlight reel does not have a 360 View) Briefly show the highlight reel upon launch before hiding. */
  Briefly = 'briefly', // 0

  /** (Default if highlight reel does have a 360 View) Keep the highlight reel visible upon launch. */
  Expended = 'expended', // 1

  /** Keeps the highlight reel collapsed. This option is only available if there is no 360 View in the highlight reel. If there is a 360 View then 'Expended' behavior will be used. */
  Collapsed = 'collapsed', // 2
}

// Virtual Reality
/** Virtual Reality: VirtualReality (vr) */
export enum VirtualReality {
  /** Hide the VR button. */
  Hide = 'hide', // 0

  /** (Default) Show the VR button. */
  Show = 'show', // 1
}
