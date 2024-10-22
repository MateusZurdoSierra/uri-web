import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import styles from './Header.module.css'; // Certifique-se de criar e definir este arquivo de CSS

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Image
          src="/svg/logoPrimary.svg" 
          alt="Logo URI"
          className={styles.logo}
          width={90}
          height={150}
        />

        <nav>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/about">Sobre o Uri</Link>
            </li>
            <li>
              <Link href="/features">Funcionalidades</Link>
            </li>
            <li>
              <Link href="/contact">Contatos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
