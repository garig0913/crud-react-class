import { IoMdArrowDropdown } from 'react-icons/io'
import { FiThumbsUp } from 'react-icons/fi'
import { FiThumbsDown } from 'react-icons/fi'


const PostListItem = props => {
    return <div className='mx-5'>
        <li className='py-2 px-4 rounded-lg hover:bg-gray-100 flex items-center justify-between cursor-pointer '>
            {/* <Link to={`/user/?id=${props.userId}`}> */}
            <div>
                <p className='opacity-50'>{props.username + ':'}</p>
                {props.list}
            </div>
            {/* </Link> */}

            <div className='flex gap-3'>
                {
                    props.children
                }
            </div>
        </li>
        <div className='ml-3 mt-1 text-sm flex'>
            <button onClick={props.thumbsUp}><FiThumbsUp className='mr-2' /></button>
            <p>{props.likeCount}</p>
            <button onClick={props.thumbsDown}>< FiThumbsDown className='ml-2' /></button>
        </div>
        <button className='flex text-blue-600 font-semibold ml-1 mt-1'>< IoMdArrowDropdown className='mt-1 mr-1' />View replies</button>
    </div>

}

export default PostListItem