const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content name = {part1} exercises = {exercises1}/>
      <Content name = {part2} exercises = {exercises2}/>
      <Content name = {part3} exercises = {exercises3}/>      
      <Total excercisesList = {[exercises1, exercises2, exercises3]}/>
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
  return(
    <div>
      <p>{props.name}</p>
      <p>Excercises: {props.exercises}</p>
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
