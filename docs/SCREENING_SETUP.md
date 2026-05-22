# Screening setup (minimal PII)

Cascade Crest publishes **Oregon disclosures and screening criteria** on this site, then sends applicants to **RentSpree** for the full application, fee, and TransUnion reports. **No applicant PII is stored on cascadecrestllc.com.**

## 1. RentSpree landlord account

1. Sign up at [https://www.rentspree.com/](https://www.rentspree.com/) (free for landlords).
2. Configure **applicant-paid** screening for Oregon.
3. Match package pricing to `SCREENING_FEE_DISCLOSURE` on `/apply`.
4. Set `SCREENING_INVITE_URL` to your RentSpree invite URL in Vercel / `.env.local`.

## 2. Vercel environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SCREENING_INVITE_URL` | Applicant invite on `/apply` |
| `SCREENING_INVITE_URL` | Server-side fallback (same URL) |
| `SCREENING_FEE_DISCLOSURE` | Fee text on `/apply` (ORS 90.295) |
| `ADMIN_SECRET` | Landlord sign-in for `/admin` (set in Vercel only) |

## 3. Where data lives

| Data | Location |
| --- | --- |
| Screening criteria & Fair Chance copy | This site (`/screening-criteria`, `/apply`) |
| Application, income, ID, reports | **RentSpree only** |
| Landlord review & receipts | **RentSpree dashboard** |

## 4. Oregon compliance

See [OREGON_COMPLIANCE.md](./OREGON_COMPLIANCE.md). Criteria must be read on this site **before** the applicant pays a screening fee on RentSpree.

## SmartMove alternative

Set `SCREENING_INVITE_URL` to your [SmartMove](https://www.transunion.com/product/smartmove) invite link and update fee disclosure accordingly.
