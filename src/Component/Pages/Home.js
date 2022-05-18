import React from 'react';

const Home = () => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl flex mx-auto mt-40">
            <div class="card-body">
                <h2 class="card-title mx-auto">To-DO APP</h2>
                <form >
                    <input className=' w-full border  border-purple-400 mt-3 p-1' type="text"  name="name" placeholder='Task-Name' id="" readOnly />
                    <br />
                    <input className='w-full border  border-purple-400 mt-3 p-1' type="number"  name="price" placeholder='Description' id="" readOnly />
                    <br />

                </form>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary">Add Items</button>
                </div>
            </div>
        </div>
    );
};

export default Home;