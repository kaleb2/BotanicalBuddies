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
                            Content = "What's everyone's thoughts?", 
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
                            Content = "What's everyone's thoughts?", 
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
                            Content = "What's everyone's thoughts?", 
                            DateCreated = DateTimeOffset.Now
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
