import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Redigma. Amir Shalev.
        </p>

        <div className="flex items-center gap-4 text-sm">
          <Link href="/feedback" className="text-gray-600 hover:text-gray-900">
            Get feedback
          </Link>
          <a
            href="mailto:amir@redigma.com"
            className="text-gray-600 hover:text-gray-900"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}