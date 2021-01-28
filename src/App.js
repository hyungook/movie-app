import React from 'react';
import propTypes from 'prop-types';

const foodILike = [
    {
      id : 1,
      name: "Kimchi",
      image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
      rating: 5,
    }, 
    {
      id : 2,
      name: "Samgyeopsak",
      image: "https://newsimg.hankookilbo.com/cms/articlerelease/2020/06/11/202006111362061920_7.jpg",
      rating: 4.6,
    },
    {
      id : 3,
      name: "Bibimbap",
      image: "https://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg",
      rating: 4.7,
    }, 
];

function Food({name, picture, rating}) {
  console.log(name);
  return <div>
    <h2>I Like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}></img>
  </div>
}

// function renderFood(dish) {
//   console.log(dish);
//   return <Food key={dish.id} name={dish.name} picture={dish.image} />
// }

// eslint-disable-next-line react/no-typos
Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  // rating: propTypes.string.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
