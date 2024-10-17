import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 


const Header: React.FC = () => {
  return (
    <header>
      <div className="header_container">
        <Image
          src="/svg/logoPrimary.svg" 
          alt="Logo URI"
          className="logo"
          width={90}
          height={150}
        />

        <nav>
          <ul className="nav_links">
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
