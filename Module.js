const calculator = require('./Mymodule')
const http = require('http')
const url = require('url')
querystring = require('querystring')

http.createServer((req, res) => {

    if (req.url.includes('/calculate')) {
        const query = url.parse(req.url).query
        const qs = querystring.parse(query)
        const n1 = qs["n1"]
        const n2 = qs["n2"]
        const operation = qs["operation"]

        const a = parseInt(n1)
        const b = parseInt(n2)

        res.write("Number1 = " + a + "\n")
        res.write("Number2 = " + b + "\n")

        if (operation == 'addition') {
            res.write("Addition = " + calculator.addition(a, b))
        }

        else if (operation == 'subtraction') {
            res.write("Subtraction = " + calculator.subtraction(a, b))
        }

        else if (operation == 'multiplication') {
            res.write("Multiplication = " + calculator.multiplication(a, b))
        }

        else if (operation == 'division') {
            res.write("Division = " + calculator.division(a, b))
        }

        else if (operation == 'modulus') {
            res.write("Modulus = " + calculator.modulus(a, b))
        }

        res.end()
    }
}).listen(4444)

console.log("running")