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
                },
                constraints: table =>
                {
                    table.PrimaryKey("PKComposite_TitleId", x => new { x.journalTitle, x.userId });
                });

            migrationBuilder.InsertData(
                table: "journals",
                columns: new[] { "journalTitle", "userId" },
                values: new object[,]
                {
                    { "Plant is looking very healthy today!", 1 },
                    { "Might need to start watering more...", 2 },
                    { "Oh no... it's withering :(", 1 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "journals");
        }
    }
}
