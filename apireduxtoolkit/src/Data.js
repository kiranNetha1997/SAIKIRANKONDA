import { isRejected } from '@reduxjs/toolkit';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './Components/Slice/AxiosSlice';

function Data() {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state);
    console.log(users);
    return (
        <div>
            <h1>Users Data</h1>
            <button onClick={() => dispatch(fetchUsers())}>Get Users</button>
            {
                users.loading === "Loading..." && <h2>Loading...</h2>
            }
            {
                users.loading === "rejected" && <h1> Network Error</h1>
            }
            <table style={{ backgroundColor: "lightblue", margin: "20px 0px 0px 150px" }}>

                {users.loading === "successfull" &&
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th> Name</th>
                            <th> User Name</th>
                            <th> Email</th>
                            <th> City</th>
                            <th> Lattitude</th>
                            <th> Langittude</th>
                            <th> Street</th>
                            <th> Suite</th>
                            <th> Zipcode</th>
                            <th> Company</th>
                        </tr>
                    </thead>
                }

                <tbody>
                    {users.list.map(each => <tr>
                        <td className='td'>{each.id}</td>
                        <td>{each.name}</td>
                        <td>{each.username}</td>
                        <td>{each.email}</td>
                        <td>{each.address.city}</td>
                        <td>{each.address.geo.lat}</td>
                        <td>{each.address.geo.lng}</td>
                        <td>{each.address.street}</td>
                        <td>{each.address.suite}</td>
                        <td>{each.address.zipcode}</td>
                        <td>{each.company.name}</td>

                    </tr>)}
                </tbody>
            </table>

        </div>
    )
}

export default Data;