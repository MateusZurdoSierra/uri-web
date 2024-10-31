import { motion } from 'framer-motion';
import '../../app/homeStyles.css';
import Image from 'next/image';
import { fadeIn } from '@/variants';

const ScreensContentSection = () => (
  <section className="container_quaternary">
    <div className="quaternary_container">
      <article className="section_block incident">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="figure_app_uri"
        >
          <Image
            src="/svg/incidentPhone.svg"
            alt="Registro de Incidentes"
            width={350}
            height={400}
            priority
            unoptimized
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text"
        >
          <h3>Registro de Incidentes</h3>
          <p>
            Permite que você reporte ocorrências no seu bairro, como atividades
            suspeitas, crimes, desastres naturais, e muito mais. Com apenas
            alguns cliques, informe sua comunidade sobre o que está acontecendo
            e ajude a manter todos em alerta.
          </p>
        </motion.div>
      </article>

      <article className="section_block notices">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text"
        >
          <h3>Notificações e Alertas</h3>
          <p>
            Receba alertas imediatos sobre incidentes reportados próximos a
            você. Assim, você fica sempre atualizado sobre o que está
            acontecendo na sua área e pode agir com rapidez quando necessário.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="figure_app_uri"
        >
          <Image
            src="/svg/homePhone.svg"
            alt="Notificações e Alertas"
            width={350}
            height={400}
            priority
            unoptimized
          />
        </motion.div>
      </article>

      <article className="section_block emergence">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="figure_app_uri"
        >
          <Image
            src="/svg/alertPhone.svg"
            alt="SOS de Emergência"
            width={350}
            height={400}
            priority
            unoptimized
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text"
        >
          <h3>SOS de Emergência</h3>
          <p>
            Em situações de emergência, use o botão SOS para enviar um alerta
            instantâneo a todos os moradores do bairro. Seja um incêndio,
            assalto ou desastre, todos ficarão informados e poderão tomar
            medidas rápidas para se proteger.
          </p>
        </motion.div>
      </article>

      <article className="section_block invite">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text"
        >
          <h3>Convidar Membros</h3>
          <p>
            O Uri permite que moradores se comuniquem e compartilhem
            informações, criando uma rede de segurança colaborativa. Troque
            mensagens, deixe comentários nos relatórios de incidentes e
            fortaleça os laços com seus vizinhos.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="figure_app_uri"
        >
          <Image
            src="/svg/sharePhone.svg"
            alt="Convidar Membros"
            width={250}
            height={300}
            priority
            unoptimized
          />
        </motion.div>
      </article>
    </div>
  </section>
);

export default ScreensContentSection;
