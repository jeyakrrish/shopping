import './App.css';

const categories = [
  {
    id: 1,
    title: 'Hats',
  },
  {
    id: 2,
    title: 'Jackets',
  },
  {
    id: 3,
    title: 'Sneakers',
  },
  {
    id: 4,
    title: 'Women',
  },
  {
    id: 5,
    title: 'Men',
  }
];

const App = () => {
  return (
    <div className='categories-container'>
      {categories.map(({ title, id }) => (            //destructuring
        <div className='category-container' key={id}>
          <img src='#' alt='shopping img' />
          <div className='category-body-container'>
            <h3>{title}</h3>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
