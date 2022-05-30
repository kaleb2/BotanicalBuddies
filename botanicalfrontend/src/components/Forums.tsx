import { useEffect, useState } from "react";
import { getThreads } from '../services/ForumService';
import { Thread } from '../types/StateTypes';
import { Link } from "react-router-dom";

export type Threads = {
    lsitOfThreads: Array<Thread>
}

export const Forums = event =>
{
    let [threads, setListofThreads] = useState<Array<Thread>>([]);

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

    console.log(threads);
    return (
        <div className="row">
            <div className="col-12">Threads</div>
            <br/>
            {threads.map(t => <ThreadLink
                key={t.threadId}
                {...t} />)}
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