import React from 'react'

const Modals = ({ setShowModals, task, setTask, taskId, setTaskId }) => {

    const handleOK = () => {
        const updatedTask = [...task]
        const index = updatedTask.findIndex(item => item.id == taskId)
        console.log("data-", taskId)
        updatedTask[index].isPending = !updatedTask[index].isPending
        setTask(updatedTask)
        setShowModals(false)
    }

    const handleCancel = () => {
        setShowModals(false)
    }

    return (
        <div className='background' onClick={() => setShowModals(false)}>
            <div className='dialogue' onClick={(e)=> e.stopPropagation()}>
                <h3 style={{ textAlign: "right", paddingRight: "5px", cursor: "pointer" }} onClick={() => setShowModals(false)}>X</h3>
                <h2 align="center">Are you sure you want to update the status?</h2>
                <div style={{ display: "flex", justifyContent: "end", gap: "10px", marginTop: "20px" }}>
                    <button onClick={handleOK}>OK</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modals