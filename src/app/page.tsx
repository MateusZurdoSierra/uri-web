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

export default function Home() {
  return (
    <div>
      <Header />

      <MainContentSection />

      <div className="Community_Connection">
        <div className="Community_Connection_content">
          <CommunityConnection
            text="Fortaleça a segurança do seu bairro com a colaboração dos
            seus vizinhos."
          />
        </div>
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
      </div>

      <Feature />

      <AboutContentSection />

      {/* <Lion /> */}

      <ScreensContentSection />

      <div className="Community_Connection">
        <div className="Community_Connection_content">
          <CommunityConnection text="O Uri conecta você à sua comunidade para construir um ambiente mais seguro." />
        </div>
      </div>

      <FormContentSection />

      <FaqContentSection />

      <Footer />
    </div>
  );
}
