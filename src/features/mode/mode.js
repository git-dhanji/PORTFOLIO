import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
    text: []
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState: initialState,
    reducers: {
        modeChange: (state, action) => {

            if (action.payload !== '') {
                state.text.push(action.payload)
                state.value = state.value + 1
            }
        },

    }
})


export const { modeChange } = modeSlice.actions
export default modeSlice.reducer