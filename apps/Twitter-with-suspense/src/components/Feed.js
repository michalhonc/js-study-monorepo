import React from 'react';
import './Feed.css';

import { wrapPromise } from '../utils/wrapPromise';
import { fetchWithKey } from '../utils/fetchWithKey';

const fetchFeed = async () => {
    const result = await fetchWithKey('https://newsapi.org/v2/top-headlines?country=us').then(r => r.json());
    return result;
}

const resource = wrapPromise(fetchFeed);

const Feed = () => {
    const feed = resource.read();
    return (
        <div className="Feed">
            <h2>Feed</h2>
            {feed.articles.slice(0, 10).map((article) => (
                <div className="Feed-item">
                    <img src={article.urlToImage} width="50" height="50" />
                    <div>
                        <h3>{article.author}</h3>
                        <span>{new Date() - new Date(article.publishedAt)}</span>
                        <div>{article.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Feed;
