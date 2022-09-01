import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const jsonData = response.json()
        return jsonData
    },
);
export const usersSlice = createSlice({
    name: "users",
    initialState: {
        list: [],
        status: null,

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.list = [];
                state.status = 'Loading';

            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'accepted';
                state.list = action.payload;

            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = "rejected";
                state.list = action.payload;

            })
    }
});
export default usersSlice.reducer;