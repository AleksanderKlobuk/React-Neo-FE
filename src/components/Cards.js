import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out what you can use to make your day in order!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./imagess/img-9.jpg'
              text='Show yourself a path to follow during the day'
              label='To Do List'
              path='/products'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='Control Your Expenditures'
              label='Budget Planner'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-3.jpg'
              text='Be Prepared to Shopping and Spend Less'
              label='Shopping List'
              path='/products'
            />
            <CardItem
              src='/images/img-4.jpg'
              text='Be On Time With Weather Updates'
              label='Weather'
              path='/products'
            />
            <CardItem
              src='/images/img-8.jpg'
              text='Keep All Website You Need Very Close'
              label='Favorite Websites'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
