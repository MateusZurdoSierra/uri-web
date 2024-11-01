import '../../app/homeStyles.css';
import Image from 'next/image';
import Form from '../Form/Form';
import Title from '../TitleProps';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const FormContentSection = () => (
  <section className="container_form_section">
    <motion.div
      variants={fadeIn('up', 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="form_size"
      id="form"
    >
      <div className="form_image_container">
        <Title
          text="Traga o Uri para o seu bairro, facilitando a segurança e colaboração
            entre os moradores."
          level={2}
        />
        <Image
          src="/svg/localization.svg"
          alt="Imagem ilustrativa"
          width={350}
          height={350}
          priority
          unoptimized
        />
      </div>
      <Form />
    </motion.div>
  </section>
);

export default FormContentSection;
