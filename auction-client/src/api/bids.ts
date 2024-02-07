import { Bid } from '../types/interface';
import { client } from '../utils/fetchClient';

export const getBids = (userId: number) => {
  return client.get<Bid[]>(`/Bids?userId=${userId}`);
};

export const addBid = (Bid: Omit<Bid, 'id'>) => {
  return client.post<Bid>('/Bids', Bid);
};

export const editBid = (id: number, Bid: Partial<Bid>) => {
  return client.patch<Bid>(`/Bids/${id}`, Bid);
};

export const removeBid = (id: number) => {
  return client.delete(`/Bids/${id}`);
};
