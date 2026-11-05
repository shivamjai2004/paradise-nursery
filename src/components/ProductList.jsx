import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const plantsData = [
  {
    category: 'Air Purifying',
    plants: [
      { name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg', description: 'Produces oxygen at night, improving air quality.', cost: '$15' },
      { name: 'Spider Plant', image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg', description: 'Filters formaldehyde and xylene from indoor air.', cost: '$12' },
      { name: 'Peace Lily', image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg', description: 'Removes indoor air pollutants effectively.', cost: '$18' },
    ]
  },
  {
    category: 'Aromatic & Herbs',
    plants: [
      { name: 'Lavender', image: 'https://cdn.pixabay.com/photo/2017/07/18/18/24/lavender-2516623_1280.jpg', description: 'Calming fragrance, ideal for relaxation.', cost: '$20' },
      { name: 'Rosemary', image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg', description: 'Invigorating scent used in cooking and aromatherapy.', cost: '$14' },
      { name: 'Mint', image: 'https://cdn.pixabay.com/photo/2017/03/23/19/57/mint-2169305_1280.jpg', description: 'Refreshing herb easy to grow indoors.', cost: '$10' },
    ]
  },
  {
    category: 'Low Maintenance',
    plants: [
      { name: 'Aloe Vera', image: 'https://cdn.pixabay.com/photo/2018/04/02/18/11/aloe-vera-3284620_1280.jpg', description: 'Soothing gel inside leaves, requires minimal watering.', cost: '$12' },
      { name: 'ZZ Plant', image: 'https://cdn.pixabay.com/photo/2020/05/12/16/17/zz-plant-5163779_1280.jpg', description: 'Thrives in low light and irregular watering.', cost: '$22' },
      { name: 'Jade Plant', image: 'https://cdn.pixabay.com/photo/2021/01/18/18/43/succulent-5929117_1280.jpg', description: 'Popular succulent symbolizing good luck.', cost: '$16' },
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isAddedToCart = (plantName) => {
    return cartItems.some(item => item.name === plantName);
  };

  return (
    <div style={{ padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      {plantsData.map((cat, idx) => (
        <div key={idx} style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#2e7d32', borderBottom: '2px solid #2e7d32', paddingBottom: '8px' }}>{cat.category}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
            {cat.plants.map((plant, pIdx) => (
              <div key={pIdx} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', backgroundColor: '#fff' }}>
                <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }} />
                <h3 style={{ margin: '12px 0 5px', fontSize: '1.2rem' }}>{plant.name}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', minHeight: '40px', margin: '0 0 10px' }}>{plant.description}</p>
                <p style={{ fontWeight: 'bold', color: '#2e7d32', fontSize: '1.1rem', margin: '0 0 12px' }}>{plant.cost}</p>
                <button 
                  onClick={() => handleAddToCart(plant)}
                  disabled={isAddedToCart(plant.name)}
                  style={{
                    backgroundColor: isAddedToCart(plant.name) ? '#ccc' : '#2e7d32',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: isAddedToCart(plant.name) ? 'not-allowed' : 'pointer',
                    width: '100%',
                    fontWeight: 'bold',
                    transition: 'background-color 0.2s'
                  }}>
                  {isAddedToCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;