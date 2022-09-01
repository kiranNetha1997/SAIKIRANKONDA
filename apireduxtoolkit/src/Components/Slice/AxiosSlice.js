import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers', async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            return await response.data

        }
        catch (error) {
            // console.log(error.message);
            const errorMsg = error.message;
            console.log(errorMsg);

        }

    });

const userSlice = createSlice({
    name: "Users",
    initialState: {
        list: [],
        loading: null,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.list = [];
            state.loading = "Loading...";
        })
            .addCase(fetchUsers.rejected, (state) => {
                state.list = [];
                state.loading = null;
                state.error = "rejected";
            })
            .addCase(fetchUsers.fulfilled, (state, { payload }) => {
                state.list = payload;
                state.loading = "successfull";
            });
    }
});

export default userSlice.reducer;
