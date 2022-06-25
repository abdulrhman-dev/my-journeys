import "dotenv/config"

import express from 'express';
import connectDB from  "./db.js"
import session from "express-session";
import MongoStore from "connect-mongo"

const app = express()

connectDB()

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI, collectionName:"sessions" }),
    cookie:{
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true
    }
}))

app.get("/", (req, res) => {
    res.status(200).json({
        name:"abood"
    })
})

app.listen(3123, () => {
    console.log("connected to server")
})

