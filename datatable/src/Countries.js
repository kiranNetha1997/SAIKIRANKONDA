import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from "react-data-table-component";
import styles from "./datatable.css";
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';


function Countries() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("")
    console.log(countries);
    const [err, setErr] = useState("");
    const [filterCountries, setFilterCountries] = useState([])
    const getCountries = async () => {
        try {
            const response = await axios.get("https://restcountries.com/v2/all");
            setCountries(response.data);
            setFilterCountries(response.data)
        }
        catch (err) {
            setErr(err.message);
        }
    };

    const column = [
        {
            name: "Country Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Country Capital",
            selector: (row) => row.capital,
            sortable: true,
        },
        {
            name: "Country Population",
            selector: (row) => row.population,
            sortable: true,
        },
        {
            name: "Country CallingCodes",
            selector: (row) => row.callingCodes,
            sortable: true,
        },
        {
            name: "Country Region",
            selector: (row) => row.region,
            sortable: true,
        },
        {
            name: "Country Flags",
            selector: (row) => <img alt='flag' width={50} height={50} src={row.flag} />
        },
        {
            name: "Country Timezones",
            selector: (row) => row.timezones,
            sortable: true,
        },
        {
            name: "Country Borders",
            selector: (row) => row.borders,
            sortable: true,
        },
        {
            name: "Country Nativename",
            selector: (row) => row.nativeName,
            sortable: true,
        },
        {
            name: "Country NumericCode",
            selector: (row) => row.numericCode,
            sortable: true,
        },
    ];
    useEffect(() => {
        getCountries()
    }, []);
    useEffect(() => {
        const results = countries.filter(country => {
            return country.name.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilterCountries(results);
    }, [search])

    return (
        <div>
            {
                err &&
                <center>
                    <h1 className='h1'>{err}</h1>
                </center>
            }
            {/* <DataTableExtensions
                {...filterCountries}
            ></DataTableExtensions> */}
            <DataTable
                title="CountriesList"
                columns={column}
                data={filterCountries}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='450px'
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                subHeader
                subHeaderComponent={<input type="text" placeholder='Serach....' value={search}
                    className="input"
                    onChange={(e) => setSearch(e.target.value)}
                />}
                subHeaderAlign="center"
            />

        </div>
    )
};

export default Countries;