import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../../components/categories-preview/categories-preview.component';
import Category from '../category/category.component';

// import './shop.styles.scss';

const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':title' element={<Category />} />
    </Routes>
  )
}

export default Shop;