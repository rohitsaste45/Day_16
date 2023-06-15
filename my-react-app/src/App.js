

function App(){

  return (
    <>
      <h1>Props Demo</h1>
      <ListDemo/>

    </>
  )
}

function ListDemo(){
  let data ="Hello Universe...";
  let list = ["","",""]

  let list1 =[];
  for(let i =0;i<10;i++){
    list1.push("");
  }

  return (
    <>
      <h1>{data}</h1>
      {list1.map((item) =>(
        <div>
        <h1>Hello universe...</h1>
      </div>
      ))}
      <hr />
      {list1.map((item)=> (
        <div>
        <h1>Hello Rohit...</h1>
      </div>
      ))}
    </>
  );
}

export default App;