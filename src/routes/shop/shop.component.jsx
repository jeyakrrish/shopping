import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import CategoriesPreview from '../../components/categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { fetchCategoriesAsync } from '../../store/categories/categories.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategoriesAsync(dispatch);
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':title' element={<Category />} />
    </Routes>
  )
}

export default Shop;