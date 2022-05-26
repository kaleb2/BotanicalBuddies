using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddMvc();
builder.Services.AddDbContext<ThreadDbContext>(opt => opt.UseNpgsql(ThreadDbContext.GetConnectionString()));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// 404 ignore other requests
app.Map("/", () => Results.NotFound());
app.Map("/forums", () => Results.NotFound());

// get all threads
app.MapGet("/forums/threads", async (ThreadDbContext db) =>
{
    var threads = await db.Threads.ToListAsync();
    return threads != null?
        Results.Ok(threads):
        Results.NoContent();
});

// get all threads belonging to a userid
app.MapGet("/forums/threads/{userid:int}", async (int userId, ThreadDbContext db) =>
{
    var threads = db.Threads.Where(t => t.UserId == userId);
    return (threads != null && threads.Count() > 0)? 
        Results.Ok(await threads.ToListAsync()):
        Results.NoContent();
});

// create a new thread belonging to a userid
app.MapPost("/forums/threads/{userid:int}", async (int userid, Thread thread, ThreadDbContext db) =>
{
    thread.UserId = userid;
    db.Add(thread);
    await db.SaveChangesAsync();
    return Results.Created($"/forums/{thread.UserId}/{thread.ThreadId}", thread);
});

// get a specific threadid belonging to a userid
app.MapGet("/forums/threads/{userid:int}/{threadid:int}", async (int userid, int threadid, ThreadDbContext db) =>
{
    var thread = await db.Threads.FindAsync(userid, threadid);
    return thread != null? 
        Results.Ok(thread):
        Results.NoContent();
});

app.Run("http://0.0.0.0:9150");
