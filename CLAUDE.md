# MealMutt — Claude Code instructions

This file is auto-loaded when Claude Code starts in this folder. Keep it short. Anything long lives in dedicated files referenced here.

## Project at a glance

MealMutt is a freemium PWA (live at mealmutt.com) that generates AAFCO-aware home-cooked dog food recipes, with allergen filtering for owners of dogs with food allergies or GI sensitivities. Hosted on GitHub Pages. Stripe + Zapier handles license keys (Vercel webhook planned at 50 paying customers). Built solo by Bryan.

## Marketing & copy — non-negotiable

For ANY public-facing copy — landing page, FAQ, Reddit replies, Facebook group replies, TikTok captions, Stripe emails, push notifications, app strings — you MUST follow `@BRAND_VOICE.md` in this folder.

Before generating copy:
1. Read `BRAND_VOICE.md` (both the original sections and the appendix on external surfaces).
2. Identify which surface the copy is for, and use the matching tone row from the surface table.
3. Self-check against the explicit AI-slop list in the appendix. If any phrase from that list is in your draft, rewrite.
4. For Reddit/FB replies specifically, run the "useful if removed" test before output.

The voice doc is the source of truth. If something in code copy contradicts it, the voice doc wins and the code should be updated.

## Health/safety guardrails

This is a pet-health-adjacent product. Treat all generated copy that touches nutrition, allergens, supplements, or veterinary topics as trust-and-safety-sensitive:

- Never use "cure," "heal," "treat," or "fix" for any condition. Use "support," "may help with," "designed around."
- Never imply veterinary endorsement that doesn't exist. No "vet-approved" without a named, real vet.
- Never recommend specific supplement dosages without "consult your veterinarian."
- For medical-condition claims: hedge, defer to vet, link to source where possible.

## When generating new content

For new marketing assets (Reddit drafts, FAQ entries, TikTok captions, etc.), follow `@VOICE_IMPLEMENTATION_PLAN.md` for the workflow — which surface to start with, what prompt to use, what success looks like.

## What NOT to automate

Never set up scheduled/automated posting to Reddit, Facebook groups, or any community where AI-generated content would violate norms. Always require human review (Bryan) before publishing community content.
