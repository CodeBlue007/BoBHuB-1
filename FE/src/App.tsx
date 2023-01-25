import { GlobalStyle } from './styles/GlobalStyle';
import Router from './Router';
import ChatApp from './components/ChatApp/ChatApp';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import { theme, muitheme } from './styles/theme';
import { SocketContext, socket } from './socket/SocketContext';
import GlobalFont from './styles/GlobalFont';
import store from './store/store';
import { Provider } from 'react-redux/es/exports';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MuiThemeProvider theme={muitheme}>
          <ThemeProvider theme={theme}>
            <SocketContext.Provider value={socket}>
              <Router />
              <ChatApp />
              <GlobalStyle />
              <GlobalFont />
            </SocketContext.Provider>
          </ThemeProvider>
        </MuiThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
