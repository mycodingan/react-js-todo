// import './App.css';
// import { useState } from "react";

// function ToDoElement({ value, idx, onCompleteToDo, removeToDoItem }) {
//   return (
//     <li
//       style={{
//         fontStyle: "italic",
//         fontSize: "25px",
//         height: "5.2vh",
//         borderRadius: "5px",
//         margin: 15,
//         backgroundColor: value.isCompleted ? "#393E46" : "#222222"
//       }}
//     >
//       {value.todo}

//       <button
//         style={{
//           float: "right"
//         }}
//         onClick={() => onCompleteToDo(idx)}
//       >
//         {!value.isCompleted ? "Done?" : "Task Done"}
//       </button>

//       <button
//         onClick={() => removeToDoItem(idx)}
//         style={{
//           float: "right"
//         }}
//       >
//         {"Remove"}
//       </button>
//     </li>
//   );
// }

// export default function App() {
//   const [inputValue, setToDo] = useState({
//     todo: "",
//     isCompleted: false
//   });

//   const [todos, updateToDosList] = useState([]);

//   const addToDo = () => {
//     if (inputValue.todo) {
//       updateToDosList([...todos, inputValue]);
//       setToDo({
//         todo: "",
//         isCompleted: false
//       });
//     }
//   };

//   const onCompleteToDo = (idx) => {
//     const ourItem = todos[idx];
//     const mTodos = [...todos];
//     const updatedItem = {
//       ...ourItem,
//       isCompleted: !ourItem.isCompleted
//     };
//     mTodos[idx] = updatedItem;
//     updateToDosList(mTodos);
//   };

//   const removeToDoItem = (idx) => {
//     const mTodos = [...todos];
//     mTodos.splice(idx, 1);
//     updateToDosList(mTodos);
//   };

//   return (
//     <div className="App">
//       <h1 style={{ color: "#CFFFDC" }}>
//         Todo list
//         {/* <p style={{ color: "#CFFFDC" }}>Things ToDo</p>{" "} */}
//       </h1>
//       <input
//         style={{
//           padding: "10px",
//           border: "20px",
//           borderRadius: "10px"
//         }}
//         className="inputField"
//         type="text"
//         value={inputValue.todo}
//         placeholder="Add Task"
//         onChange={(e) =>
//           setToDo({
//             todo: e.target.value,
//             isCompleted: false
//           })
//         }
//       />
//       <button
//         onClick={addToDo}
//         style={{
//           margin: "10px"
//         }}
//       >
//         add{" "}
//       </button>
//       <ul>
//         {todos.length > 0 &&
//           todos.map((value, idx) => {
//             return (
//               <ToDoElement
//                 key={value.todo + idx}
//                 value={value}
//                 idx={idx}
//                 onCompleteToDo={onCompleteToDo}
//                 removeToDoItem={removeToDoItem}
//               />
//             );
//           })}
//       </ul>
//     </div>
//   );
// }


