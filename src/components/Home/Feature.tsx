'use client';
import '../../app/homeStyles.css';
import React from 'react';
import {
  faLandMineOn,
  faMagnifyingGlass,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const Feature: React.FC = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="container_secondary"
    >
      <div className="container_box">
        <div className="container_security_text">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text_left"
          >
            <h3>O futuro do seu bairro</h3>
            <h2>Segurança em tempo real</h2>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text_right"
          >
            <p>
              Receba alertas e notificações sobre atividades suspeitas no seu
              bairro e fique sempre um passo à frente.
            </p>
          </motion.div>
        </div>

        <div className="features">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="feature_item"
          >
            <FontAwesomeIcon icon={faLandMineOn} className="icon_feature" />
            <h1>Botão do Pânico</h1>
            <p>
              Comunique emergências com um clique, alertando vizinhos próximos.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="feature_item"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="icon_feature"
            />
            <h1>Mapeamento do bairro</h1>
            <p>
              Com o auxilio de IA o URI analisará seu bairro de forma
              personalizada para identificar os lugares mais vulneráveis e gerar
              insights
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="feature_item"
          >
            <FontAwesomeIcon icon={faClipboard} className="icon_feature" />
            <h1>Registro fácil de incidentes</h1>
            <p>
              Relate rapidamente qualquer situação incomum e ajude sua
              vizinhança a se manter segura
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="feature_item"
          >
            <FontAwesomeIcon icon={faUserGroup} className="icon_feature" />
            <h1>Conexão com seus vizinhos</h1>
            <p>Fortaleça a união no seu bairro com segurança compartilhada.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Feature;
