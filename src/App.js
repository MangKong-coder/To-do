import { useState } from 'react';
import './index.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    },
  ])
  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() *1000 +1)
    const newTask = {id, ...task};
    setTasks([...tasks, newTask])
  }
  //Delete task
 const deleteTask = id => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  //Toggle reminder
 const toggleReminder = (id) => {
  setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder}: task))
 }

  return (
    <div className="App">
      <div className="container">
        <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} propShowAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onDoubleClick={toggleReminder}/> : <h2>No more Tasks!</h2>}
      </div>
    </div>
  );
}

export default App;
