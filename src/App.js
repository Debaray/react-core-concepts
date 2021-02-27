import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  var person = {
    name: "Dr. Mahfuz",
    job: "Singer"
  };
  var person2 = {
    name: "Eva Rahman",
    job: "kokil kondi"
  };

  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  const nayoks = ['Razzak', 'Alamgir', 'Salman Shah','Bappi','Shuvo'];

  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' },
    { name: 'Premiere El', price: '$249.99' }]

    const productNames = products.map(product => product.name);
    console.log(productNames);

    const nayokNames = nayoks.map(nayok => nayok);
    console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">

        <p>I am react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok =><li>{nayok}</li>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

         {
           products.map(product => <Product product={product}></Product>)
         }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name="Munna" job="football"></Person>
        <Person name="Masum" job="Dorshok"></Person>

        {/* Dynamic Value Pass */}
        {/* <Person name={nayoks[0]} nayika="Moushumi"></Person>
        <Person name={nayoks[1]} nayika="Sabana"></Person>
        <Person name={nayoks[2]} nayika="Cheka"></Person>
        <Person name={nayoks[3]} nayika="Bobita"></Person> */}

        {
        /* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="" style={style}>My Heading : {person2.name+" "+person2.job} {(2+5)*25+65}</h1>
        <h3 style={{
             color:'yellow',
              backgroundColor:'cyan'
              }}>My Heading : {person.name+" "+person.job} {(2+5)*25+65}</h3>
        <p>My first paragraph react</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease =() => {
    const newCount = count +1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseOver={() =>setCount(count-1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name,price}=props.product;
  console.log(name,price);
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>

    </div>
  )
}
function Person(props) {
  const personStyle = {
    border: '2px solid green',
    margin: '10px'
  }
  console.log(props);
  return (
    <div style={personStyle}>
      <h1>My Name : {props.name} </h1>
      <h3>My Profession: {props.job}</h3>
    </div>)

}

function Users(){
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name} : {user.phone}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
