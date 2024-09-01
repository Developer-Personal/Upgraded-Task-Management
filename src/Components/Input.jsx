import React, { useState } from 'react'

const Input = ({input, setInput,task, setTask}) => {

  
    const handleInput = (e) => {
        setInput(e.target.value)
        
    }

    const handleAdd = (e) => {
      if(input==""){
        return
      }
        setTask([...task, {id:task.length+1, title:input, isPending:false}])
        setInput("")
        // console.log([...task, input])
    }

  return (
    <div className='input'>
        <input type="text" value={input} placeholder='Enter Task..' onChange={handleInput}/>&nbsp;
        <button disabled = {input == ""}  onClick={handleAdd}>Add Task</button>
    </div>
  )
}

export default Input