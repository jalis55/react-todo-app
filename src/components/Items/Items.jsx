import React, { useContext } from 'react';
import './Items.css';
import { TodoItemsContext } from '../../store/todo-items-store';

const Items = ({itemDetails}) => {
  const {handleCompletedTask}=useContext(TodoItemsContext);
  const {handleDeleteBtn}=useContext(TodoItemsContext);
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="form-check">
          {!itemDetails.isCompleted && 
          <input className="form-check-input" type="checkbox" value="" 
          onChange={()=>handleCompletedTask(itemDetails.id)}
          id="flexCheckIndeterminate"/>}

            <label className="form-check-label" htmlFor="flexCheckIndeterminate">
              {itemDetails.taskName}
            </label>
            <p>{itemDetails.dueDate}</p>
        </div>
        <button className='btn btn-danger' onClick={()=>handleDeleteBtn(itemDetails.id)}>Delete</button>
      </li>
    )
}

export default Items;