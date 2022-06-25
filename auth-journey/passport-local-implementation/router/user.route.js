import express from "express"
import passport from "passport"
import { loginUser, signUpUser, getAuthStatus } from "../controllers/user.controller.js"

const router = express.Router()


router
    .post("/login", passport.authenticate("local", { successRedirect: "/user/login-success", failureRedirect: "/user/login-failure" }))
    .post("/sign-up", signUpUser)

router
    .get("/auth-status", getAuthStatus)



router.get('/login-success', (req, res, next) => {
    console.log("success")
    res.send();
});

router.get('/login-failure', (req, res, next) => {
    console.log("failure")
    res.send();
});

router.get("/logout", (req, res) => {
    req.logout(function (err) {
        if (err) { return console.log(err); }
        res.send();
    });
})

export default router