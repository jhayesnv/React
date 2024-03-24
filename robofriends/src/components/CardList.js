import React from 'react'
import Card from './Card';

const CardList = ({robots, BASE_API_URL}) => {
  return (
    <div>
        {robots.map(robot => (
            <Card robot={robot} BASE_API_URL={BASE_API_URL} key={robot.id} />
        ))}
    </div>
  )
};

export default CardList;