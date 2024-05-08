const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const z = require('zod');

const emailSchema = z.string().email();
const passSchema = z.string().min(6);

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    // Your code here
    try {
        emailSchema.parse(username)
        passSchema.parse(password);
        return jwt.sign({ username }, jwtPassword);
    } catch (e) {
        console.log("Invalid fr");
        return null
    }
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    try {
        const res = jwt.verify(token, jwtPassword);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
    let ans = false;
    try {
        jwt.verify(token, jwtPassword);
        ans = true;
    } catch (e) {
        return false;
    }
    return ans;
}

console.log(signJwt("a@gmaiom", "abcdefgh"));
console.log(signJwt("a@gmail.com", "abcdefgh"));
console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFAZ21haWwuY29tIiwiaWF0IjoxNzEzOTE1Njk5fQ.11RPm1c8gLKka5e5_x5YyEqTmtcSZF10JQLAyO18l1A"));
console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6"));
console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFAZ21haWwuY29tIiwiaWF0IjoxNzEzOTE1Njk5fQ.11RPm1c8gLKka5e5_x5YyEqTmtcSZF10JQLAyO18l1A"));
console.log(decodeJwt(signJwt("abcd@gmail.com", "aaaaaaaaaaaa")));
console.log(decodeJwt(jwt.sign({ "username": "abcd@gmail.com" }, "12344444")));


module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
