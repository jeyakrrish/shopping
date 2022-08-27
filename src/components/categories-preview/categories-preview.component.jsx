import React from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import { selectCategoriesMap } from '../../store/categories/categories.selector';

const CategoriesPreview = () => {

  const categoryMap  = useSelector(selectCategoriesMap)

  return (
    <React.Fragment>
      {Object.keys(categoryMap).map((title, i) => {     //[hats, jackets, sneakers, men, women]
        const products = categoryMap[title];          //{ hats: {...} }
        return (
          <CategoryPreview key={i} title={title} products={products} />
        )
      })}
    </React.Fragment>
  )
}

export default CategoriesPreview;