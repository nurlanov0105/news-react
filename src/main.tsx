import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { ThemeProvider } from './context/ThemeContext.tsx';

import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <ThemeProvider>
      <Provider store={store}>
         <App />
      </Provider>
   </ThemeProvider>
);
