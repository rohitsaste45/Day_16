

function App() {
  return (
    <>
      <h1> Props Demo</h1>
      <MessageDemo name="Rohit" email="rohithsaste@gmail.com" />

    </>
  );
}

function MessageDemo({ email, name }) {
  return (
    <>
      <h1>
        hello {name}{email}
      </h1>
    </>
  );

}

export default App;