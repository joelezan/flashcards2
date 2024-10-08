import React from 'react';

const Card = ({ question, stateName, answer, isFlipped }) => {
    return (
        <div className='flashcards'>
            <h2>{isFlipped ? answer : `${question} ${stateName}?`}</h2>
        </div>
    );
};

export default Card;
