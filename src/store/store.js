import { configureStore } from "@reduxjs/toolkit";
import userName from "./slices/userName";
import counter from "./slices/counter";
const store=configureStore({
    reducer:{
        userName:userName,
        counter:counter
    }
});
export default store;