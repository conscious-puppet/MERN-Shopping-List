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
  CircularProgress
} from '@chakra-ui/react';
import React, { useEffect } from 'react';

// Icons
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, checkItem, getShoppingList } from '../redux/slices/ShoppingListSlice';

// other imports
import PageContainer from './PageContainer';
import AddItem from './AddItem';

const ShoppingList = () => {
  const { colorMode } = useColorMode();


  const { shoppingList } = useSelector(state => state.shoppingList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingList());
  }, [shoppingList]);

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
        <Badge
          fontSize="0.8em"
          colorScheme='success'
          alignSelf='flex-end'
        >
          {
            shoppingList.length > 0 ? `${shoppingList.length} ITEMS` : 'NO ITEMS'
          }
        </Badge>
        {shoppingList ?
          <List spacing='1em' mt='1em' w='100%' p={2}>
            {
              shoppingList.map(item => (
                <Fade in='true' key={item.id} minw='100%'>
                  <ListItem w='100%'>
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
                        onClick={() => dispatch(checkItem({ id: item._id, isChecked: !item.isChecked }))} />
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
                        onClick={() => dispatch(deleteItem({ id: item._id }))}
                      />
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
