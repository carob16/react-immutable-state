import { useState } from "react"
import {initialWorkouts, generateWorkout} from "./Workouts.js"
import "./App.css"

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts)

  const addNewWorkout = ()=>{
    const newWorkout = generateWorkout()
    setWorkouts([...workouts, newWorkout])

  }

  const deleteWorkout = (workout) => {
    setWorkouts(workouts.filter(w => w !== workout))
  }

  const completeWorkout = (workout) => {
    const updatedWorkouts = workouts.map((w) => {
      if (w === workout) {
        w.done =true;
        return w;
      } else {
        return w;
      }
    });
    setWorkouts(updatedWorkouts)
  }
  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <button onClick={addNewWorkout}>Add New Workout</button>
      <Workouts workouts={workouts} deleteWorkout={deleteWorkout} completeWorkout={completeWorkout}/>
    </div>
  )
}

export default App


function Workouts(props){
  return(
    <>
    <ul>
        {props.workouts.map((workout, index) => (
          <li key={index}>
            <p>
              {workout.sets}x sets of <strong>{workout.reps}x{workout.exercise}</strong> with {workout.rest} seconds rest
            </p>
            {!workout.done &&
              <button onClick={e=>props.completeWorkout(workout)}>Done</button>}
            {workout.done &&
              <p>✅</p>}
            <button onClick={e=>props.deleteWorkout(workout)}>Delete</button>
          </li>
        ))}
    </ul></>
  )
}