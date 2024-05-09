const http = require('http');
const url = require('url');
const querystring = require('querystring');

http.createServer(function (request, response) {
    if (request.url.includes('/login')) {
        console.log('URL ' + request.url + ' received.');
        //var path = url.parse(request.url).pathname;
        var query = url.parse(request.url).query;
        console.log("QUERY IS:");
        console.log(query);
        qs = querystring.parse(query);
        console.log("QS IS:");
        console.log(qs);
        var roll = qs["rollno"];
        var name = qs["name"];
        var email = qs["email"];
        var mobile = qs["mobile"];
        var age = qs["age"];
        response.write('Your name ' + name + ', your rollno is ' + roll + ', your email is' + email + ',your mobile no is' + mobile + ', your age is' + age);
        response.end();
    }
}).listen(4001);
console.log('Server has Started…….');
