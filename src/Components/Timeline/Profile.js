import { useState, useEffect } from "react";
import Navigation from "../Navigation"
import Button from "../Button";
import Form from "../Form";
import Card from "../Card";
import PostList from "../List/PostList";
import swal from "sweetalert";

const Profile = () => {
    const navigation = [
        {
            title: "home",
            path: "/",
        },
        {
            title: "login",
            path: "/login",
        },
        {
            title: "logout",
        }
    ];


    const [inputPost, setPost] = useState('')
    const [updated, setUpdated] = useState('')
    const [userPosts, setUserPosts] = useState([])
    const [inputComment, setInputComment] = useState()
    const [like, setLike] = useState(false)
    const [dislikes, setDislike] = useState(false)
    const localUser = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        fetch("http://localhost:3001/userPosts", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: localUser._id
            }),
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                // console.log("data: ", result)
                setUserPosts(result)
            })
            .catch((err) => {
                swal("error", err.message, "error");
            });

    }, [updated]);

    function updateFunction() {
        setUpdated(true);
        setTimeout(() => {
            setUpdated(false);
        }, 10);
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (inputPost !== '') {
            fetch("http://localhost:3001/post", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: localUser.username,
                    id: localUser._id,
                    post: inputPost
                }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw Error("Хэрэглэгч бүртгэхэд алдаа гарлаа");
                    }
                    return response.json();
                })
                .then((result) => swal(result.message, "post has been submitted", "success"))
                .catch((err) => {
                    swal("error", err.message, "error");
                });
            updateFunction()
        } else {
            swal('error!', "cannot be empty", "error")
        }

    }

    const deleteHandler = (id) => {
        fetch("http://localhost:3001/deletePost", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ _id: id }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error("Could not delete post");
                }
                return response.json();
            })
            .then((result) => swal(result.message, "post deleted", "success"))
            .catch((err) => {
                swal(err.message);
            });

        updateFunction();
    };

    const commentHandler = (id) => {
        const userId = localUser._id
        const username = localUser.username



        fetch("http://localhost:3001/deletePost", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                postId: id,
                userId: userId,
                username: username,
                comment: inputComment
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error("Could not comment");
                }
                return response.json();
            })
            .then((result) => swal(result.message, "comment added", "success"))
            .catch((err) => {
                swal(err.message);
            });

        updateFunction();
    }

    const thumbsDownHandler = (id) => {
        fetch("http://localhost:3001/thumbsDown", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id
            }),
        })
        updateFunction()
    }

    const thumbsUpHandler = (id) => {
        fetch("http://localhost:3001/thumbsUp", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id
            }),
        })
        updateFunction()
    }



    return <div className='flex flex-col'>
        <div className="w-full flex items-center justify-between bg-green-400 font-bold text-white">
            <div className="pl-4">
                <h1 className="text-3xl">{localUser.username}</h1>
            </div>
            <Navigation nav={navigation} />
        </div>

        <Form submitHandler={submitHandler}>
            <textarea onChange={(e) => setPost(e.target.value)} value={inputPost} className='mx-10 my-6 py-6 border-2 border-blue-900' />
            <Button bg='indigo' val='Post' type='normal' />
        </Form>

        <Card>
            {userPosts && (
                <PostList
                    datas={userPosts}
                    deleteHandler={deleteHandler}
                    commentHandler={commentHandler}
                    thumbsUp={thumbsUpHandler}
                    thumbsDown={thumbsDownHandler}
                />
            )}
            {/* {errorMessage && <p>{errorMessage}</p>} */}
        </Card>
    </div>
}

export default Profile

