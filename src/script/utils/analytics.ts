/**
 * const exampleValues = {
      isAuto: false,
      behavior: 0,
      uri: window.location.href,
      pageName: "featuresPage",
      pageHeight: window.innerHeight
    };
 */

export interface AnalyticsOptions {
  isAuto?: boolean,
  behavior?: number,
  uri?: string,
  pageName?: string,
  pageHeight?: number
}

export function capturePageView(options: AnalyticsOptions) {
  (window as any).awa.ct.capturePageView(options);
}

export function capturePageAction(options: AnalyticsOptions) {
  (window as any).awa.ct.capturePageAction(options);
}