using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace JournalService.Migrations
{
    public partial class InitialJournal : Migration
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
                    { 1, 1, "Plant is looking very healthy today!", 1, "Monstera", 1, "Curabitur a dapibus est, in finibus erat. Praesent ac tortor quam. Suspendisse venenatis ante quis augue placerat pulvinar. Pellentesque eu nulla vitae dui tincidunt placerat eget vehicula diam. Nullam ac commodo nisi. Suspendisse potenti. Nulla purus lectus, faucibus non laoreet eget, rhoncus eget sapien. Aenean quam tortor, vestibulum sed odio vitae, ultricies faucibus est. Proin facilisis elit dui, ac suscipit felis fermentum et. Nam vestibulum volutpat pulvinar. Duis et mauris nisi. Donec luctus porta consectetur. Proin vitae dui lectus. Vestibulum euismod tempus est, eget placerat dui mattis vulputate. Vivamus faucibus libero dui, auctor consectetur lectus gravida et.", DateTimeOffset.Now },
                    { 2, 2, "Might need to start watering more...", 2, "Fern", 2, "Praesent consequat gravida pretium. Mauris semper mi vel mi ultrices, a dapibus sem interdum. Nunc non nibh pulvinar, semper lectus eu, tempor ipsum. Fusce aliquet viverra magna, ut auctor ante aliquam a. Donec et risus sit amet nisi aliquet tempus sed non velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque accumsan lacinia urna. Suspendisse placerat, purus vel bibendum maximus, orci est faucibus massa, in dictum ex massa sit amet quam. Cras ut magna feugiat, vestibulum odio eget, molestie neque. Pellentesque quam est, sodales vel justo ac, luctus consequat massa. Suspendisse congue iaculis malesuada. Nulla vitae consectetur purus.", DateTimeOffset.Now },
                    { 3, 1, "Oh no... it's withering :(", 1, "Fern", 2, "Fusce fringilla pharetra justo, in rutrum quam mattis et. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed faucibus, massa malesuada ultrices pretium, massa urna rhoncus neque, quis lacinia odio est hendrerit justo. Nulla fermentum varius scelerisque. Aenean laoreet dui et risus lobortis, a ornare dui vehicula. Donec diam justo, cursus non imperdiet ut, auctor vel ante. Nam ac rutrum nisl. Vestibulum efficitur tristique finibus. Duis lectus orci, luctus nec sagittis sed, accumsan at purus. Nullam non augue accumsan, placerat est at, commodo sapien. Fusce consequat hendrerit lorem mattis fermentum.", DateTimeOffset.Now }
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
