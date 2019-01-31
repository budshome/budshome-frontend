import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import Home from './home/index';
import './index.css';

/*!
 * budshome-cms frontend
 * zzy - v1.0.0 (2019-01-31)
 */

ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();
