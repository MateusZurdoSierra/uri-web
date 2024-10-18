import Image from "next/image";
import "./homeStyles.css";
import Header from "@/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Feature from "@/components/Feature";

export default function Home() {
  return (
    <div>
      <div className="curves_background">
        <Image
          src="/svg/curvesPrimary.svg"
          alt="Ilustração de segurança"
          width={1050}
          height={750}
        />
      </div>

      <Header />

      <section>
        <div className="main_content">
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

          <Image
            src="/svg/social.svg"
            alt="Ilustração de segurança"
            width={450}
            height={350}
          />
        </div>
        <div className="call_to_action">
          <h2>
            Fortaleça a segurança do seu bairro com <br /> a colaboração dos
            seus vizinhos.
          </h2>
          <FontAwesomeIcon icon={faChevronDown} className="icon" />
        </div>
      </section>

      <Feature />

      <section className="container_tertiary">
        <div className="horizontal_box">
          <div className="sem_classe">
            <div className="image_text_overlay">
              <Image
                src="/svg/person.svg"
                alt="Jovem caminhando ao parque"
                className="image"
                width={450}
                height={850}
              />
            </div>
            <div className="text_overlay">
              <h2 className="text">
                O que torna <br /> o <span>Uri</span> único?
              </h2>
              <p className="text">
                Nosso propósito é provar que a segurança começa com a
                colaboração. Queremos transformar bairros em comunidades unidas,
                onde cada pessoa faz a diferença.
              </p>
              <a href="#app" className="cta_link">
                Conheça o nosso app &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container_quaternary">
        <div className="call_to_action">
          <h2>
            O Uri conecta você à sua comunidade para <br /> construir um
            ambiente mais seguro.{" "}
          </h2>
        </div>
        <div className="section_block incident">
          <Image
            src="/svg/incidentPhone.svg"
            alt="Registro de Incidentes"
            width={350}
            height={400}
          />

          <div className="text">
            <h3>Registro de Incidentes</h3>
            <p>Registre eventos suspeitos em segundos.</p>
          </div>
        </div>

        <div className="section_block notices">
          <div className="text">
            <h3>Notificações e Alertas</h3>
            <p>Receba e compartilhe alertas de segurança.</p>
          </div>

          <Image
            src="/svg/homePhone.svg"
            alt="Notificações e Alertas"
            width={350}
            height={400}
          />
        </div>

        <div className="section_block emergence">
          <Image
            src="/svg/alertPhone.svg"
            alt="SOS de Emergência"
            width={350}
            height={400}
          />
          <div className="text">
            <h3>SOS de Emergência</h3>
            <p>Ação rápida e eficaz em situações de risco.</p>
          </div>
        </div>

        <div className="section_block invite">
          <div className="text">
            <h3>Convidar Membros</h3>
            <p>Fortaleça a rede de proteção ao convidar vizinhos.</p>
          </div>

          <Image
            src="/svg/sharePhone.svg"
            alt="Convidar Membros"
            width={250}
            height={300}
          />
        </div>
        <div className="call_to_action">
          <h2>
            Feito por quem mora em casas de bairro, para quem vive fora de
            condomínios. <br /> Sabemos o que você enfrenta e acreditamos que,
            juntos, podemos <br />
            tornar nossos bairros tão seguros quanto condomínios.
          </h2>
        </div>
        <h2></h2>
      </section>

      <section className="container_community_security">
        <div className="community_security_content">
          <div className="left_block_security">
            <div className="text_block_security">
              <h2>
                A segurança começa aqui, baixe o Uri e conecte-se com sua
                comunidade.
              </h2>
              <p>
                Juntos, relatamos ocorrências, cuidamos uns dos outros e fazemos
                do nosso bairro um lugar melhor para viver. Tudo de forma
                simples e gratuita.
              </p>
              <div className="app_buttons">
                <a
                  href="https://play.google.com/store/apps/details?id=com.seuapp.android"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/svg/GetItOnGooglePlayBadge.png"
                    alt="Baixar na Google Play"
                    width={150}
                    height={100}
                    style={{ objectFit: "contain" }}
                  />
                </a>

                <a
                  href="https://apps.apple.com/us/app/id1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/svg/AppStoreBadge.svg"
                    alt="Baixar na App Store"
                    width={150}
                    height={100}
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>
            </div>
            <div className="app-store-links">
              <a
                href="https://apps.apple.com/us/app/your-app-name/id123456789"
                target="_blank"
              >
                <Image
                  src="/svg/phones.svg"
                  alt="Baixar na App Store"
                  width={250}
                  height={300}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.yourappname"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
      </section>

      <section className="container_form_section">
        <div className="form_image_container">
          <h2>
            Traga o Uri para o seu bairro, facilitando a segurança e colaboração
            entre os moradores.
          </h2>

          <Image
            src="/svg/localization.svg"
            alt="Imagem ilustrativa"
            width={450}
            height={450}
          />
        </div>
        <div className="form_content">
          <form>
            <label htmlFor="nome">Nome*</label>
            <input type="text" id="nome" name="nome" required />

            <label htmlFor="email">E-mail*</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="telefone">Número de telefone com DDD*</label>
            <input type="tel" id="telefone" name="telefone" required />

            <label htmlFor="cep">CEP*</label>
            <input type="text" id="cep" name="cep" required />

            <label htmlFor="rua">Rua*</label>
            <input type="text" id="rua" name="rua" required />

            <div className="form-inline">
              <div className="form-group">
                <label htmlFor="numero">Número*</label>
                <input type="text" id="numero" name="numero" required />
              </div>

              <div className="form-group">
                <label htmlFor="cidade">Cidade*</label>
                <input type="text" id="cidade" name="cidade" required />
              </div>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms" className="custom-checkbox-label">
                <p>Afirmo e concordo que as informações preenchidas neste
                formulário são verdadeiras, estou ciente que o time comercial do
                Uri entrará em contato.</p>
              </label>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>

      <section className="container_doubts">
        <h2 className="text_fac_doubts">Ficou com dúvidas? Nós te ajudamos </h2>
        <div className="fac_doubts">
          <ul>
            <li>O Uri substitui a polícia ou serviços de emergência?</li>
            <li>Como o Uri protege minha privacidade?</li>
            <li>Quais tipos de incidentes posso registrar no Uri?</li>
            <li>Quem pode ver os incidentes que eu reportar?</li>
          </ul>
        </div>
      </section>

      <section className="before_footer">
        <div className="image_bofore_footer">
          <Image
            src="/svg/logoWhite.svg"
            alt="logo do uri, leao"
            width={300}
            height={150}
          />
          <p>O LEÃO DA SUA VIZINHANÇA</p>
        </div>
      </section>

      {/* <footer>
        <div className="footer_land">
          <p>Contato</p>
          <a href="https://mail.google.com/oi@uri.app" />

          <p>siga Nossas Redes</p>

          <Image
            src="/svg/logoPrimary.svg"
            alt="logo do instagram"
            width={150}
            height={150}
          />
        </div>
      </footer> */}
    </div>
  );
}
