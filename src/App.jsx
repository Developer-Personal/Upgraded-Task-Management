import { useState } from "react"
import Input from "./Components/Input"
import Task  from "./Components/Task"
import Progress from "./Components/Progress"
import Modals from './Components/Modals'

function App() {

  const [input, setInput] = useState("")
  const [task, setTask] = useState([])
  const [taskId, setTaskId] = useState(null)
  const [showModals, setShowModals] = useState(false)

  return (
    <>
    <div className="app">
    <Input input={input} setInput={setInput} task={task} setTask={setTask}/>
    <Task input={input} setInput={setInput} task={task} setTask={setTask} taskId={taskId} setTaskId={setTaskId} setShowModals={setShowModals}/>
    <Progress task={task}/>
    </div>
    {showModals && <Modals setShowModals={setShowModals} taskId={taskId} task={task} setTask={setTask}/>}
    </>
  )
}

export default App
