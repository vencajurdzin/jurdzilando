import { Container, Typography } from '@mui/material';
import ProductList from '../../components/ProductList/ProductList';
import { useProductListPage } from './useProductListPage';

const ProductListPage = () => {
  const { data, isLoading } = useProductListPage();

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Jurdzilando
      </Typography>
      <ProductList products={data} />
    </Container>
  );
};

export default ProductListPage;
