import { Component } from 'react';
import Layout from '../components/layout';

class Index extends Component {
  componentDidMount = () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'myc';
    canvas.width = 480;
    canvas.height = 320;
    document.getElementById('game-wrapper').appendChild(canvas);

    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = '#FF0000';
    ctx.fill();
    ctx.closePath();
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
