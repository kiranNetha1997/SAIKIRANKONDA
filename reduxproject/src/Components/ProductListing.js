import React from 'react';
import { useSelector } from "react-redux";

function ProductListing() {
    const products = useSelector((state) => state);
    console.log(products);
    return (
        <div className='ui grid container'>
            ProductListing
        </div>
    )
}

export default ProductListing;