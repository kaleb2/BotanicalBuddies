using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ForumService.Migrations
{
    public partial class InitialForums : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "threads",
                columns: table => new
                {
                    userId = table.Column<int>(type: "integer", nullable: false),
                    threadId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    title = table.Column<string>(type: "text", nullable: false),
                    body = table.Column<string>(type: "text", nullable: false),
                    tag = table.Column<string>(type: "text", nullable: false),
                    dateCreated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false, defaultValueSql: "NOW()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PKComposite_UserThread", x => new { x.userId, x.threadId });
                });

            migrationBuilder.InsertData(
                table: "threads",
                columns: new[] { "threadId", "userId", "body", "tag", "title" },
                values: new object[,]
                {
                    { 1, 1, "I water it everyday and it still won't love me.", "Palm", "HELP, my palm is dying!" },
                    { 2, 1, "Has anybody ever grown a hibiscus plant indoors before?", "Hibiscus", "Indoor hibiscus plant?" },
                    { 3, 2, "How do I get my coffee plant to produce beans?", "Coffee", "Coffee plant flowering" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "threads");
        }
    }
}
