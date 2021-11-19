import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './appAPI';
import { SORT, STATUS, TAB } from './appVars';

const initialState = {
    status: STATUS.LOADING,
    users: [],
    search: '',
    tab: TAB.ALL.code,
    sort: SORT.ALPHABET,
};

export const asyncUsers = createAsyncThunk('app/fetchUsers', async () => {
    const data = await fetchUsers().then((response) => response.data);
    return data.items;
});

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setTab: (state, action) => {
            state.tab = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(asyncUsers.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(asyncUsers.fulfilled, (state, action) => {
                state.status = STATUS.IDLE;
                state.users = action.payload;
            })
            .addCase(asyncUsers.rejected, (state) => {
                state.status = STATUS.ERROR;
            });
    },
});

export const { setSearch, setTab, setSort } = appSlice.actions;
export const selectStatus = (state) => state.app.status;
export const selectUsers = (state) => state.app.users;
export const selectSearch = (state) => state.app.search;
export const selectTab = (state) => state.app.tab;
export const selectSort = (state) => state.app.sort;
export default appSlice.reducer;
