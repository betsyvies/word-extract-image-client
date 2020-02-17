import Beat from './data/beat.js';
import Cabify from './data/cabify.js';
import Uber from './data/uber.js';
import Satelital from './data/satelital.js';
import InDriver from './data/inDriver.js';
import TypeApp from './data/typeApp.js';

const initialState = {
  beat: Beat,
  cabify: Cabify,
  uber: Uber,
  satelital: Satelital,
  inDriver: InDriver,
  typeApp: TypeApp,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}

