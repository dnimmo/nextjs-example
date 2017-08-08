import Head from 'next/head';
import stylesheet from '../../styles/global.scss';

const pageHead =
  ({ pageTitle }) => (
    <Head>
      <title>{pageTitle}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
      <meta
        name="mobile-webb-app-capable"
        content="yes"
      />
      <meta
        name="apple-mobile-webb-app-capable"
        content="yes"
      />
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
  );

export default pageHead;
