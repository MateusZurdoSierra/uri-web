'use client';

import './homeStyles.css';
import Header from '@/components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Feature from '@/components/Home/Feature';

import Footer from '@/components/Footer/Footer';
import CommunityConnection from '@/components/CommunityConnection/CommunityConnection';
import MainContentSection from '@/components/Home/MainContentSection';
import AboutContentSection from '@/components/Home/AboutContentSection';
import ScreensContentSection from '@/components/Home/ScreensContentSection';
import FormContentSection from '@/components/Home/FormContentSection';
import FaqContentSection from '@/components/Home/FaqContentSection';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import DownloadContentSection from '@/components/Home/DownloadContentSection';

export default function Home() {
  return (
    <div>
      <Header />

      <MainContentSection />

      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="Community_Connection"
      >
        <div className="Community_Connection_content">
          <CommunityConnection
            text="Fortaleça a segurança do seu bairro com a colaboração dos
            seus vizinhos."
          />
        </div>
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
      </motion.div>

      <Feature />

      <AboutContentSection />

      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="Community_Connection"
      >
        <div className="Community_Connection_content">
          <CommunityConnection text="O Uri conecta você à sua comunidade para construir um ambiente mais seguro." />
        </div>
      </motion.div>

      <ScreensContentSection />

      {/* <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="Community_Connection"
      >
        <div className="Community_Connection_content">
          <CommunityConnection text="O Uri conecta você à sua comunidade para construir um ambiente mais seguro." />
        </div>
      </motion.div> */}

      <DownloadContentSection />

      <FormContentSection />

      <FaqContentSection />

      <Footer />
    </div>
  );
}
