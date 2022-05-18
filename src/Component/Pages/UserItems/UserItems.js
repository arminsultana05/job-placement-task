import React, { useEffect, useState } from 'react';
import useTask from '../Hooks/useTask';

const UserItems = ({ task, handleRemove }) => {
return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>DELETE</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>1</th>
                            <td>{task.name}</td>
                            <td>{task.description}</td>
                            <td>
                           
                                    <button onClick={() => handleRemove(task._id)} className="btn ">Delivered</button>
                              </td>
                        </tr>
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default UserItems;