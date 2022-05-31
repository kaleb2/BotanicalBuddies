using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class JournalEntityTypeConfiguration: IEntityTypeConfiguration<Journal>
{
    public void Configure(EntityTypeBuilder<Journal> builder)
    {
        Console.WriteLine("JournalEntityTypeConfiguration.Configure Start");
        builder.HasKey(p => p.JournalId)
            .HasName("PK_JournalId");
        Console.WriteLine("JournalId added as key.");

        builder.HasData(new Journal{JournalId=1, JournalTitle="I water it everyday and it still won't love me.", UserId=1, PlantId=1, DateCreated=DateTimeOffset.Now });
        Console.WriteLine("Added Plant is looking very healthy today!");

        builder.HasData(new Journal() {JournalId=2, JournalTitle="Has anybody ever grown a hibiscus plant indoors before?", UserId=2, PlantId=1, DateCreated=DateTimeOffset.Now });
        Console.WriteLine("Added Might need to start watering more...");

        builder.HasData(new Journal() {JournalId=3, JournalTitle="How do I get my coffee plant to produce beans?", UserId=1, PlantId=3, DateCreated=DateTimeOffset.Now});
        Console.WriteLine("Added Oh no... it's withering :(");

        Console.WriteLine("JournalEntityTypeConfiguration.Configure End");
    }
}