import { initApp } from './container/initApp.js';
import Beat from './data/beat.js';
import Cabify from './data/cabify.js';
import Uber from './data/uber.js';
import Satelital from './data/satelital.js';
import inDriver from './data/inDriver.js';

const initialState = {
  beat: Beat,
  cabify: Cabify,
  uber: Uber,
  satelital: Satelital,
  inDriver: inDriver,
};

initApp(initialState)
