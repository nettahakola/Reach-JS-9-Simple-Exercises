import React from 'react';

const MyList = (props) => {
     return (
         <ul>
         {props.list.map(a => <li key={ a }>{ a }</li>)}
         </ul>
     )
}

export default MyList;