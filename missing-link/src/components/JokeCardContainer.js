import React from 'react';
import JokeCardItem from './JokeCardItem';

const JokeCardContainer = (props) => {
    const jokesArr = JSON.parse(props.data);
     return (
        <div className='flex-container'>
        {jokesArr.map(obj => <JokeCardItem key={obj.id} data={obj} />)}
        </div>
     )
}

export default JokeCardContainer;