import { useState } from "react";


function App() {

  return (
    <>
      <h1>Stateful List</h1>
      <ListDemo />

    </>
  )
}

function ListDemo() {
  let [list, setList] = useState(["Pune"]);

  let addItemAction = () => {
    let newList = [...list, "Mumbai"];
    setList(newList);
  };
  return (
    <>

      <input type="button" value="Add New Item" onClick={addItemAction} />
      {list.map((item) => (
        <h1>Hello {item}</h1>
      ))}
    </>
  )

}

export default App;