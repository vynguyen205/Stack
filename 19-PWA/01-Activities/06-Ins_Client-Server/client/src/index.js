import './css/style.css';

import module1 from './js/module1';
import module2 from './js/module2';

if (module.hot) {
    module.hot.accept((err) => {
      if (err) {
        console.error('Cannot apply HMR update.', err);
      }
    });
  }