-- AlterTable
ALTER TABLE "check" ALTER COLUMN "in" SET DATA TYPE TIMESTAMPTZ,
ALTER COLUMN "out" SET DATA TYPE TIMESTAMPTZ,
ALTER COLUMN "date" SET DATA TYPE TIMESTAMPTZ;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP,
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMP;
