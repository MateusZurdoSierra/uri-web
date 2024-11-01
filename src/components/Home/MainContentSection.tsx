'use client'; // Diretriz para Next.js, se necessário

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import '../../app/homeStyles.css';

import { fadeIn } from '../../variants';

const MainContentSection = () => (
  <section>
    <div className="main_content">
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="content-left"
      >
        <div className="text_block">
          <h1>
            <span className="span_title">Segurança</span> ao seu alcance,
            colaboração que transforma bairros
          </h1>
          <p>
            Com o Uri, moradores de casas de bairro se unem para relatar
            atividades suspeitas e proteger a vizinhança. Juntos podemos estar
            tão seguros quanto em um condomínio.
          </p>
          <a href="#form" className="button_link">
            Ir para o Formulário
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="content-right"
      >
        <Image
          src="/svg/SocialDistancing.svg"
          alt="Ilustração de segurança"
          width={650}
          height={550}
          priority
          unoptimized
        />
      </motion.div>
    </div>
  </section>
);

export default MainContentSection;
