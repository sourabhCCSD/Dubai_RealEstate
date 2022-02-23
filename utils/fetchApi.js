import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';


  export const fetchApi = async (url) => {
    const {data} = await axios.get((url) , {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'a4035c6f45msh36702e1d491c834p1deccejsne7e90ba463f3'
          }
    })
    return data;
  }