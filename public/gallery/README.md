# Gallery images

Drop tattoo photos here. The gallery references them by exact filename — see
`lib/gallery.ts` for the list. Recommended:

- 1200–1600px on the long edge, JPEG/WebP
- Names follow `<style>-<n>.jpg` (e.g. `blackwork-1.jpg`, `fineline-2.jpg`)
- Anything missing falls back to a styled SVG placeholder, so the layout
  doesn't break while you're swapping things in.

To add a new piece, append to `GALLERY` in `lib/gallery.ts` with the matching
`src` path.
