import { useEffect, useState } from "react";
import { Thread } from "../types/Thread";
import { Post } from "../types/Post";
import { getPosts, getThread } from '../services/ForumService';
import '../css/BotanicalBuddies.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useParams } from "react-router-dom";

export function ThreadPage() {
    let { id  } = useParams();
    
    let [posts, setListofPosts] = useState<Array<Post>>([]);
    let [thread, setThread] = useState<Thread>();

    useEffect(() => {
        let init = async () => {
          try {
            let threadId = parseInt(""+id, 10);
            let posts = await getPosts(threadId);
            setListofPosts(posts);
            let thread = await getThread(threadId);
            setThread(thread);
          } catch (err) {
            console.log(err);
          }
        }
        init();
      }, [id]);

    return (
        <div className="profile">
            <div>
                <h1>{thread?.title}</h1><br/>
                <text>{thread?.body}</text><br/>
            </div>
            <div>
            {posts.length > 0 ?? posts.map(p => <PostCard
                key={p.postId}
                {...p} />)}
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

    return(
        <div>
            <text>{content}</text><br/>
            <text>{dateCreated}</text><br/>
            <text>{tag}</text>
        </div>);

}