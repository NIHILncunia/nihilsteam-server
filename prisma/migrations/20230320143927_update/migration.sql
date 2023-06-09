/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `user_userId_key` ON `user`(`userId`);

-- CreateIndex
CREATE UNIQUE INDEX `user_email_key` ON `user`(`email`);
