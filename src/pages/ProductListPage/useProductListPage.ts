import { useSnackbar } from 'notistack';
import { useProducts } from '../../api/products';
import { useEffect } from 'react';

export const useProductListPage = () => {
  const { data = [], isLoading, isError } = useProducts();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (isError) {
      enqueueSnackbar('Error loading products.', { variant: 'error' });
    }
  }, [isError, enqueueSnackbar]);

  return {
    data,
    isLoading,
  };
};
