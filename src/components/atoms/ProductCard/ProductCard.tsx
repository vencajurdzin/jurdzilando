import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { card, cardMedia, cardContent, title } from './styles';
import type { ProductCardProps } from './types';

const ProductCard = ({ product }: ProductCardProps) => (
  <Card sx={card}>
    <CardMedia
      component="img"
      image={product.image}
      alt={product.title}
      sx={cardMedia}
    />
    <CardContent sx={cardContent}>
      <Typography variant="body1" sx={title}>
        {product.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        ${product.price}
      </Typography>
    </CardContent>
  </Card>
);

export default ProductCard;
