import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable, { Sortable } from "react-data-table-component";
function Countries() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("")
    console.log(countries);
    const [err, setErr] = useState("");
    const [filterCountries, setFilterCountries] = useState([])
    console.log(err);

    const getCountries = async () => {
        try {
            const response = await axios.get("https://restcountries.com/v2/all");
            setCountries(response.data);
            setFilterCountries(response.data)
        }
        catch (err) {
            setErr(err);
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

    ]

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
                onChange={(e) => setSearch(e.target.value)}
            />}
            subHeaderAlign="center"

        />
    )
}

export default Countries