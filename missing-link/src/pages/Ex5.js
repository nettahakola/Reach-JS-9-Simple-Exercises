import MyList from '../components/MyList'

const Ex5 = () =>{
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
    return (
      <div>
        <h3 className="">Ex5</h3>
        <div className="container">
          <MyList list={animals} />
        </div>
      </div>
    );
  }

  export default Ex5