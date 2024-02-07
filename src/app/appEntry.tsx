import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from '@/app/appStore';

import BaseLayout from './layouts/BaseLayout';
import { ThemeProvider } from './providers/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <ThemeProvider>
      <Provider store={store}>
         <BaseLayout />
      </Provider>
   </ThemeProvider>
);
