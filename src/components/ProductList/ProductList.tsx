import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductCard from '../atoms/ProductCard';
import { box, gridContainer, gridItem, link } from './styles';
import type { ProductListProps } from './types';

const ProductList = ({ products }: ProductListProps) => (
  <Grid container spacing={gridContainer.spacing}>
    {products.map((product) => (
      <Grid key={product.id} {...gridItem}>
        <Link to={`/product/${product.id}`} style={link}>
          <Box sx={box}>
            <ProductCard product={product} />
          </Box>
        </Link>
      </Grid>
    ))}
  </Grid>
);

export default ProductList;
