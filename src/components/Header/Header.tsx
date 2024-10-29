import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";

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
      </div>
    </header>
  );
};

export default Header;
