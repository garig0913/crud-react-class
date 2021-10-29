import PostListItem from "./PostListItem";
import Button from "../Button";
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BiCommentDetail } from 'react-icons/bi'

const PostList = props => {
    return <ul>
        {
            props.datas.map(data => (
                <PostListItem userId={data.userId} key={`list-${data._id}`} list={data.post} username={data.username}
                    thumbsUp={() => props.thumbsUp(data._id)} thumbsDown={() => props.thumbsDown(data._id)} likeCount={data.likes}
                >
                    <Button val={<BiCommentDetail />} bg='indigo' click={() => props.commentHandler(data._id)} />
                    <Button val={<MdEdit />} bg='gray' click={() => props.editHandler(data._id)} />
                    <Button val={<RiDeleteBin5Line />} bg='red' click={() => props.deleteHandler(data._id)} />
                </PostListItem>
            ))
        }
    </ul >
}

export default PostList;