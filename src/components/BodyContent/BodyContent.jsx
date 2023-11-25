import {React,useState}from 'react';
import './BodyContent.css';
import InputContent from '../InputContent/InputContent';
import TaskItems from '../TaskItems/TaskItems';
import CompletedTasks from '../CompletedTasks/CompletedTasks';
import {default as UUID} from "node-uuid";

// UUID.v4();

const BodyContent = () => {
  const [itemList, setItemList] = useState([]);
  const addTodoList=(taskName,dueDate)=>{
    const newItem={
      'id':UUID.v4(),
      'taskName':taskName,
      'dueDate':dueDate,
      'isCompleted':false

    }
    setItemList([...itemList,newItem]);
  }
  
  const handleCompletedTask=(itemId)=>{
    const newItem=itemList.map((item)=>{
      if(item.id===itemId){
        item.isCompleted=true;
        return item;
      }
      else{
        return item;
      }
    })
    setItemList(newItem);
  }
  const handleDeleteBtn=(itemId)=>{
    const newItem=itemList.filter((item)=>{
      return item.id !==itemId;
    })
    setItemList(newItem);
  }

  return (

    <div className='container body-conten'>
      <h1 className='text-center mt-2'>ToDo Application</h1>
      <InputContent addTodoList={addTodoList}/>
      {itemList.length>0 &&
      <div className="row mt-3 g-3">
      <TaskItems itemList={itemList} handleCompletedTask={handleCompletedTask} handleDeleteBtn={handleDeleteBtn}/>
      <CompletedTasks itemList={itemList}  handleCompletedTask={handleDeleteBtn} handleDeleteBtn={handleDeleteBtn}/>
    </div>
      }


    </div>
  )
}

export default BodyContent;