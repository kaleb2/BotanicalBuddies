using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class JournalEntityTypeConfiguration: IEntityTypeConfiguration<Journal>
{
    public void Configure(EntityTypeBuilder<Journal> builder)
    {
        Console.WriteLine("JournalEntityTypeConfiguration.Configure Start");
        builder.HasKey(p => new {p.JournalTitle, p.UserId})
            .HasName("PKComposite_TitleId");
        Console.WriteLine("JournalTitle and UserId added as composite key.");

        builder.HasData(new Journal{JournalTitle="Plant is looking very healthy today!", UserId=1});
        Console.WriteLine("Added Plant is looking very healthy today!");

        builder.HasData(new Journal() {JournalTitle="Might need to start watering more...", UserId=1});
        Console.WriteLine("Added Might need to start watering more...");

        builder.HasData(new Journal() {JournalTitle="Oh no... it's withering :(", UserId=2});
            Console.WriteLine("Added Oh no... it's withering :(");

        Console.WriteLine("JournalEntityTypeConfiguration.Configure End");
    }
}