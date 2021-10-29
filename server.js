
const path = require("path");
const express = require("express");
const bp = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors')
const User = require('./Model/User');
const app = express();

const userRouter = require('./routes/userRouter')
const authRouter = require('./routes/authRouter')
const postRouter = require('./routes/postRouter')


app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: false }))
app.use(userRouter)
app.use(authRouter)
app.use(postRouter)


app.get('/test', (req, res) => {
    res.json({ title: 'abced' })
})

app.post('/receive', (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const id = req.body.id
    console.log(username, email, password, id)

    const newUser = new User({
        username: username,
        email: email,
        password: password,
        id: id,
    })
    newUser.save()
        .then(result => {
            console.log(result)
            res.json({
                message: 'Post created successfully'
            })
        })
        .catch(err => console.log(err))
})

app.get('./data', (req, res) => {
    var dbo = db.db("react");
    dbo.collection("Users").find({}).toArray(function (err, result) {
        if (err) throw err;
        res.json(result)
        db.close();
    });
})

const url = "mongodb://127.0.0.1:27017/react"


mongoose
    .connect(url)
    .then((result) => {
        app.listen(3001, () => {
            console.log('server started on port 3001')
        }
        );
    })
    .catch((err) => console.log(err));