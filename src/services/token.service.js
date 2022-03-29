const jwt = require('jsonwebtoken');
const fs = require('fs');
const { join } = require('path');
const keyPath = join(process.cwd(), ".secret", "sign.key");

module.exports = {
  generate: (payload) => {
    const filekey = fs.readFileSync(keyPath);
    const now = Math.round(new Date().getTime() / 1000)
    const exp_payload = {...payload, exp: now + (60 * 5) }
    return jwt.sign(exp_payload, filekey, { algorithm: "RS256" })
  },
  verify: (token) => {
    const filekey = fs.readFileSync(keyPath);
    return jwt.verify(token, filekey, { algorithms: ["RS256"] })
  }
}
