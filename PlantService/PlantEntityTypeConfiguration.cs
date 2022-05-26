using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class PlantEntityTypeConfiguration: IEntityTypeConfiguration<Plant>
{
    public void Configure(EntityTypeBuilder<Plant> builder)
    {
        Console.WriteLine("PlantEntityTypeConfiguration.Configure Start");
        builder.HasKey(p => new {p.PlantName, p.UserId})
            .HasName("PKComposite_NameId");
        Console.WriteLine("PlantName and UserId added as composite key.");

        builder.HasData(new Plant{PlantName="ZZ", SpeciesName="Zanzibar Gem", UserId=1,
            DateAcquired = DateTimeOffset.Now.AddDays(-14), LastRepotDate = DateTimeOffset.Now.AddDays(-7), 
            LastFertilizeDate=DateTimeOffset.Now});
        Console.WriteLine("Added as Zanzibar gem to user 1 name ZZ.");

        builder.HasData(new Plant() {PlantName="Lily", SpeciesName="Peace Lily", UserId=1,
            DateAcquired = DateTimeOffset.Now, LastRepotDate = DateTimeOffset.Now, 
            LastFertilizeDate=DateTimeOffset.Now});
        Console.WriteLine("Added a Peace lily to user 1 named lily");

        builder.HasData(new Plant() {PlantName="Loser", SpeciesName="Peace Lily", UserId=2,
            DateAcquired = DateTimeOffset.Now, LastRepotDate = DateTimeOffset.Now, 
            LastFertilizeDate=DateTimeOffset.Now});
            Console.WriteLine("Added a Peace lily to user 2 named Loser");

        Console.WriteLine("PlantEntityTypeConfiguration.Configure End");
    }
}