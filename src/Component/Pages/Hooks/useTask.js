import React, { useEffect, useState } from 'react';

const useTask = () => {
    const [tasks, setTasks]= useState([])
    useEffect(() => {
        const url =`http://localhost:5000/tasks`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTasks(data)

            })
           
    }, [tasks])

    return [tasks, setTasks]
};

export default useTask;