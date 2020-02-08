import * as drawHandlers from '../drawHandlers';
import { CanvasBoardTheme } from '../types';
import baseTheme from './baseTheme';

const realisticTheme: CanvasBoardTheme = {
  ...baseTheme,
  font: 'calibri',
  backgroundImage: 'images/wood1.jpg',
  stoneSize: 0.48,
  drawHandlers: {
    ...baseTheme.drawHandlers,
    B: new drawHandlers.RealisticStone([
      'images/stones/black00_128.png',
      'images/stones/black01_128.png',
      'images/stones/black02_128.png',
      'images/stones/black03_128.png',
    ], new drawHandlers.ShellStoneBlack()),
    W: new drawHandlers.RealisticStone([
      'images/stones/white00_128.png',
      'images/stones/white01_128.png',
      'images/stones/white02_128.png',
      'images/stones/white03_128.png',
      'images/stones/white04_128.png',
      'images/stones/white05_128.png',
      'images/stones/white06_128.png',
      'images/stones/white07_128.png',
      'images/stones/white08_128.png',
      'images/stones/white09_128.png',
      'images/stones/white10_128.png',
    ], new drawHandlers.ShellStoneWhite()),
  },
  /*grid: {
    ...baseTheme.grid,
    params: {
      ...baseTheme.grid.params,
      linesWidth: 0.035,
      starSize: 0.1,
      linesColor: '#000',
    },
  },*/
};

export default realisticTheme;
