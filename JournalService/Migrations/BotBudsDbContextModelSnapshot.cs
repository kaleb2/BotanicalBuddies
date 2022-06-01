﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace JournalService.Migrations
{
    [DbContext(typeof(JournalDbContext))]
    partial class BotBudsDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("JournalEntry", b =>
                {
                    b.Property<int>("EntryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("entryId");

                    b.Property<int>("JournalId")
                        .HasColumnType("integer")
                        .HasColumnName("journalId");

                    b.Property<string>("EntryTitle")
                        .HasColumnType("text")
                        .HasColumnName("entryTitle");

                    b.Property<int>("UserId")
                        .HasColumnType("integer")
                        .HasColumnName("userId");

                    b.Property<string>("PlantName")
                        .HasColumnType("text")
                        .HasColumnName("plantName");

                    b.Property<int>("PlantId")
                        .HasColumnType("integer")
                        .HasColumnName("plantId");

                    b.Property<string>("Content")
                        .HasColumnType("text")
                        .HasColumnName("content");

                    b.Property<DateTimeOffset>("DateCreated")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp with time zone")
                        .HasColumnName("dateCreated")
                        .HasDefaultValueSql("NOW()");

                    b.HasKey("EntryId")
                        .HasName("PK_EntryId");

                    b.ToTable("journalentries");

                    b.HasData(
                        new
                        {
                            EntryId = 1,
                            JournalId = 1,
                            EntryTitle = "Plant is looking very healthy today!",
                            UserId = 1,
                            PlantName = "Monstera", 
                            PlantId = 1, 
                            Content = "Curabitur a dapibus est, in finibus erat. Praesent ac tortor quam. Suspendisse venenatis ante quis augue placerat pulvinar. Pellentesque eu nulla vitae dui tincidunt placerat eget vehicula diam. Nullam ac commodo nisi. Suspendisse potenti. Nulla purus lectus, faucibus non laoreet eget, rhoncus eget sapien. Aenean quam tortor, vestibulum sed odio vitae, ultricies faucibus est. Proin facilisis elit dui, ac suscipit felis fermentum et. Nam vestibulum volutpat pulvinar. Duis et mauris nisi. Donec luctus porta consectetur. Proin vitae dui lectus. Vestibulum euismod tempus est, eget placerat dui mattis vulputate. Vivamus faucibus libero dui, auctor consectetur lectus gravida et.", 
                            DateCreated = DateTimeOffset.Now
                        },
                        new
                        {
                            EntryId = 2,
                            JournalId = 2,
                            EntryTitle = "Might need to start watering more...",
                            UserId = 1,
                            PlantName = "Fern", 
                            PlantId = 2, 
                            Content = "Praesent consequat gravida pretium. Mauris semper mi vel mi ultrices, a dapibus sem interdum. Nunc non nibh pulvinar, semper lectus eu, tempor ipsum. Fusce aliquet viverra magna, ut auctor ante aliquam a. Donec et risus sit amet nisi aliquet tempus sed non velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque accumsan lacinia urna. Suspendisse placerat, purus vel bibendum maximus, orci est faucibus massa, in dictum ex massa sit amet quam. Cras ut magna feugiat, vestibulum odio eget, molestie neque. Pellentesque quam est, sodales vel justo ac, luctus consequat massa. Suspendisse congue iaculis malesuada. Nulla vitae consectetur purus.", 
                            DateCreated = DateTimeOffset.Now
                        },
                        new
                        {
                            EntryId = 3,
                            JournalId = 1,
                            EntryTitle = "Oh no... it's withering :(",
                            UserId = 2,
                            PlantName = "Fern", 
                            PlantId = 2, 
                            Content = "Fusce fringilla pharetra justo, in rutrum quam mattis et. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed faucibus, massa malesuada ultrices pretium, massa urna rhoncus neque, quis lacinia odio est hendrerit justo. Nulla fermentum varius scelerisque. Aenean laoreet dui et risus lobortis, a ornare dui vehicula. Donec diam justo, cursus non imperdiet ut, auctor vel ante. Nam ac rutrum nisl. Vestibulum efficitur tristique finibus. Duis lectus orci, luctus nec sagittis sed, accumsan at purus. Nullam non augue accumsan, placerat est at, commodo sapien. Fusce consequat hendrerit lorem mattis fermentum.", 
                            DateCreated = DateTimeOffset.Now
                        });
                });

            modelBuilder.Entity("Journal", b =>
                {
                    b.Property<int>("JournalId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("journalId");

                    b.Property<string>("JournalTitle")
                        .HasColumnType("text")
                        .HasColumnName("journalTitle");

                    b.Property<int>("UserId")
                        .HasColumnType("integer")
                        .HasColumnName("userId");

                    b.Property<int>("PlantId")
                        .HasColumnType("integer")
                        .HasColumnName("plantId");

                    b.Property<DateTimeOffset>("DateCreated")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp with time zone")
                        .HasColumnName("dateCreated")
                        .HasDefaultValueSql("NOW()");

                    b.HasKey("JournalId")
                        .HasName("PK_JournalId");

                    b.ToTable("journals");

                    b.HasData(
                        new
                        {
                            JournalId = 1, 
                            JournalTitle = "User #1's Plant Journal", 
                            UserId = 1, 
                            PlantId = 1, 
                            DateCreated = DateTimeOffset.Now
                        },
                        new
                        {
                            JournalId = 2, 
                            JournalTitle = "User #2's Plant Journal", 
                            UserId = 2, 
                            PlantId = 2, 
                            DateCreated = DateTimeOffset.Now
                        },
                        new
                        {
                            JournalId = 3, 
                            JournalTitle = "User #1's OTHER Plant Journal", 
                            UserId = 1, 
                            PlantId = 3, 
                            DateCreated = DateTimeOffset.Now
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
