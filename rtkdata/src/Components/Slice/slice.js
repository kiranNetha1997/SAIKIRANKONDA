import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usData = createAsyncThunk(
    "users/usData", async () => {
        const response = await axios.get("http://jsonplaceholder.typicode.com/users")
        const jsonData = response.data
        return jsonData;
    }
);
export const usSlice = createSlice({
    name: "usData",
    initialState: {
        users: [],
        Loading: null,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(usData.pending, (state) => {
                state.users = [];
                state.error = "";
                state.Loading = true;
            })
            .addCase(usData.fulfilled, (state, { payload }) => {
                state.users = payload;

            })
            .addCase(usData.rejected, (state) => {

                state.error = "Error accured";

            })
    }
});

export default usSlice.reducer;
