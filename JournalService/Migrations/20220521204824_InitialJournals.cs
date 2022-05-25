using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JournalService.Migrations
{
    public partial class InitialJournals : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "journals",
                columns: table => new
                {
                    journalTitle = table.Column<string>(type: "text", nullable: false),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    plantName = table.Column<string>(type: "text", nullable: false),
                    plantId = table.Column<int>(type: "integer", nullable: false),
                    content = table.Column<string>(type: "text", nullable: false),
                    dateCreated = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PKComposite_PlantId", x => new { x.plantId, x.userId });
                });

            migrationBuilder.InsertData(
                table: "journals",
                columns: new[] { "journalTitle", "userId", "plantName", "plantId", "content", "dateCreated" },
                values: new object[,]
                {
                    { "Plant is looking very healthy today!", 1, "Monstera", 1, "What's everyone's thoughts?", DateTimeOffset.Now },
                    { "Might need to start watering more...", 2, "Fern", 2, "What's everyone's thoughts?", DateTimeOffset.Now },
                    { "Oh no... it's withering :(", 1, "Fern", 2, "What's everyone's thoughts?", DateTimeOffset.Now }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "journals");
        }
    }
}
