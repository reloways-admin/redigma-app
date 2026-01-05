
import Link from 'next/link';

export function HomeMiniProduct() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-2xl">
        <h2 className="mb-4 text-2xl font-semibold">
          A quick UX perspective on your product or idea
        </h2>

        <p className="mb-6 text-gray-700">
          Before committing to anything, I offer a simple starting point.
        </p>

        <p className="mb-3 text-sm font-medium text-gray-600">Send me:</p>
        <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
          <li>a live product</li>
          <li>early designs</li>
          <li>or even a rough idea</li>
        </ul>

        <p className="mb-3 text-sm font-medium text-gray-600">I’ll reply with:</p>
        <ul className="mb-8 list-disc space-y-2 pl-5 text-gray-700">
          <li>3–4 focused UX observations</li>
          <li>what’s unclear or risky</li>
          <li>what I’d simplify or rethink</li>
        </ul>

        <p className="mb-6 text-gray-700">
          No decks. No sales pitch. Just useful feedback.
        </p>

        <Link
          href="/feedback"
          className="inline-flex items-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white"
        >
          Send your product or idea
        </Link>

        <p className="mt-4 max-w-2xl text-sm text-gray-500">
          This feedback often helps decide whether refining, rebuilding, or
          building an MVP makes sense.
        </p>
      </div>
    </section>
  );
}