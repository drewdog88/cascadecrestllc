/** Public GA4 measurement ID (not secret — visible in browser). */
export const GA_MEASUREMENT_ID = "G-BH4X8G32X8";

/** GA runs only on the live Vercel production deploy (not local dev or preview). */
export function isGoogleAnalyticsEnabled(): boolean {
  return process.env.VERCEL_ENV === "production";
}

export function getGaMeasurementId(): string | undefined {
  if (!isGoogleAnalyticsEnabled()) return undefined;

  const fromEnv = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  return fromEnv || GA_MEASUREMENT_ID;
}
