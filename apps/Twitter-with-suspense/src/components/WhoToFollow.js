import React from 'react';
import './WhoToFollow.css';

import { wrapPromise } from '../utils/wrapPromise';
import { fetchWithKey } from '../utils/fetchWithKey';

const fetchWhoToFollow = async () => {
    const result = await fetchWithKey('https://newsapi.org/v2/top-headlines?country=us').then(r => r.json());
    return result;
}

const resource = wrapPromise(fetchWhoToFollow);

const WhoToFollow = () => {
    const feed = resource.read();
    return (
        <div className="WhoToFollow">
            <h2>Who To Follow</h2>
            {feed.articles.slice(0, 3).map((article) => (
                <div className="WhoToFollow-item">
                    <h3>{article.author}</h3>
                    <button>Follow</button>
                </div>
            ))}
        </div>
    );
};

export default WhoToFollow;
