import { Lot } from "./types/Lot";
import { client } from "./utils/fetchClient";

export const getLots = () => {
  return client.get<Lot[]>("/lots/all");
};

export const getLotById = (id: string) => {
  return client.get<Lot>(`/lots/getById/${id}`);
};

// export const addLot = (Lot: Omit<Lot, "id">) => {
//   return client.post<Lot>("/lots", Lot);
// };

// export const editLot = (id: number, Lot: Partial<Lot>) => {
//   return client.patch<Lot>(`/lots/${id}`, Lot);
// };

// export const removeLot = (id: number) => {
//   return client.delete(`/lots/${id}`);
// };
