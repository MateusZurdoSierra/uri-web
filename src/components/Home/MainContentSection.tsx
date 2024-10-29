import '../../app/homeStyles.css';
import Image from 'next/image';

const MainContentSection = () => (
  <section>
    <div className="main_content">
      <div className="content-left">
        <div className="text_block">
          <h1>
            <span className="span_title">Segurança</span> ao seu alcance,
            colaboração que transforma bairros
          </h1>
          <p>
            Com o Uri, moradores de casas de bairro se unem para relatar
            atividades suspeitas e proteger a vizinhança. Juntos podemos estar
            tão seguros quanto em um condomínio.
          </p>
        </div>
      </div>
      <div className="content-right">
        <Image
          src="/svg/social2.svg"
          alt="Ilustração de segurança"
          width={650}
          height={550}
          priority
          unoptimized
        />
      </div>
    </div>
  </section>
);

export default MainContentSection;
