const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

function verifyJwt(token) {
    let ans = true;
    try {
        jwt.verify(token, jwtPassword);
    } catch (e) {
        ans = false;
    }
    return ans;
}

const ans = verifyJwt("asdasddsa");
console.log(ans);
