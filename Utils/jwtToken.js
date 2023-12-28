const token = require('jsonwebtoken')
const secret = "secret"

module.exports.generateToken = async (user) => {
    const Token = await token.sign(user, secret, { expiresIn : '1h'})
    return Token 
}

module.exports.verifyToken = async (Token) =>{
    const decoded = await token.verify(Token, secret)
    return decoded
}