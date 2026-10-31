# CrewDeck v0.4 — ABX official login link test

This version replaces the experimental credential-forwarding Netlify Function with a link to the official ABX NetLine login.

- Click **Sign in with ABX** to open the official ABX site in a new tab.
- Enter your username/password **only on the official ABX site**.
- Login to ABX does **not** authenticate CrewDeck or import a roster. All CrewDeck roster content is fictional demo data.
- The old `netlify/functions/login.mjs` has been removed; **delete it from your GitHub repository too** when deploying this version.
- Upload all files at repository root; Netlify publish directory `.`.
- This test does not require an OIDC client registration. Full integration will require ABX-approved authorization and a dedicated redirect URI/client.
