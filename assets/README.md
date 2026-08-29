# assets/

Source files. **Nothing in here is served to visitors.**

Anything Next.js should serve lives in `public/`. This folder sits outside it
deliberately, so full-resolution originals stay in the project without being
downloaded by anyone visiting the site.

## Why it exists

Images in `public/` are cropped and compressed for a specific slot. Re-cropping
from those degrades the result every time, and once the original is gone you
cannot go back. Keep the untouched file here and always derive from it.

## originals/

Full-resolution, uncropped, as they came from the camera or the client.
Never edit these in place. Crop or resize into `public/images/...` instead.

| File | Used to produce |
|---|---|
| `amir-shalev-studio-2026.jpg` | `public/images/home/amir-about-v3.jpg` (4:5 About portrait), `amir-avatar.jpg` (160px avatar) |
| `eyal-lahav-160.jpg` | `public/images/home/eyal.jpg` (160px avatar). This is already small; the untouched original is still with Eyal. |

## Deriving a new image

Pillow is the simplest route, and it is already available:

```python
from PIL import Image
im = Image.open('assets/originals/amir-shalev-studio-2026.jpg').convert('RGB')
im.crop((left, top, right, bottom)) \
  .resize((1000, 1250), Image.LANCZOS) \
  .save('public/images/home/<name>.jpg', 'JPEG', quality=86,
        optimize=True, progressive=True)
```

**Give the output a new filename whenever the content changes.** Next caches
optimised images by URL, so reusing a name serves the old picture from cache
even after the file on disk has changed. This has bitten us already.

## A note on repo size

These are large binaries in git, and git keeps every version forever. Originals
do not change, so each is stored once and that is fine. Do not use this folder
for screenshots, exports, or anything regenerated often.
