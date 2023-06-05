import React from 'react';
import { Stack, Button } from '@chakra-ui/react';

function Buttons({ handleCategoryChange }) {
  return (
    <Stack direction="row" spacing={4} align="center" pt={4}>
      <Button
        colorScheme="green"
        variant="solid"
        onClick={() => handleCategoryChange('general')}
      >
        Top News
      </Button>
      <Button
        colorScheme="green"
        variant="solid"
        onClick={() => handleCategoryChange('business')}
      >
        Business
      </Button>
      <Button
        colorScheme="green"
        variant="solid"
        onClick={() => handleCategoryChange('entertainment')}
      >
        Entertainment
      </Button>
      <Button
        colorScheme="green"
        variant="solid"
        onClick={() => handleCategoryChange('health')}
      >
        Health
      </Button>
      <Button
        colorScheme="green"
        variant="solid"
        onClick={() => handleCategoryChange('science')}
      >
        Science
      </Button>
      <Button
        colorScheme="green"
        variant="solid"
        onClick={() => handleCategoryChange('sports')}
      >
        Sports
      </Button>
      <Button
        colorScheme="green"
        variant="solid"
        onClick={() => handleCategoryChange('technology')}
      >
        Technology
      </Button>
    </Stack>
  );
}

export default Buttons;
