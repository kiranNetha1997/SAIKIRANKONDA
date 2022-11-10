import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import ReactPaginate from "react-paginate";
import './App.css';
import Pagination from './Pagination';

function DataFromApi() {
    const [country, setCountry] = useState([]);
    const [err, setErr] = useState("")
    const [perPage, setPerPage] = useState([]);



    const countryList = () => {
        axios.get("https://restcountries.com/v3.1/all")
            .then((response) => {
                setCountry(response.data); setPerPage(response.data.slice(0, 10));
            })
            .catch((error) => {
                setErr(error.message)
            })
    }


    useEffect(() => {
        countryList()
    }, [1])
    return (
        <div>
            {

                err ?
                    <h1 className="alert alert-danger">{err}</h1>
                    :
                    <>
                        <div>
                            <table className='table'>
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Country Name</th>
                                        <th>Capital</th>
                                        <th>Currancy</th>
                                        <th>Region</th>
                                        <th>Status</th>
                                        <th>Continents</th>
                                        <th>Flag</th>
                                        <th>Coat of Arm</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        country.map((each, id) => {
                                            return (
                                                <tr key={each.id}>
                                                    <td>{each.name.common}</td>
                                                    <td>{each.capital}</td>
                                                    <td>{each.symbol}</td>
                                                    <td>{each.region}</td>
                                                    <td>{each.status}</td>
                                                    <td>{each.continents}</td>
                                                    <td>
                                                        <img src={each.flags.png} alt="national flag" style={{ "width": "40px" }} />
                                                    </td>
                                                    <td>
                                                        <img src={each.coatOfArms.png} alt='army' style={{ "width": "40px" }} />
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>

                            </table>
                        </div>
                        <div>
                            <Pagination />
                        </div>

                    </>
            }

        </div>

    )
}

export default DataFromApi;