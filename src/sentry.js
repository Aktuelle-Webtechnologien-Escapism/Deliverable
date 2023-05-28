// import * as Sentry from "@sentry/react";

// Sentry.init({
//     dsn: "https://74b1b4ccb33e471cb4e38d8edca06515@o4505256071004160.ingest.sentry.io/4505263003729920",
//     integrations: [
//       new Sentry.BrowserTracing({
//         // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
//         tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
//       }),
//       new Sentry.Replay()
//     ],
  
//     // Set tracesSampleRate to 1.0 to capture 100%
//     // of transactions for performance monitoring.
//     // We recommend adjusting this value in production
//     tracesSampleRate: 1.0,
  
//     // Capture Replay for 10% of all sessions,
//     // plus for 100% of sessions with an error
//     replaysSessionSampleRate: 0.1,
//     replaysOnErrorSampleRate: 1.0,
//   });
  
//   export default Sentry;