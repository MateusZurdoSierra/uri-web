import '../../app/homeStyles.css';
import Image from 'next/image';

const ScreensContentSection = () => (
  <section className="container_quaternary">
    <div className="quaternary_container">
      <article className="section_block incident">
        <figure className="figure_app_uri">
          <Image
            src="/svg/incidentPhone.svg"
            alt="Registro de Incidentes"
            width={350}
            height={400}
            priority
            unoptimized
          />
        </figure>
        <div className="text">
          <h3>Registro de Incidentes</h3>
          <p>
            Permite que você reporte ocorrências no seu bairro, como atividades
            suspeitas, crimes, desastres naturais, e muito mais. Com apenas
            alguns cliques, informe sua comunidade sobre o que está acontecendo
            e ajude a manter todos em alerta.
          </p>
        </div>
      </article>

      <article className="section_block notices">
        <div className="text">
          <h3>Notificações e Alertas</h3>
          <p>
            Receba alertas imediatos sobre incidentes reportados próximos a
            você. Assim, você fica sempre atualizado sobre o que está
            acontecendo na sua área e pode agir com rapidez quando necessário.
          </p>
        </div>
        <figure className="figure_app_uri">
          <Image
            src="/svg/homePhone.svg"
            alt="Notificações e Alertas"
            width={350}
            height={400}
            priority
            unoptimized
          />
        </figure>
      </article>

      <article className="section_block emergence">
        <figure className="figure_app_uri">
          <Image
            src="/svg/alertPhone.svg"
            alt="SOS de Emergência"
            width={350}
            height={400}
            priority
            unoptimized
          />
        </figure>
        <div className="text">
          <h3>SOS de Emergência</h3>
          <p>
            Em situações de emergência, use o botão SOS para enviar um alerta
            instantâneo a todos os moradores do bairro. Seja um incêndio,
            assalto ou desastre, todos ficarão informados e poderão tomar
            medidas rápidas para se proteger.
          </p>
        </div>
      </article>

      <article className="section_block invite">
        <div className="text">
          <h3>Convidar Membros</h3>
          <p>
            O Uri permite que moradores se comuniquem e compartilhem
            informações, criando uma rede de segurança colaborativa. Troque
            mensagens, deixe comentários nos relatórios de incidentes e
            fortaleça os laços com seus vizinhos.
          </p>
        </div>
        <figure className="figure_app_uri">
          <Image
            src="/svg/sharePhone.svg"
            alt="Convidar Membros"
            width={250}
            height={300}
            priority
            unoptimized
          />
        </figure>
      </article>
    </div>
  </section>
);

export default ScreensContentSection;
