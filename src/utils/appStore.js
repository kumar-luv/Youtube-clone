import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice"
import cacheReducer from "./searchSlice"
const store = configureStore({
    reducer:{
        app:appReducer,
        cacheResult:cacheReducer,
    }
})

export default store;