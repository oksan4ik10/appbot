import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export interface IUser {
    token: string;
    name: string;
    phone: string;
    email: string;
    tg: boolean;

}

const initialState: IUser = {
    token: "",
    name: "",
    phone: "",
    email: "",
    tg: false

};




export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        },
        setDataUser(state, action: PayloadAction<IUser>) {
            state.token = action.payload.token;
            state.name = action.payload.name;
            state.phone = action.payload.phone;
        },
        setDataTg(state, action: PayloadAction<IUser>) {
            state.token = action.payload.token;
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.tg = true;
        }
    },
});

export default userSlice.reducer;
export const { setToken, setDataUser, setDataTg } = userSlice.actions;