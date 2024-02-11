import { Lot } from "./types/interface";
import { client } from "./utils/fetchClient";

import { Todo } from "./types/Todo";

export const getLots = (userId: number) => {
  return client.get<Lot[]>(`/Lots?userId=${userId}`);
};

export const addLot = (Lot: Omit<Lot, "id">) => {
  return client.post<Lot>("/Lots", Lot);
};

export const editLot = (id: number, Lot: Partial<Lot>) => {
  return client.patch<Lot>(`/Lots/${id}`, Lot);
};

export const removeLot = (id: number) => {
  return client.delete(`/Lots/${id}`);
};

// eslint-disable-next-line max-len
const BASE_URL =
  "https://mate-academy.github.io/react_dynamic-list-of-todos/api";

function wait(delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function get<T>(url: string): Promise<T> {
  // eslint-disable-next-line prefer-template
  const fullURL = BASE_URL + url + ".json";

  return wait(300)
    .then(() => fetch(fullURL))
    .then((res) => res.json());
}

export const getTodos = () => get<Todo[]>("/todos");
