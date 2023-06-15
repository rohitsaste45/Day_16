import { useRef, useState } from "react";


function App() {

  return (
    <>
      <h1>Stateful List</h1>
      <ListDemo />

    </>
  );
}

function ListDemo() {
 let inputRef = useRef();
 let [list, setList] =useState(["ROhit"])

 let addItemAction = ()=>{

  let inputValue = inputRef.current.value;
  let newList = [inputValue,...list];
  setList(newList);
  inputRef.current.value="";
 }

 return (
  <>
    <input
       type="text"
       id="id1"
       ref={inputRef}
       placeholder="Enter User Input..." />
    <input type="button" value="Add New item" onClick={addItemAction} />
    {list.map((item) => (
      <div>
        <h1>{item}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veniam ratione quisquam perspiciatis. Voluptatem sequi libero possimus sunt adipisci esse illo obcaecati, repellendus soluta magni mollitia suscipit ipsum tempore fuga.
        </p>
        <div>
        <input type="button" value="&#128077;" />
        <input type="button" value="&#128078;" />
        </div>
      </div>
      
    ))}

  </>
 );
}

export default App;