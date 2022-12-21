const querystring = require('querystring');

const url = 'http://www.example.com?name=Adam&age=22';

const query = querystring.parse(url);

console.log(query);
