const bcrypt = require('bcrypt');

module.exports = {
  hash: async (password, saltRound = 256) => {
    const salt = await bcrypt.genSalt(saltRound);
    return bcrypt.hash(password, salt);
  },
  compare: async (password, hash) => {
    return bcrypt.compare(password, hash);
  }
}
