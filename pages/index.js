import { Component } from 'react';
import Layout from '../components/layout';
import Game from '../lib/Game';

class Index extends Component {
  componentDidMount = () => {
    const game = new Game('breakout', 480, 320);

    function main() {
      window.requestAnimationFrame(main);

      game.render('game-wrapper');
    }

    main();
  }

  render() {
    return (
      <Layout title="Home">
        <div id="game-wrapper" />
      </Layout>
    )
  }
}

export default Index;
