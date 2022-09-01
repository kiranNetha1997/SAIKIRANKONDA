import { useState } from 'react';
import styles from "./popUp.css";


function Child({ handleClickOpen }) {
    return (
        <div>
            <button onClick={(event) => handleClickOpen()}>View</button>
        </div>
    );
};
export default Child;