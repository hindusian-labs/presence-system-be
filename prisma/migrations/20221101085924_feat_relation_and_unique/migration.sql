/*
  Warnings:

  - You are about to drop the column `uid` on the `check` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_uid,date]` on the table `check` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_uid` to the `check` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "check_uid_date_key";

-- AlterTable
ALTER TABLE "check" DROP COLUMN "uid",
ADD COLUMN     "user_uid" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "check_user_uid_date_key" ON "check"("user_uid", "date");

-- AddForeignKey
ALTER TABLE "check" ADD CONSTRAINT "check_user_uid_fkey" FOREIGN KEY ("user_uid") REFERENCES "user"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
