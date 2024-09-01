import React from 'react'

const Task = ({ input, setInput, task, setTask, taskId, setTaskId , setShowModals}) => {

  const handleDelete = (id) => {
    const filterDeleteData = task.filter(item => item.id !== id)
    setTask(filterDeleteData)
  }

  const handleEdit = (id) => {
    const findEditData = task.find(item => item.id === id)
    const filterEditData = task.filter(item => item.id !== id)
    setInput(findEditData.title)
    setTask(filterEditData)
  }

  const handleCheckbox = (id) => {
    setTaskId(id)
    setShowModals(true)
  }

  return (
    <div>
      {
        task.map(item => (
          <div key={item.id} style={{ display: "flex", justifyContent: "space-between", backgroundColor: "aqua",width:"50%",marginLeft:"25%", marginBottom:"10px", padding:"10px" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="checkbox" value={item.isPending} checked={item.isPending} onChange={ () => handleCheckbox(item.id)} />
              <span>{item.title}</span>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={ () => handleCheckbox(item.id)} style={!item.isPending ? {backgroundColor:"red"} : {}}>{item.isPending ? "Completed" : "Pending"}</button> 
              <button onClick={() => handleEdit(item.id)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        )
        )
      }
    </div>
  )
}
export default Task
