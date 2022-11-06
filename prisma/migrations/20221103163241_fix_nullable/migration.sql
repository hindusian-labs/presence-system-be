/*
  Warnings:

  - Made the column `in` on table `check` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "check" ALTER COLUMN "in" SET NOT NULL;
