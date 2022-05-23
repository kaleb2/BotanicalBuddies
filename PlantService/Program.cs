using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddMvc();
builder.Services.AddDbContext<PlantsDbContext>(opt => opt.UseNpgsql(PlantsDbContext.GetConnectionString()));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapPost("/plant", async (Plant plant, PlantsDbContext plantDb) =>
{
    plantDb.Add(plant);
    await plantDb.SaveChangesAsync();
    return Results.Created($"/plant/{plant.UserId}/{plant.PlantName}", plant);
});

app.MapGet("/plant/{userid}/{plantName}", async (int userId, string plantName, PlantsDbContext plantsDb) =>
    await plantsDb.Plants.FindAsync(plantName, userId)
        is Plant plant
            ? Results.Ok(plant)
            : Results.NotFound());

app.MapGet("/plant/{userid}", async (int userid, PlantsDbContext plantsDb) =>
    await plantsDb.Plants.Where(p => p.UserId == userid).ToListAsync());

app.MapGet("/knownplants", (PlantsDbContext plantsDb) => 
    plantsDb.Plants.GroupBy(p => p.SpeciesName)
    .Select(p => p.First()).ToList().Select(p => p.SpeciesName).ToList());

app.Run("http://0.0.0.0:9100");
