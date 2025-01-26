import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/authReducer";

const store = configureStore({
    reducer:{
        auth:authReducer,
    },
})

export default store;