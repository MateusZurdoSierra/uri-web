import '../../app/homeStyles.css';

import Image from 'next/image';

const AboutContentSection = () => (
  <section className="section-unique-uri" aria-labelledby="unique-uri-title">
    <div className="unique-uri-container">
      <div className="unique-uri-horizontal-box">
        <article className="unique-uri-content">
          <figure className="unique-uri-image-text-overlay">
            <Image
              src="/svg/SocialDistancing.svg"
              alt="Jovem caminhando ao parque"
              className="unique-uri-image"
              width={850}
              height={750}
              priority
              unoptimized
            />
            <figcaption className="unique-uri-text-overlay">
              <h2 id="unique-uri-title" className="unique-uri-title">
                O que torna <br /> o <span>Uri</span> único?
              </h2>
              <p className="unique-uri-description-text">
                No Uri, acreditamos que segurança começa com união. Nosso
                propósito é transformar bairros em comunidades fortes, onde cada
                morador colabora, protege e faz a diferença todos os dias.
                <br />
                <br />
                Feito por quem mora em casas de bairro, para quem vive fora de
                condomínios. Sabemos o que você enfrenta e acreditamos que,
                juntos, podemos tornar nossos bairros tão seguros quanto
                condomínios.
              </p>
              <a href="#form" className="unique-uri-cta-link">
                Conheça o nosso app &rarr;
              </a>
            </figcaption>
          </figure>
        </article>
      </div>
    </div>
  </section>
);

export default AboutContentSection;
