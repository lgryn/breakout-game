import { Component } from 'react';
import Layout from '../components/layout';
import Game from '../lib/game';

class Index extends Component {
  componentDidMount = () => {
    const game = new Game('breakout', 480, 320);
    game.init();
    function mainLoop() {
      window.requestAnimationFrame(mainLoop);

      game.render('game-wrapper');
      game.update();
    }

    mainLoop();
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
