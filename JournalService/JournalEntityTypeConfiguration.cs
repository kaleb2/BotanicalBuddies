using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class JournalEntityTypeConfiguration: IEntityTypeConfiguration<Journal>
{
    public void Configure(EntityTypeBuilder<Journal> builder)
    {
        builder.Property(t => t.JournalId).ValueGeneratedOnAdd();
        builder.Property(t => t.DateCreated).HasDefaultValueSql("NOW()");

        Console.WriteLine("JournalEntityTypeConfiguration.Configure Start");
        builder.HasKey(p => p.JournalId)
            .HasName("PK_JournalId");
        Console.WriteLine("JournalId added as key.");

        builder.HasData(new Journal{JournalId=1, JournalTitle="The Fern Diaries", UserId=1, PlantId=1, DateCreated=DateTimeOffset.Now });
        Console.WriteLine("The Fern Diaries");

        builder.HasData(new Journal() {JournalId=2, JournalTitle="Little Monstera", UserId=2, PlantId=1, DateCreated=DateTimeOffset.Now });
        Console.WriteLine("Little Monstera");

        builder.HasData(new Journal() {JournalId=3, JournalTitle="Bingo's Monstera Journal", UserId=1, PlantId=3, DateCreated=DateTimeOffset.Now});
        Console.WriteLine("Bingo's Monstera Journal");

        Console.WriteLine("JournalEntityTypeConfiguration.Configure End");
    }
}