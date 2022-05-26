using Microsoft.EntityFrameworkCore;

public class ThreadDbContext : DbContext {

    public ThreadDbContext(DbContextOptions<ThreadDbContext> options) 
        : base(options) { }

    public DbSet<Thread> Threads => Set<Thread>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        new ThreadEntityTypeConfiguration().Configure(modelBuilder.Entity<Thread>());
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