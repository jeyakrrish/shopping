import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import CategoriesPreview from '../../components/categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { setCategories } from '../../store/categories/categories.action';
import { getCollectionAndDocuments } from '../../utils/firebase/firebase-config';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    const getCategoryMap = async ()=> {
      const categoriesArray = await getCollectionAndDocuments();
      dispatch(setCategories(categoriesArray));
    }
    getCategoryMap();
  },[]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':title' element={<Category />} />
    </Routes>
  )
}

export default Shop;