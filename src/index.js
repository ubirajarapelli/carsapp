import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

import singleSpaReact from 'single-spa-react';
import rootComponent from './App';

// ReactDom.render(<App/>,document.getElementById('root'))
// serviceWorker.unregister();

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent,
    domElementGetter: () => document.getElementById('tray-app')
});

export const bootstrap = [
    reactLifecycles.bootstrap,
];

export const mount = [
    reactLifecycles.mount,
];

export const unmount = [
    reactLifecycles.unmount,
];
