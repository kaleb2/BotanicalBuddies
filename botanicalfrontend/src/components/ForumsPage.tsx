import { useEffect, useState } from "react";
import { getThreads, postThread } from '../services/ForumService';
import { Thread } from '../types/Thread';
import { Link, useNavigate } from "react-router-dom";
import '../css/BotanicalBuddies.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { ListGroupItem } from "react-bootstrap";

export type Threads = {
    lsitOfThreads: Array<Thread>
}

const initialThreadState = {
  title: "",
  body: "",
  tag: ""
};

export const ForumsPage = event =>
{
  const navigate = useNavigate();

    const [threads, setListofThreads] = useState<Array<Thread>>([]);
    const [threadCreation, setThreadCreation] = useState(false);
    const [thread, setThread] = useState(initialThreadState);

    useEffect(() => {
        let init = async () => {
          try {
            let threads = await getThreads();
            setListofThreads(threads);
          } catch (err) {
            console.log(err);
          }
        }
        init();
      }, [])

    const handleInputChange = event => {
      const { name, value } = event.target;
      setThread({ ...thread, [name]: value });
    };
  
    const openThreadCreation = () => {
      setThreadCreation(true);
    }

    const closeThreadCreation = () => {
      setThreadCreation(false);
    }

    const createThread = async () => {
      var data = await postThread(thread.title, thread.body, thread.tag);
      navigate(`/thread/${data.threadId}`);
    }

    console.log(threads);
    return (
        <div className="threads container">
          <div className="threadList">
            <h1>Threads</h1>
            <hr/>
              {threads.length > 0 ? threads.map(t => <ThreadLink
                  key={t.threadId}
                  {...t} />): <p>No threads yet... Create one won't you?</p>}
          </div>
          <div>
          {threadCreation ? (
            <>   
              <CreateThreadForm handleInputChange={handleInputChange} createThread={createThread} thread={thread} />
              <button type="button" style={{marginTop: "10px", backgroundColor: "#f3cfc6", color: "black", border: "black"}} className="btn btn-primary" onClick={closeThreadCreation}>
                Cancel
              </button>
            </>
          ) : (
            <>     
              <button type="button" style={{marginTop: "10px", backgroundColor: "#f3cfc6", color: "black", border: "black"}} className="btn btn-primary" onClick={openThreadCreation}>
                Create a new thread
              </button>
            </>
          )
          }
          </div>
        </div>
    );
}

function ThreadLink(props) {
    let {
        userId,
        threadId,
        title,
        body,
        tag,
        dateCreated
    } = props;

    let path = `/thread/${props.threadId}`;

    return(
        <div style={{padding: "2px"}}>
            <Link to={path} className="link">{props.title}</Link>
        </div>);

}

export const CreateThreadForm = ({ handleInputChange, createThread, thread }) => {
  return (
    <><h2>Create a New Thread</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          style={{margin: "5px"}}
          type="text"
          id="title"
          required
          value={thread.title}
          onChange={handleInputChange}
          name="title"
          className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Body</label>
        <input
          style={{margin: "5px"}}
          type="text"
          id="body"
          required
          value={thread.body}
          onChange={handleInputChange}
          name="body"
          className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="tag" className="form-label">Tag</label>
        <input
          style={{margin: "5px"}}
          type="text"
          id="tag"
          required
          value={thread.tag}
          onChange={handleInputChange}
          name="tag"
          className="form-control" />
      </div>

      <button type="button" style={{marginTop: "10px", backgroundColor: "#f3cfc6", color: "black", border: "black"}} className="btn btn-primary" onClick={createThread}>
        Create a Thread
      </button>
    </form></>
  )
}