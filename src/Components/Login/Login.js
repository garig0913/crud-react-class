import React, { useState, useEffect } from 'react'
import Button from '../Button'
import Card from '../Card'
import Form from '../Form'
import Input from '../Input'
import Label from '../Label'

const Login = ({ history }) => {

    useEffect(() => {
        if (localStorage.user) {
            history.push('/profile')
        }
    }, [])


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = async e => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const result = await response.json()

            if (!response.ok) {
                throw Error(result.message)
            }
            console.log(result)
            if (result.user) {
                localStorage.setItem('user', JSON.stringify(result.user))
                history.push('/')
            }



        } catch (err) {
            alert(err.message)
        }
    }

    return <div className='w-full h-screen flex items-center justify-center'>
        <Card>
            <Form submitHandler={loginHandler}>
                <Label htmlFor='Email' lab='Email' />
                <Input onChange={e => setEmail(e.target.value)}
                    placeHolder='Email' id='email' value={email} />

                <Label htmlFor='password' lab='password' />
                <Input onChange={e => setPassword(e.target.value)}
                    placeHolder='Password' type='password' id='password' value={password} />

                <Button bg='indigo' val='Login' type='normal' />
            </Form>
        </Card>
    </div>
}

export default Login