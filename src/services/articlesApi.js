import axios from "axios";

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://mental-health-info-api.p.rapidapi.com/news/thetimes',
//   headers: {
//     'X-RapidAPI-Key': '872bc3140fmsh7635694c2ef265dp12d12djsn3b2d23d57a47',
//     'X-RapidAPI-Host': 'mental-health-info-api.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

const createRequest = (url) => ({url,headers:ArticleHeaders});

const ArticleHeaders = { 'X-RapidAPI-Key': '872bc3140fmsh7635694c2ef265dp12d12djsn3b2d23d57a47',
    'X-RapidAPI-Host': 'mental-health-info-api.p.rapidapi.com'
}


const baseUrl = 'https://mental-health-info-api.p.rapidapi.com/news/thetimes';

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
    endpoints: (builder) => ({
        getArticles: builder.query({
            query: () => createRequest('https://mental-health-info-api.p.rapidapi.com/news/thetimes'),
        })
    })
})
})

export const {
    useGetArticlesQuery,
} = articleApi;

