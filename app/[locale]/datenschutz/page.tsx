// Datenschutzerklärung / Privacy Policy
//
// ⚠️ TWO FACTS MUST BE CONFIRMED BEFORE THIS GOES LIVE (see HOSTING and RESEND_DPA below).
// Advisory draft, reviewed by Legal_Compliance_Counsel.md. Not legal advice.
// Have a Rechtsanwalt check it before relying on it.

import type { Metadata } from "next";

// ── HOSTING ──────────────────────────────────────────────────────────────────
// Confirmed from the live response headers: `server: Vercel` and a
// `x-vercel-id` of `fra1`, Vercel's Frankfurt region.
// TWO THINGS TO CONFIRM: that this address is Vercel's current registered one,
// and that fra1 is the project's configured region rather than just where a
// request happened to land. Both are visible in the Vercel dashboard.
const HOSTING = {
  name: "Vercel Inc.",
  address: "340 S Lemon Ave #4133, Walnut, CA 91789, USA",
  region: "Frankfurt, Deutschland (fra1)",
};
// Set to true once the AVV / DPA with Vercel is signed and filed.
const VERCEL_DPA = false;
// Set to true once the AVV / DPA with Resend is actually signed and filed.
const RESEND_DPA = false;
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Privacy Policy | Redigma",
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-semibold">
        Datenschutzerklärung / Privacy Policy
      </h1>

      {/* ══════════════════════════ DEUTSCH ══════════════════════════ */}
      <section className="mb-16">
        <h2 className="mb-6 text-xl font-medium">Deutsch</h2>

        <h3 className="mb-2 mt-8 font-medium">1. Verantwortlicher</h3>
        <p className="mb-4">
          Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
          Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <p className="mb-4">
          <strong>Redigma</strong>
          <br />
          Inhaber: Amir Shalev
          <br />
          Siegfriedstraße 15
          <br />
          12051 Berlin, Deutschland
          <br />
          E-Mail:{" "}
          <a href="mailto:amir@redigma.com" className="underline">
            amir@redigma.com
          </a>
        </p>
        <p className="mb-4">
          Ein Datenschutzbeauftragter ist gesetzlich nicht erforderlich und wurde
          nicht bestellt.
        </p>

        <h3 className="mb-2 mt-8 font-medium">2. Hosting und Server-Logfiles</h3>
        <p className="mb-4">
          Diese Website wird gehostet bei {HOSTING.name}, {HOSTING.address}.
          Serverstandort: {HOSTING.region}. Beim Aufruf der Website werden
          automatisch Informationen in Server-Logfiles erfasst, die Ihr Browser
          übermittelt: IP-Adresse, Datum und Uhrzeit der Anfrage, aufgerufene
          Seite, Referrer-URL, Browsertyp und Betriebssystem.
        </p>
        <p className="mb-4">
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte
          Interesse liegt im technisch fehlerfreien Betrieb und in der Sicherheit
          der Website. Diese Daten werden nicht mit anderen Datenquellen
          zusammengeführt und nach kurzer Zeit gelöscht.
        </p>
        <p className="mb-4">
          Die Auslieferung erfolgt aus dem Rechenzentrumsstandort{" "}
          {HOSTING.region}. {HOSTING.name} ist ein US-amerikanisches Unternehmen,
          sodass ein Zugriff aus den USA nicht ausgeschlossen werden kann.
          {VERCEL_DPA ? (
            <>
              {" "}
              Es besteht ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO; die
              Übermittlung erfolgt auf Grundlage der EU-Standardvertragsklauseln.
            </>
          ) : (
            <>
              {" "}
              [HINWEIS: Auftragsverarbeitungsvertrag nach Art. 28 DSGVO mit dem
              Hoster vor Veröffentlichung bestätigen.]
            </>
          )}
        </p>

        <h3 className="mb-2 mt-8 font-medium">3. Kontakt- und Feedbackformular</h3>
        <p className="mb-4">
          Wenn Sie das Formular auf dieser Website nutzen, verarbeiten wir die
          Angaben, die Sie dort machen: Name, E-Mail-Adresse, Projektphase,
          gewünschte Leistungen, Produkt- oder Figma-Link und Ihre Nachricht.
        </p>
        <p className="mb-4">
          Diese Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage
          verwendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
          (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten
          werden nicht in einer Datenbank gespeichert, sondern per E-Mail
          zugestellt, und verbleiben in unserem Postfach, bis der Zweck entfällt
          und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
        <p className="mb-4">
          Für den E-Mail-Versand nutzen wir <strong>Resend</strong> (Resend, Inc.,
          USA) als Auftragsverarbeiter. Dabei werden die von Ihnen eingegebenen
          Daten in die USA übermittelt.
          {RESEND_DPA ? (
            <>
              {" "}
              Es besteht ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO; die
              Übermittlung erfolgt auf Grundlage der EU-Standardvertragsklauseln.
            </>
          ) : (
            <>
              {" "}
              [HINWEIS: Auftragsverarbeitungsvertrag nach Art. 28 DSGVO vor
              Veröffentlichung bestätigen.]
            </>
          )}
        </p>

        <h3 className="mb-2 mt-8 font-medium">4. Schriftarten</h3>
        <p className="mb-4">
          Diese Website bindet Schriftarten lokal ein. Sie werden beim Build
          heruntergeladen und von unserem eigenen Server ausgeliefert. Beim
          Aufruf der Website wird <strong>keine Verbindung zu Servern von Google
          oder anderen Dritten</strong> hergestellt, und es wird keine IP-Adresse
          an Dritte übertragen.
        </p>

        <h3 className="mb-2 mt-8 font-medium">
          5. Cookies, Tracking und Analyse
        </h3>
        <p className="mb-4">
          Diese Website setzt <strong>keine Cookies</strong> zu Analyse-, Marketing-
          oder Trackingzwecken. Es sind keine Analysedienste, Werbenetzwerke,
          Social-Media-Plugins oder eingebetteten Inhalte Dritter im Einsatz. Aus
          diesem Grund ist keine Einwilligung nach § 25 TDDDG erforderlich und es
          wird kein Cookie-Banner angezeigt.
        </p>

        <h3 className="mb-2 mt-8 font-medium">6. Ihre Rechte</h3>
        <p className="mb-4">
          Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16),
          Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
          Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO). Eine
          erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft
          widerrufen.
        </p>
        <p className="mb-4">
          Wenden Sie sich dafür an{" "}
          <a href="mailto:amir@redigma.com" className="underline">
            amir@redigma.com
          </a>
          . Unabhängig davon steht Ihnen ein Beschwerderecht bei einer
          Aufsichtsbehörde zu, für uns: Berliner Beauftragte für Datenschutz und
          Informationsfreiheit, Alt-Moabit 59-61, 10555 Berlin.
        </p>

        <h3 className="mb-2 mt-8 font-medium">7. SSL/TLS-Verschlüsselung</h3>
        <p className="mb-4">
          Diese Website nutzt aus Sicherheitsgründen eine TLS-Verschlüsselung.
          Eine verschlüsselte Verbindung erkennen Sie an „https://" in der
          Adresszeile Ihres Browsers.
        </p>
      </section>

      {/* ══════════════════════════ ENGLISH ══════════════════════════ */}
      <section>
        <h2 className="mb-6 text-xl font-medium">English</h2>
        <p className="mb-4 text-sm opacity-70">
          This English version is provided for convenience. In case of any
          discrepancy, the German version above prevails.
        </p>

        <h3 className="mb-2 mt-8 font-medium">1. Controller</h3>
        <p className="mb-4">
          The controller for data processing on this website under the General
          Data Protection Regulation (GDPR) is:
        </p>
        <p className="mb-4">
          <strong>Redigma</strong>
          <br />
          Owner: Amir Shalev
          <br />
          Siegfriedstraße 15
          <br />
          12051 Berlin, Germany
          <br />
          Email:{" "}
          <a href="mailto:amir@redigma.com" className="underline">
            amir@redigma.com
          </a>
        </p>
        <p className="mb-4">
          A data protection officer is not legally required and none has been
          appointed.
        </p>

        <h3 className="mb-2 mt-8 font-medium">2. Hosting and server logs</h3>
        <p className="mb-4">
          This website is hosted by {HOSTING.name}, {HOSTING.address}. Server
          region: {HOSTING.region}. When you visit the site, your browser
          automatically transmits information that is recorded in server log
          files: IP address, date and time of the request, the page requested,
          referrer URL, browser type and operating system.
        </p>
        <p className="mb-4">
          The legal basis is Art. 6(1)(f) GDPR. The legitimate interest is the
          technically sound and secure operation of the website. This data is not
          combined with other sources and is deleted after a short period.
        </p>
        <p className="mb-4">
          The site is served from {HOSTING.region}. {HOSTING.name} is a US
          company, so access from the USA cannot be ruled out.
          {VERCEL_DPA ? (
            <>
              {" "}
              A data processing agreement under Art. 28 GDPR is in place and the
              transfer relies on the EU Standard Contractual Clauses.
            </>
          ) : (
            <>
              {" "}
              [NOTE: confirm the Art. 28 GDPR data processing agreement with the
              host before publishing.]
            </>
          )}
        </p>

        <h3 className="mb-2 mt-8 font-medium">3. Contact and feedback form</h3>
        <p className="mb-4">
          If you use the form on this website, we process the details you enter:
          name, email address, project stage, services of interest, a product or
          Figma link, and your message.
        </p>
        <p className="mb-4">
          This information is used solely to handle your enquiry. The legal basis
          is Art. 6(1)(b) GDPR (pre-contractual steps) or Art. 6(1)(f) GDPR
          (legitimate interest in responding to enquiries). The data is not
          stored in a database. It is delivered by email and stays in our inbox
          until the purpose no longer applies and no statutory retention
          obligation prevents deletion.
        </p>
        <p className="mb-4">
          We use <strong>Resend</strong> (Resend, Inc., USA) as a processor for
          email delivery. The data you enter is therefore transferred to the USA.
          {RESEND_DPA ? (
            <>
              {" "}
              A data processing agreement under Art. 28 GDPR is in place and the
              transfer relies on the EU Standard Contractual Clauses.
            </>
          ) : (
            <>
              {" "}
              [NOTE: confirm the Art. 28 GDPR data processing agreement before
              publishing.]
            </>
          )}
        </p>

        <h3 className="mb-2 mt-8 font-medium">4. Fonts</h3>
        <p className="mb-4">
          Fonts on this website are self-hosted. They are downloaded at build
          time and served from our own server.{" "}
          <strong>No connection is made to Google or any other third party</strong>{" "}
          when you load the site, and no IP address is passed to a third party.
        </p>

        <h3 className="mb-2 mt-8 font-medium">
          5. Cookies, tracking and analytics
        </h3>
        <p className="mb-4">
          This website sets <strong>no cookies</strong> for analytics, marketing or
          tracking. No analytics services, ad networks, social media plugins or
          embedded third-party content are used. For that reason no consent under
          § 25 TDDDG is required and no cookie banner is shown.
        </p>

        <h3 className="mb-2 mt-8 font-medium">6. Your rights</h3>
        <p className="mb-4">
          You have the right of access (Art. 15 GDPR), rectification (Art. 16),
          erasure (Art. 17), restriction of processing (Art. 18), data
          portability (Art. 20) and objection (Art. 21 GDPR). Where you have
          given consent, you may withdraw it at any time with effect for the
          future.
        </p>
        <p className="mb-4">
          To exercise these rights, contact{" "}
          <a href="mailto:amir@redigma.com" className="underline">
            amir@redigma.com
          </a>
          . You also have the right to lodge a complaint with a supervisory
          authority. Ours is: Berliner Beauftragte für Datenschutz und
          Informationsfreiheit, Alt-Moabit 59-61, 10555 Berlin, Germany.
        </p>

        <h3 className="mb-2 mt-8 font-medium">7. SSL/TLS encryption</h3>
        <p className="mb-4">
          This website uses TLS encryption for security. You can recognise an
          encrypted connection by the "https://" prefix in your browser's address
          bar.
        </p>
      </section>
    </main>
  );
}
