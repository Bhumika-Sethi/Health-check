import axios from "axios";

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


// const axioss = require("axios");
const API_Key =  '9878714a27224ce482b2916db9bb04f0';
const options = {
  method: 'GET',
  url: `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${API_Key}`,
  headers: {
    'API_Key': '9878714a27224ce482b2916db9bb04f0',
    'API-Host': 'mental-health-info-api.p.newsapi.org'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

const createRequest = (url) => ({url,headers:ArticleHeaders});

const ArticleHeaders = { 'API_Key': '9878714a27224ce482b2916db9bb04f0',
    'API-Host': 'mental-health-info-api.p.newsapi.org'
}


const baseUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=API_KEY';

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
    endpoints: (builder) => ({
        getArticles: builder.query({
            query: () => createRequest('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=API_KEY'),
        })
    })
})
})

export const {
    useGetArticlesQuery,
} = articleApi;

