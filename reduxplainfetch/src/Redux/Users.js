import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./Actions/Actions";


function Users() {
    const dispatch = useDispatch();
    const employeeslist = useSelector(state => state)
    console.log(employeeslist);

    const fetchData = () => {
        dispatch(fetchUsers());
    };

    return (
        <div>usPeople
            <button onClick={fetchData}>Get Data</button>
            <table>
                <thead>
                    <tr>
                        <th>ID Nation</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th> City</th>
                        <th> ZipCode</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        employeeslist.userReducer.map(each => <tr>
                            <td>{each.Id}</td>
                            <td>{each.Name}</td>
                            <td>{each.Address}</td>
                            <td>{each.City}</td>
                            <td>{each.ZipCode}</td>
                        </tr>)
                    }
                </tbody>


            </table>
        </div>
    )
}

export default Users;