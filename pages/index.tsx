import Head from 'next/head';

export default function Home() {
  const disableRightClick = `
          document.addEventListener('contextmenu', event => event.preventDefault());
    `;
  return (
    <div>
      <Head>
        <title>Ahmad Sayadi</title>
        <meta name="description" content="Profile Ahmad Sayadi" />
        <link rel="icon" href="/icon.ico" />
        <meta name="keywords" content="Profil, Ahmad, sayadi, Ahmad Sayadi" />
        <meta property="og:title" content="Ahmad Sayadi" />
        <meta property="og:description" content="ini adalah profil Ahmad Sayadi" />
        <meta property="og:image" content="/ahmadsayadi.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahmad Sayadi" />
        <meta name="twitter:description" content="Profil, Ahmad, sayadi, Ahmad Sayadi" />
        <meta name="twitter:image" content="/ahmadsayadi.jpg" />
        <link rel="canonical" href="https://bio.ahmadsayadi.com" />
      </Head>
        <iframe src="https://bio.link/sayadi" width="100%" height="600px" frameBorder="0"></iframe>
        <script dangerouslySetInnerHTML={{ __html: disableRightClick }} />

    </div>
  );
}