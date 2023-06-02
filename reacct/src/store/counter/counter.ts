import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
    counter: number;
}

const counterSlice = createSlice({
    name: 'counter',
    initialState : {counter : 0},
    reducers : {
        increament : (state: State, action: PayloadAction<number>) => {
            state.counter ++;
        },

        decreament : (state: State, action: PayloadAction<number>) => {
            state.counter --;
        },

        addBy : (state: State, action: PayloadAction<number>) => {
            state.counter += action.payload;
        }
    }
})

export default counterSlice;