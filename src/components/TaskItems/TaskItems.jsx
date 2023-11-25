import React, { useContext } from 'react';
import './TaskItems.css';
import Items from '../Items/Items';
import { TodoItemsContext } from '../../store/todo-items-store';

const TaskItems = () => {
  const {itemList}=useContext(TodoItemsContext);
  return (
    <div className='col-md-6 col-lg-6 col-sm-12 col-12 border-start p-2'>
      <h2 className='text-center text-decoration-underline'>ToDo</h2>
      <div>
        <ul className="list-group list-group-flush ">
        {itemList.map((item)=>{
          if(!item.isCompleted){
            return <Items key={item.id} itemDetails={item}  />
          }
          else{
            return null;
          }
          
        }
        )}
        

        </ul>
      </div>
    </div>
  )
}

export default TaskItems;