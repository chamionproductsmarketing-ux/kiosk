# CLAUDE.md — Solora Fresh Tradeshow Digital Kiosk

## Project Overview
A fullscreen touchscreen kiosk web app for Solora Fresh to run at produce industry tradeshows. Built with Next.js 14+ (App Router), TypeScript, Tailwind CSS, and Framer Motion. Deployed to Vercel.

**Target audience**: Produce marketing companies, pack-houses, and growers visiting the Solora Fresh booth.

**Key behavior**:
- After 60 seconds of inactivity, the app transitions into an auto-rotating fullscreen slideshow (attract mode / screensaver loop).
- Any touch/click on the slideshow exits back to the interactive kiosk.
- The kiosk is designed for large touchscreens (1080p–4K), landscape orientation, no scrollbars.

---

## Brand & Content

### Company Info
- **Company**: Solora Fresh (formerly Orora Fresh, before that Landsberg Fresh)
- **Founded**: 1952 as Karl H. Landsberg Co. in Vernon, CA
- **What they do**: Packaging and MRO supplier for the fresh produce industry
- **Tagline options**: "Fresh Produce Packaging Solutions" / "From Greenhouse to Grocery"

### Brand Colors
- Primary Green: `#1a5b2e` (deep forest green)
- Secondary Green: `#237a3b`
- Accent Orange: `#e8712b`
- Light Orange: `#f5a623`
- White: `#ffffff`
- Off-white/Cream: `#f8f6f0`
- Dark text: `#1a1a1a`
- Subtle gray: `#6b7280`

### Product Lines (12 categories)
1. Corrugated Products
2. Clamshells
3. Top Seal Films
4. Tray Liners
5. Labels
6. Flexible Pouches & Bags
7. Corner Boards
8. Pallet Wrap
9. Personal Protective Equipment
10. Shrink Films
11. Trays (including Habitat™)
12. Overwrap Films

---

## Session Protocol

### ON START (every new session)
1. Read this entire CLAUDE.md first
2. Read SESSION_HANDOFF.md if it exists — this is 
   your continuity from the last session
3. Read SCRIBE_EXPORT.md if it exists — this is 
   accumulated business domain knowledge
4. You are continuing work. Do not re-discover 
   things that are already documented.

### DURING SESSION
- When you learn a new business fact, note it 
  mentally for the Scribe export
- When you make a decision, document why
- When you discover a bug or quirk, note it
- When the user corrects you, that correction 
  is high-value knowledge

### ON CLOSE (when user says "close", "done", 
"wrap up", "end session", or "scribe export")

Step 1 — Save uncommitted work:
git status
If uncommitted changes exist:
- Stage and commit: "wip: session close [date] — 
  [brief description]"
- Do NOT push unless on a feature branch

Step 2 — Export knowledge:
Check if SCRIBE_EXPORT.md exists in project root.
- EXISTS: Append new facts under header:
  --- Session [YYYY-MM-DD] ---
- DOES NOT EXIST: Create it

Format per line:
[CONFIRMED] fact | tags: tag1, tag2
[OBSERVED] fact | tags: tag1, tag2  
[INFERRED] fact | tags: tag1, tag2

Rules:
- Only NEW facts not already in the file
- No code details (that's in git)
- No opinions or plans
- Business facts, data discoveries, integration 
  quirks, field mappings, bug root causes, 
  decisions and their reasoning

Step 3 — Update handoff:
Check if SESSION_HANDOFF.md exists.
- EXISTS: Overwrite entirely with current state
- DOES NOT EXIST: Create it

Include:
- Project name and repo URL
- Current branch
- What was worked on this session
- What's complete
- What's in progress (branch, state)
- What's blocked and why
- Known bugs discovered but not fixed
- Next steps in priority order
- Last successful deploy (commit, URL)
- Environment notes (token changes, config changes)

Step 4 — Commit and push:
git add CLAUDE.md SCRIBE_EXPORT.md SESSION_HANDOFF.md
git commit -m "docs: session protocol + knowledge
export [YYYY-MM-DD]"
git push origin [current-branch]

Step 5 — Report:
- New facts appended (count)
- Branch and commit hash
- Safe to close: yes/no
