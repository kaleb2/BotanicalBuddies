using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddMvc();
builder.Services.AddDbContext<JournalDbContext>(opt => opt.UseNpgsql(JournalDbContext.GetConnectionString()));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(builder => builder.WithOrigins("http://localhost:3000")
                                .AllowAnyMethod()
                                .AllowAnyHeader());

app.MapPost("/journal", async (JournalEntry journalEntry, JournalDbContext journalEntriesDb) =>
{
    journalEntriesDb.Add(journalEntry);
    await journalEntriesDb.SaveChangesAsync();
    return Results.Created($"/journal/{journalEntry.JournalId}/{journalEntry.EntryId}", journalEntry);
});

app.MapGet("/journal/{journalid}/{entryid}", async (int journalId, int entryId, JournalDbContext journalEntriesDb) =>
    await journalEntriesDb.JournalEntries.FindAsync(journalId, entryId)
        is JournalEntry journalEntry
            ? Results.Ok(journalEntry)
            : Results.NotFound());

app.MapGet("/journal/{journalid}", async (int journalId, JournalDbContext journalEntriesDb) =>
    await journalEntriesDb.JournalEntries.Where(p => p.JournalId == journalId).ToListAsync());

app.MapGet("/journal/", async (JournalDbContext journalEntriesDb) =>
    await journalEntriesDb.JournalEntries.ToListAsync());

app.Run("http://0.0.0.0:9200");
