import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const Header: React.FC = () => {
  return (
    <header>
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={styles.header}
      >
        <div className={styles.headerContainer}>
          <Image
            src="/svg/logoPrimary.svg"
            alt="Logo URI"
            className={styles.logo}
            width={90}
            height={150}
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
