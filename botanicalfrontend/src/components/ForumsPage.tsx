import { useEffect, useState } from "react";
import { getThreads, postThread } from '../services/ForumService';
import { Thread } from '../types/Thread';
import { Link, useNavigate } from "react-router-dom";
import { create } from "domain";

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
        <div className="row">
          <div>
            <h1>Threads</h1>
            <br/>
            {threads.length > 0 ? threads.map(t => <ThreadLink
                key={t.threadId}
                {...t} />): <p>No threads yet... Create one won't you?</p>}
          </div>
          <div>
          {threadCreation ? (
            <>   
              <CreateThreadForm handleInputChange={handleInputChange} createThread={createThread} thread={thread} />
              <button type="button" className="btn btn-primary" onClick={closeThreadCreation}>
                Cancel
              </button>
            </>
          ) : (
            <>     
              <button type="button" className="btn btn-primary" onClick={openThreadCreation}>
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
        <div>
            <Link to={path}>{props.title}</Link>
        </div>);

}

export const CreateThreadForm = ({ handleInputChange, createThread, thread }) => {
  return (
    <><h2>Create a New Thread</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
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
          type="text"
          id="tag"
          required
          value={thread.tag}
          onChange={handleInputChange}
          name="tag"
          className="form-control" />
      </div>

      <button type="button" className="btn btn-primary" onClick={createThread}>
        Create a Thread
      </button>
    </form></>
  )
}