import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  var person = {
    name: "Dr. almoon",
    job: "Teacher" 
  }

  const products =[
    {name:'Photoshop', price: '90.99$'},
    {name: 'Illustrator', price: '69.99$'},
    {name: 'Pdf Reader', price: '35.59$'},
    {name: 'Adobe Premiere', price: '39.99$'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 style = {{backgroundColor:'yellow', color: 'black'}}>My Heading : {person.name + " " + person.job} </h1>
        <p>My first react paragraph</p>
        
        <ul>
          {
            products.map(product => <li>{product.name} - {product.price}</li>)
          }
        </ul>
        {
          products.map(x=> <Product product ={x}></Product>)
        }
        <Counter></Counter>
        <Users></Users>
        <Product product={products[0]} ></Product>
        <Product product={products[1]}></Product>
        <Person name="Messi" age="33" profession="Football"></Person>
        <Person name="Suha" age="75" profession="jharudar"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(15);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick = {handleIncrease}>Increase</button>
      <button onClick = {handleDecrease}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=> res.json())
  .then(data => setUsers(data))
  })

  return (
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user=> <li>{user.title}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const styleProduct={
    border: '1px solid gray',
    borderRadius:'5px',
    float:'left',
    backgroundColor: 'lightgray',
    width: '300px',
    height: '250px',
    color: 'black'
  }
  return(
    <div style= {styleProduct}>
      <h3>{props.product.name}</h3>
      <h1>{props.product.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  return (
    <div style={{border:'2px solid gold', width:'400px', margin:'15px'}}>
      <h1>Name: {props.name}</h1>
      <h3>Age: {props.age}</h3>
      <h3>Profession: {props.profession}</h3>
    </div>
  )
}

export default App;
