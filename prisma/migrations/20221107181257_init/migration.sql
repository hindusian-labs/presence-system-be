-- CreateTable
CREATE TABLE "user" (
    "id" VARCHAR(10) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "check" (
    "user_id" TEXT NOT NULL,
    "in" TIMESTAMPTZ NOT NULL,
    "out" TIMESTAMPTZ,
    "date" TIMESTAMPTZ NOT NULL
);

-- CreateTable
CREATE TABLE "auth" (
    "key" UUID NOT NULL,

    CONSTRAINT "auth_pkey" PRIMARY KEY ("key")
);

-- CreateIndex
CREATE UNIQUE INDEX "check_user_id_date_key" ON "check"("user_id", "date");

-- AddForeignKey
ALTER TABLE "check" ADD CONSTRAINT "check_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
