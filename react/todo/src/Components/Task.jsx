import React, {useState} from 'react'


const Task = ({task, taskArray, index, setTask}) => {
    const [checked, setChecked] = useState(false)
    const deleteTask = () =>{
        setTask(() => taskArray.filter(task => task.indexOf(task) !== index)
    );}

    return (
        <div>
            {checked ? 
            <li><s>{task}</s><input type="checkbox" name="checkbox" id="" className="ml-3" onClick={() => setChecked(!checked)}/><button onClick={deleteTask} className="btn btn-success btn-sm ml-4">Delete</button></li> : 
            <li>{task}<input type="checkbox" name="checkbox" id="" className="ml-3" onClick={() => setChecked(!checked)}/><button onClick={deleteTask} className="btn btn-success btn-sm ml-4">Delete</button></li>
            }
        </div>
    )
}

export default Task
