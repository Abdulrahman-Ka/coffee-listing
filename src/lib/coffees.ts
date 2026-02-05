import api from "./axios";

export type Coffee = {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number | null;
  votes: number;
  popular: boolean;
  available: boolean;
};

export const getCoffees = async (): Promise<Coffee[]> => {
  const { data } = await api.get<Coffee[]>("/simple-coffee-listing-data.json");
  return data;
};
