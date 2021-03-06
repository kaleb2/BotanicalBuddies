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

app.MapPost("/journal", async (Journal journal, JournalDbContext journalsDb) =>
{
    journalsDb.Add(journal);
    await journalsDb.SaveChangesAsync();
    return Results.Created($"/journal/{journal.JournalId}/", journal);
});

app.MapGet("/journal/", async (JournalDbContext journalsDb) =>
    await journalsDb.Journals.ToListAsync());

app.MapGet("/journal/{journalid}/", async (int journalId, JournalDbContext journalsDb) =>
    await journalsDb.Journals.Where(p => p.JournalId == journalId).FirstOrDefaultAsync());

app.MapGet("/journals/{userid}/", async (int userId, JournalDbContext journalsDb) =>
    await journalsDb.Journals.Where(p => p.UserId == userId).ToListAsync());

app.MapPost("/journalentry", async (JournalEntry journalEntry, JournalDbContext journalEntriesDb) =>
{
    journalEntriesDb.Add(journalEntry);
    await journalEntriesDb.SaveChangesAsync();
    return Results.Created($"/journal/{journalEntry.JournalId}/{journalEntry.EntryId}", journalEntry);
});

app.MapGet("/journal/{journalid}/{entryid}", async (int journalId, int entryId, JournalDbContext journalEntriesDb) =>
    await journalEntriesDb.JournalEntries.Where(p => p.JournalId == journalId && p.EntryId == entryId).FirstOrDefaultAsync());

app.MapGet("/journalentry/{entryid}", async (int entryId, JournalDbContext journalEntriesDb) =>
    await journalEntriesDb.JournalEntries.Where(p => p.EntryId == entryId).FirstOrDefaultAsync());

app.MapGet("/journalentry/", async (JournalDbContext journalEntriesDb) =>
    await journalEntriesDb.JournalEntries.ToListAsync());

app.MapGet("/journalentries/{journalId}", async (int journalId, JournalDbContext journalEntriesDb) =>
    await journalEntriesDb.JournalEntries.Where(p=> p.JournalId == journalId).ToListAsync());

app.Run("http://0.0.0.0:9200");
