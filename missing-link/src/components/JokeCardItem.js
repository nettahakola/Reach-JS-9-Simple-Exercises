import React from 'react';

const JokeCardItem = (props) => {
            return(
            <div className='flex-item' key={ props.data.id }>
                <h4 className='joke-setup'>{ props.data.setup }</h4>
                <br />
                <p className='joke-punchline'>{ props.data.punchline }</p>
            </div>
            )
}

export default JokeCardItem;