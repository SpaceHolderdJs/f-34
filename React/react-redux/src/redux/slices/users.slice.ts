import { createSlice } from "@reduxjs/toolkit";

export type UserType = {
    name: string;
    age: number;
    skills: string[];
};

const initialState: UserType[] = [];

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
});

// export const {} = usersSlice.actions; 
