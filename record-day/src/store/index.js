import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './Auth.js';

export default configureStore({
    reducer: {
        authToken: tokenReducer,
    },
});