import React from 'react';
import './CompletedTasks.css';
import Items from '../Items/Items';

const CompletedTasks = ({itemList,handleCompletedTask,handleDeleteBtn}) => {
  return (
    <div className='col-md-6 col-lg-6 col-sm-12 col-12 border-start p-2'>
      <h2 className='text-center text-decoration-underline'>Completed</h2>
      <div>
        <ul className="list-group list-group-flush ">
        {itemList.map((item)=>{
            if(item.isCompleted){
              return <Items key={item.id} itemDetails={item} handleCompletedTask={handleCompletedTask} handleDeleteBtn={handleDeleteBtn} />
            }
        })}

        </ul>
      </div>
      
    </div>
  )
}

export default CompletedTasks;