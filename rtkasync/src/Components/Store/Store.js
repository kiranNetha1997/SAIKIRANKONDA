import { configureStore } from "@reduxjs/toolkit";
import userReducers from '../Slice/userSlice';

export default configureStore({
    reducer: {
        users: userReducers
    },
});
