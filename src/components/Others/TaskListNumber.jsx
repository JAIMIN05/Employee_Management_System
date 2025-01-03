import React from 'react';

const TaskListNumber = ({data}) => {
    return (
        <>
            <div className='flex mt-14 justify-between gap-5'>
                <div className='bg-[#FFA500] py-7 px-9 w-[45%] rounded-xl'>
                    <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
                    <h3 className='text-2xl font-medium'>New Task</h3>
                </div>
                <div className='bg-[#28A745] py-7 px-9 w-[45%] rounded-xl'>
                    <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
                    <h3 className='text-2xl font-medium'>Completed Task</h3>
                </div>
                <div className='bg-[#17A2B8] py-7 px-9 w-[45%] rounded-xl'>
                    <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
                    <h3 className='text-2xl font-medium'>Accepted Task</h3>
                </div>
                <div className='bg-[#DC3545] py-7 px-9 w-[45%] rounded-xl'>
                    <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
                    <h3 className='text-2xl font-medium'>Failed Task</h3>
                </div>
            </div>
        </>
    )
}

export default TaskListNumber;