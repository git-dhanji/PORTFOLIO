import { configureStore } from '@reduxjs/toolkit'
import counterReducer from  '../features/mode/mode'
export default configureStore({
    reducer: {
        counter:counterReducer
    },
})










