import React from 'react';
import APICardItem from './APICardItem';

const APICardContainer = (props) => {
   return (props.data !== undefined) ? (
         <div className='flex-container'>
         {props?.data?.map((obj, index) => 
            <APICardItem key={toString(obj.id)} data={obj} />)}
         </div>
   )
   : <p>loading</p>
}

export default APICardContainer;