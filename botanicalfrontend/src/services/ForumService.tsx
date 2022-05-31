import { forumClient } from '../services/HttpService';
import { Thread } from '../types/Thread';
import { Post } from '../types/Post';
import { getUserIdFromStorage } from './AuthService';

export async function getThreads(): Promise<Array<Thread>>
{
    console.log("getting threads.");
    let res = await forumClient.get("/forums/threads");
    console.log("threads received.");
    let data = await res.data;
    console.log(data);
    return data;
}

export async function getThread(threadId: number): Promise<Thread>
{
    console.log("getting threads.");
    let res = await forumClient.get("/forums/threads");
    console.log("threads received.");
    let data = await res.data;
    console.log(data);
    return data.find((t) => t.threadId === threadId);
}

export async function getPosts(threadId: number) : Promise<Array<Post>>
{
    console.log("getting posts for thread: "+threadId);
    let res = await forumClient.get(`/forums/threads/${threadId}/posts`);
    console.log("posts received.");
    let data = await res.data;
    console.log(data);
    return data;
}

export async function postThread(title: string, body: string, tag: string)
{
    console.log(`creating thread: ${title}, ${body}, ${tag}`);
    let id = getUserIdFromStorage();
    console.log(`id: ${id}`);
    let res = await forumClient.post(`/forums/${id}/threads/`, 
        {
            userId: id,
            title: title,
            body: body,
            tag: tag,
            dateCreated: new Date()
        });
    console.log(`response received: ${res.status}`);
    let data = await res.data;
    console.log(res);
    return data;
}