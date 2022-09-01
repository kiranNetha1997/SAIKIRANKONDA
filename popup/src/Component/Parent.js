import React, { useState, useEffect } from 'react';
import Child from './Child';


export default function Parent(props) {
    const [popup, setPop] = useState(false);
    const [empData, setEmpData] = useState([]);
    const [eachEmpData, setEachEmpData] = useState([]);

    // console.log(empData);
    const handleClickOpen = (id) => {
        setPop(!popup)
        console.log(id)
        const eachEmpData = empData.filter(each => each === each.id)
        console.log(eachEmpData);
        setEachEmpData(eachEmpData);
        //console.log(id)

    };
    const closePopup = () => {
        setPop(false)
    };
    // const empId = props.each.id

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setEmpData(data)
            })
    };
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <div>
                <h1>Empployee Details</h1>
                <div>
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                        </thead>
                        <tbody>
                            {
                                empData.map((each, id) => (
                                    <tr key={id}>
                                        <td>{each.id}</td>
                                        <td>{each.name}</td>
                                        <Child handleClickOpen={() => handleClickOpen(each.id)} />
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div>
                    {
                        popup ?
                            <div className="main">
                                <div className="popup">
                                    <div className="popup-header">
                                        <h1>Empployee Details</h1>
                                        <h1 onClick={closePopup}>X</h1>
                                    </div>
                                    <div>
                                        <div>
                                            {
                                                eachEmpData.map((each, id) => (
                                                    <div key={id}>
                                                        <h3>Name : {each.name}</h3>
                                                        <h3>username :{each.username}</h3>
                                                        <h3>Email : {each.email}</h3>
                                                        <h3>Address :{each.address.street}</h3>
                                                        <h3>Phone :{each.phone}</h3>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                    </div>


                                </div>
                            </div> : ""
                    }
                </div>
            </div >



        </div>
    );
}