import bcrypt from "bcrypt"
const SALT_ROUNDS = 10

export const hashPassword = async plainPassword => {
    try {
        const hash = await bcrypt.hash(plainPassword, SALT_ROUNDS)

        return hash
    } catch (err) {
        console.log(err.message)
    }
}

export const validatePassword = async (plainPassword, hash) => {
    try {
        const result = await bcrypt.compare(plainPassword, hash)

        return result
    } catch (err) {
        console.log(err.message)
    }
}