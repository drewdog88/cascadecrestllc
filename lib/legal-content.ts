/** Screening criteria version — bump when criteria change (stored on each application). */
export const SCREENING_CRITERIA_VERSION = "2025-05-22";

export const screeningCriteria = {
  version: SCREENING_CRITERIA_VERSION,
  title: "Tenant screening criteria",
  intro: `Cascade Crest LLC uses objective, consistently applied criteria when evaluating rental applications for properties in Oregon. This document is provided before any applicant screening charge is collected, as required by ORS 90.295.`,
  sections: [
    {
      heading: "Income and employment",
      body: `Applicants must demonstrate stable income sufficient to pay rent. We generally require verifiable gross monthly household income of at least three (3) times the monthly rent for the unit applied for. Income may be verified through employment references, pay documentation, and/or tenant screening reports (including income insights when ordered).`,
    },
    {
      heading: "Credit and rental history",
      body: `We review credit history and rental references. Late payments, collections, evictions, or negative landlord references may affect eligibility. We use TransUnion-backed screening products (e.g., ResidentScore®) where applicable.`,
    },
    {
      heading: "Uniform application of criteria",
      body: `The same written criteria in this document apply to every applicant for a given vacancy. We do not use different standards based on protected characteristics. Application order may affect processing where required by local law (see below).`,
    },
    {
      heading: "Criminal history — Oregon & Portland Fair Chance",
      body: `We do not automatically deny an application based on criminal history. We conduct an individualized assessment that considers the nature, severity, and recency of any record, the applicant’s age at the time of the offense, evidence of rehabilitation, and whether the record bears a direct relationship to resident safety or property. Arrests without conviction are not automatic grounds for denial.

Where Portland’s Fair Chance Housing Ordinance applies, we follow its requirements, including prohibited adverse action based on certain criminal history except as allowed by law, and an opportunity for applicants to provide supplemental evidence before a final denial based on criminal history.`,
    },
    {
      heading: "Application order (City of Portland)",
      body: `For properties subject to City of Portland regulations, we process complete applications that meet our published criteria in the order received (first-come, first-served), subject to exceptions required by law. Incomplete applications may be returned for completion without holding a queue position until resubmitted as complete.`,
    },
    {
      heading: "Eviction history",
      body: `Prior evictions or unlawful detainer judgments may affect eligibility depending on recency, circumstances, and overall application strength.`,
    },
    {
      heading: "Occupancy, pets, and property rules",
      body: `Applications must accurately disclose all intended occupants, pets (type, breed, size), and vehicles. Approval is subject to occupancy limits, pet policy, and lease terms for the specific unit.`,
    },
    {
      heading: "Screening process and fees",
      body: `After you review this criteria on our website, you complete your application and consumer screening through our screening partner (currently RentSpree / TransUnion). We do not store your application on cascadecrestllc.com. The applicant pays the screening fee at the customary cost for the selected package (disclosed before payment on the partner site). Only one screening charge applies within any 60-day period across our units, per ORS 90.295. The screening partner provides a receipt.`,
    },
    {
      heading: "Nondiscrimination",
      body: `We do not discriminate based on race, color, religion, sex, national origin, familial status, disability, source of income, sexual orientation, gender identity, or other protected classes under federal, state, or local law. Reasonable accommodations for disabilities will be considered.`,
    },
    {
      heading: "Recordkeeping",
      body: `We maintain records of this criteria document (versioned), screening fee receipts from our screening partner, application materials, screening reports, and documented decision rationale to demonstrate compliance if challenged. Criteria version ${SCREENING_CRITERIA_VERSION} is published on this site; application files are kept in the screening partner portal, not on cascadecrestllc.com.`,
    },
  ],
  disclaimer:
    "This summary is for applicant disclosure. It is not legal advice. Oregon and Portland landlord-tenant rules change frequently; consult ORHA, a qualified attorney, or PAROA resources for complex situations.",
  resources: [
    { label: "ORS 90.295 (screening charges)", url: "https://oregon.public.law/statutes/ors_90.295" },
    { label: "Fair Housing Council of Oregon", url: "https://fhco.org/" },
  ],
} as const;

/** Mandatory acknowledgment text shown on the rental application (Portland Fair Chance / OR). */
export const fairChanceApplicationDisclosure = `Cascade Crest LLC is prohibited from taking adverse action against you based on certain criminal history, except as permitted by Oregon law and, where applicable, the City of Portland Fair Chance Housing Ordinance. If criminal history is considered, we will conduct an individualized assessment and you may submit supplemental evidence of rehabilitation before a final decision. Denial based on a consumer report triggers FCRA notice and dispute rights.` as const;

export const orsDisclosures = {
  title: "Oregon applicant screening disclosures (ORS 90.295)",
  items: [
    "The amount of any applicant screening charge and what it covers (consumer credit, criminal background, eviction history, and related reports as selected).",
    "Our screening criteria (this page) and the screening process: review disclosures on this site, then complete application and screening with our partner (we do not store your application here).",
    "Your right to dispute inaccurate information in a consumer report under the Fair Credit Reporting Act (FCRA).",
    "That you may obtain a free copy of your consumer report from the reporting agency identified in screening materials.",
    "Rent amount and deposit requirements for the unit (provided when a specific unit is offered).",
    "Whether renter’s insurance is required (if applicable, stated in lease materials).",
    "Our nondiscrimination policy (see Fair Housing notice).",
  ],
  feeNotice:
    "Screening fees are charged to the applicant at our screening partner’s published rate for the package selected (typically $39.99–$49.99 plus optional add-ons). Fees must not exceed average actual or customary cost for comparable screening. One screening fee per 60-day period applies across our properties. The screening partner provides a receipt; we confirm screening was ordered as required by ORS 90.295.",
} as const;

/** Oregon & Portland rental property compliance checklist. */
export const complianceChecklist = {
  title: "Oregon & Portland Rental Compliance Checklist",
  sections: [
    {
      heading: "1. Safety & Health Standards (Habitability)",
      items: [
        {
          label: "Smoke Detectors",
          detail:
            "Working, 10-year, tamper-resistant batteries, installed in every bedroom and on every level.",
        },
        {
          label: "Carbon Monoxide Alarms",
          detail:
            "Installed in every bedroom or within 15 feet of bedroom doors.",
        },
        {
          label: "Heat",
          detail:
            "All rooms must have a functioning, safe heat source (no portable heaters allowed for compliance).",
        },
        {
          label: "Plumbing",
          detail:
            "All fixtures (sinks, toilets, tubs) must have hot/cold running water, drain freely, and be leak-free.",
        },
        {
          label: "Electrical",
          detail:
            "Outlets and switches must have intact covers; no exposed wiring; GFCIs required in kitchens and bathrooms.",
        },
        {
          label: "Ventilation",
          detail:
            "Bathrooms must have a window that opens or a mechanical fan.",
        },
        {
          label: "Pest Control",
          detail: "Property must be free of infestations.",
        },
        {
          label: "Structural",
          detail:
            "No peeling paint (lead hazard risk), stable railings on stairs/decks, and weather-tight windows/doors.",
        },
      ],
    },
    {
      heading: "2. Portland-Specific Requirements",
      items: [
        {
          label: "Relocation Assistance",
          detail:
            "Ensure awareness of the Mandatory Relocation Assistance policy for qualifying no-cause terminations or rent increases above specific thresholds.",
        },
        {
          label: "Application & Screening",
          detail:
            "Adhere to the City of Portland’s strict screening criteria (must provide written notice of criteria before taking an application fee).",
        },
        {
          label: "Security Deposits",
          detail:
            "Utilize the Portland Security Deposit Addendum and Notice of Security Deposit Rights. Ensure the deposit is held in a compliant manner.",
        },
        {
          label: "Unit Inventory",
          detail:
            "Provide a Portland Unit Inventory form to document the condition of the property at move-in.",
        },
      ],
    },
    {
      heading: "3. Documentation & Notices",
      items: [
        {
          label: "Rental Agreement",
          detail: "Ensure use of current Oregon-compliant lease forms.",
        },
        {
          label: "Required Addendums",
          detail: [
            "Lead-Based Paint Disclosure (for properties built before 1978).",
            "Utility Bill-Back Addendum (if applicable).",
            "Pest Control Addendum.",
            "Smoke/Carbon Monoxide Alarm Certification.",
          ],
        },
        {
          label: "Move-In/Move-Out Inspections",
          detail:
            "Conduct a thorough, documented walk-through with the tenant to establish a baseline for the security deposit.",
        },
      ],
    },
    {
      heading: "4. Maintenance Routine",
      items: [
        {
          label: "Quarterly HVAC",
          detail: "Replace filters and test systems.",
        },
        {
          label: "Exterior Drainage",
          detail:
            "Ensure gutters and downspouts are clear, especially before winter, to protect foundations.",
        },
        {
          label: "Seasonal Roof & Siding Checks",
          detail:
            "Inspect for damage after high winds or heavy rainfall.",
        },
        {
          label: "Annual Safety Inspection",
          detail:
            "Test all alarms, fire extinguishers, and door/window locks.",
        },
      ],
    },
  ],
  disclaimer:
    "This checklist is provided for informational and organizational purposes only and does not constitute legal, financial, or tax advice. Rental regulations are complex and subject to frequent changes at both the state and municipal levels. We strongly recommend that all property owners consult with a qualified attorney or professional property management firm to ensure that their specific rental agreements, screening processes, and maintenance procedures fully comply with all current laws and regulations. Use of this document is at the user’s own risk.",
} as const;

export const privacyPolicy = {
  title: "Privacy policy",
  lastUpdated: "May 21, 2025",
  sections: [
    {
      heading: "Who we are",
      body: "Cascade Crest LLC (“we,” “us”) operates this website and processes rental applications for properties we manage. Registered in Washington State; rental property located in Oregon.",
    },
    {
      heading: "Information we collect on this site",
      body: "The apply flow on this website shows legal disclosures only. We do not collect, store, or process rental application PII (name, SSN, income, rental history, etc.) on our servers. When you continue to our screening partner, that provider collects and processes your application and consumer reports under its own privacy policy.",
    },
    {
      heading: "How we use information",
      body: "Our marketing pages may use analytics without personal application data. We do not sell personal information. Tenancy decisions and screening data are handled in the screening partner portal.",
    },
    {
      heading: "Sharing",
      body: "Hosting (Vercel) processes site traffic. The screening partner processes application and consumer report data when you use their link from /apply. We do not receive a copy of full application files on this site.",
    },
    {
      heading: "Retention",
      body: "We do not maintain an applicant database on this site. Retention of application and screening records is governed by the screening partner and your records as landlord.",
    },
    {
      heading: "Security",
      body: "We use encryption in transit (HTTPS), access controls for administrative data, and industry-standard hosting. No method of transmission is 100% secure.",
    },
    {
      heading: "Your rights",
      body: "For data held by our screening partner, contact that provider or us to be directed to the correct party. For consumer report disputes, use the screening agency identified in your report (FCRA rights).",
    },
    {
      heading: "Analytics",
      body: "Our public marketing pages may use Google Analytics on production only. Application pages are excluded from marketing analytics events that contain personal data.",
    },
    {
      heading: "Contact",
      body: "Questions about this policy: contact Cascade Crest LLC using the email published in your screening invitation or lease materials.",
    },
  ],
} as const;

export const fairHousingNotice = {
  title: "Fair housing notice",
  body: `Cascade Crest LLC complies with the federal Fair Housing Act and Oregon fair housing laws. We do not discriminate in rental applications or tenancy based on race, color, religion, sex, national origin, familial status, disability, source of income, sexual orientation, gender identity, marital status, or other protected characteristics.

If you need a reasonable accommodation or modification related to a disability, please indicate so in your application or contact us to discuss the interactive process.

For fair housing resources in Oregon, visit the Fair Housing Council of Oregon at https://fhco.org/.`,
} as const;

export const fcraSummaryLink =
  "https://www.consumer.ftc.gov/articles/0155-free-credit-reports";
