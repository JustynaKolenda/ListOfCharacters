import axios from 'axios';

const url = `https://rickandmortyapi.com/api/character/?page=1`
const getCharacters = async () => {
  try {
    let res = await axios.get(url);

    // Work with the response...
  } catch (err) {
    // Handle error
    console.log(err);
  }
};
