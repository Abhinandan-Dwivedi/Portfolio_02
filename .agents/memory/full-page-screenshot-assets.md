---
name: Full-page screenshot assets
description: Off-screen image loading behavior in Replit app-preview captures.
---

For full-page app-preview screenshots, below-the-fold project images may not appear unless image loading is explicitly eager, even when the asset URLs work. For a small screenshot gallery, use eager loading and verify the static asset URLs separately; reserve lazy loading for heavier media.

**Why:** the full-page capture can happen without scrolling through the page, so below-the-fold images may not be requested or decoded before the snapshot.

**How to apply:** when a full-page screenshot shows empty image frames, verify the asset route first, then explicitly eager-load only the small images needed in that page.
