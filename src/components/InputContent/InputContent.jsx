import React, { useContext, useState } from 'react';
import './InputContent.css';
import { TodoItemsContext } from '../../store/todo-items-store';

const InputContent = () => {
    const [taskName,setTaskName]=useState("");
    const [dueDate,setDueDate]=useState("");

    const handleSubmit=()=>{
        addTodoList(taskName,dueDate);
        setTaskName("");
        setDueDate("");
    }
    const {addTodoList}=useContext(TodoItemsContext)
    return (
        <div>
            <div className="border p-4 w-50 mx-auto">
                <div className='row g-3'>
                    <div className="col-md-6">
                        <input type="text" className='form-control' 
                        placeholder='Enter task'
                        value={taskName}
                        onChange={(e)=>setTaskName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <input type="date"  className='form-control' 
                        value={dueDate}
                        onChange={(e)=>setDueDate(e.target.value)}
                        />
                    </div>

                </div>
                    <button className='btn btn-primary btn-lg mt-2' onClick={()=>handleSubmit()}>Add</button>


            </div>
        </div>
    )
}

export default InputContent;