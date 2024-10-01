import {createSlice} from '@reduxjs/toolkit';
const initialState={
    user:'',
    isAuthenticated:false
}
const UserAuthSlice=createSlice({
   name:'userAuth',
   initialState,
   reducers:{
        login:(state,action)=>{
            state.user=action.payload;
            state.isAuthenticated=true
        },
        logOut:(state)=>{
            state.user='',
            state.isAuthenticated=false
        },
        checkAuth:(state,action)=>{
    
            if(action.payload.isAuthenticated===true)
            {
              state.isAuthenticated=true;
              state.user=action.payload.user
            }
           
            
        }
   }
});

export const {login,logOut,checkAuth}=UserAuthSlice.actions;
export default UserAuthSlice.reducer;