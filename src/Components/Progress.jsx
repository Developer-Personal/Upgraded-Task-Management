import React, { useState, useEffect } from 'react'


const Progress = ({task}) => {

    const [prog, setProg] = useState(0)



    useEffect(() => {
       if(task.length){
        const checkedtask = task.filter(item => item.isPending).length
        const value = checkedtask/task.length*100
        setProg(value.toFixed(2))
       }

    },[task])
  return (
    <div className='progress'>
        
        

        <label htmlFor="file"> Progress:</label>
        <progress id="file" value={prog} max="100">  </progress>&nbsp;{prog}
    </div>
  )
}

export default Progress