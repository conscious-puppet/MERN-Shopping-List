import React from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';

import AppNavbar from './AppNavbar';

const PageContainer = (props) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      minH='100vh'
      width='100%'
      flexDirection='column'
      bg={colorMode === 'light' ? 'backgroundColor.light' : 'backgroundColor.dark'}
      pb={4}
    >
      <AppNavbar />
      <Flex
        height='100%'
        width='100%'
        alignItems="center"
        justifyContent="top"
        flexDirection="column"
        pt={24}
      >
        {props.children}
      </Flex>
      {/* <Footer /> */}
    </Flex>
  );
};

export default PageContainer;