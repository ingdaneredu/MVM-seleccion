export const fetchApi = (endpoint, data, method = 'GET') =>{
    
    const url = `http://localhost:3000/api/${endpoint}`;
    
    if (method === 'GET') {
        return fetch(url);
    }else if(method === 'DELETE'){
        console.log(url);
        return fetch(url, {
            method,
            headers:{
                'Content-type': 'application/json'
            }
        });
    }else{
        console.log(url);
        return fetch(url, {
            method,
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
    
};