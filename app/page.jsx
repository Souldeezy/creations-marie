import Image from "next/image";
import { siteContent } from "../content/siteContent";
import CreationCarousel from "./CreationCarousel";

function ThreadDivider() {
  return (
    <svg
      className="thread-divider"
      viewBox="0 0 222 42"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 26c18-7 26-2 39 1 14 3 22-5 37-4 16 1 21 6 37 3 18-4 26-6 43-3 17 3 28 3 41-1 7-2 13-2 19-1" />
      <path d="M4 28c17-6 26-1 38 2 15 2 23-5 37-4 16 1 22 5 37 3 18-4 27-5 43-2 18 2 29 2 41-2 8-2 14-1 19-1" opacity="0.3" />
    </svg>
  );
}

export default function Home() {
  const { atelierName, hero, creationsIntro, creations, contact, footerText } =
    siteContent;
  const regularCreations = creations.filter((item) => item.imageSide !== "full");
  const patchwork = creations.find((item) => item.imageSide === "full");

  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#accueil" aria-label={`${atelierName} — accueil`}>
            <span className="brand-mark" aria-hidden="true">✳</span>
            <span>{atelierName}</span>
          </a>
          <nav className="main-nav" aria-label="Navigation principale">
            <a href="#creations">Créations</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="contenu">
        <section className="hero container" id="accueil" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title">{hero.title}</h1>
            <p className="hero-description">{hero.description}</p>
            <a className="button" href="#creations">
              Découvrir les créations
            </a>
          </div>
          <div className="hero-photo">
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(max-width: 720px) 100vw, 60vw"
              className="object-image"
            />
          </div>
        </section>

        <section className="creations-section" id="creations" aria-labelledby="creations-title">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">{creationsIntro.eyebrow}</p>
              <h2 id="creations-title">{creationsIntro.title}</h2>
              <p>{creationsIntro.description}</p>
            </div>

            <div className="creation-list">
              {regularCreations.map((item) => (
                <article
                  className={`creation-row creation-row--${item.imageSide}`}
                  key={item.id}
                  aria-labelledby={`${item.id}-title`}
                >
                  <CreationCarousel item={item} />
                  <div className="creation-copy">
                    <ThreadDivider />
                    <h3 id={`${item.id}-title`}>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}

              {patchwork && (
                <article className="patchwork" aria-labelledby="patchworks-title">
                  <div className="patchwork-copy">
                    <h3 id="patchworks-title">{patchwork.title}</h3>
                    <p>{patchwork.description}</p>
                  </div>
                  <CreationCarousel item={patchwork} wide />
                </article>
              )}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-inner">
            <div>
              <p className="eyebrow">{contact.eyebrow}</p>
              <h2 id="contact-title">{contact.title}</h2>
              <p className="contact-description">{contact.description}</p>
              <p className="demo-note">Coordonnées de démonstration à remplacer.</p>
            </div>
            <address className="contact-links">
              <a href={contact.phoneHref}>
                <span>Téléphone</span>
                <strong>{contact.phoneLabel}</strong>
              </a>
              <a href={contact.emailHref}>
                <span>E-mail</span>
                <strong>{contact.emailLabel}</strong>
              </a>
              <a href={contact.facebookHref} target="_blank" rel="noopener noreferrer">
                <span>Facebook</span>
                <strong>{contact.facebookLabel}</strong>
              </a>
            </address>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div>
            <a className="brand" href="#accueil">
              <span className="brand-mark" aria-hidden="true">✳</span>
              <span>{atelierName}</span>
            </a>
            <p>{footerText}</p>
          </div>
          <nav aria-label="Navigation de pied de page">
            <a href="#creations">Créations</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 — Site réalisé par <strong>Deezy</strong>. Propulsé par Vercel.</p>
        </div>
      </footer>
    </>
  );
}
