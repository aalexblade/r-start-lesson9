import React from 'react';

import ReactDOM from 'react-dom/client';

import { App } from './App';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <PersistGate>
      <App />
    </PersistGate>
  </Provider>,
);

// import React from 'react';

// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

// import { App } from './App';
// import { store, persistor } from './redux/store';

// import 'react-toastify/dist/ReactToastify.css';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>,
// );
