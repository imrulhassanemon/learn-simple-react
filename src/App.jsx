import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Todo task = 'explore react' isDone = {true}></Todo>
      <Todo task = 'explore react core concept' isDone = {false}></Todo>
      <Todo task = 'Try Jsx' isDone = {true}></Todo>
      {/* <Func></Func>
      <Func></Func>
      <Func></Func>
      <Student name = "sallu" id = '7' session = '22-23' subject = 'bangla'></Student>
      <Student name = 'mallu' id = '9' session = '23-24' subject = 'computer science'></Student>
      <Student name = 'jhallu' id = '10' session = '19-20' subject = 'science'></Student>
      <Student name = 'jhallu' id = '10' session = '12-13' subject = 'business'></Student>
      <Developer></Developer>
      <Device namee ="Laptop" price = '30k'></Device>
      <Device namee = 'mobail' price = '20k'></Device>
      <Device namee = 'watch' price = '3k'></Device> */}
    </>
  )
}


function Device (props){
  return (
    <p>I have: {props.name} price: {props.price} </p>
  )
}

function Func (){
  const name = "Imrul";
  const age = 20;
  const profession = 'developer';
  const salary = 5000
  return <p>My Name is {name}. I am {age} years old. I am a {profession}. My salary is {salary} taka</p>
}


const Student = ({name, id, session, subject}) =>{
  console.log(name, id);
  const std1 = {
    name: 'h',
    id: 2 ,
    sessoin: 22-23,
    subject: 'computer science'
  }
  return (
  <div className='student'>
      <p>Name: {name}</p>
      <p>Id : {id} </p>
      <p>Session : {session} </p>
      <p>Subject: {subject} </p>
  </div>
  )
}



function Developer() {
  const devlopers = {
    margin:'20px',
    border: '2px solid yellow',
    borderRadius: '20px',
    padding: '20px'

  }
  return (

    <div style={devlopers}>
    <h5>Develoer</h5>
    <p>software</p>
    </div>
  )
}

export default App
