/*
  Warnings:

  - You are about to drop the `Check` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Check";

-- CreateTable
CREATE TABLE "check" (
    "uid" TEXT NOT NULL,
    "in" TIMESTAMPTZ,
    "out" TIMESTAMPTZ,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "check_uid_date_key" ON "check"("uid", "date");
