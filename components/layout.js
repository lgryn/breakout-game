import Link from 'next/link';
import Head from 'next/head';

export default ({ children, title }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/bulma.min.css" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.11/css/all.css"
        integrity="sha384-p2jx59pefphTFIpeqCcISO9MdVfIm4pNnsL08A6v5vaQc4owkQqxMV8kg4Yvhaw/"
        crossOrigin="anonymous"
      />
    </Head>
    <section className="hero is-fullheight is-default is-bold">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://github.com/lgryn/breakout-game">
                <img src="/static/logo.png" alt="Logo" />
              </a>
              <span className="navbar-burger burger" data-target="navbarMenu">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenu" className="navbar-menu">
              <div className="navbar-end">
                <div className="tabs is-right">
                  <ul>
                    <li className="is-active"><Link href="/"><a className="navbar-item">Home</a></Link></li>
                    <li><Link href="/stats"><a className="navbar-item">Stats</a></Link></li>
                    <li>
                      <a className="navbar-item" href="https://github.com/lgryn/breakout-game/issues">
                        <span className="icon is-small"><i className="fab fa-github" /></span>Issues
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          { children }
        </div>
      </div>
      <div className="hero-foot">
        <div className="container">
          <div className="has-text-centered">
            <p>
              <strong>Breakout game</strong> by <a href="https://github.com/lgryn">Liubomyr Hrynyshyn</a>.
              The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
