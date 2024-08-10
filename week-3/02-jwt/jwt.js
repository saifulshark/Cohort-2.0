const jwt = require("jsonwebtoken");
const zod = require("zod");
const jwtPassword = "@hdmoer#6%*9^&3mdnfJKEp)9211!34msdr+-ssdfiGGHr%64";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const emailResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if (!emailResponse.success || !passwordResponse.success) {
        return null;
    }

    const tokenSignature = jwt.sign({ username }, jwtPassword);

    return tokenSignature;
}

function verifyJwt(token) {
    try {
        const verified = jwt.verify(token, jwtPassword);
        return !!verified; // Return true if verified, otherwise false
    } catch (error) {
        return false;
    }
}

function decodeJwt(token) {
    const decodedToken = jwt.decode(token);

    if (decodedToken) {
        return true; // Successfully decoded a valid JWT
    } else {
        return false; // Unable to decode a valid JWT
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
};
