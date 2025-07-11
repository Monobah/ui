import {createSlice} from '@reduxjs/toolkit';
import {UserType} from '../../types/UserType';

type State = {user: UserType | null};

const initialState: State = {user: null};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const {setUser, logOut} = userSlice.actions;

export {userSlice};
