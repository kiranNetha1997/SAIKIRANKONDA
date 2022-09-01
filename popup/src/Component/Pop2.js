import React, { useEffect, useState } from "react";
import styles from "./popUp.css";
function PopUp() {
    const [popup, setPop] = useState(false);
    const [empData, setEmpData] = useState([]);
    const [eachEmpData, setEachEmpData] = useState([])

    const handleClickOpen = (id) => {
        setPop(!popup)
        console.log(id)
        const eachEmpData = empData.filter(each => id === each.id)
        console.log(eachEmpData);
        setEachEmpData(eachEmpData)

    }
    const closePopup = () => {
        setPop(false)
    };
    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setEmpData(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
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
                                    <td><button onClick={() => handleClickOpen(each.id)}> View </button></td>
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

                                </div>


                            </div>
                        </div> : ""
                }
            </div>
        </div >
    )
}
export default PopUp;