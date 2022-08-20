// import SHOP_DATA from '../../shop-data.json';
import { useContext } from 'react';
import { ProductsContext } from '../../context/product-context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  console.log(products.length);
  return (
    <div className='shop-container'>
      {
        products.map((product) => {
          return (
            <ProductCard key={product.id} product={product} />
          )
        })
      }
    </div>
  )
}

export default Shop;