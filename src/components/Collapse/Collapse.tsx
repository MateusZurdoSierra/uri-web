"use client";

import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Importa as animações
import styles from "./Collapse.module.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CollapseProps {
  title: string;
  children: ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
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
          className={`${isOpen ? styles.rotate : ""}`}
        />
      </button>
      <div
        className={`${styles.content} ${
          isOpen ? styles.expanded : styles.collapsed
        }`}
        id="collapse-content"
      >
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              transition={{ duration: 0.2 }} // Duração da animação
            >
              <div className={styles.childrenText}>{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Collapse;
