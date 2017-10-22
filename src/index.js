import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import createApp from './App';

const App = createApp(React, PropTypes);

const props = {
  helloClass: 'hello',
  header: 'The Classless Way',
  baz: 'Baller!! 🎸 🎧 🎹 🎤'
};
render(<App {...props} />, document.getElementById('root'));
