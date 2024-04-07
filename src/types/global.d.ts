// types/global.d.ts

export {};

declare global {
  interface IWebComponentParams {
    modelId: string;
    containerClassName: string;
    className: string;
    setMpSdk: Dispatch<any>;
  }

  interface IInitParams {
    modelId: string;
    appKey: string;
  }
}
