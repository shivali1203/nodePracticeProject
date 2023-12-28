const bcrypt = require('bcrypt')

module.exports.encryptPassword =  async (password)=>{
    const salt = await bcrypt.genSaltSync(10);//there are different types of rounds 
    const hash = await bcrypt.hashSync(password, salt)
    return hash
}
module.exports.comparePasswords = async (Password, hashedPassword) =>{
    const isMatch = await bcrypt.compareSync(Password, hashedPassword);
    return isMatch
}