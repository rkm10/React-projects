import axios from 'axios'

const url = "http://localhost:3000/data";

export async function getData() {
      const response = await axios.get(url);
      return response.data;
}