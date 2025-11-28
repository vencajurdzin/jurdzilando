import { CardMedia, Container, Typography } from '@mui/material';
import { cardMedia } from '../styles';
import type { Product } from '../../../api/types';

type ProductDetailPageViewProps = {
  product?: Product;
  isLoading: boolean;
};

const ProductDetailPageView = ({
  product,
  isLoading,
}: ProductDetailPageViewProps) => {
  if (isLoading) return <p>Loading...</p>;
  if (!product) return <p>Failed to load product detail.</p>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {product.title}
      </Typography>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        loading="lazy"
        sx={cardMedia}
      />
      <Typography variant="body1">{product.description}</Typography>
      <Typography variant="h6">${product.price}</Typography>
    </Container>
  );
};

export default ProductDetailPageView;

