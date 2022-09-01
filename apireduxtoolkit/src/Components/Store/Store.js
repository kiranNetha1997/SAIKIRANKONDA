import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slice/AxiosSlice";

const store = configureStore({
    reducer: {
        users: userReducer
    }
})

export default store;