import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useDispatch } from "react-redux";

import customTheme from './utils/theme';
import ShoppingList from './components/ShoppingList';

import { loadUser } from './redux/requests/AuthRequests';


function App () {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <ShoppingList />
    </ChakraProvider>
  );
}

export default App;
