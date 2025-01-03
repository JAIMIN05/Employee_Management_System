import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {    
    return (
        <>
            <div id='tasklist' className='overflow-x-auto flex items-center gap-5 justify-start mt-10 h-[55%] py-5 w-full'>
                {data.tasks.map((ele,idx) => {
                    if(ele.active){
                        return <AcceptTask key={idx} data={ele}/>
                    }
                    if(ele.newTask){
                        return <NewTask key={idx} data={ele}/>
                    }
                    if(ele.completed){
                        return <CompleteTask key={idx} data={ele}/>
                    }
                    if(ele.failed){
                        return <FailedTask key={idx} data={ele}/>
                    }
                })}
            </div>
        </>
    )
}

export default TaskList;