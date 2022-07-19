import {configureStore} from '@reduxjs/toolkit';
import { articleApi } from '../services/articlesApi';

export default configureStore({
    reducer : {
        [articleApi.reducerPath]:articleApi.reducer
    },
})