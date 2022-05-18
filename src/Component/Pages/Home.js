import React, { useState } from 'react';
import useTask from './Hooks/useTask';
import UserItems from './UserItems/UserItems';




const Home = () => {
    const [tasks, setTasks] = useTask()
    console.log(tasks);

    const handleForm = (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const user = { name, description };
        console.log(user);
        const url = `http://localhost:5000/add-task/`
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                e.target.reset();



                // toast.success("Added Successfully", {toastId : "SUCCESS"})
            });



          


    };
    const handleRemove = (id) =>{
        const proceed = window.confirm("Are you sure you want to delete?");
        if(proceed){
          const url = `http://localhost:5000/tasks/${id}`;
          fetch(url, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then( data =>{
            console.log('deletd data', data);
          })
        }
      }
    return (
        <div className="">
            <div class="card w-96 bg-base-100 shadow-xl flex mx-auto mt-12">
                <div class="card-body">
                    <h2 class="card-title mx-auto">To-DO APP</h2>
                    <form onSubmit={handleForm} >
                        <input className=' w-full border  border-purple-400 mt-3 p-1' type="text" name="name" placeholder='Task-Name' />
                        <br />

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Description</span>

                            </label>
                            <textarea class="textarea textarea-bordered h-24" name="description" placeholder="Discription" ></textarea>

                        </div>

                        <input className='btn w-full mt-5' type="submit" value="Add Task" />
                    </form>


                </div>


            </div>
            <div className="mt-6 w-3/4 mx-auto">
                {
                    tasks.map(task=><UserItems
                    key={task._id}
                    task={task}
                    handleRemove ={handleRemove}
                 >

                    </UserItems>)
                }
            </div>
        </div>
    );
};

export default Home;