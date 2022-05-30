using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("plants")]
public class Plant
{
    [Required]
    [Column("plantName")]
    public string PlantName {get; set;} = "Unknown";
    
    [Required]
    [Column("userId")]
    public int UserId {get; set;}

    [Required]
    [Column("speciesName")]
    public string SpeciesName {get; set;} = "Unknown";

    [Column("dateAcquired")]
    public DateTimeOffset DateAcquired {get; set;}

    [Column("lastRepotDate")]
    public DateTimeOffset LastRepotDate {get; set;}

    [Column("lastFertilizeDate")]
    public DateTimeOffset LastFertilizeDate {get; set;}

    
}