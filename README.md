# Pet Land / Kalandadze Vet Clinic

Georgian Next.js website. Active Pet Land v2, including mobile fixes from 20 October 2026.

## Local development
Node.js 24, `npm ci`, then `npm run dev -- --webpack --port 43188`.

## Vercel
Import Webinfinity11/vetmed, branch main, framework Next.js, root directory ./.
Install command: npm ci. Build command: npm run build. Leave output directory automatic.
Do not set STATIC_PREVIEW on Vercel. No secrets or environment variables are required.

## Active files
app/clinic-site.js, app/kalandadze.css, app/client-data.json, app/layout.js.
22 sample products, 81 services. No checkout/payment backend.
Source photos and local fonts are in public/. Clinic photos supplied by the client.
Legacy v1, private transfer notes, client spreadsheets and generated build output are not in this repository.

The optional STATIC_PREVIEW=1 mode is only for separate static demonstrations.
