using System;
using Microsoft.EntityFrameworkCore.Migrations;

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
                    entryId = table.Column<int>(type: "integer", nullable: false),
                    journalId = table.Column<int>(type: "integer", nullable: false),
                    entryTitle = table.Column<string>(type: "text", nullable: false),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    plantName = table.Column<string>(type: "text", nullable: false),
                    plantId = table.Column<int>(type: "integer", nullable: false),
                    content = table.Column<string>(type: "text", nullable: false),
                    dateCreated = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EntryId", x => x.entryId);
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "journalentries");
        }
    }
}
