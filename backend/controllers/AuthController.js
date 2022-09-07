const { User } = require('../models')
const middleware = require('../middleware')

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.send(users)
    } catch (error) {
        throw error
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: { email: req.body.email },
            raw: true
        })
        if (
            user &&
            middleware.comparePassword(user.passwordDigest, req.body.password)
        ){
            let payload = {
                id: user.id,
                email: user.email
            }
            let token = middleware.createToken(payload)
            return res.send({ user: payload, token})
        }
        res.status(401).send({ status: 'error', msg: 'unauthorized'})
    } catch (error) {
        throw error
    }
}

const signUp = async (req, res) => {
    try {
        const { username, password, email, gender } = req.body
        let passwordDigest = await middleware.hashPassword(password)
        const user = await User.create({ username, passwordDigest, email, gender })
        res.send(user)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getUsers,
    login,
    signUp
}