using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("journals")]
public class Journal
{
    [Required]
    [Column("journalId")]
    public int JournalId {get; set;}

    [Required]
    [Column("journalTitle")]
    public string JournalTitle {get; set;} = "Unknown";
    
    [Required]
    [Column("userId")]
    public int UserId {get; set;}

    [Required]
    [Column("plantId")]
    public int PlantId {get; set;}

    [Column("dateCreated")]
    public DateTimeOffset DateCreated {get; set;}
}