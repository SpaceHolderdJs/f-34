import { createSlice } from "@reduxjs/toolkit";

export type ClockType = {
    hours: number,
    minutes: number,
    seconds: number
}

const initialState: ClockType = {
    hours: 0,
    minutes: 0,
    seconds: 0,
};

export const clockSlice = createSlice({
    name: "clock",
    initialState,
    reducers: {
        setHours: (state, action) => {
            // mutable
            state.hours = action.payload;
        },
        reset: (state) => {
            state.hours = 0;
            state.minutes = 0;
            state.seconds = 0;
        }
    }
});

export const { reset, setHours } = clockSlice.actions;
