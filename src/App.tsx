import React from 'react';
import {
  Container,
  Text,
  Box,
  VStack,
  HStack,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Center,
} from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Box w="100vw" h="100vh" bg="gray.800">
        <Container maxW="container.xl" py={4} bg="gray.700">
          <VStack spacing={4}>
            {/* Header */}
            <Box bg="gray.400" w="full">
              <Text fontSize="lg" color="white">
                This is a Header Component
              </Text>
            </Box>

            <Grid templateColumns="repeat(12, 1fr)" gap={4} w="full">
              <GridItem colSpan={3} bg="papayawhip">
                <Box>Countries Dropdown</Box>
              </GridItem>
              <GridItem colSpan={6} bg="papayawhip">
                <VStack spacing={4}>
                  <HStack w="full" spacing={4}>
                    <Box w="full" p={2} bg="blue.300">
                      Tests
                    </Box>
                    <Box w="full" p={2} bg="blue.300">
                      Cases
                    </Box>
                    <Box w="full" p={2} bg="blue.300">
                      Deathes
                    </Box>
                  </HStack>

                  <Box w="full" h="400px" bg="blue.200">Map</Box>
                </VStack>
              </GridItem>
              <GridItem colSpan={3} bg="papayawhip">
                <Flex direction="column" height="100%">
                  <Box flex="1">Chart 1</Box>
                  <Box flex="1">Chart 2</Box>
                  <Box flex="1">Chart 3</Box>
                </Flex>
              </GridItem>
            </Grid>
          </VStack>
        </Container>
      </Box>
    </div>
  );
}

export default App;
