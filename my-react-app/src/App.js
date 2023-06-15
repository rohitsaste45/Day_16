function App(){
  return (
    <>
      <h1>Pros Demo</h1>
      <MessageDemo name="rohit" />
      <MessageDemo name="rohit" />
      <MessageDemo name="rohit"/>
    </>
  );
}

function MessageDemo(propos){
  return (
    <>
      <h1>Hello {propos.name}</h1>
    </>
  );
}

export default App;