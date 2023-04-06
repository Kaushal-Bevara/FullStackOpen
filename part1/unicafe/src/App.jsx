import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const goodClick = () => {
    setRating({
      good: rating.good +=1,
      neutral: rating.neutral,
      bad: rating.bad,
    });
  }
  const neutralClick = () => {
    setRating({
      good: rating.good,
      neutral: rating.neutral  +=1,
      bad: rating.bad,
    });
  }
  const badClick = () => {
    setRating({
      good: rating.good,
      neutral: rating.neutral,
      bad: rating.bad +=1,
    });
  }
  return (
    <div>
      <h1>Give Feedback!</h1>   
      <button onClick = {goodClick}>Good</button> 
      <button onClick = {neutralClick}>Neutral</button>
      <button onClick = {badClick}>Bad</button>
      <p>Statistics</p>
      <Statistic rating = {rating}/>
    </div>
  );
}

const StatisticLine = (props) => {
  if (props.text == "Percent Positive Rating") {
    return(
      <div>
         <tr><td>{props.text}</td> <td>{props.value} %</td></tr>
      </div>
    );
  }
  else {
    return(
      <div>
         <tr><td>{props.text}</td> <td>{props.value}</td></tr>
      </div>
    );
  }
}
const Statistic = (props) => {
  const rating = props.rating;
  const total = (rating.good+rating.neutral+rating.bad);
  if (total == 0) {
    return (
      <div>
        <p>No Feedback Given</p>
      </div>
    )
  }
  else {
    return(
      <div>
        <table>
          <StatisticLine text = "Good" value = {rating.good}/>
          <StatisticLine text = "Neutral" value = {rating.neutral}/>
          <StatisticLine text = "Bad" value = {rating.bad}/>
          <StatisticLine text = "All" value = {total} />
          <StatisticLine text = "Average" value = {(rating.good-rating.bad)/total}/>
          <StatisticLine text = "Percent Positive Rating" value = {rating.good/total}/>
        </table>
      </div>
    )
  }
}
export default App
