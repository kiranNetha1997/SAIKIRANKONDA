import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import Styles from "./popUp.css";


function PopUp() {
    const [empData, setEmpData] = useState([]);
    const [model, setModel] = useState(false);
    useEffect(() => {
        const details = axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setEmpData(res.data))
            .catch(err => console.log(err))
    }, [0]);

    const closeButton = () => {

    };

    return (
        <div>
            <h1>Employee Data</h1>
            <Popup trigger={<button>View</button>} position="centre">

                <table className='table'>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>User name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </thead>
                    <tbody>
                        {
                            empData.map((empData, id) => (
                                <tr key={id}>
                                    <td>{empData.id}</td>
                                    <td>{empData.name}</td>
                                    <td>{empData.username}</td>
                                    <td>{empData.email}</td>
                                    <td>{empData.phone}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Popup>
        </div>
    )
}

export default PopUp