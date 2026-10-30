# CrewDeck v0.3 — experimental ABX login

This package preserves the v0.2 Aviation Premium UI and adds an actual browser -> Netlify Function -> ABX login endpoint **test**.

## Deployment
1. Import this folder as a Git repository in Netlify (recommended), with publish directory `.` and functions directory `netlify/functions`. Do **not** upload only the HTML as a static deploy: serverless functions must be deployed too.
2. Use your own Netlify account and HTTPS site. Inspect the code before entering any corporate credentials. Confirm ABX permits the integration and the credential handling.
3. The login form sends username/password to `/.netlify/functions/login` over HTTPS. The function sends a single JSON POST to the identified ABX endpoint, does not store credentials, and returns a sanitized result.
4. The ABX request payload is UNKNOWN. The function currently assumes `{username,password}`; this may fail even with valid credentials. It does not implement cookies, token/session management or roster sync. Never interpret the login test as production-ready authentication.
5. The rest of the app is clearly marked DEMO and contains fictional sample data.

## Security / next steps
Validate the actual documented/approved NetLine login request schema without copying passwords, tokens or cookies. Add robust session management and CSRF protection, rate limits, secure logs and privacy review before inviting other pilots. Never commit credentials to source control.
