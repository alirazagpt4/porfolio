import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null, 
  password: null, 
  token: null, 
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    signup: (state, action) => {
      const { email, password } = action.payload;
      console.log(email,password,"email??>>")
      state.email = email;
      state.password = password; 
      state.token = null; 
    },
    
    login: (state, action) => {
      console.log(action,"action")
      const { email, password } = action.payload;
      if (state.email === email && state.password === password) {
        state.token = 'true'; 
      } else {
        throw new Error('Invalid credentials'); 
      }
    },

  
    logout: (state) => {
      state.email = null;
      state.password = null;
      state.token = null;
    },
  },
});

export const { signup, login, logout } = authReducer.actions;
export default authReducer.reducer;
