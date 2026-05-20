/** Public GA4 measurement ID (not secret — visible in browser). */
export const GA_MEASUREMENT_ID = "G-BH4X8G32X8";

export function getGaMeasurementId(): string | undefined {
  const fromEnv = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  return fromEnv || GA_MEASUREMENT_ID;
}
