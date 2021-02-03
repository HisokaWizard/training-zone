import axios, { AxiosResponse } from 'axios';
const placeHolderURL = 'https://jsonplaceholder.typicode.com';

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getTodos = async () => {
  try {
    const todosResponse: AxiosResponse<Todos[]> = await axios.get(`${placeHolderURL}/todos`);
    return Promise.resolve(todosResponse.data);
  } catch (error) {
    return Promise.reject(error);
  }
}