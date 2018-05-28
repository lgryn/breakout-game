import { Component } from 'react';
import Link from 'next/link';

class Nav extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const menu = document.getElementById(e.target.dataset.target);
    menu.classList.toggle('is-active');
    e.target.classList.toggle('is-active');
  };

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://github.com/lgryn/breakout-game">
              <img src="./static/logo.png" alt="Logo" />
            </a>
            <span
              className="navbar-burger burger"
              data-target="navbarMenu"
              onClick={this.handleClick}
              role="button"
              tabIndex={0}
            >
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <div className="tabs is-right">
                <ul>
                  <li>
                    <Link href="/"><a className="navbar-item">Home</a></Link>
                  </li>
                  <li>
                    <Link href="/stats"><a className="navbar-item">Stats</a></Link>
                  </li>
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
    )
  }
}

export default Nav;
