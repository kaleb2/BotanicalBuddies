using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddMvc();
builder.Services.AddDbContext<JournalsDbContext>(opt => opt.UseNpgsql(JournalsDbContext.GetConnectionString()));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();

app.MapPost("/journal", async (Journal journal, JournalsDbContext journalDb) =>
{
    journalDb.Add(journal);
    await journalDb.SaveChangesAsync();
    return Results.Created($"/journal/{journal.UserId}/{journal.PlantId}", journal);
});

app.MapGet("/journal/{userid}/{plantId}", async (int userId, int plantId, JournalsDbContext journalsDb) =>
    await journalsDb.Journals.FindAsync(plantId, plantId)
        is Journal journal
            ? Results.Ok(journal)
            : Results.NotFound());

app.MapGet("/journal/{userid}", async (int userid, JournalsDbContext journalsDb) =>
    await journalsDb.Journals.Where(p => p.UserId == userid).ToListAsync());

app.Run("http://0.0.0.0:9200");
