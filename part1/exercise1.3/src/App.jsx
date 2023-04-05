const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14; 
  const partList = [part1,part2,part3];
  const excercisesList = [exercises1,exercises2,exercises3];
  return (
    <div>
      <Header course = {course} />
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
