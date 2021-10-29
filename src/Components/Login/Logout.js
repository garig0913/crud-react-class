const Logout = () => {
    const logoutHandler = () => {
        localStorage.clear()
    }
    return <button onClick={logoutHandler} className='w-auto h-auto p-2 bg-red-500 border rounded-lg'>
        Logout
    </button>
}

export default Logout