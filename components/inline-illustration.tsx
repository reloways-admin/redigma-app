import { readFile } from 'node:fs/promises';
import path from 'node:path';

/**
 * Inlines an SVG from /public into the DOM.
 *
 * next/image renders SVGs inside an <img>, which makes their internals
 * unreachable to CSS, so nothing inside can be animated. Inlining puts the
 * shapes in the document where hover styles can reach them.
 *
 * The file is read at build time (these pages are statically generated) and
 * the source is our own repo, never user input.
 */
export async function InlineIllustration({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  let markup: string;
  try {
    markup = await readFile(path.join(process.cwd(), 'public', src), 'utf8');
  } catch {
    return null;
  }

  markup = markup
    // Drop the intrinsic size so the SVG fills its container
    .replace(/<svg([^>]*?)\swidth="[^"]*"/, '<svg$1')
    .replace(/<svg([^>]*?)\sheight="[^"]*"/, '<svg$1')
    // Decorative: keep it out of the accessibility tree
    .replace(/<svg/, '<svg aria-hidden="true" focusable="false"');

  return (
    <span
      className={className}
      // Local, trusted, build-time asset.
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}

export default InlineIllustration;
