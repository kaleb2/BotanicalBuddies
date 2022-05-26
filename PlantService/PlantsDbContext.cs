using Microsoft.EntityFrameworkCore;

public class PlantsDbContext : DbContext {

        public PlantsDbContext(DbContextOptions<PlantsDbContext> options) 
            : base(options) { }

        public DbSet<Plant> Plants => Set<Plant>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new PlantEntityTypeConfiguration().Configure(modelBuilder.Entity<Plant>());
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseNpgsql(GetConnectionString());
        }
            
        public static string GetConnectionString()
        {
            var server = "botpostgres";
            var port = "5432";
            var name = "botanicaldb";
            var user = "my_botanical_buddy";
            var password = "b0tBudz41851322";

            return $"Host={server};Database={name};Port={port};Username={user};Password={password}";
        }
    }