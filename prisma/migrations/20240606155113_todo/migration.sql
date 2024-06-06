/*
  Warnings:

  - You are about to drop the `Todolist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Todolist";

-- CreateTable
CREATE TABLE "todo" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "completedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);
