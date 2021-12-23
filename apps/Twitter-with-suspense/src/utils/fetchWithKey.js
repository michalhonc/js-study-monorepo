const API_KEY = '';

export const fetchWithKey = (url) => {
    return fetch(`${url}&apiKey=${API_KEY}`);
};
