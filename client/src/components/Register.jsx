import {
  Button,
  FormControl, FormLabel, FormErrorMessage,
  Input,
  Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
  useDisclosure,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


// Redux
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/requests/AuthRequests';
import { clearErrors } from '../redux/slices/ErrorSlice';


const Register = ({ variant = 'solid' }) => {

  const error = useSelector(state => state.error);
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();


  const { isOpen, onOpen, onClose } = useDisclosure();



  const { handleSubmit, register, formState, errors } = useForm();
  const { isSubmitting, isSubmitted } = formState;


  const onSubmit = async (values) => {
    await dispatch(clearErrors());
    // Attempt to register
    await dispatch(registerUser({ name: values.name, email: values.email, password: values.password }));

    if (isAuthenticated) {
      onClose();
    }
  };


  const validateName = (value) => {
    const regex = /^[a-zA-Z ]{2,30}$/;

    if (!value) {
      return 'Name is required';
    } else if (!regex.test(value)) {
      return 'Only alphabets are allowed';
    } else return true;
  };

  const validateEmail = (value) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!value) {
      return 'Email is required';
    } else if (!regex.test(value)) {
      return 'Enter a valid email';
    } else return true;
  };

  const validatePassword = (value) => {

    if (!value) {
      return 'Password is required';
    } else return true;
  };



  useEffect(() => {
    dispatch(clearErrors());
  }, [isOpen]);

  const [didMount, setDidMount] = useState(false);


  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  if (!didMount) {
    return null;
  }

  return (
    <>

      <Button colorScheme="primary"
        variant={variant}
        onClick={onOpen} >Register</Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          width={{ base: '90%', md: '400px' }}
        >

          <ModalHeader>Register</ModalHeader>
          <ModalCloseButton />
          {(error.id === 'REGISTER_FAIL' && isSubmitted === true) &&
            <Alert status="error">
              <AlertIcon />
              {error.msg}
            </Alert>
          }

          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pb={6}>
              <FormControl isInvalid={errors.name}>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Name" name='name' ref={register({ validate: validateName })} autoFocus />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>


              <FormControl mt={4} isInvalid={errors.email}>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Email" name='email' ref={register({ validate: validateEmail })} />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <Input placeholder="Password"
                  type='password'
                  name='password' ref={register({ validate: validatePassword })} />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>

            </ModalBody>

            <ModalFooter>
              <Button type='submit' colorScheme="success"
                isLoading={isSubmitting}
                loadingText="Please wait.."
                m='0'
                w='100%'
              >
                Register
            </Button>

            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

    </>
  );
};

export default Register;


