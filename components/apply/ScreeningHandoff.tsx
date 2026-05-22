"use client";

import Link from "next/link";
import { useState } from "react";
import { SCREENING_CRITERIA_VERSION } from "@/lib/legal-content";
import {
  fairChanceApplicationDisclosure,
  orsDisclosures,
} from "@/lib/legal-content";
import { screeningConfig } from "@/lib/screening";

export function ScreeningHandoff() {
  const [consents, setConsents] = useState({
    consentCriteriaRead: false,
    consentScreeningFee: false,
    consentFairChance: false,
    consentFairHousing: false,
  });

  const ready =
    consents.consentCriteriaRead &&
    consents.consentScreeningFee &&
    consents.consentFairChance &&
    consents.consentFairHousing;

  function continueToScreening() {
    if (!ready) return;
    const url = screeningConfig.inviteUrl;
    window.location.assign(url);
  }

  return (
    <div className="space-y-6">
      <p className="text-sm leading-relaxed text-foreground/80">
        This site does <strong>not</strong> collect or store your rental application,
        income, rental history, or ID. After you acknowledge the disclosures below, you
        continue to {screeningConfig.providerLabel}, where you complete the application
        and pay the screening fee (if applicable).
      </p>

      <p className="text-sm text-foreground/70">
        Criteria version: {SCREENING_CRITERIA_VERSION}. Review{" "}
        <Link href="/screening-criteria" className="text-teal underline">
          screening criteria
        </Link>{" "}
        before continuing.
      </p>

      <div>
        <p className="text-sm font-medium text-purple">{orsDisclosures.title}</p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-foreground/80">
          {orsDisclosures.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-foreground/70">{orsDisclosures.feeNotice}</p>
      </div>

      <div className="rounded-md border border-purple-light/50 bg-white p-4 text-sm leading-relaxed">
        <p className="font-medium text-purple">Fair Chance notice</p>
        <p className="mt-2">{fairChanceApplicationDisclosure}</p>
      </div>

      <div className="space-y-3">
        <label className="flex gap-2 text-sm">
          <input
            type="checkbox"
            checked={consents.consentCriteriaRead}
            onChange={(e) =>
              setConsents((s) => ({
                ...s,
                consentCriteriaRead: e.target.checked,
              }))
            }
          />
          I have read the screening criteria (version {SCREENING_CRITERIA_VERSION}).
        </label>
        <label className="flex gap-2 text-sm">
          <input
            type="checkbox"
            checked={consents.consentScreeningFee}
            onChange={(e) =>
              setConsents((s) => ({
                ...s,
                consentScreeningFee: e.target.checked,
              }))
            }
          />
          I understand the screening fee disclosure (ORS 90.295) before any fee is
          charged on the screening partner site.
        </label>
        <label className="flex gap-2 text-sm">
          <input
            type="checkbox"
            checked={consents.consentFairChance}
            onChange={(e) =>
              setConsents((s) => ({
                ...s,
                consentFairChance: e.target.checked,
              }))
            }
          />
          I have read the Fair Chance / criminal history notice above.
        </label>
        <label className="flex gap-2 text-sm">
          <input
            type="checkbox"
            checked={consents.consentFairHousing}
            onChange={(e) =>
              setConsents((s) => ({
                ...s,
                consentFairHousing: e.target.checked,
              }))
            }
          />
          I understand nondiscrimination and fair housing policies.
        </label>
      </div>

      <button
        type="button"
        disabled={!ready}
        onClick={continueToScreening}
        className="rounded-md bg-teal px-6 py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        Continue to {screeningConfig.providerLabel} →
      </button>
      <p className="text-xs text-foreground/60">
        You will leave this site. Application and consumer reports are handled under
        the partner&apos;s privacy policy and FCRA process.
      </p>
    </div>
  );
}
