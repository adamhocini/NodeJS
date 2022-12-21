const querystring = require('querystring');



















const url = 'http://www.example.com?name=John&age=30';

const query = querystring.parse(url);

console.log(query);
// sort: { name: 'John', age: '30' }
