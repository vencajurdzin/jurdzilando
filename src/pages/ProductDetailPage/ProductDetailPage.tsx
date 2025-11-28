import { ProductDetailPageView } from './view';
import { useProductDetailPage } from './hooks';

const ProductDetailPage = () => {
  const productDetailPageProps = useProductDetailPage();
  return <ProductDetailPageView {...productDetailPageProps} />;
};

export default ProductDetailPage;
