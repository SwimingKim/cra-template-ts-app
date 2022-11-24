import axios from "axios";

export const requestTodo = async (id: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return response.data;
};

export interface TodoItemType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
