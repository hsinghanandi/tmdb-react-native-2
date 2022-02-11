import React, { useState } from "react";
import { Center, Stack, VStack, Text } from "native-base";
import Form from "../forms/Form";
import List from "../lists/List";
import Loading from "../layout/Loading";

const SearchResultsContainer = ({ navigation }) => {
  const dropdown = ["multi", "tv", "movie"];
  const [option, setOption] = useState(dropdown[0]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(true);

  function populateMovies(movies) {
    setMovies(movies);
    setLoading(false);
  }
  return (
    <VStack space={3}>
      <Center px={5}>
        <Form
          option={option}
          setOption={setOption}
          dropdown={dropdown}
          populateMovies={populateMovies}
          callType="search"
          setLoading={setLoading}
          setMessage={setMessage}
        />
      </Center>
      {message ? (
        <Stack alignItems="center" justifyContent="center">
          <Text>Please Initiate a Search!</Text>
        </Stack>
      ) : (
        <Text></Text>
      )}

      {loading ? <Loading /> : <List navigation={navigation} movies={movies} />}
    </VStack>
  );
};

export default SearchResultsContainer;
