import {
  Button,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';


// Redux
import { useDispatch } from 'react-redux';

import { logout } from '../redux/slices/AuthSlice';

const SignOut = ({ variant = 'outline' }) => {


  const dispatch = useDispatch();


  const [didMount, setDidMount] = useState(false);


  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  if (!didMount) {
    return null;
  }


  return (

    <Button colorScheme="primary"
      variant={variant}
      onClick={() => dispatch(logout())}
    >Sign Out</Button>
  );

};

export default SignOut;

