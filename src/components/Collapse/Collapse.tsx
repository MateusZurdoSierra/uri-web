'use client';

import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Importa as animações
import styles from './Collapse.module.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CollapseProps {
  title: string;
  children: ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={toggleCollapse}
        className={styles.button}
        aria-expanded={isOpen}
        aria-controls="collapse-content" // Indica qual conteúdo é controlado
      >
        {title}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`${isOpen ? styles.rotate : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }} // Duração da animação
            className={styles.content}
            id="collapse-content"
          >
            <div className={styles.childrenText}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Collapse;
