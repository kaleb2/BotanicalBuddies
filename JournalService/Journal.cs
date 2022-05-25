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
}