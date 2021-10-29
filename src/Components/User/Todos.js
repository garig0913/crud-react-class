// import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import queryString from 'query-string'

// const Todos = () => {
//     const { search } = useLocation()
//     const { id } = queryString.parse(search)
//     console.log(id)

//     const [todos, setTodos] = useState([]);

//     const getPostData = async () => {
//         const res = await fetch('https://jsonplaceholder.typicode.com/todos/?userId=' + id)
//         const data = await res.json()
//         console.log(data)
//         setTodos(data)
//     }

//     useEffect(() => {
//         getPostData();
//     }, [])

//     return <div className='w-full h-screen  flex flex-col'>
//         {
//             todos.map(todo => (
//                 <div className='m-4'>
//                     <h1 className='text-lg'>{todo.title}</h1>
//                     <div className='flex'>
//                         <h1 className='text-md'>completed:</h1>
//                         <p className={ }>{todo.completed}</p>
//                     </div>
//                 </div>
//             ))
//         }
//     </div>
// }

// export default Todos