import { useState } from 'react'
const App = (props) => {
  const [counter , setCounter] = useState(0);
  setTimeout(
    () => setCounter(counter+1),
    1000
  )
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };
  const partList = [];
  const excercisesList = [];
  course.parts.forEach(part => {
    partList.push(part.name)
    excercisesList.push(part.exercises)
  })
  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {partList} excercisesList = {excercisesList}/>   
      <Total excercisesList = {excercisesList}/>
    </div>
  )
}
const Header = (props) => {
  return(
    <div>
      <h1>The {props.course} Course</h1>
    </div>
  )
}
const Content = (props) => {
  const parts = props.parts;
  const excercises = props.excercisesList;
  console.log(excercises)
  return (
    <div>
      <Part name = {parts[0]} excercises = {excercises[0].toString()}/>
      <Part name = {parts[1]} excercises = {excercises[1]}/>
      <Part name = {parts[2]} excercises = {excercises[2]}/>
    </div>
  )
}
const Part = (props) => {
  console.log(props.excercises)
  return(
    <div>
      <p>
        {props.name} 
      </p>
      <p>Excercises: {props.excercises}</p>
      <br></br>
    </div>
  )
}
const Total = (props) => {
  const list = props.excercisesList;
  let total = 0;
  for (var i = 0; i < list.length; i++) {
    total += list[i];
  };
  return(
    <div>
      <p>Total Excercises: {total}</p>
    </div>
  )
}
export default App;
