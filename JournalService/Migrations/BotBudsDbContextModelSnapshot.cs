﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace JournalService.Migrations
{
    [DbContext(typeof(JournalsDbContext))]
    partial class BotBudsDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Journal", b =>
                {
                    b.Property<string>("JournalTitle")
                        .HasColumnType("text")
                        .HasColumnName("journalTitle");

                    b.Property<int>("UserId")
                        .HasColumnType("integer")
                        .HasColumnName("userId");

                    b.HasKey("JournalTitle", "UserId")
                        .HasName("PKComposite_TitleId");

                    b.ToTable("journals");

                    b.HasData(
                        new
                        {
                            JournalTitle = "Plant is looking very healthy today!",
                            UserId = 1
                        },
                        new
                        {
                            JournalTitle = "Might need to start watering more...",
                            UserId = 1
                        },
                        new
                        {
                            JournalTitle = "Oh no... it's withering :(",
                            UserId = 2
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
