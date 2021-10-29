const User = require('../Model/User')

exports.registerController = (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const number = req.body.number
    const password = req.body.password
    const id = req.body.id
    const user = new User({
        username: username,
        email: email,
        number: number,
        password: password,
    })

    user.save()
        .then(result => {
            res.json({ message: 'succesful' })
        })
        .catch(err => console.log(err))
}

exports.getUsers = (req, res) => {
    User.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => console.log(err))
}

exports.updateUser = (req, res) => {
    const userId = req.body._id
    const username = req.body.username
    const email = req.body.email
    const number = req.body.number
    const password = req.body.password
    User.findById(userId)
        .then(user => {
            user.username = username
            user.email = email
            user.number = number
            user.password = password
            return user.save()
        })
        .then(result => {
            res.json({ message: 'succesfully updated' })
        })
        .catch(err => console.log(err))
}

exports.deleteUser = (req, res) => {
    const deleteId = req.body._id
    User.findByIdAndRemove(deleteId)
        .then(result => {
            res.json({
                message: 'succesfully deleted'
            })
        })
        .catch(err => console.log(err))
}


