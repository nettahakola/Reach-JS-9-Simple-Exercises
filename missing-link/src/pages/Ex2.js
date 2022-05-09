const Ex2 = () =>{
    return (
      <div>
        <h3 className="">Ex2</h3>
        <div className="container">
        <div>
          <button className="button-style" onClick={clickAlert}>click!</button>
        </div></div>
      </div>
    );
  }
  
  function clickAlert() {
    alert("Clicked!");
  }

  export default Ex2