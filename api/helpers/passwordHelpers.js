const bcrypt = require("bcrypt");
const saltRounds = 12;

exports.hashPassword = (password) => {
  // take the password and hash it, then return it.
  return bcrypt.hashSync(password, saltRounds);
};

exports.verifyPassword = (password, hash) => {
  // hash the password and compare it with the previous hash
  const verified = bcrypt.compareSync(password, hash);
  // if they are the same, return true, other wise return false
  return verified;
};
