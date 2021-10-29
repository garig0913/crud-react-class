const Alert = props => {
    return <div className={`relative {props.hidden}`}>
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            field cannot be blank
        </h1>
    </div>
}

export default Alert;