import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const createUser = createAsyncThunk(
    'createUser',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'https://66458885b8925626f8922431.mockapi.io/crud',
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            return response.data;

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const showUser = createAsyncThunk(
    'showUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://66458885b8925626f8922431.mockapi.io/crud');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateUser = createAsyncThunk(
    'updateUser',
    async (userData, { rejectWithValue }) => {
        try {
            const { id, ...updatedData } = userData;
            const response = await axios.put(
                `https://66458885b8925626f8922431.mockapi.io/crud/${id}`,
                updatedData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteUser = createAsyncThunk(
    'deleteUser',
    async (userId, { rejectWithValue }) => {
        try {
            await axios.delete(`https://66458885b8925626f8922431.mockapi.io/crud/${userId}`);
            return userId; // Return the deleted user ID
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);



export const userSlice = createSlice({
    name: 'userDetail',
    initialState: {
        user: [],
        loading: false,
        error: null,
        searchUser: [],
    },
    reducers: {
        searchUser: (state, action)=>{
            state.searchUser = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            // createUser cases
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // showUser cases
            .addCase(showUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            //deleteUser case
            .addCase(deleteUser.fulfilled, (state, action) => {
                // Filter out the deleted user from the state
                state.user = state.user.filter(user => user.id !== action.payload);
            })
            //update User
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.user.findIndex(user => user.id === action.payload.id);
                if (index !== -1) {
                    state.user[index] = action.payload;
                }
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { searchUser} = userSlice.actions

export default userSlice.reducer;
