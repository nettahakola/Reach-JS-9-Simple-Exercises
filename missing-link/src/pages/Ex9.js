import APICardContainer from '../components/APICardContainer'
import React, { useState, useEffect } from 'react'

const Ex9 = () => {
  const url = 'https://random-data-api.com/api/users/random_user?size=10'
  const [ apiData, setApiData ] = useState([])
  const [ count, setCount ] = useState(0)
  
  useEffect(() => {
    console.log(count)
    fetch(url)
    .then(response => response.json())
    .then(response => setApiData(response))
    console.log(apiData)
  }, [count]);
  
  return (
    <div>
      <h3 className="">Ex9</h3>
      <button className="update-button" onClick={() => setCount((c) => (c + 1))}>update</button>
      <div className="container">
        <APICardContainer data={apiData} />
      </div>
    </div>
  );
}

export default Ex9