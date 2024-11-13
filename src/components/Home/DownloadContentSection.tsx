import '../../app/homeStyles.css';

import Image from 'next/image';
import Title from '../TitleProps';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const DownloadContentSection = () => (
  <section className="container_community_security">
    <div className="community_security_content">
      <div className="left_block_security">
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text_block_security"
        >
          <div className="title-color">
            <Title
              text="A segurança começa aqui, baixe o Uri e conecte-se com sua
            comunidade."
              level={1}
            />
          </div>

          <p>
            Juntos, relatamos ocorrências, cuidamos uns dos outros e fazemos do
            nosso bairro um lugar melhor para viver. Tudo de forma simples e
            gratuita.
          </p>
          {/* <div className="app_buttons">
            <a
              href="https://play.google.com/store/apps/details?id=com.seuapp.android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svg/GetItOnGooglePlayBadge.png"
                alt="Baixar na Google Play"
                width={150}
                height={100}
                style={{ objectFit: 'contain' }}
                priority
                unoptimized
              />
            </a>

            <a
              href="https://apps.apple.com/us/app/id1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svg/AppStoreBadge.svg"
                alt="Baixar na App Store"
                width={150}
                height={100}
                style={{ objectFit: 'contain' }}
                priority
                unoptimized
              />
            </a>
          </div> */}
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="app-store-links"
        >
          <Image
            src="/svg/phoneDownload.svg"
            alt="Baixar na App Store"
            width={350}
            height={400}
            quality={100}
            objectFit="contain"
            priority
            unoptimized
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default DownloadContentSection;
