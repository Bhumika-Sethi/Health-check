import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
// import Loader from './loader';
import Axios from 'axios';
import { articleApi } from '../services/articlesApi';
import { useGetArticlesQuery } from '../services/articlesApi';

const Articles = () => {
  const {data,isFetching} = useGetArticlesQuery;
  console.log(data);
  // if (isFetching) return <Loader />;
  return (
    <div>

    </div>
  )
}

export default Articles