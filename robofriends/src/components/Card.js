import React from 'react';

const Card = ({ robot, BASE_API_URL }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={BASE_API_URL + robot.username + '?200x200'}/>
            <div>
                <h2>{robot.name}</h2>
                <p>{robot.email}</p>
            </div>
        </div>
    )
};

export default Card;