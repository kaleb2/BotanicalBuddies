using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("journals")]
public class Journal
{
    [Required]
    [Column("journalTitle")]
    public string JournalTitle {get; set;} = "Unknown";
    
    [Required]
    [Column("userId")]
    public int UserId {get; set;}

    [Required]
    [Column("plantName")]
    public string PlantName {get; set;}

    [Required]
    [Column("plantId")]
    public int PlantId {get; set;}

    [Required]
    [Column("content")]
    public string Content {get; set;}

    [Column("dateCreated")]
    public DateTimeOffset DateCreated {get; set;}
}