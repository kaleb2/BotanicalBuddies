using Microsoft.EntityFrameworkCore;

public class ForumDbContext : DbContext {
    public ForumDbContext(DbContextOptions<ForumDbContext> options) 
        : base(options) { }

    public DbSet<Thread> Threads => Set<Thread>();

    public DbSet<Post> Posts => Set<Post>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        new ThreadEntityTypeConfiguration().Configure(modelBuilder.Entity<Thread>());
        new PostEntityTypeConfiguration().Configure(modelBuilder.Entity<Post>());
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
