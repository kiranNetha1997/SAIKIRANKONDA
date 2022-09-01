import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usData } from './Slice/slice';


function UsPeople() {
    const dispatch = useDispatch();
    const data = useSelector(state => state);
    console.log(data)

    const dispatchUser = () => {
        dispatch(usData())
    }
    return (
        <div>usPeople
            <button onClick={dispatchUser}>Get Data</button>
            <table>
                <thead>
                    <tr>
                        <th>ID Nation</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th> Email</th>

                    </tr>
                </thead>

                <tbody>
                    {
                        data.map(each => {
                            <tr>
                                <td>{each.id}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default UsPeople;