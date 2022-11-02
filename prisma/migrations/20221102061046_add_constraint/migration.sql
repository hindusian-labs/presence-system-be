-- DropForeignKey
ALTER TABLE "check" DROP CONSTRAINT "check_user_uid_fkey";

-- AddForeignKey
ALTER TABLE "check" ADD CONSTRAINT "check_user_uid_fkey" FOREIGN KEY ("user_uid") REFERENCES "user"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
