import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const { size = 'md' } = props;

  return (
    <IconButton
      size={size}
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="outline"
      color="current"
      // marginLeft="2"
      m='0'
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
