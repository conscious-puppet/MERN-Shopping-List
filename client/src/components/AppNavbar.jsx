import React from "react";
import {
  Box,
  Flex,
  Link
} from "@chakra-ui/react";

import { ColorModeSwitcher } from '../utils/ColorModeSwitcher';


const AppNavbar = () => {
  return (
    <Flex
      justifyContent='space-between'
      alignItems='center'
      position='fixed'
      minW='100%'
      bg={'inherit'}
      h={16}
      zIndex={4}
      boxShadow='lg'
    >
      <Flex
        px={{ base: 4 }}
        py={{ base: 2 }}
        alignItems='center'
        justifyContent="space-between"
        marginBottom={2}
        mx='auto'
        width={{ base: '90%', md: '75%' }}
      >
        <Box fontWeight='bold' fontSize='lg'>
          <Link href='/'>Shopping List</Link>
        </Box>
        <ColorModeSwitcher
          justifySelf="flex-end"
        />
      </Flex>
    </Flex>
  );
};

export default AppNavbar;