import { useParams } from 'react-router-dom';
import { useProductDetail } from '../../../api/products';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

export const useProductDetailPage = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useProductDetail(id);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (isError) {
      enqueueSnackbar('Error loading product detail.', { variant: 'error' });
    }
  }, [isError, enqueueSnackbar]);

  return {
    product,
    isLoading,
  };
};

