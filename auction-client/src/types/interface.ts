export interface Lot {
  id: string;
  title: string;
  startPrice: number;
  description: string;
  categoryName: string;
  currencyName: string;
  currencyCode: string;
  bids: Bid[];
}

export interface Bid {
  id: string;
  totalPrice: number;
  currencyName: string;
  userId: string;
}

export interface User {
  id: string;
  login: string;
  password: string;
  userName: string;
  phoneNumber?: string;
  email?: string;
}
