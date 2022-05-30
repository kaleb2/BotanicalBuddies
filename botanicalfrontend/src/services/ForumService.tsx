import { forumClient } from '../services/HttpService';
import { Thread, Post } from '../types/StateTypes';

export async function getThreads(): Promise<Array<Thread>>
{
    console.log("getting threads.")
    let res = await forumClient.get("/forums/threads");
    console.log("threads retrieved.")
    let data = await res.data;
    console.log(data);
    return data;
}

export async function getPosts(threadId: number) : Promise<Array<Post>>
{
    let res = await forumClient.get(`/forums/threads/${threadId}/posts`);

    let data = await res.data;
    console.log(data);
    return data;
}