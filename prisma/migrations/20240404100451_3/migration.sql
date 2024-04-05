/*
  Warnings:

  - You are about to drop the column `authorID` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `authorID` on the `Book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Author` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Blog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "body" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "Blog_name_fkey" FOREIGN KEY ("name") REFERENCES "Author" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Blog" ("body", "id", "name") SELECT "body", "id", "name" FROM "Blog";
DROP TABLE "Blog";
ALTER TABLE "new_Blog" RENAME TO "Blog";
CREATE TABLE "new_Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "body" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "Book_name_fkey" FOREIGN KEY ("name") REFERENCES "Author" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Book" ("body", "id", "name") SELECT "body", "id", "name" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Author_name_key" ON "Author"("name");
