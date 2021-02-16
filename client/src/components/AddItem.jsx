import {
  Button,
  FormControl, FormLabel, FormErrorMessage,
  IconButton,
  Input,
  Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';


// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/requests/ItemRequests';

// Icons
import { AddIcon } from '@chakra-ui/icons';

const AddItem = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();


  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();


  const { handleSubmit, register, formState, errors } = useForm();
  const { isSubmitting } = formState;


  const onSubmit = async (values) => {
    await dispatch(addItem({ name: values.item }));
    onClose();
  };

  function validateItem (value) {
    if (!value) {
      return "Item is required";
    } else return true;
  }

  const handleAdd = () => {
    if (isAuthenticated) {
      onOpen();
    } else {
      toast({
        title: "Unauthorised access",
        description: "Please login to add an item.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };


  return (
    <>
      <IconButton
        aria-label='Add'
        icon={<AddIcon />}
        size='lg'
        isRound
        colorScheme='success'
        variant='solid'
        onClick={handleAdd}
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent

          width={{ base: '90%', md: '400px' }}
        >
          <ModalHeader>Add Item</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pb={6}>
              <FormControl isInvalid={errors.item}>
                <FormLabel>Item</FormLabel>
                <Input placeholder="Item" name='item' ref={register({ validate: validateItem })} autoFocus
                />
                <FormErrorMessage>
                  {errors.item && errors.item.message}
                </FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type='submit' colorScheme="success" mr={3}
                isLoading={isSubmitting}
                loadingText="Please wait.."
              >
                Save
            </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

    </>
  );
};

export default AddItem;


