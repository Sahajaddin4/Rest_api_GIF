import { configureStore } from "@reduxjs/toolkit";
import UserAuthSlice from './AuthSlice';
const store=configureStore({
    reducer:{
        userAuth:UserAuthSlice
    }
});

export default store;