import { useEffect, useState } from "react";
import { Thread } from "../types/Thread";
import { Post } from "../types/Post";
import { getPosts, getThread, postPost } from '../services/ForumService';
import '../css/BotanicalBuddies.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useParams } from "react-router-dom";

const initialThreadState = {
    content: "",
    tag: ""
  };

export function ThreadPage() {
    let { id  } = useParams();
    
    const [posts, setListofPosts] = useState<Array<Post>>([]);
    const [thread, setThread] = useState<Thread>();
    const [postCreation, setPostCreation] = useState(false);
    const [post, setPost] = useState(initialThreadState);
    const [refreshPosts, setRefreshPosts] = useState(false);

    useEffect(() => {
        let init = async () => {
          try {
            // @ts-ignore
            let threadId = parseInt(id, 10);
            let posts = await getPosts(threadId);
            setListofPosts(posts);
            let thread = await getThread(threadId);
            setThread(thread);
            setRefreshPosts(false);
          } catch (err) {
            console.log(err);
          }
        }
        init();
      }, [id, refreshPosts]);


    const handleInputChange = event => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
    };

    const openPostCreation = () => {
        setPostCreation(true);
    }

    const closePostCreation = () => {
        setPostCreation(false);
    }

    const createPost = async () => {
        // @ts-ignore
        await postPost(post.content, post.tag, thread?.threadId);
        setPostCreation(false);
        setPost({content: "", tag: ""});
        setRefreshPosts(true);
    }
    
    let dateString = ""+thread?.dateCreated.toString();
    let date = new Date(dateString);

    return (
        <div className="threadContainer">
            <div>
                <h2>{thread?.title}</h2>
                <p style={{margin: "5px"}}>{thread?.body}</p>
                <text style={{margin: "5px", color: "green"}}>{date.toLocaleString()} | #{thread?.tag}</text>
                <hr/>
                <br/>
                {posts.length > 0 ? posts.map(p => <PostCard
                    key={p.postId}
                    {...p} />):<p>No posts in this thread yet... Create one won't you?</p>}
            </div>
            <div>
                {postCreation ? (
                    <>   
                    <CreatePostForm handleInputChange={handleInputChange} createPost={createPost} post={post} />
                    <button type="button" style={{marginTop: "10px", backgroundColor: "#f3cfc6", color: "black", border: "black"}} className="btn btn-primary" onClick={closePostCreation}>
                        Cancel
                    </button>
                    </>
                ) : (
                    <>     
                    <button type="button" style={{marginTop: "10px", backgroundColor: "#f3cfc6", color: "black", border: "black"}} className="btn btn-primary" onClick={openPostCreation}>
                        Create a new post
                    </button>
                    </>
                )
                }
            </div>
        </div>
    )
}

function PostCard(props) {
    let {
        userId,
        threadId,
        postId,
        content,
        tag,
        dateCreated
    } = props;

    let date = new Date(dateCreated);

    return(
        <div>
            <text style={{margin: "20px"}}>{content}</text><br/>
            <text style={{margin: "20px", color: "green"}}>{date.toLocaleString()} | #{tag}</text>
            <hr/>
        </div>);

}

export const CreatePostForm = ({ handleInputChange, createPost, post }) => {
    return (
      <><h2>Create a New Post</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <input
            style={{margin: "5px"}}
            type="text"
            id="content"
            required
            value={post.content}
            onChange={handleInputChange}
            name="content"
            className="form-control" />
        </div>
  
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input
            style={{margin: "5px"}}
            type="text"
            id="tag"
            required
            value={post.tag}
            onChange={handleInputChange}
            name="tag"
            className="form-control" />
        </div>
  
        <button type="button" style={{marginTop: "10px", backgroundColor: "#f3cfc6", color: "black", border: "black"}} className="btn btn-primary" onClick={createPost}>
          Create a Post
        </button>
      </form></>
    )
  }