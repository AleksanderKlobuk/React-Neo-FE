import React from 'react';
import '../../Styles/Cards.css';
import CardItem from '../CardItem/CardItem';
import image9 from '../../assets/images/img-9.jpg'
import image2 from '../../assets/images/img-2.jpg'
import image3 from '../../assets/images/img-3.jpg'
import image4 from '../../assets/images/img-4.jpg'
import image5 from '../../assets/images/img-5.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out what you can use to make your day in order!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={image9}
              text='Show yourself a path to follow during the day'
              label='To Do List'
              path='/todolist'
            />
            <CardItem
              src={image2}
              text='Control Your Expenditures'
              label='Budget Planner'
              path='/budget'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image3}
              text='Be Prepared to Shopping and Spend Less'
              label='Shopping List'
              path='/shoppinglist'
            />
            <CardItem
              src={image4}
              text='Be On Time With Weather Updates'
              label='Weather'
              path='/weather'
            />
            <CardItem
              src={image5}
              text='Be on time with Tech updates'
              label='Technology News'
              path='/news'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
