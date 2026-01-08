import { notFound } from 'next/navigation';
import { PROJECTS } from '@/content/projects';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-semibold">{project.title}</h1>

      <p className="mb-8 text-gray-600">{project.intro}</p>

      <div className="space-y-6">
        {project.sections.map((section, index) => {
          if (section.type === 'text') {
            return (
              <section key={index}>
                {section.title && (
                  <h2 className="mb-2 text-xl font-medium">
                    {section.title}
                  </h2>
                )}
                <p className="text-gray-700">{section.body}</p>
              </section>
            );
          }

          return null;
        })}
      </div>
    </main>
  );
}