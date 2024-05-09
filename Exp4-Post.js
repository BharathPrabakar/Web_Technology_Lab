const http = require('http');
const querystring = require('querystring');
let qs, name, email;
http.createServer(function (req, res) {
    var d = '';

    req.on('data', function (chunk) {
        d += chunk;
    });
    req.on('end', function () {
        qs = querystring.parse(d);
        console.log(qs);

        roll = qs['rollno']
        name = qs['name'];
        email = qs['email'];
        mobile = qs['mobile'];
        age = qs['age'];

        res.write("Hey " + name + " ,your roll no is " + roll + ", with email id " + email + " has been registered successfully with your mobile number: " + mobile);
        res.end();
    });
}).listen(4445);
console.log("Server started running...");