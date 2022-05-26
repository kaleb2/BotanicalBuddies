using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class JournalEntryEntityTypeConfiguration: IEntityTypeConfiguration<JournalEntry>
{
    public void Configure(EntityTypeBuilder<JournalEntry> builder)
    {
        Console.WriteLine("JournalEntryEntityTypeConfiguration.Configure Start");
        builder.HasKey(p => new {p.JournalId, p.EntryId})
            .HasName("PKComposite_EntryId");
        Console.WriteLine("JournalId and EntryId added as composite key.");

        builder.HasData(new JournalEntry{EntryId=1, JournalId=1, EntryTitle="Plant is looking very healthy today!", UserId=1, PlantName="Monstera", PlantId=1, Content="What's everyone's thoughts?", DateCreated=DateTimeOffset.Now});
        Console.WriteLine("Added Plant is looking very healthy today!");

        builder.HasData(new JournalEntry() {EntryId=2, JournalId=2, EntryTitle="Might need to start watering more...", UserId=1, PlantName="Fern", PlantId=2, Content="What's everyone's thoughts?", DateCreated=DateTimeOffset.Now});
        Console.WriteLine("Added Might need to start watering more...");

        builder.HasData(new JournalEntry() {EntryId=3, JournalId=1, EntryTitle="Oh no... it's withering :(", UserId=2, PlantName="Fern", PlantId=2, Content="What's everyone's thoughts?", DateCreated=DateTimeOffset.Now});
            Console.WriteLine("Added Oh no... it's withering :(");

        Console.WriteLine("JournalEntryEntityTypeConfiguration.Configure End");
    }
}