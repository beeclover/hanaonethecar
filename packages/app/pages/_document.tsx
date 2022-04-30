import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="preload" href="/fonts/Pretendard-1.3.0/web/static/pretendard.css" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Pretendard-1.3.0/web/static/pretendard-subset.css" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Pretendard-1.3.0/web/variable/pretendardvariable.css" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/hana/Hana.css" as="font" crossOrigin="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
