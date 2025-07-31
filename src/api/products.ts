import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import type { Product } from './types';

axios.defaults.baseURL = 'https://fakestoreapi.com';

// ----- Fetchers -----
const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get('/products');
  return data;
};

const fetchProductById = async (id: string): Promise<Product> => {
  const { data } = await axios.get(`/products/${id}`);
  return data;
};

// ----- React Query hooks -----
export const useProducts = () =>
  useQuery({ queryKey: ['products'], queryFn: fetchProducts });

export const useProductDetail = (id?: string) =>
  useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id!),
    enabled: !!id,
  });
