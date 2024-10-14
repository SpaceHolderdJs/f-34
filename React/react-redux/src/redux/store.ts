import { configureStore } from "@reduxjs/toolkit";
import { clockSlice } from "./slices/clock.slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { usersSlice } from "./slices/users.slice";

export const store = configureStore({
    reducer: {
        clock: clockSlice.reducer,
        users: usersSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;