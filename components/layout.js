import Link from 'next/link';
import Head from 'next/head';

export default ({ children, title }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <header>
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
      </nav>
    </header>

    { children }

    <footer>
      {'footer'}
    </footer>
  </div>
);
