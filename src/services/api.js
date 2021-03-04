import Axios from 'axios';


export function onSignUp(data) {
    console.log('In Api', data)
    // `axios` function returns promise, you can use any ajax lib, which can
    // return promise, or wrap in promise ajax call
    return Axios.get('http://newsapi.org/v2/everything?q=tesla&from=2021-02-04&sortBy=publishedAt&apiKey=c39a26d9c12f48dba2a5c00e35684ecc');
};