import './category-item.styles.scss';

const CategoryItem = ({ category }) => {          //destructuring { ____ }
  const { title, imageUrl } = category;       //destructuring { ___, ____, ____ }

  return (
    <div className='category-container'>
      <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
      }} />
      <div className='category-body-container'>
        <h3>{title}</h3>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem;