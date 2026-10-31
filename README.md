# CrewDeck v0.5 — Roster Engine prototype

Preserves v0.4 Aviation Premium design and official ABX portal link.

## New
- Roster tab: local JSON parser for `result.events` NetLine/IADP-shaped responses.
- Shows event IDs, airport codes, UTC timestamps and sanitized details in a local scrollable list.
- File stays in browser memory; no upload, backend, persistence, or ABX authentication.
- Clear imported data button. Limit 8 MB / 20,000 events; first 200 displayed.

## Important limitations
- **No automatic roster synchronization yet.** Official ABX link opens in a separate tab.
- Main dashboard, calendar, flights and crew remain **fictional demonstration data**, and are not populated from JSON.
- Do not publish actual corporate roster exports. Follow ABX policy.
- A production integration requires an ABX-authorized authentication/data access mechanism.

## Deploy
Replace repository root files with this package, commit and wait for Netlify deployment. No Netlify functions are needed.
