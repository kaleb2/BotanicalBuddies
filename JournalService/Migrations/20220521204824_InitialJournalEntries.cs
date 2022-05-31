using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace JournalService.Migrations
{
    public partial class InitialJournalEntries : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "journalentries",
                columns: table => new
                {
                    entryId = table.Column<int>(type: "integer", nullable: false).Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    journalId = table.Column<int>(type: "integer", nullable: false),
                    entryTitle = table.Column<string>(type: "text", nullable: false),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    plantName = table.Column<string>(type: "text", nullable: false),
                    plantId = table.Column<int>(type: "integer", nullable: false),
                    content = table.Column<string>(type: "text", nullable: false),
                    dateCreated = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "NOW()"),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EntryId", x => x.entryId);
                });

            migrationBuilder.CreateTable(
                name: "journals",
                columns: table => new
                {
                    journalId = table.Column<int>(type: "integer", nullable: false).Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    journalTitle = table.Column<string>(type: "text", nullable: false),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    plantId = table.Column<int>(type: "integer", nullable: false),
                    dateCreated = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false, defaultValueSql: "NOW()"),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JournalId", x => x.journalId );
                });

            migrationBuilder.InsertData(
                table: "journalentries",
                columns: new[] { "entryId", "journalId", "entryTitle", "userId", "plantName", "plantId", "content", "dateCreated" },
                values: new object[,]
                {
                    { 1, 1, "Plant is looking very healthy today!", 1, "Monstera", 1, "What's everyone's thoughts?", DateTimeOffset.Now },
                    { 2, 2, "Might need to start watering more...", 2, "Fern", 2, "What's everyone's thoughts?", DateTimeOffset.Now },
                    { 3, 1, "Oh no... it's withering :(", 1, "Fern", 2, "What's everyone's thoughts?", DateTimeOffset.Now }
                });

            migrationBuilder.InsertData(
                table: "journals",
                columns: new[] { "journalId", "journalTitle", "userId", "plantId", "dateCreated" },
                values: new object[,]
                {
                    { 1, "User #1's Plant Journal", 1, 1, DateTimeOffset.Now },
                    { 2, "User #2's Plant Journal", 2, 1,DateTimeOffset.Now },
                    { 3,  "User #1's OTHER Plant Journal", 1, 3, DateTimeOffset.Now }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "journalentries");

            migrationBuilder.DropTable(
                name: "journals");
        }
    }
}
