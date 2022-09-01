import { configureStore } from "@reduxjs/toolkit";
import  laptopSlice  from "./LaptopSlice";

const store = configureStore({
    reducer: {  
        laptop: laptopSlice
    }
});

export default store;