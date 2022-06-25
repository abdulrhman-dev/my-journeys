import "dotenv/config"

import express from "express"
import connectDB from "./config/db.js"
import MongoStore from "connect-mongo"
import session from "express-session"
import passport from "passport"

import cors from "cors"

const app = express()
const PORT = process.env.PORT || 8000

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

const COOKIE_EXPIRAY_MS = (24 * 60 * 60) * 1000

app.use(session({
    secret: process.env.SESSION_SECERT,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI, collectionName: "sessions" }),
    cookie: {
        httpOnly: true,
        maxAge: COOKIE_EXPIRAY_MS
    }
}))

/* <-------------<Passport>---------------> */

import setupPassportLocal from "./config/passport.js"

setupPassportLocal()

app.use(passport.initialize())
app.use(passport.session())

/* <-------------------------------------> */

import userRoute from "./router/user.route.js"

app.use("/user", userRoute)

app.listen(PORT, () => {
    console.log(`Started server on port ${PORT} successfully`)
})