import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import Lion from '../AutoScrolling/Lion';

const Footer: React.FC = () => {
  return (
    <footer className={styles.container_footer}>
      <div className={styles.row_footer_tree}>
        <div className={styles.container_lion}>
          <Lion />
        </div>
      </div>

      <div className={styles.row_footer_one}>
        <div className={styles.row_footer}>
          <div className={styles.logo_footer}>
            <Image
              src="/svg/logoWhite.svg"
              alt="Logo URI"
              width={150}
              height={60}
            />
          </div>

          {/* Seção de Contato */}
          <div className={styles.footer_links}>
            <h6>Contato</h6>
            <div className={styles.column1}>
              <a href="mailto:oi@uri.app">oi@uri.app</a>
            </div>
          </div>

          {/* Seção de Redes Sociais */}
          <div className={styles.footer_links}>
            <h6>Siga Nossas Redes</h6>
            <div className={styles.column1}>
              <a
                href="https://www.facebook.com"
                className={styles.facebook_icon}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a href="https://www.instagram.com">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a href="https://www.twitter.com">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.2051 2.25H21.5131L14.2861 10.51L22.7881 21.75H16.1301L10.9161 14.933L4.95009 21.75H1.64009L9.37009 12.915L1.21509 2.25H8.04009L12.7531 8.481L18.2051 2.25ZM17.0441 19.77H18.8771L7.04509 4.126H5.07809L17.0441 19.77Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a href="https://www.tiktok.com">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5999 5.82C15.9165 5.03953 15.5398 4.0374 15.5399 3H12.4499V15.4C12.4266 16.0712 12.1434 16.7071 11.6602 17.1735C11.177 17.6399 10.5315 17.9004 9.85991 17.9C8.43991 17.9 7.25991 16.74 7.25991 15.3C7.25991 13.58 8.91991 12.29 10.6299 12.82V9.66C7.17991 9.2 4.15991 11.88 4.15991 15.3C4.15991 18.63 6.91991 21 9.84991 21C12.9899 21 15.5399 18.45 15.5399 15.3V9.01C16.7929 9.90985 18.2973 10.3926 19.8399 10.39V7.3C19.8399 7.3 17.9599 7.39 16.5999 5.82Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.row_footer_two}>
        <div className={styles.container_police}>
          <ul>
            <li>
              <Link href="#">Política de Privacidade</Link>
            </li>
            <li>
              <Link href="#">Política de Cookies</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
