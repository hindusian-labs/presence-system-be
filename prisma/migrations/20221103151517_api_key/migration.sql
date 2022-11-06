/*
  Warnings:

  - You are about to drop the `Key` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Key";

-- CreateTable
CREATE TABLE "auth" (
    "key" UUID NOT NULL,

    CONSTRAINT "auth_pkey" PRIMARY KEY ("key")
);
