import {Brand, Dollhouse, Help, OpenBehavior, Play, Quickstart, Tour, GuidedTour, HighlightReel, MlsBehavior, Mattertags, TagNavigation, Pin, Portal, SwitchFloors, FloorPlanView, Language, Zoom, Search, Wheel, GuidedTourPan, LoopBack, Title, GuidedTourCallToAction, HighlightReelBehavior, VirtualReality} from '@/types/enums';

// 'NEXT_PUBLIC_APP_KEY' can be used here as it's prefixed by 'NEXT_PUBLIC_'.
// It will be transformed at build time to `'abcdefghij0123456789abcde'`.
const appKey = process.env.NEXT_PUBLIC_APP_KEY;
const modelId = process.env.NEXT_PUBLIC_MODEL_ID;
const attributeMap: Map<string, string> = new Map([
  ['help', 'help'],
  ['openBehavior', 'nt'],
  ['play', 'play'],
  ['quickstart', 'qs'],
  ['brand', 'brand'],
  ['dollhouse', 'dh'],
  ['tour', 'tour'],
  ['guidedTour', 'gt'],
  ['highlightReel', 'hr'],
  ['mlsBehavior', 'mls'],
  ['mattertags', 'mt'],
  ['tagNavigation', 'tagNav'],
  ['pin', 'pin'],
  ['portal', 'portal'],
  ['switchFloors', 'f'],
  ['floorPlanView', 'fp'],
  ['language', 'lang'],
  ['zoom', 'nozoom'],
  ['search', 'search'],
  ['guidedTourPan', 'kb'],
  ['loopBack', 'lp'],
  ['title', 'title'],
  ['guidedTourCallToAction', 'tourcta'],
  ['highlightReelBehavior', 'hl'],
  ['virtualReality', 'vr'],
]);

/**
 * Set Component Attributes
 *
 * @category Function
 * @function
 * @param {WebComponentConfig} config WebComponent configuration (MatterportViewer pass all attributes to WebComponent)
 * @returns {object} Attributes object to pass to a component e.g. {...attributes}
 */
const setAttributes = (config: WebComponentConfig): object => {
  const attributes: object = {};

  // Transform WebComponentConfig to URL Parameters - https://support.matterport.com/s/article/URL-Parameters?language=en_US
  // Help
  if (config.help) {
    const attr = 'help';
    const attribute = attributeMap.get(attr);
    const param = config.help;
    let parameter = -1;

    switch (config.help) {
      case Help.Hide:
        parameter = 0;
        break;

      case Help.ShowWithDetail:
        parameter = 1;
        break;

      case Help.Show:
        parameter = 2;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // openBehavior
  if (config.openBehavior) {
    const attr = 'openBehavior';
    const attribute = attributeMap.get(attr);
    const param = config.openBehavior;
    let parameter = -1;

    switch (config.openBehavior) {
      case OpenBehavior.SameBrowserTab:
        parameter = 0;
        break;

      case OpenBehavior.NewBrowserTab:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // Quickstart
  if (config.quickstart) {
    const attr = 'quickstart';
    const attribute = attributeMap.get(attr);
    const param = config.quickstart;
    let parameter = -1;

    switch (config.quickstart) {
      case Quickstart.Disable:
        parameter = 0;
        break;

      case Quickstart.Enable:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // Brand
  if (config.brand) {
    const attr = 'brand';
    const attribute = attributeMap.get(attr);
    const param = config.brand;
    let parameter = -1;

    switch (config.brand) {
      case Brand.Hide:
        parameter = 0;
        break;

      case Brand.Show:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // Dollhouse
  if (config.dollhouse) {
    const attr = 'dollhouse';
    const attribute = attributeMap.get(attr);
    const param = config.dollhouse;
    let parameter = -1;

    switch (config.dollhouse) {
      case Dollhouse.Hide:
        parameter = 0;
        break;

      case Dollhouse.Show:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // Tour
  if (config.tour) {
    const attr = 'tour';
    const attribute = attributeMap.get(attr);
    const param = config.tour;
    let parameter = -1;

    switch (config.tour) {
      case Tour.Hide:
        parameter = 0;
        break;

      case Tour.Model:
        parameter = 1;
        break;

      case Tour.Story:
        parameter = 2;
        break;

      case Tour.HighlightReel:
        parameter = 3;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // GuidedTour
  if (config.guidedTour) {
    const attr = 'guidedTour';
    const attribute = attributeMap.get(attr);
    const param = config.guidedTour;
    let parameter = -1;

    switch (config.guidedTour) {
      case GuidedTour.Hide:
        parameter = 0;
        break;

      case GuidedTour.Show:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // HighlightReel
  if (config.highlightReel) {
    const attr = 'highlightReel';
    const attribute = attributeMap.get(attr);
    const param = config.highlightReel;
    let parameter = -1;

    switch (config.highlightReel) {
      case HighlightReel.Hide:
        parameter = 0;
        break;

      case HighlightReel.Show:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // MlsBehavior
  if (config.mlsBehavior) {
    const attr = 'mlsBehavior';
    const attribute = attributeMap.get(attr);
    const param = config.mlsBehavior;
    let parameter = -1;

    switch (config.mlsBehavior) {
      case MlsBehavior.Branding:
        parameter = 0;
        break;

      case MlsBehavior.MlsFriendly:
        parameter = 1;
        break;

      case MlsBehavior.MlsFriendlyNoAbout:
        parameter = 2;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // Mattertags
  if (config.mattertags) {
    const attr = 'mattertags';
    const attribute = attributeMap.get(attr);
    const param = config.mattertags;
    let parameter = -1;

    switch (config.mattertags) {
      case Mattertags.Hide:
        parameter = 0;
        break;

      case Mattertags.Show:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // TagNavigation
  if (config.tagNavigation) {
    const attr = 'tagNavigation';
    const attribute = attributeMap.get(attr);
    const param = config.tagNavigation;
    let parameter = -1;

    switch (config.tagNavigation) {
      case TagNavigation.Hide:
        parameter = 0;
        break;

      case TagNavigation.Show:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // Pin
  if (config.pin) {
    const attr = 'pin';
    const attribute = attributeMap.get(attr);
    const param = config.pin;
    let parameter = -1;

    switch (config.pin) {
      case Pin.Hide:
        parameter = 0;
        break;

      case Pin.Show:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // Portal
  if (config.portal) {
    const attr = 'portal';
    const attribute = attributeMap.get(attr);
    const param = config.portal;
    let parameter = -1;

    switch (config.portal) {
      case Portal.Hide:
        parameter = 0;
        break;

      case Portal.Show:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // SwitchFloors
  if (config.switchFloors) {
    const attr = 'switchFloors';
    const attribute = attributeMap.get(attr);
    const param = config.switchFloors;
    let parameter = -1;

    switch (config.switchFloors) {
      case SwitchFloors.Disable:
        parameter = 0;
        break;

      case SwitchFloors.Enable:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // FloorPlanView
  if (config.floorPlanView) {
    const attr = 'floorPlanView';
    const attribute = attributeMap.get(attr);
    const param = config.floorPlanView;
    let parameter = -1;

    switch (config.floorPlanView) {
      case FloorPlanView.Disable:
        parameter = 0;
        break;

      case FloorPlanView.Enable:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // Language
  if (config.language != null) {
    const attr = 'language';
    const attribute = attributeMap.get(attr);
    const param = config.language;
    const parameter = config.language;

    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter);
    attributes[attribute!] = parameter;
  }

  // Zoom
  if (config.zoom) {
    const attr = 'zoom';
    const attribute = attributeMap.get(attr);
    const param = config.zoom;
    let parameter = -1;

    switch (config.zoom) {
      case Zoom.Disable:
        parameter = 1;
        break;

      case Zoom.Enable:
        parameter = 0;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // Search
  if (config.search) {
    const attr = 'search';
    const attribute = attributeMap.get(attr);
    const param = config.search;
    let parameter = -1;

    switch (config.search) {
      case Search.Disable:
        parameter = 0;
        break;

      case Search.Enable:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // GuidedTourPan
  if (config.guidedTourPan) {
    const attr = 'guidedTourPan';
    const attribute = attributeMap.get(attr);
    const param = config.guidedTourPan;
    let parameter = -1;

    switch (config.guidedTourPan) {
      case GuidedTourPan.Disable:
        parameter = 0;
        break;

      case GuidedTourPan.Enable:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // LoopBack
  if (config.loopBack) {
    const attr = 'loopBack';
    const attribute = attributeMap.get(attr);
    const param = config.loopBack;
    let parameter = -1;

    switch (config.loopBack) {
      case LoopBack.Disable:
        parameter = 0;
        break;

      case LoopBack.Enable:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // Title
  if (config.title) {
    const attr = 'title';
    const attribute = attributeMap.get(attr);
    const param = config.title;
    let parameter = -1;

    switch (config.title) {
      case Title.Disable:
        parameter = 0;
        break;

      case Title.Enable:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // GuidedTourCallToAction
  if (config.guidedTourCallToAction) {
    const attr = 'guidedTourCallToAction';
    const attribute = attributeMap.get(attr);
    const param = config.guidedTourCallToAction;
    let parameter = -1;

    switch (config.guidedTourCallToAction) {
      case GuidedTourCallToAction.Disable:
        parameter = 0;
        break;

      case GuidedTourCallToAction.Large:
        parameter = 1;
        break;

      case GuidedTourCallToAction.Small:
        parameter = 2;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // HighlightReelBehavior
  if (config.highlightReelBehavior) {
    const attr = 'highlightReelBehavior';
    const attribute = attributeMap.get(attr);
    const param = config.highlightReelBehavior;
    let parameter = -1;

    switch (config.highlightReelBehavior) {
      case HighlightReelBehavior.Briefly:
        parameter = 0;
        break;

      case HighlightReelBehavior.Expended:
        parameter = 1;
        break;

      case HighlightReelBehavior.Collapsed:
        parameter = 2;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }

  // VirtualReality
  if (config.virtualReality) {
    const attr = 'virtualReality';
    const attribute = attributeMap.get(attr);
    const param = config.virtualReality;
    let parameter = -1;

    switch (config.virtualReality) {
      case VirtualReality.Hide:
        parameter = 0;
        break;

      case VirtualReality.Show:
        parameter = 1;
        break;

      default:
        console.error(`Wrong ${attr} value`, param);
        break;
    }
    //console.debug(attr, `(${attribute})`, '-', `'${param}'`, parameter.toString());
    attributes[attribute!] = parameter.toString();
  }
  return attributes;
};

/**
 * Set Component Attributes
 *
 * @category Function
 * @function
 * @param {SdkConfig} config SdkConfig configuration to set iFrame attributes
 * @returns {object} Attributes object to pass to a component e.g. {...attributes}
 */
const setComponentAttributes = (component: HTMLElement, config: WebComponentConfig) => {
  // config -> attributes
  const attributes = setAttributes(config);

  attributes['m'] = config.modelId;
  attributes['application-key'] = appKey!;
  attributes['asset-base'] = config.assetBase;

  // Set attributes
  for (let key in attributes) {
    component.setAttribute(key, attributes[key]);
  }
};

/**
 * Set Iframe Query Params
 *
 * @category Function
 * @function
 * @param {SdkConfig} config SdkConfig configuration to set iFrame attributes
 * @returns {object} Attributes object to pass to a iFrame
 */
const setIframeQueryParams = (config: SdkConfig): object => {
  // config -> attributes
  const attributes = setAttributes(config); // TODO: add play, wheel settings

  return attributes;
};

export {setAttributes, setComponentAttributes, setIframeQueryParams};
