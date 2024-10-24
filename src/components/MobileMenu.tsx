"use client";

import React from "react";
import styles from "./MobileMenu.module.css"; // Certifique-se de criar e definir este arquivo de CSS

interface MobileMenuProps {
  // Corrigido para 'MobileMenuProps'
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div className={styles.menuContainer}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </button>
      {isOpen && (
        <nav className={styles.menu}>
          <ul>
            <li>
              <a href="/about">Sobre o Uri</a>
            </li>
            <li>
              <a href="/features">Funcionalidades</a>
            </li>
            <li>
              <a href="/contact">Contatos</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
