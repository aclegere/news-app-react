import React, { useEffect } from 'react';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Article from './components/Article';

function App() {
  useEffect(() => {
    document.title = "Today's News";
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box pt={2}>
        <Grid minH="100vh" p={1}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Article />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
