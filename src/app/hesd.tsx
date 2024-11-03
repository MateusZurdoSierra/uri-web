export default function Head() {
  return (
    <>
      <title>Uri App</title>
      <meta
        name="description"
        content="Segurança ao seu alcance, colaboração que transforma bairros"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://uriapp.com.br/" />
      <meta property="og:title" content="Uri App" />
      <meta
        property="og:description"
        content="Segurança ao seu alcance, colaboração que transforma bairros"
      />
      <meta
        property="og:image"
        content="https://uriapp.com.br/svg/logoPrimary.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://uriapp.com.br/" />
      <meta property="twitter:title" content="Uri App" />
      <meta
        property="twitter:description"
        content="Segurança ao seu alcance, colaboração que transforma bairros"
      />
      <meta
        property="twitter:image"
        content="https://uriapp.com.br/svg/logoPrimary.png"
      />
    </>
  );
}
