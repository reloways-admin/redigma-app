import Link from 'next/link';

export function HomeHero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-center">
      <div className="mb-4 flex items-center justify-center gap-2 text-sm font-medium text-gray-700">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        <span>Ready for work</span>
      </div>

      <h1 className="mb-6 text-4xl font-semibold">
        Building clarity into digital products
      </h1>

      <p className="mb-8 mx-auto max-w-2xl text-lg text-gray-700">
        I help founders and product teams shape clear, usable products –
        from early definition to improving existing systems.
      </p>

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        <span className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-800">
          Product UX
        </span>
        <span className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-800">
          Structure
        </span>
        <span className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-800">
          Product thinking
        </span>
      </div>

      <Link
        href="/feedback"
        className="inline-flex items-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white"
      >
        Get feedback on your product
      </Link>
    </section>
  );
}