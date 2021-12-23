import React from 'react';
import './TrendsForYou.css';

import { wrapPromise } from '../utils/wrapPromise';
import { fetchWithKey } from '../utils/fetchWithKey';

const fetchTrendsForYou = async () => {
    const result = await fetchWithKey('https://newsapi.org/v2/top-headlines?country=us').then(r => r.json());
    return result;
}

const resource = wrapPromise(fetchTrendsForYou);

const TrendsForYou = () => {
    const trends = resource.read();
    return (
        <div className="TrendsForYou">
            <h2>Trends For You</h2>
            {trends.articles.slice(0, 3).map((trend) => (
                <div>
                    <span>{trend.source.name}</span>
                    <p>{getRandomIntInclusive(200, 900)}K Tweets</p>
                </div>
            ))}
            <a href="#">
                Show more
            </a>
        </div>
    );
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

export default TrendsForYou;
