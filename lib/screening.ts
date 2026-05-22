/**
 * Screening vendor configuration (hybrid handoff).
 * Applicant invite URL must be public (used in client-side redirect on /apply).
 */
export const DEFAULT_SCREENING_INVITE_URL = "https://apply.link/K6AP5pA";

export function getScreeningInviteUrl(): string {
  const fromEnv =
    process.env.NEXT_PUBLIC_SCREENING_INVITE_URL ??
    process.env.SCREENING_INVITE_URL;
  const url = (fromEnv ?? DEFAULT_SCREENING_INVITE_URL).trim();
  return url || DEFAULT_SCREENING_INVITE_URL;
}

export const screeningConfig = {
  provider: "RentSpree" as const,
  providerLabel: "RentSpree (TransUnion)",
  feeRangeLabel:
    process.env.SCREENING_FEE_DISCLOSURE ??
    "$39.99–$49.99 (package selected at screening; applicant pays)",
  inviteUrl: getScreeningInviteUrl(),
  landlordDashboardUrl:
    process.env.SCREENING_DASHBOARD_URL ?? "https://www.rentspree.com/",
  setupNote:
    "Applicant link uses apply.link. Landlord review is in the RentSpree dashboard.",
} as const;
