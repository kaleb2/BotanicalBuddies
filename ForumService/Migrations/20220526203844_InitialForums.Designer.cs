﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ForumService.Migrations
{
    [DbContext(typeof(ThreadDbContext))]
    [Migration("20220526203844_InitialForums")]
    partial class InitialForums
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Thread", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("integer")
                        .HasColumnName("userId");

                    b.Property<int>("ThreadId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("threadId");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ThreadId"));

                    b.Property<string>("Body")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("body");

                    b.Property<DateTime>("DateCreated")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp with time zone")
                        .HasColumnName("dateCreated")
                        .HasDefaultValueSql("NOW()");

                    b.Property<string>("Tag")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("tag");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("title");

                    b.HasKey("UserId", "ThreadId")
                        .HasName("PKComposite_UserThread");

                    b.ToTable("threads");

                    b.HasData(
                        new
                        {
                            UserId = 1,
                            ThreadId = 1,
                            Body = "I water it everyday and it still won't love me.",
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Tag = "Palm",
                            Title = "HELP, my palm is dying!"
                        },
                        new
                        {
                            UserId = 1,
                            ThreadId = 2,
                            Body = "Has anybody ever grown a hibiscus plant indoors before?",
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Tag = "Hibiscus",
                            Title = "Indoor hibiscus plant?"
                        },
                        new
                        {
                            UserId = 2,
                            ThreadId = 3,
                            Body = "How do I get my coffee plant to produce beans?",
                            DateCreated = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Tag = "Coffee",
                            Title = "Coffee plant flowering"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
