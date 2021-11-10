import Task from './Task';


const Tasks = ({ tasks, onDelete, onDoubleClick }) => {

    return (
        <>
            {tasks.map((task, index) => <Task key={index} task={task} onDelete={onDelete} onDoubleClick={onDoubleClick}/>)}
        
        </>
    )
}

export default Tasks
