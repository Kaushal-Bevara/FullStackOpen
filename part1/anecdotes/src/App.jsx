import { useState } from 'react'
const App = () => {   
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0);
  const [voteArr, setVotes] = useState(new Uint8Array(8));
  const randomAnecdote = () => {
    setSelected(Math.abs(Math.floor(Math.random()*10-2)));
  }
  const handleVote = () => {
    const copy = voteArr;
    copy[selected]++;
    setVotes(copy);
  }
  return (
    <div>
      <button onClick = {randomAnecdote}> Random Anecdote </button>
      <button onClick = {handleVote}>Vote</button>
      <Anecdote anecdote = {anecdotes[selected]} vote = {voteArr[selected]}/>
      <TopAnecdote anecdotes = {anecdotes} votes = {voteArr}/>
    </div>
  )
}
const Anecdote = (props) => {
  return(
  <div>
    <p>{props.anecdote}</p>
    <p>has {props.vote} votes</p>
  </div>
  );
}
const TopAnecdote = (props) => {
  const votes = props.votes
  const anecdotes = props.anecdotes
  const max = (votes) => {
    let most = 0;
    for (var i = 0; i < votes.length; i++){
      if (votes[i] > most) {
        most = votes[i];
      }
    }
    return most;
  }
  const maxVotes = max(votes)
  const topDote = anecdotes[votes.indexOf(maxVotes)]
  console.log(maxVotes)
  return(
    <div>
      <p>The top post is:</p>
      <p>{topDote}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}
export default App