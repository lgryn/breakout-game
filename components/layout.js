import Head from 'next/head';
import Nav from './nav';

export default ({ children, title }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="./static/bulma.min.css" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.11/css/all.css"
        integrity="sha384-p2jx59pefphTFIpeqCcISO9MdVfIm4pNnsL08A6v5vaQc4owkQqxMV8kg4Yvhaw/"
        crossOrigin="anonymous"
      />
    </Head>
    <section className="hero is-fullheight is-default is-bold">
      <div className="hero-head">
        <Nav />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          { children }
        </div>
      </div>
      <div className="hero-foot">
        <div className="container has-text-centered footer-inner">
          <p>
            <strong>Breakout game</strong> by <a href="https://github.com/lgryn">Liubomyr Hrynyshyn</a>.
            The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
          </p>
        </div>
      </div>
    </section>
    <style jsx>{`
      .navbar-item img {
        max-height: 50px;
      }
      .footer-inner {
        padding-bottom: 20px;
      }`}
    </style>
  </div>
);
