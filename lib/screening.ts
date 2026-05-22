/**
 * Screening vendor configuration (hybrid handoff).
 * Set SCREENING_INVITE_URL in Vercel to your RentSpree (or SmartMove) invite link template.
 * Applicants are emailed this URL after application submit (v1: static URL; landlord pre-configures package).
 */
export const screeningConfig = {
  provider: "RentSpree" as const,
  providerLabel: "RentSpree (TransUnion)",
  /** Shown on consent step — keep configurable via env for OR fee law changes */
  feeRangeLabel:
    process.env.SCREENING_FEE_DISCLOSURE ??
    "$39.99–$49.99 (package selected at screening; applicant pays)",
  inviteUrl:
    process.env.SCREENING_INVITE_URL ?? "https://apply.link/K6AP5pA",
  setupNote:
    "RentSpree applicant link (apply.link). Override with SCREENING_INVITE_URL in Vercel if you rotate invites.",
} as const;
