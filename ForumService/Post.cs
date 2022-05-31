using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("posts")]
public class Post
{
    [Required]
    [Column("userId")]
    public int UserId {get; set;}

    [Required]
    [Column("threadId")]
    public int ThreadId {get; set;}

    [Column("postId")]
    public int PostId {get; set;}

    [Required]
    [Column("content")]
    public string Content {get; set;} = "This is my content";

    [Column("tag")]
    public string Tag {get; set;} = "none";

    [Column("dateCreated")]
    public DateTime DateCreated {get; set;}
}