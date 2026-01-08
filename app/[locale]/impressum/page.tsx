

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-semibold">Impressum</h1>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-medium">Deutsch</h2>

        <p className="mb-4">Angaben gemäß § 5 TMG</p>

        <p className="mb-4">
          <strong>Redigma</strong><br />
          Inhaber: Amir Shalev<br />
          Siegfriedstraße 15<br />
          12051 Berlin<br />
          Deutschland
        </p>

        <p className="mb-4">
          Telefon: +49 155 60370097<br />
          E-Mail: <a href="mailto:amir@redigma.com" className="underline">amir@redigma.com</a>
        </p>

        <p className="mb-4">
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
          DE451954343
        </p>

        <p className="mb-4">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
          Amir Shalev, Siegfriedstraße 15, 12051 Berlin
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-medium">English</h2>

        <p className="mb-4">
          <strong>Redigma</strong><br />
          Owner: Amir Shalev<br />
          Siegfriedstraße 15<br />
          12051 Berlin<br />
          Germany
        </p>

        <p className="mb-4">
          Phone: +49 155 60370097<br />
          Email: <a href="mailto:amir@redigma.com" className="underline">amir@redigma.com</a>
        </p>

        <p className="mb-4">
          VAT ID (USt-IdNr.):<br />
          DE451954343
        </p>

        <p className="mb-4">
          Person responsible for editorial content (per § 55(2) RStV):<br />
          Amir Shalev, Siegfriedstraße 15, 12051 Berlin
        </p>
      </section>
    </main>
  );
}