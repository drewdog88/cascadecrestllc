import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";
import { getGaMeasurementId } from "@/lib/analytics";

export function GoogleAnalytics() {
  const gaId = getGaMeasurementId();
  if (!gaId) return null;
  return <NextGoogleAnalytics gaId={gaId} />;
}
