const jwt = require('jsonwebtoken');
const jwtPassword = 'secret'; 
const zod = require("zod");
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);
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
    const usernameResponse = emailSchema.safeParse(username);//checks if usernameResponse follows the zod schema
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success) { //.success checks if the conditions in if statement are correct
        return null;
    }
    const signature = jwt.sign({username}, jwtPassword);//here username is the payload and jwtPassword is used to make token out of the payload
    return signature;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) { //verify only happens for a token which has the specified jwtPassword
    // Your code here
    let ans = true;
    try {
        jwt.verify(token, jwtPassword);//without try catch an exception malform is thrown
    }catch(err) {
        ans = false;
    }
    return ans;
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
    const decoded = jwt.decode(token); //this does not use the jwtPassword, authenticity is not verified
    if(decoded) {
        return true;
    }
    else {
        return false;
    }
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
