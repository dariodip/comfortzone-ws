export const sendGAEvent = (
      action: string,
      params?: Record<string, any>,
    ) => {
      if (
        typeof window !== "undefined" &&
        "gtag" in window &&
        typeof (window as any).gtag === "function"
      ) {
        (window as any).gtag("event", action, params);
      } else {
        console.warn(`GA4 is not loaded. Event '${action}' skipped.`);
      }
    };