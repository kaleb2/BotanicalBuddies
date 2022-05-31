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

        builder.HasData(new Journal{JournalId=1, JournalTitle="User #1's Plant Journal", UserId=1, PlantId=1, DateCreated=DateTimeOffset.Now });
        Console.WriteLine("User #1's Plant Journal");

        builder.HasData(new Journal() {JournalId=2, JournalTitle="User #2's Plant Journal", UserId=2, PlantId=1, DateCreated=DateTimeOffset.Now });
        Console.WriteLine("User #2's Plant Journal");

        builder.HasData(new Journal() {JournalId=3, JournalTitle="User #1's OTHER Plant Journal", UserId=1, PlantId=3, DateCreated=DateTimeOffset.Now});
        Console.WriteLine("User #1's OTHER Plant Journal");

        Console.WriteLine("JournalEntityTypeConfiguration.Configure End");
    }
}