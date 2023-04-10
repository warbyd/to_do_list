import {useState} from 'react'
import './App.css';

function App() {
    const [tasks, setTasks] = useState([
      {name: 'Buy Shopping', priority: 'high', id: 1},
      {name: 'Clean Bathroom', priority: 'low', id: 2},
      {name: 'Cars MOT', priority: 'high', id: 3}
    ])
    
  const handleTaskInput = (event) => {
   return setNewTask(event.target.value)
  }

  const changePriority = (e, id) => {

    const newTasks = [...tasks]
    console.log(e.target.value)
    newTasks.forEach((task) => {
      if(task.id === id){
        task.priority = e.target.value
      }
    })

    console.log(newTasks)
    setTasks(newTasks);
  }
  
   

  const handleTaskSubmit = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({
      name: newTask,
      priority: 'low',
      id: Date.now()
    });
    setTasks(copyTasks);
    setNewTask('');
  }

  

  const [newTask, setNewTask] = useState('')
  return (
    <>
      <h1>To Do List!</h1>
      <ul>
        {tasks.map((task, index)=>{
          return (
            <li key = {task.id}>
            <span>{task.name}</span>
            


            <form onSubmit={changePriority}>
            <input type="radio" id="low" name="scale" value="low"></input>
            <label htmlFor="low">low</label>
            

            
            <input type="radio" id="high" name="scale" value="high"></input>
            <label htmlFor="high">high</label>
            <input type="text" id="new-task" onChange = {handleTaskInput} value = {newTask}/>
            <button>Submit</button>
            
            </form>
            
            
            </li>
          )

        })

        }
      </ul>

      <form onSubmit={handleTaskSubmit}> 
      <label htmlFor="new-task">Add New Task</label>
      <input type="text" id="new-task" onChange = {handleTaskInput} value = {newTask}/>
      <button>Save Task</button>
      </form>
    </>

  );
}

export default App;
