import React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  Input,
  Divider,
  Code,
  SimpleGrid,
  Flex,
  Image
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const App = () => (
  <ChakraProvider resetCSS>
    <Box ml={60} mr={60} mb={5}>
      <Flex>
        <Text fontSize="3xl" fontWeight="bold" color="#000000" mt={10}>
          GreenQuery
        </Text>
        <Image
          height={8}
          width={8}
          src="https://www.svgrepo.com/show/923/leaf.svg"
          ml={3}
          mt={12}
        />
      </Flex>
    </Box>
    <Box ml={60} mr={60} mb={5} opacity={1}>
      <Input
        placeholder="Ask any question..."
        mr={5}
        maxHeight={6}
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
        maxWidth={500}
        fontSize="xs"
        opacity={1}
        backgroundColor="#ffffff"
        borderRadius="md"
        p={2}
      />
      <Button
        variant="solid"
        size="sm"
        colorScheme="green"
        mb={1}
        fontSize="xs"
        width={6}
        height={6}
        leftIcon={<SearchIcon />}
        pr={1}
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
      ></Button>
    </Box>
    <Box
      minHeight={200}
      backgroundColor="whiteAlpha.200"
      mr={60}
      boxShadow="2xl"
      rounded="md"
      bg="white"
      ml={60}
      mb={10}
    >
      <Text ml={10} mt={10} textAlign="center">
        Table will go here
      </Text>
    </Box>
    <SimpleGrid columns={2} spacingX={1} spacingY={1} ml={60} mr={60}>
      <Box
        minHeight={200}
        backgroundColor="whiteAlpha.200"
        mr={5}
        boxShadow="2xl"
        rounded="md"
        bg="white"
      >
        <Text fontSize="sm" mb={5} fontWeight="bold" ml={5} mt={2}>
          SQL
        </Text>
        <Divider
          borderColor="gray.500"
          mb={5}
          mt={-3}
          display="block"
          border={1}
          ml={5}
          mr={5}
        />
        <Code fontSize="sm" ml={5} mr={5}>
          SELECT employee_id, employee_name, dob, department FROM table1
        </Code>
      </Box>
      <Box
        minHeight={200}
        backgroundColor="whiteAlpha.200"
        boxShadow="2xl"
        rounded="md"
        bg="white"
      >
        <Text fontSize="sm" mb={5} fontWeight="bold" ml={5} mt={2}>
          Further Question
        </Text>
        <Divider
          borderColor="gray.500"
          mb={5}
          mt={-3}
          display="block"
          border={1}
          ml={5}
          mr={5}
        />
        <Code fontSize="sm" ml={5}>
          What have you done to my family?
        </Code>
      </Box>
    </SimpleGrid>
  </ChakraProvider>
)

export default App
