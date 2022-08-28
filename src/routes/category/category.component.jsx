import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import { selectCategoriesMap, isLoadingSelector } from '../../store/categories/categories.selector';

import { Products, Title } from './category.styles';

const Category = () => {
  const { title } = useParams();

  const categoryMap = useSelector(selectCategoriesMap);     // selectCategoriesMap calback

  const isLoading = useSelector(isLoadingSelector);

  const [products, setProducts] = useState(categoryMap[title]);

  useEffect(() => {
    setProducts(categoryMap[title])
  }, [categoryMap, title])

  return (
    <React.Fragment>

      {isLoading ? <Spinner /> :
        <div>
          <Title>{title.toLocaleUpperCase()}</Title>
          <Products>
            {
              products &&
              products.map((product) => {
                return <ProductCard key={product.id} product={product} />
              })
            }
          </Products>
        </div>
      }

      </React.Fragment >
  )
}

export default Category;