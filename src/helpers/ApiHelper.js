const options = { 
    headers: {'X-Auth-Token': 'YOUR_API_TOKEN'},
    dataType: 'json',
    type: 'GET',
};

export const doGetRequest = (path) => {
    return fetch(path, options)
            .then(response => response.json())
            .catch(console.error);
};