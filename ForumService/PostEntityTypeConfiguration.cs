using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class PostEntityTypeConfiguration: IEntityTypeConfiguration<Post>
{
    public void Configure(EntityTypeBuilder<Post> builder)
    {
        Console.WriteLine("PostEntityTypeConfiguration.Configure Start");
        builder.Property(t => t.PostId).ValueGeneratedOnAdd();
        builder.Property(t => t.DateCreated).HasDefaultValueSql("NOW()");
        Console.WriteLine("Added post id generation on add");

        builder.HasKey(t => new {t.UserId, t.ThreadId, t.PostId})
            .HasName("PKComposite_UserThreadPost");
        Console.WriteLine("UserId, ThreadId, and PostId added as composite key.");

        builder.HasData(new Post{UserId=2, ThreadId=1, PostId=1,
            Content="Palms are so tough! Are you keeping it humid? I mist mine everyday.",
            Tag="misting"});
        Console.WriteLine("Saved post with UserId=2 ThreadId=1 with misting advice");

        builder.HasData(new Post{UserId=3, ThreadId=1, PostId=2,
            Content="Also make sure when you water it, let the water filter all the way through the pot.",
            Tag="Palm"});
        Console.WriteLine("Saved post with UserId=3 ThreadId=1 with watering advice");

        builder.HasData(new Post{UserId=2, ThreadId=2, PostId=3,
            Content="I've never heard of this.",
            Tag="Hibiscus"});
        Console.WriteLine("Saved thread with UserId=2 ThreadId=2 with no help");

        builder.HasData(new Post{UserId=3, ThreadId=3, PostId=4,
            Content="You have to keep the soil very moist and very acidic if you want the plant to flower. Good luck!",
            Tag = "Coffee"});
        Console.WriteLine("Saved thread with UserId=3 ThreadId=3 with soil advice");

        Console.WriteLine("PostEntityTypeConfiguration.Configure End");
    }
}