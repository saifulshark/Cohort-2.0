const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const { z } = require('zod');

const loginSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6)
})

function signJwt(username, password) {
    try {
        const values = {
            username,
            password
        }
        loginSchema.parse(values)
        const token = jwt.sign({ username }, jwtPassword)
        return token
    } catch (e) {
        return null
    }
}

function verifyJwt(token) {
    let ans = true
    try {
        jwt.verify(token, jwtPassword)
    } catch (e) {
        ans = false
    }
    return ans
}

function decodeJwt(token) {
    const decoded = jwt.decode(token, jwtPassword)
    if (decoded) {
        return true
    } else {
        return false
    }
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
