// function  App(){
//   const handleClick=()=>{
//     alert('Button is clicked');
//   };

//   return(
//     <div>
//     <h1>hello React</h1>
//     <button onClick={handleClick}>click button</button>
//     </div>
//   );  

// }
// export default App;

//class component
// import React,{Component} from 'react';
// class ClassComponent extends Component{
//     handleClick=()=>{
//         alert('Buttonis clicked from classcomponent');

//     };
//     render(){
//       return (<div>
//         <h1>Hello from Class Component</h1>
//         <button onClick={this.handleClick}>click me</button>
//       </div>)
//     };
// }
// export default ClassComponent;
// export default function  ExampleJsx(){
//   return (
//     <div>
//       <h1>welcome to JSX</h1>
//       <p>this is a paragraph.
//       </p>
//     </div>
//   )
//{/* <>
/* <h1>HI</h1>
<img src=""></img>
<ul>
  <li>
    item 1
  </li>
  <li>item 2</li>
</ul>
<button className='container'> click</button>
</> */

// } }
//fragment
// export default ClassComponent;
// import React from  'react';
// import { createElement } from 'react';
// //without jsx
// const Hello=()=>{
//     'div',
//     {id:'hello',className:'exc'},
//     createElement{'h1',null,'hihello react'}
// }
// newone=()=>{
//   return(
//     <div>
//       <h1>Good Moring Everyone</h1>
//     </div>
//   )
// }

// export default Hello;




// import React, {Component} from 'react';
// class Counter extends Component{
   
//   c=0;
//   count=()=>{
//     alert ('button clicked '+this.c++)
//   };
//   render(){
//     return(
//       <div>
//         <button onClick={this.count}>click me</button>
//       </div>
//     );
//   };
// }
// export default Counter;  
// 
// const app=()=>{
//   return(
//     <div  className="app">
     
//     <header  className="header">
//     <nav  className="nav-list">
//     <ul  className="nav-item">
//     <li className="nav-item"><a href="#">home</a></li>
//     <li className="nav-item"><a href="#">About us</a></li>
//     <li className="nav-item"><a href="#"> Services</a></li>
//     <li className="nav-item"> <a href="#">contact us</a></li>
//     </ul>
//     </nav>
//     </header>
//     <main className="main=content">
//       <h1> Welcome to my new Website</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ipsa minus commodi aperiam, natus harum eos hic et, voluptatum dolorum repudiandae itaque maxime exercitationem ut soluta quae deserunt tenetur? Quos nemo eius esse ea quo cupiditate? Consequuntur nisi enim dolorum.

//       </p>
//     </main>
//     <footer className="footer">

//       <p>$copy; 2024 My Website</p>
//     </footer >
//     </div>

//   );
// }
// export default app;
// import './App.css';
// import React from 'react'
// const  question=()=>{
//    return(
//     React.createElement('div' ,{className:"d"},
//     React.createElement('div',{className: "app"},
//     React.createElement('h1',null,"LPU"),
//     React.createElement('h3',null,"Transforming Education, Transforming India")
//     )
//     )
   

//    );
// };
// export default question;



// import UserProfile from './Component/UserProfile';

// const App = () => {
//   const user={
//     name:"John Doe",
//     age:40,
//     bio:'i am a software developer.'
//   };
//   return (
//     <div className='app'>
//       <h1>Main component</h1>
//       <UserProfile name={user.name}age={user.age} bio={user.bio}/>
//     </div>
//   )
// }

// export default App;
// import React from 'react'
// import { useState } from 'react';
// import  './App.css';
// const App = () => {
  
//   function handleAdd(){
//     setCount(count+1);
//   }

//   function handlesub(){
//     setCount(count-1);
//   }
//   //state
//   const[count,setCount]=useState(0);
//   return (
//     <div>
//       <div>
//         <p>{count}</p>
//         <button onClick={handleAdd}>Add</button>
//         <button onClick={handlesub}>sub</button>
//       </div>
//     </div>
//   )
// }

// export default App
// make todo list

import React, { useState } from 'react';
import   './App.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggle = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div id="to">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(index)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

