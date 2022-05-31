using Microsoft.EntityFrameworkCore;

string OriginsAllowed = "OriginsAllowed";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddMvc();
builder.Services.AddDbContext<ForumDbContext>(opt => opt.UseNpgsql(ForumDbContext.GetConnectionString()));
builder.Services.AddCors(opts => 
{
    opts.AddPolicy(OriginsAllowed,
        policy => 
        { 
            policy.WithOrigins("http://localhost:3000")
                                .AllowAnyMethod()
                                .AllowAnyHeader();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(OriginsAllowed);

// 404 ignore other requests
app.Map("/", () => Results.NotFound());
app.Map("/forums", () => Results.NotFound());

// get all threads
app.MapGet("/forums/threads", async (ForumDbContext db) =>
{
    Console.WriteLine("Entering /forums/threads");
    var threads = await db.Threads.ToListAsync();
    if (threads != null) {
        foreach (var t in threads)
        {
            Console.WriteLine($"{t.ThreadId}, {t.Title}.");
        }
    }
    
    return threads != null?
        Results.Ok(threads):
        Results.NoContent();
});

// get all threads belonging to a userid
app.MapGet("/forums/{userid:int}/threads", async (int userId, ForumDbContext db) =>
{
    var threads = db.Threads.Where(t => t.UserId == userId);
    return (threads != null && threads.Count() > 0)? 
        Results.Ok(await threads.ToListAsync()):
        Results.NoContent();
});

// create a new thread belonging to a userid
app.MapPost("/forums/{userid:int}/threads", async (int userid, Thread thread, ForumDbContext db) =>
{
    Console.WriteLine($"entering thread creation: {userid}, {thread.Title}, {thread.Body}");
    thread.UserId = userid;
    db.Add(thread);
    await db.SaveChangesAsync();
    return Results.Created($"/forums/{thread.UserId}/threads/{thread.ThreadId}", thread);
});

// get a specific threadid belonging to a userid
app.MapGet("/forums/{userid:int}/threads/{threadid:int}", async (int userid, int threadid, ForumDbContext db) =>
{
    var thread = await db.Threads.FindAsync(userid, threadid);
    return thread != null? 
        Results.Ok(thread):
        Results.NoContent();
});

// get all posts
app.MapGet("/forums/posts", async (ForumDbContext db) =>
{
    var posts = await db.Posts.ToListAsync();
    return posts != null?
        Results.Ok(posts):
        Results.NoContent();
});

// get all posts belonging to a userid
app.MapGet("/forums/{userid:int}/posts", async (int userId, ForumDbContext db) =>
{
    var posts = db.Posts.Where(t => t.UserId == userId);
    return (posts != null && posts.Count() > 0)? 
        Results.Ok(await posts.ToListAsync()):
        Results.NoContent();
});

// get all posts belonging to a threadid
app.MapGet("/forums/threads/{threadid:int}/posts", async (int threadId, ForumDbContext db) =>
{
    var posts = db.Posts.Where(t => t.ThreadId == threadId);
    return (posts != null && posts.Count() > 0)? 
        Results.Ok(await posts.ToListAsync()):
        Results.NoContent();
});

// create a new post belonging to a userid and threadId
app.MapPost("/forums/posts/{userid:int}/{threadid:int}", async (int userid, int threadid, Post post, ForumDbContext db) =>
{
    post.UserId = userid;
    post.ThreadId = threadid;
    db.Add(post);
    await db.SaveChangesAsync();
    return Results.Created($"/forums/posts/{post.UserId}/{post.ThreadId}/{post.PostId}", post);
});

// get a specific postid belonging to a userid and threadid
app.MapGet("/forums/posts/{userid:int}/{threadid:int}/{postid:int}", async (int userid, int threadid, int postid, ForumDbContext db) =>
{
    var post = await db.Posts.FindAsync(userid, threadid, postid);
    return post != null? 
        Results.Ok(post):
        Results.NoContent();
});

app.Run("http://0.0.0.0:9150");
