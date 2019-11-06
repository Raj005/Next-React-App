import Head from 'next/head';

import head from './head';

const Meta = () => (
  <Head>
    <meta charSet="utf-8" />
    <link
      rel="icon"
      type="image/png"
      href="../../../public/icons/favicons/icon.png"
    />
    <title>{head.title}</title>
    {head.meta.map((m, i) => (
      <meta key={i} name={m.name} content={m.content} />
    ))}
    {head.link.map((l, i) => (
      <link key={i} rel={l.rel} href={l.href} type={l.type} sizes={l.sizes} />
    ))}
  </Head>
);

export default Meta;
