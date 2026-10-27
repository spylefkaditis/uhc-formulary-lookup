# UHC Formulary Lookup

Next.js + Supabase project that stores the UnitedHealthcare Medicare Part D Sample Formulary 2025 in a `formulary_drugs` table and offers a terminal lookup by brand or generic name.

## Setup

1. Copy `.env.example` to `.env.local` and fill in your Supabase URL and anon key.
2. Apply `supabase/migrations/` (SQL Editor or `supabase db push`), then run `supabase/seed.sql` to load the 80 CSV rows.

## Terminal lookup

```bash
npm run lookup -- <brand or generic name>
```

Matching is case-insensitive and partial. Example, `npm run lookup -- entresto`:

```
1 result for "entresto"
Entresto — sacubitril/valsartan  [UHC-F25-0044]
  Class:    Cardiovascular - Antihypertensive
  Form:     tablet, 24-26; 49-51; 97-103 mg
  Tier:     4
  PA: Yes   Step therapy: Yes   Qty limit: Yes
  Step req: Trial of an ACE inhibitor or ARB, such as lisinopril or losartan
  Qty:      60 tablets per 30 days
  Source:   UnitedHealthcare Medicare Part D Sample Formulary 2025, p.33 (effective 2025-01-01)
```

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
