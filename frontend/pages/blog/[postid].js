import { useRouter } from 'next/router'
import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import axios from "axios";
import Navbar from "../../components/Navbar";
// import Comment from "../../components/Comment";

const dummyPost = "This is a dummy post. First Register as a new user or login in your existing account to add comments or replies. Once logged in you can also edit comments and replies added by you. You will remain logged in for maximum 3 hours after which cookie containing your auth token will expire. I have implemented Depth First Traversal Graph algorithm to get comments from MongoDB and render in React component. Have fun :)"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



const Post = () => {

    const router = useRouter()
    const { postid } = router.query

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [comments, setComments] = useState([]);
    const [isLogged, setIsLogged] = useState(false);
    const [userData, setUserData] = useState({});
    const [commentInput, setCommentInput] = useState("");

    // const getComments = async (threads) => {
    //     const DFS = (thread, commentsArray) => {
    //         var comment = {
    //             _id: thread._id,
    //             author: {
    //                 id: thread.author.id,
    //                 name: thread.author.name
    //             },
    //             commentText: thread.commentText,
    //             depth: thread.depth,
    //             parentId: thread.parentId,
    //             postedDate: thread.postedDate
    //         }
    //         commentsArray.push(comment);

    //         for(var child in thread.children){
    //             DFS(thread.children[child], commentsArray);
    //         }
    //     }
    //     var commentsArray = [];
    //     for(var baseComments in threads){
    //         DFS(threads[baseComments], commentsArray);
    //     }
    //     setComments(commentsArray);
    //     setCommentInput("");
    // }

    // useEffect(() => {
    //     const getData = async() => {
    //         await axios.get("/comments/get")
    //         .then( response => {
    //             // console.log(response.data); 
    //             setUserData(response.data.user);
    //             response.data.user===null ? setIsLogged(false) : setIsLogged(true);
    //             getComments(response.data.comments);
    //         })
    //         .catch(err => {
    //             console.log(err); ////////////
    //         })
    //     }
    //     getData();
    // }, [])

    const typeComment = (e) => {
        setCommentInput(e.target.value);
    }

    // const addComment = async (isReplyComment=false, parentComment=null, commentText=null) => {
    //     if (isReplyComment === false && commentInput === "") {
    //         return;
    //     }
    //     if (isReplyComment && commentText === "") {
    //         return;
    //     }
    //     let data = {
    //         id: userData.id,
    //         name: userData.name,
    //         commentText: isReplyComment ? commentText : commentInput
    //     }
    //     if(isReplyComment){
    //         data.parentId = parentComment._id;
    //         data.depth = parentComment.depth+1;
    //     }
    //     // console.log(data); 

    //     await axios.post("/comments/add", data)
    //     .then( response => {
    //         // console.log(response.data); 
    //         setUserData(response.data.user);
    //         response.data.user===null ? setIsLogged(false) : setIsLogged(true);
    //         getComments(response.data.comments);
    //     })
    //     .catch( err => {
    //         console.log(err); ////////////
    //     })
    // }

    // const updateComment = async (data) => {
    //     await axios.post("/comments/edit", data)
    //     .then( response => {
    //         // console.log(response.data); 
    //         setUserData(response.data.user);
    //         response.data.user===null ? setIsLogged(false) : setIsLogged(true);
    //         getComments(response.data.comments);
    //     })
    //     .catch( err => {
    //         console.log(err); ////////////
    //     })
    // }

    return (
        <div>
            <Navbar/>
            <Card sx={{ maxWidth: "100%", backgroundColor: "#181818", color: "white" }}>
                <CardHeader
                    className="text-center"
                    title="Dummy Post. Please Login to comment"
                    sx={{fontFamily: 'Montserrat Alternates, sans-serif'}}
                />
                <CardContent>
                    <Typography variant="h6" component="p">
                        {dummyPost}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon style={{color: "#999999"}}/>
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <Typography style={{color: "#999999"}} variant="body1" component="p">Comments</Typography>
                        {/* <ExpandMoreIcon /> */}
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <div>
                        <TextField
                            id="standard-basic" variant="standard" 
                            value={commentInput} 
                            // disabled={!isLogged} 
                            multiline rowsMin="1" maxRows="3" 
                            placeholder={!isLogged ? "Login to comment" : "Type your comment..."} 
                            sx={{width: "100%"}} 
                            InputProps={{style:{ color: "white" }}}
                            onChange={typeComment}/>
                        <Button 
                            size="small"
                            disabled={!isLogged}
                            color="primary"
                            variant="contained"
                            style={{backgroundColor: '#ff0050', marginTop: "1%", color:"black"}}
                            onClick={()=>addComment(false,null,null)}
                            >
                            Submit
                        </Button>
                    </div>
                    <div>
                        {comments.map( (comment, index) => (
                            <Comment
                                key={index}
                                id={comment._id}
                                addComment = {addComment}
                                updateComment = {updateComment}
                                commentData = {comment}
                                userData = {userData}
                                isLogged = {isLogged}
                            />
                        ))}
                    </div>
                </CardContent>
              </Collapse>
            </Card>
        </div>
    );

}

export default Post