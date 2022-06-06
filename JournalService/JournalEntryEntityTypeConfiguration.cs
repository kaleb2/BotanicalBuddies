using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class JournalEntryEntityTypeConfiguration: IEntityTypeConfiguration<JournalEntry>
{
    public void Configure(EntityTypeBuilder<JournalEntry> builder)
    {
        builder.Property(t => t.EntryId).ValueGeneratedOnAdd();
        builder.Property(t => t.DateCreated).HasDefaultValueSql("NOW()");

        Console.WriteLine("JournalEntryEntityTypeConfiguration.Configure Start");
        builder.HasKey(p => p.EntryId)
            .HasName("PK_EntryId");
        Console.WriteLine("EntryId added as key.");

        builder.HasData(new JournalEntry{EntryId=1, JournalId=1, EntryTitle="Plant is looking very healthy today!", UserId=1, PlantId=1, Content="What's everyone's thoughts?", DateCreated=DateTimeOffset.Now});
        Console.WriteLine("Added Plant is looking very healthy today!");

        builder.HasData(new JournalEntry() {EntryId=2, JournalId=2, EntryTitle="Might need to start watering more...", UserId=1, PlantId=2, Content="What's everyone's thoughts?", DateCreated=DateTimeOffset.Now});
        Console.WriteLine("Added Might need to start watering more...");

        builder.HasData(new JournalEntry() {EntryId=3, JournalId=1, EntryTitle="Oh no... it's withering :(", UserId=2, PlantId=2, Content="What's everyone's thoughts?", DateCreated=DateTimeOffset.Now});
            Console.WriteLine("Added Oh no... it's withering :(");

        Console.WriteLine("JournalEntryEntityTypeConfiguration.Configure End");
    }
}