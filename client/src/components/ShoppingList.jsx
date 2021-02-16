import {
  Flex,
  IconButton,
  List,
  ListItem,
  Text,
  useColorMode,
  Fade,
  HStack,
  Badge,
  Divider,
  CircularProgress,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';

// Icons
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, checkItem, getShoppingList } from '../redux/requests/ItemRequests';

// other imports
import PageContainer from './PageContainer';
import AddItem from './AddItem';

const ShoppingList = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();

  const { isAuthenticated, user } = useSelector(state => state.auth);

  const { name = 'name' } = user || {};


  const { shoppingList, loadingShoppingList } = useSelector(state => state.shoppingList);
  const dispatch = useDispatch();


  const handleDelete = (value) => {
    if (isAuthenticated) {
      dispatch(deleteItem(value));
    } else {
      toast({
        title: "Unauthorised access",
        description: "Please login to make any changes.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleCheck = (value) => {
    if (isAuthenticated) {
      dispatch(checkItem(value));
    } else {
      toast({
        title: "Unauthorised access",
        description: "Please login to make any changes.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    dispatch(getShoppingList());
  }, []);

  return (
    <PageContainer>
      <Flex
        width={{ base: '90%', md: '400px' }}
        bg={colorMode === 'light' ? 'boxBackgroundColor.light' : 'boxBackgroundColor.dark'}
        rounded='lg'
        p={5}
        boxShadow='lg'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >

        <Flex w='100%' direction='row' >
          <Badge
            fontSize="0.8em"
            colorScheme='primary'
            justifySelf='flex-start'
            display={isAuthenticated ? 'inherit' : 'none'}
          >
            Hello, {name}
          </Badge>
          <Badge
            fontSize="0.8em"
            colorScheme='success'
            justifySelf='flex-end'
            ml='auto'
          >
            {
              shoppingList.length > 0 ? `${shoppingList.length} ITEMS` : 'NO ITEMS'
            }
          </Badge>
        </Flex>

        {loadingShoppingList === 'success' ?
          <List spacing='1em' mt='1em' w='100%' p={2}>
            {
              shoppingList.map((item, index) => (
                <Fade in='true' key={index} minW='100%'>
                  <ListItem w='100%' key={item._id}>
                    <HStack
                      display='flex'
                      w='100%'
                      spacing={4}
                    >
                      <IconButton
                        aria-label="Mark Item"
                        variant={item.isChecked ? 'solid' : 'outline'}
                        size='sm'
                        colorScheme='success'
                        icon={<CheckIcon />}
                        isRound
                        onClick={() => handleCheck({ id: item._id, isChecked: !item.isChecked })} />
                      <Text
                        as={item.isChecked ? 'del' : null}
                        opacity={item.isChecked ? '0.5' : null}
                        alignSelf='center'
                        fontSize='xl'
                        flexGrow='1'
                        isTruncated
                      >
                        {item.name}
                      </Text>
                      <IconButton
                        aria-label="Delete Item"
                        variant='solid'
                        size='sm'
                        colorScheme='error'
                        icon={<DeleteIcon />}
                        isRound
                        onClick={() => handleDelete({ id: item._id })} />
                    </HStack>
                  </ListItem>
                </Fade>
              ))
            }
          </List>
          : <CircularProgress isIndeterminate color="green.500" />}

        <Divider orientation="horizontal" my={2} />

        <AddItem />

      </Flex>

    </PageContainer >
  );
};

export default ShoppingList;
