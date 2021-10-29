import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

const Post = () => {
    const { search } = useLocation()
    const { id } = queryString.parse(search)
    console.log(id)

    const [posts, setPosts] = useState([]);

    const getPostData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/?userId=' + id)
        const data = await res.json()
        console.log(data)
        setPosts(data)
    }

    useEffect(() => {
        getPostData();
    }, [])

    return <div className='w-full h-screen  flex flex-col'>
        {
            posts.map(post => (
                <div className='m-4'>
                    <h1 className='text-lg'>{post.title + ':'}</h1>
                    <h1 className='text-md'>{post.body}</h1>
                </div>
            ))
        }
    </div>
}

export default Post