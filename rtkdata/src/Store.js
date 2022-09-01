import { configureStore } from "@reduxjs/toolkit";
import usSlice from "./Components/Slice/slice";
const Store = configureStore({
    reducer: {
        usData: usSlice
    }

});
export default Store;