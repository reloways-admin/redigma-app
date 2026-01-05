import Image from 'next/image';

export function HomeAbout() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Text */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold">About</h2>

          <p className="mb-4 text-gray-700">
            I’m Amir, a product-focused UX/UI designer.
          </p>

          <p className="mb-4 text-gray-700">
            I enjoy working with products in motion – sometimes improving what
            already exists, sometimes helping teams move from idea to working MVP.
          </p>

          <p className="text-gray-700">
            Based in Berlin. Working internationally.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/home/amir-shalev.png"
            alt="Amir Shalev"
            width={420}
            height={420}
            className="rounded-xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
