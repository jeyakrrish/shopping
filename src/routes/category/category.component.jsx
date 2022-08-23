import { useParams } from 'react-router-dom';

import React, { useState, useEffect, useContext } from 'react';
import { CategoryContext } from '../../context/category-context';

import ProductCard from '../../components/product-card/product-card.component';

import {Products, Title} from './category.styles';

const Category = () => {
  const { title } = useParams();
  const { categoryMap } = useContext(CategoryContext);

  const [products, setProducts] = useState(categoryMap[title]);

  useEffect(() => {
    setProducts(categoryMap[title])
  }, [categoryMap, title])

  return (
    <React.Fragment>
      <Title>{title.toLocaleUpperCase()}</Title>
      <Products>
        {
          products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })
        }
      </Products>
    </React.Fragment>
  )
}

export default Category;