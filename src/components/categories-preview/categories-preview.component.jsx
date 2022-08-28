import React from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../spinner/spinner.component';

import { selectCategoriesMap, isLoadingSelector } from '../../store/categories/categories.selector';

const CategoriesPreview = () => {

  const categoryMap = useSelector(selectCategoriesMap)

  const isLoading = useSelector(isLoadingSelector);

  return (
    <React.Fragment>
      {isLoading ? <Spinner />
        : (
          Object.keys(categoryMap).map((title, i) => {
            const products = categoryMap[title];
            return (
              <CategoryPreview key={i} title={title} products={products} />
            )
          })
        )
      }


    </React.Fragment>
  )
}

export default CategoriesPreview;