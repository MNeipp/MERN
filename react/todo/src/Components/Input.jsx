import React, {useState} from 'react'

const Input = ({task, setTask}) => {
    const [info, setInfo] = useState('');
    const getInfo = (e) =>{setInfo(e.target.value)};
    const createTask = (e) =>{
        e.preventDefault();
        setTask([...task, info]);
        e.target.reset();
    }
    return (
        <div>
            <form onSubmit={createTask}>
                <div className="form-group">
                <input type="text" onChange = {getInfo} className="form-control-lg" placeholder="Enter Task"/>
                </div>
                <input type="submit" value="Add Task" className="btn btn-primary btn-lg"/>
            </form>
        </div>
    )
}

export default Input
