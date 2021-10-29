const User = require('../Model/User')


// exports.login = (req, res) => {
//     const email = req.body.email.json()
//     console.log(email)
//     // const foundUser = User.findOne({ email: email })
//     // if (foundUser) {
//     //     console.log(foundUser.username)
//     // }
// }

class Authentication {
    async login(req, res) {
        const { email, password } = req.body
        try {
            const user = await User.findOne({ email: email })
            if (!user) {
                throw Error('wrong email or password')
            }
            if (user.password === password) {
                res.json({
                    user: user
                })
            } else {
                res.json({
                    message: 'wrong email or password'
                })
            }
        } catch (err) {
            res.json({
                message: err.message
            })
        }

    }
}

module.exports = new Authentication
