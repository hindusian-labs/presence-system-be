-- AlterTable
ALTER TABLE "user" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ,
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ;

-- CreateTable
CREATE TABLE "Check" (
    "uid" TEXT NOT NULL,
    "in" TIMESTAMPTZ,
    "out" BOOLEAN NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Check_uid_date_key" ON "Check"("uid", "date");
