import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from "react-redux";

import store from "./redux/configureStore";
import customTheme from './utils/theme';
import ShoppingList from './components/ShoppingList';

function App () {

  return (
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <ShoppingList />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
