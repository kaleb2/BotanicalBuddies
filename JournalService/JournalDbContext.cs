using Microsoft.EntityFrameworkCore;

public class JournalDbContext : DbContext {

        public JournalDbContext(DbContextOptions<JournalDbContext> options) 
            : base(options) { }

        public DbSet<JournalEntry> JournalEntries => Set<JournalEntry>();

        public DbSet<Journal> Journals => Set<Journal>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new JournalEntryEntityTypeConfiguration().Configure(modelBuilder.Entity<JournalEntry>());
            new JournalEntityTypeConfiguration().Configure(modelBuilder.Entity<Journal>());
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