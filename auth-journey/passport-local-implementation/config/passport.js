import passport from "passport";
import { Strategy } from "passport-local"
import User from "../models/User.js"
import { validatePassword } from "../utilities/lib.js";

export default function setupPassportLocal() {
    passport.use(new Strategy(verify))

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser(async (useId, done) => {
        try {
            const user = await User.findById(useId)

            done(null, user)
        } catch (err) { done(err) }
    })
}

async function verify(username, password, done) {
    try {
        const user = await User.findOne({ username })

        if (!user) return done(null, false)

        const valid = validatePassword(password, user.password)

        if (!valid) return done(null, false)

        done(null, user)
    } catch (err) {
        done(err)
    }
}

