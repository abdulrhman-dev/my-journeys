const express = require("express")
const app = express()
const PORT = 3123

function middleware(req, res, next) {
    // ? testing the error handler
    /* throw new Error("OI OI WHAT DID YOU DO LITTLE BASTERD!") */

    // * appending objects in the middleware
    req.user = {
        name: "abood",
        age: 29,
        maxAge: 27
    }

    next()
}

function errorHandler(err, req, res, next) {
    if (err) {
        return res.status(500).json({
            err: true,
            message: err.message
        })
    }

    next()
}


app.get("/", middleware, (req, res) => {
    console.log(Object.keys(req))
    res.status(200).json(req.user)

})

app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Started server on port ${PORT}`)
})