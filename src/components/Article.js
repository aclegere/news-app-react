import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';

function Article() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  // GET with fetch API
  const MY_KEY = process.env.REACT_APP_API_KEY;
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general'); // Set the default category to 'general'

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          `category=${category}&` +
          `apiKey=${MY_KEY}`
      );
      const data = await response.json();
      setArticles(data.articles);
      console.log(data);
    };
    fetchPost();
  }, [category]);

  const handleCategoryChange = newCategory => {
    setCategory(newCategory);
  };

  return (
    <Flex flexDirection="column" ml={4} mr={4}>
      <Flex
        flexDirection="column"
        fontSize="25px"
        pb={5}
        justifyContent="center"
        alignItems="center"
      >
        <Text>{formattedDate}</Text>
        <Text>Today's News</Text>
        <Buttons handleCategoryChange={handleCategoryChange} />
      </Flex>
      {articles &&
        articles.map((article, index) => (
          <Flex key={index} align="center" mb="20px">
            {article.urlToImage && (
              <Image
                src={article.urlToImage}
                alt="Article"
                width="150px"
                mr="15px"
              />
            )}
            <Box>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <Text fontWeight="semibold" _hover={{ color: 'tomato' }}>
                  {article.title}
                </Text>
              </a>
              <Text>{article.description}</Text>
            </Box>
          </Flex>
        ))}
    </Flex>
  );
}

export default Article;
