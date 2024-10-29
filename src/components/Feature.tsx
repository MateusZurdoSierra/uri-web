import React from "react";
import {
  faLandMineOn,
  faMagnifyingGlass,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Feature: React.FC = () => {
  return (
    <section className="container_secondary">
      {/* <div className="container_medium_box"> */}
        <div className="container_box">
          <div className="container_security_text">
            <div className="text_left">
              <h3>O futuro do seu bairro</h3>
              <h2>Segurança em tempo real</h2>
            </div>
            <div className="text_right">
              <p>
                Receba alertas e notificações sobre atividades suspeitas no seu
                bairro e fique sempre um passo à frente.
              </p>
            </div>
          </div>

          <div className="features">
            <div className="feature_item">
              <FontAwesomeIcon icon={faLandMineOn} className="icon_feature" />
              <h1>Botão do Pânico</h1>
              <p>
                Comunique emergências com um clique, alertando vizinhos
                próximos.
              </p>
            </div>
            <div className="feature_item">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="icon_feature"
              />
              <h1>Mapeamento do bairro</h1>
              <p>
                Com o auxilio de IA o URI analisará seu bairro de forma
                personalizada para identificar os lugares mais vulneráveis e
                gerar insights
              </p>
            </div>
            <div className="feature_item">
              <FontAwesomeIcon icon={faClipboard} className="icon_feature" />
              <h1>Registro fácil de incidentes</h1>
              <p>
                Relate rapidamente qualquer situação incomum e ajude sua
                vizinhança a se manter segura
              </p>
            </div>
            <div className="feature_item">
              <FontAwesomeIcon icon={faUserGroup} className="icon_feature" />
              <h1>Conexão com seus vizinhos</h1>
              <p>
                Fortaleça a união no seu bairro com segurança compartilhada.
              </p>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default Feature;
