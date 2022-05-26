using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("threads")]
public class Thread
{
    [Required]
    [Column("userId")]
    public int UserId {get; set;}

    // [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("threadId")]
    public int ThreadId {get; set;}

    [Required]
    [Column("title")]
    public string Title {get; set;} = "New Topic";

    [Required]
    [Column("body")]
    public string Body {get; set;} = "This is my question?";

    [Column("tag")]
    public string Tag {get; set;} = "none";

    [Column("dateCreated")]
    public DateTime DateCreated {get; set;}
}