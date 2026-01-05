import Image from 'next/image';


export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h2 className="mb-4 text-3xl font-semibold">
        Real feedback <span className="text-purple-600">real results</span>
      </h2>

      <div className="mt-16 grid gap-16 md:grid-cols-2 text-left">
        <div>
          <p className="text-lg leading-relaxed text-gray-800">
            I was so impressed with Amir’s original approach, creativity, and manners,
            that I even had him work on my own brand. Even after our project was done,
            I still consulted with Amir – my satisfaction was clearly his priority.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <Image
              src="/images/home/keren.png"
              alt="Keren Rightler"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="font-medium">
              Keren Rightler
              <div className="text-sm text-gray-500">Owner, Method Queen</div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-gray-800">
            Amir’s ability to communicate ideas visually is truly remarkable.
            His work is both technically proficient and creatively vibrant.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <Image
              src="/images/home/adi.png"
              alt="Adi Nudel"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="font-medium">
              Adi Nudel
              <div className="text-sm text-gray-500">CEO, Financial Cat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}