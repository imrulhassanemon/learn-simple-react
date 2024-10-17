import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './singer'
import Books from './bookStore'

function App() {
  const [count, setCount] = useState(0)
  const citys = ['vages', 'dhaka', 'newYork', 'caliafornia', 'san diego']
  const singers = [
    {id: 1, name: "ayub bacchu", age: 52}, 
    {id: 2, name: "jems", age: 60},
    {id: 3, name: 'pritom', age: 28}
  ]

  const books = [
    {id: 1, name: "Physics", price: 100},
    {id: 1, name: "Higher Math", price: 120},
    {id: 1, name: "Chemistry", price: 130},
    {id: 1, name: "Biology", price: 200},
  ]
  return (

    <>
      <h1>Vite + React</h1>
      <Books books ={books}></Books>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

     <Actor name= {"vegas"}></Actor>
     {
      citys.map(city => <Actor name={city}> </Actor>)
     }



      {/* <Todo task = 'explore react' isDone = {true}></Todo>
      <Todo task = 'explore react core concept' isDone = {false}></Todo>
      <Todo task = 'Try Jsx' isDone = {true}></Todo> */}
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
