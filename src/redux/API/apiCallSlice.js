import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getData = createAsyncThunk('getAllData', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
});

export const fetchApi = createSlice({
    name: 'apiData',
    initialState: {
        userId: '',
        id: '',
        title: '',
        completed: false,
    },
    // reducers: {
    // },
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state) => {
                state.completed = false;
            })
            .addCase(getData.fulfilled, (state, action) => {
                // Assuming you want to update the state with the fetched data
                // Adjust according to your state shape and data structure
                const { userId, id, title, completed } = action.payload[0]; // Example, modify as per your needs
                state.userId = userId;
                state.id = id;
                state.title = title;
                state.completed = completed;
            })
            .addCase(getData.rejected, (state) => {
                state.completed = false;
            });
    },
});

// export const { } = fetchApi.actions;

export default fetchApi.reducer;
