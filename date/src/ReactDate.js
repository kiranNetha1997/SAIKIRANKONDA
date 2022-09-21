import React, { useState } from 'react';
import CalComp from './Components/CalComp';
import RangePicker from './Components/DateRangePicker';
import StartEnd from './Components/StartEndDate';


function ReactDate() {


    return (
        <>
            <h1>React Date NPM</h1>
            <div>
                <CalComp />
            </div>
            <br />
            <hr />
            <h1>Date Range Picker</h1>
            <div>
                <RangePicker />
            </div>
            <div>
                <StartEnd />
            </div>
        </>
    )
}

export default ReactDate;