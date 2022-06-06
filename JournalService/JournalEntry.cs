using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("journalentries")]
public class JournalEntry
{
    [Required]
    [Column("entryId")]
    public int EntryId {get; set;}

    [Required]
    [Column("journalId")]
    public int JournalId {get; set;}

    [Required]
    [Column("entryTitle")]
    public string EntryTitle {get; set;} = "Unknown";
    
    [Required]
    [Column("userId")]
    public int UserId {get; set;}

    [Required]
    [Column("plantId")]
    public int PlantId {get; set;}

    [Required]
    [Column("content")]
    public string Content {get; set;}  = "Unknown";

    [Column("dateCreated")]
    public DateTimeOffset DateCreated {get; set;}
}