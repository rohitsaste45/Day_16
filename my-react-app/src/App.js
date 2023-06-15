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
      <MessageDemo message={item} />
    ))}

  </>
 );
}

function MessageDemo({message}){
  return (
    <>
      <h1> Hello {message}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem a odio consequatur necessitatibus fugiat quo aut dicta nemo, saepe voluptate cupiditate numquam doloribus enim, accusantium vel temporibus ipsum velit?</p>
      <div>
      <input type="button" value="&#128077;" />
        <input type="button" value="&#128078;" />
      </div>
    </>
  )
}
export default App;