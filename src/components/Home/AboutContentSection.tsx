'use client';
import '../../app/homeStyles.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useScrollContext } from '@/context/ScrollContext';

const AboutContentSection = () => {
  //@ts-ignore
  const { formRef } = useScrollContext();

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-unique-uri" aria-labelledby="unique-uri-title">
      <div className="unique-uri-container">
        <div className="unique-uri-horizontal-box">
          <article className="unique-uri-content">
            <figure className="unique-uri-image-text-overlay">
              <motion.div
                className="unique-uri-image-text-overlay"
                variants={fadeIn('down', 0.3)}
                initial="hidden"
                whileInView="show"
              >
                <Image
                  src="/svg/people-phone2.png"
                  alt="Jovem caminhando ao parque"
                  className="unique-uri-image"
                  width={850}
                  height={750}
                  priority
                  unoptimized
                />
              </motion.div>
              <figcaption className="unique-uri-text-overlay">
                <motion.div
                  className="unique-uri-text-overlay"
                  variants={fadeIn('up', 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <h2 id="unique-uri-title" className="unique-uri-title">
                    O que torna o <span>Uri</span> único?
                  </h2>
                  <p className="unique-uri-description-text">
                    No Uri, acreditamos que segurança começa com união. Nosso
                    propósito é transformar bairros em comunidades fortes, onde
                    cada morador colabora, protege e faz a diferença todos os
                    dias.
                    <br />
                    <br />
                    Feito por quem mora em casas de bairro, para quem vive fora
                    de condomínios. Sabemos o que você enfrenta e acreditamos
                    que, juntos, podemos tornar nossos bairros tão seguros
                    quanto condomínios.
                  </p>
                  <a onClick={scrollToForm} className="unique-uri-cta-link">
                    Conheça o nosso app
                  </a>
                </motion.div>
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutContentSection;
