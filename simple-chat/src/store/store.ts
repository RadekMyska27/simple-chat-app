import {configureStore} from "@reduxjs/toolkit";
import messagesReducer from "./messagesSlice"; // Import your reducers

export const store = configureStore({
    reducer: {
        messages: messagesReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type
export type AppDispatch = typeof store.dispatch
