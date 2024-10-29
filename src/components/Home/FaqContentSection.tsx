import '../../app/homeStyles.css';
import Collapse from '../Collapse/Collapse';
import Title from '../TitleProps';

const FaqContentSection = () => (
  <section>
    <div className="container_doubts">
      <div className="title_collapse">
        <Title text="Ficou com dúvidas? Nós te ajudamos" level={2} />
      </div>
      <h2 className="text_fac_doubts"></h2>
      <Collapse title="O Uri substitui a polícia ou serviços de emergência?">
        <p>
          Não. <strong>O Uri é uma ferramenta de apoio</strong> que fortalece a
          colaboração entre moradores, ajudando a identificar e compartilhar
          informações sobre incidentes no bairro. No entanto, em situações
          graves, como crimes ou emergências médicas, é essencial acionar as
          autoridades competentes, como a polícia ou os bombeiros.
        </p>
      </Collapse>
      <Collapse title="Como o Uri protege minha privacidade?">
        <p>
          <strong>A sua privacidade é nossa prioridade.</strong> No Uri,
          implementamos rigorosas medidas de segurança para proteger seus dados
          pessoais. As informações compartilhadas são criptografadas, e você tem
          o controle sobre o que deseja ou não compartilhar.
        </p>
      </Collapse>
      <Collapse title="Quais tipos de incidentes posso registrar no Uri?">
        <div>
          <p>
            No Uri, você pode registrar diversos tipos de incidentes para manter
            sua comunidade informada e segura. Aqui estão alguns exemplos:
          </p>
          <ul>
            <li>
              <strong> Atividade suspeita: </strong>Movimentações incomuns ou
              comportamentos suspeitos no bairro.
            </li>
            <li>
              <strong>Roubo ou assalto:</strong> Relatos de crimes contra
              propriedades ou pessoas.
            </li>
            <li>
              <strong>Incêndio:</strong> Focos de incêndio em áreas residenciais
              ou comerciais.
            </li>
            <li>
              {' '}
              <strong>Vandalismo:</strong> Danos a bens públicos ou privados.
            </li>
            <li>
              <strong>Inundações ou desastres naturais:</strong> Situações de
              emergência causadas por condições climáticas.
            </li>
            <li>
              <strong>Animais perdidos ou encontrados:</strong> Avisos sobre
              animais domésticos fora de lugar.
            </li>
          </ul>
        </div>
      </Collapse>
      <Collapse title="Quem pode ver os incidentes que eu reportar?">
        <p>
          Os incidentes que você reportar no Uri{' '}
          <strong>
            são visíveis para todos os moradores que fazem parte do seu bairro.
          </strong>
          Isso permite que os vizinhos fiquem informados sobre o que está
          acontecendo na área e ajudem a manter o bairro mais seguro.
        </p>
      </Collapse>
    </div>
  </section>
);

export default FaqContentSection;
