import { useNavigate } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer, Preview, Title } from './category-preview.styles.js';

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const onClickListener = () => navigate(`/shop/${title}`);

  return (
    <CategoryPreviewContainer>
      <h1><Title onClick={onClickListener}>{title.toLocaleUpperCase()}</Title></h1>
      <Preview>
        {
          products
            .filter((_, idx) => idx < 4)          //filtering first
            .map((product) => <ProductCard key={product.id} product={product} />)   //mapping
        }
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;