using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PlantService.Migrations
{
    public partial class InitialPlants : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "plants",
                columns: table => new
                {
                    plantName = table.Column<string>(type: "text", nullable: false),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    speciesName = table.Column<string>(type: "text", nullable: false),
                    dateAcquired = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    lastRepotDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    lastFertilizeDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PKComposite_NameId", x => new { x.plantName, x.userId });
                });

            migrationBuilder.InsertData(
                table: "plants",
                columns: new[] { "plantName", "userId", "dateAcquired", "lastFertilizeDate", "lastRepotDate", "speciesName" },
                values: new object[,]
                {
                    { "Lily", 1, new DateTimeOffset(new DateTime(2022, 5, 21, 13, 48, 24, 88, DateTimeKind.Unspecified).AddTicks(3454), new TimeSpan(0, -7, 0, 0, 0)), new DateTimeOffset(new DateTime(2022, 5, 21, 13, 48, 24, 88, DateTimeKind.Unspecified).AddTicks(3469), new TimeSpan(0, -7, 0, 0, 0)), new DateTimeOffset(new DateTime(2022, 5, 21, 13, 48, 24, 88, DateTimeKind.Unspecified).AddTicks(3467), new TimeSpan(0, -7, 0, 0, 0)), "Peace Lily" },
                    { "Loser", 2, new DateTimeOffset(new DateTime(2022, 5, 21, 13, 48, 24, 88, DateTimeKind.Unspecified).AddTicks(4457), new TimeSpan(0, -7, 0, 0, 0)), new DateTimeOffset(new DateTime(2022, 5, 21, 13, 48, 24, 88, DateTimeKind.Unspecified).AddTicks(4472), new TimeSpan(0, -7, 0, 0, 0)), new DateTimeOffset(new DateTime(2022, 5, 21, 13, 48, 24, 88, DateTimeKind.Unspecified).AddTicks(4470), new TimeSpan(0, -7, 0, 0, 0)), "Peace Lily" },
                    { "ZZ", 1, new DateTimeOffset(new DateTime(2022, 5, 7, 13, 48, 24, 88, DateTimeKind.Unspecified).AddTicks(2355), new TimeSpan(0, -7, 0, 0, 0)), new DateTimeOffset(new DateTime(2022, 5, 21, 13, 48, 24, 88, DateTimeKind.Unspecified).AddTicks(2395), new TimeSpan(0, -7, 0, 0, 0)), new DateTimeOffset(new DateTime(2022, 5, 14, 13, 48, 24, 88, DateTimeKind.Unspecified).AddTicks(2393), new TimeSpan(0, -7, 0, 0, 0)), "Zanzibar Gem" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "plants");
        }
    }
}
