const express = require("express")

const app = express()

const userName = "Purushothaman"
const pass = 123
const mobile_no = 9361533364

app.get("/submit-form", function (req, res) {

    if (userName === req.query.username && pass == req.query.password && mobile_no == req.query.mobile_no)
        {
            console.log(`User Name: ${req.query.username}`);
            console.log(`Password: ${req.query.password}`);
            console.log(`Mobile number: ${req.query.mobile_no}`);
            res.send(`<h1>Login Successfull !</h1>`)
        }
    else {
        res.send(`<h1>Login Failed !</h1>`)
    }
})


app.listen(5000, function () {
    console.log("server started....");
})


