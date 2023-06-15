

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
  let list = ["Pune","Mumbai","Baramati"]

  return (
    <>
      {list.map((item) =>(
        <>
          <h1>Hello World</h1>
        </>
      ))}

      {list.map((item)=> "hello" +item)}

      {list.map((item) => item)}
    </>
  );
}

export default App;