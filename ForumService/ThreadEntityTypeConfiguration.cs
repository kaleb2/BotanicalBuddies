using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class ThreadEntityTypeConfiguration: IEntityTypeConfiguration<Thread>
{
    public void Configure(EntityTypeBuilder<Thread> builder)
    {
        Console.WriteLine("ThreadEntityTypeConfiguration.Configure Start");
        builder.Property(t => t.ThreadId).ValueGeneratedOnAdd();
        builder.Property(t => t.DateCreated).HasDefaultValueSql("NOW()");
        Console.WriteLine("Added thread id generation on add");

        builder.HasKey(t => new {t.UserId, t.ThreadId})
            .HasName("PKComposite_UserThread");
        Console.WriteLine("UserId and ThreadId added as composite key.");

        builder.HasData(new Thread{UserId=1, ThreadId=1,
            Title="HELP, my palm is dying!", 
            Body="I water it everyday and it still won't love me.",
            Tag="Palm"});
        Console.WriteLine("Saved thread with UserId=1 about a dying palm");

        builder.HasData(new Thread{UserId=1, ThreadId=2,
            Title="Indoor hibiscus plant?", 
            Body="Has anybody ever grown a hibiscus plant indoors before?",
            Tag="Hibiscus"});
        Console.WriteLine("Saved thread with UserId=1 about hibiscus plants");

        builder.HasData(new Thread{UserId=2, ThreadId=3,
            Title="Coffee plant flowering", 
            Body="How do I get my coffee plant to produce beans?",
            Tag = "Coffee"});
        Console.WriteLine("Saved thread with UserId=2 about flowering coffee plants");

        Console.WriteLine("ThreadEntityTypeConfiguration.Configure End");
    }
}