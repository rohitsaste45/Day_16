import { useState } from "react";


function App() {

  return (
    <>
      <h1>Stateful List</h1>
      <ListDemo />

    </>
  );
}

function ListDemo() {
  let [list, setList] = useState(["Pune"]);

  let addItemAction = () => {
    let nref = document.querySelector("#id1")
    let nval = nref.value;
    let newList = [nval, ...list];
    setList(newList);

    nref.value = "";
  };

  return (
    <>
      <input type="text" id="id1" placeholder="Enter user Input..." />
      <input type="button" value="Add New Item" onClick={addItemAction} />
      {list.map((item) => (
        <h1>Hello {item}</h1>
      ))}
    </>
  );

}

export default App;