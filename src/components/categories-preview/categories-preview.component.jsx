import React, { useContext } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import { CategoryContext } from '../../context/category-context';


const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoryContext);

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