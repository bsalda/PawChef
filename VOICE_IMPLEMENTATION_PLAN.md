# MealMutt Brand Voice — Step-by-Step Implementation Plan

**Goal:** Get `BRAND_VOICE.md` doing actual work across every surface MealMutt speaks on, without adding overhead to your 1–2 hr/week marketing budget.

**Total setup time:** ~90 minutes, one sitting.
**Ongoing cost:** ~10 minutes per piece of copy you generate (vs. 30+ writing from scratch).

> Note: this plan references the BRAND_VOICE.md that lives in this same folder (`C:\Users\bryan\Dog food calculator\`). The "appendix" referenced below is the section starting at "Appendix: External marketing surfaces" — added after the original doc.

---

## Phase 1 — Wire it into Claude Code (30 min, do today)

### Step 1.1: Confirm the files are in the right place
Both files live in your code repo:
- `C:\Users\bryan\Dog food calculator\BRAND_VOICE.md`
- `C:\Users\bryan\Dog food calculator\CLAUDE.md`

If you haven't yet, commit them:
```bash
cd "C:\Users\bryan\Dog food calculator"
git add BRAND_VOICE.md CLAUDE.md VOICE_IMPLEMENTATION_PLAN.md
git commit -m "Add brand voice doc, CLAUDE.md, implementation plan"
```

### Step 1.2: CLAUDE.md is already wired
The `CLAUDE.md` in this folder already includes a pointer to `BRAND_VOICE.md`. Claude Code auto-loads `CLAUDE.md` at the start of every session in this folder, so the voice rules are loaded into context by default. You don't have to re-explain them.

### Step 1.3: Verify it works
Start a fresh Claude Code session in `C:\Users\bryan\Dog food calculator\` and run:

> "What does our brand voice doc say to never use, and what's the rule for Reddit replies?"

If Claude lists items from the AI-slop list and the "useful if removed" rule, you're wired up. If it doesn't, the file isn't being picked up — check that `CLAUDE.md` is in the repo root and that Claude Code was started in this folder.

---

## Phase 2 — Apply it to the highest-leverage surfaces (45 min, do this week)

Order matters. Each one teaches you something for the next.

### Step 2.1: Audit the landing page hero (15 min)
**Why first:** The hero converts every Reddit and TikTok click you'll ever generate. A bad hero leaks every downstream marketing tactic.

The current hero (per the existing doc's "Real examples from the app" section) is:
> *Stop guessing what to feed your dog. Get a recipe built specifically for their weight, age, and stomach — in 60 seconds. Free.*

That actually passes the voice doc cleanly. So the audit isn't "rewrite the hero" — it's:

> "Per @BRAND_VOICE.md, audit the rest of `index.html` against the AI-slop list and the original tone-by-situation rules. List every line that violates either, with line numbers and suggested rewrites."

Ship the highest-impact fixes. Skip cosmetic ones.

### Step 2.2: Draft the FAQ (15 min)
Your project memory says you're planning an FAQ for acid reflux, allergy proteins, calcium, and portion sizing. This is the single biggest content asset you can ship — it serves the ~62% of visitors who don't scroll, and it's evergreen SEO surface.

Run:
> "Per @BRAND_VOICE.md, draft FAQ entries for: (1) acid reflux in dogs and what to feed, (2) the most common protein allergens and how MealMutt filters them, (3) calcium supplementation in home-cooked dog food, (4) portion sizing by weight. Use the original FAQ tone (matter-of-fact, expert-adjacent). Each answer 80–150 words. Cite sources where claims are non-obvious. End each with a one-sentence link to the relevant action on the site."

**Critical:** review every claim before publishing. Pet nutrition is a trust-and-safety topic. You are personally responsible for accuracy, not the model.

### Step 2.3: Update the Stripe receipt / license email (15 min)
Open your Zapier flow. Replace the current celebratory email copy with the exact target copy from the appendix:

```
Your MealMutt key:
[KEY]

Paste it into Settings → License. If it doesn't work,
reply to this email — I'll fix it.

— Bryan
```

5-minute edit. Removes a tone violation that fires every single purchase. Keep this exact copy when the Vercel webhook replaces Zapier at 50 paying customers.

---

## Phase 3 — Reddit playbook (use it manually, don't automate it)

You're in the listening phase on r/dogfood, r/rawpetfood, r/dogs, r/homemadedogfood. Good. Do NOT automate Reddit. Reddit will detect, ban, and shadow-ban you faster than you can say "Cron job."

What to do when you see a thread worth replying to:

1. Copy the original post into Claude Code.
2. Run: *"Per @BRAND_VOICE.md appendix Reddit subvoice section, draft 3 reply variants. Each must pass the 'useful if removed' test. Lead with my dog story, mention MealMutt at most once, include the disclosure line."*
3. Pick one. Edit it in your own words for at least 30 seconds — Reddit smells unedited LLM output.
4. Wait at least 30 minutes after the OP before replying. Bot-fast replies get flagged.
5. Log the URL in a `reddit-log.md` file. After 7 days, append the upvote count.

After ~10 of these, the ones with positive engagement become your "real examples that worked" entries — feed them back into the brand voice doc.

---

## Phase 4 — TikTok / Reels captions (only when you have video)

Don't build this yet if you don't have video. When you do:

1. Drop the video script or transcript into Claude.
2. Run: *"Per @BRAND_VOICE.md appendix TikTok rules, generate 5 caption variants. 80-char hook. 3–5 hashtags relevant to allergic-dog parents."*
3. Post manually. Track which captions outperform.

**Trap to avoid:** the source video's "creative director / multimodal carousel machine" pitch (Level 4) implies you should be running JSON-prompt-template image generation. You shouldn't, yet. You don't have the audience to justify the build, and your niche punishes generic visual content. Skip until you have at least one TikTok hit organically.

---

## Phase 5 — Maintenance loop (10 min/week, ongoing)

Every Friday for 10 minutes:

1. Open `BRAND_VOICE.md`.
2. Add anything that worked to the appropriate "Real examples" section — actual posts with engagement numbers.
3. Add any new slop pattern you noticed (or failed to avoid) to the explicit list.
4. If you wrote in a new surface this week (new email type, new platform), add a row to the surface tone table.

This is the "living document" piece. The difference between a voice doc that's stale in 4 weeks and one that compounds.

---

## What I'm NOT having you do (and why)

These come from the source video but are explicitly cut for your situation:

| Skipped | Why |
|---|---|
| Level 3 inspiration scraper | Your inspiration is already clear: top weekly threads in 4 specific subreddits. Skim them in 5 min/week. Building a scraping pipeline is a 4-hour build for a 5-minute manual task. Defer until you're spending >30 min/week on input gathering. |
| Level 4 carousel/JSON image templates | Premature. You have no audience to justify the build, and the audience you're trying to reach (allergic-dog parents on Reddit) isn't on visual-first platforms in volume. |
| Level 5 multi-platform content cascade | You don't have a base content asset to cascade from. Skip until you have one piece that worked, then repurpose it. |
| Level 6 cron-scheduled posting | Will get you banned from Reddit. The 30-second taste check before every post is the moat against AI slop. |
| Level 7 autonomous AI avatar | Direct anti-pattern for a trust-based pet-health brand. Don't. |

Revisit these in 90 days *only if* the manual workflow has produced clear signal that the bottleneck is volume, not quality.

---

## Success metrics (so you know if this is working)

Track monthly. If they don't move within 60 days, the bottleneck isn't voice — it's distribution or product.

- **Landing page conversion rate** (sessions → recipe_generated). Voice change should lift this. If it doesn't, your hero isn't the issue.
- **Reddit comment upvote ratio.** Target: average ≥ +3 upvotes, no removals.
- **FAQ scroll depth** in GA4. The FAQ should pull the ~62% who don't currently scroll past the fold.
- **Email reply rate** to Stripe receipts. Should be near zero with the rewritten version (it's clearer). If you're getting more replies, the new copy confused someone — fix it.

---

## One last critique you didn't ask for

The source video frames Claude Code as a "marketing machine." For your stage (pre-50 paying customers, solo, niche audience), the highest-leverage thing isn't a machine — it's **5 great Reddit comments per week that build trust**. The voice doc exists to make those 5 comments faster to write and more consistent.

Don't let the romance of automation pull you away from the actual lever, which is showing up as a useful human in 4 specific communities for the next 6 months.
