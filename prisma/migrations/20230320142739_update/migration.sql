-- CreateTable
CREATE TABLE `article` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `content` VARCHAR(1000) NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL,

    INDEX `article_user_id_fk`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `article_comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `articleId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `comment` VARCHAR(1000) NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL,

    INDEX `articleComment_article_id_fk`(`articleId`),
    INDEX `articleComment_user_id_fk`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `article_image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `articleId` INTEGER NOT NULL,
    `imagePath` VARCHAR(1000) NOT NULL,
    `imageExt` VARCHAR(10) NOT NULL,
    `imageSize` MEDIUMTEXT NOT NULL,

    INDEX `articleimage_article_id_fk`(`articleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `gameId` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,

    INDEX `cart_game_id_fk`(`gameId`),
    INDEX `cart_user_id_fk`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `game` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `thumbnail` VARCHAR(1000) NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `developer` VARCHAR(100) NOT NULL,
    `publisher` VARCHAR(100) NOT NULL,
    `genre` VARCHAR(100) NOT NULL,
    `releaseAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `score` FLOAT NULL DEFAULT 0,
    `rating` VARCHAR(100) NOT NULL,
    `price` INTEGER NOT NULL,
    `discount` INTEGER NULL DEFAULT 0,
    `description` VARCHAR(1000) NOT NULL,
    `language` VARCHAR(100) NOT NULL,
    `system_requirements` VARCHAR(1000) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `game_comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `gameId` INTEGER NOT NULL,
    `comment` VARCHAR(2000) NOT NULL,
    `score` FLOAT NULL DEFAULT 0,
    `up` INTEGER NOT NULL DEFAULT 0,
    `down` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL,

    INDEX `game_comment_game_id_fk`(`gameId`),
    INDEX `game_comment_user_id_fk`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderId` INTEGER NOT NULL,
    `gameId` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `status` VARCHAR(100) NOT NULL DEFAULT '결제완료',

    INDEX `order_detail_game_id_fk`(`gameId`),
    INDEX `order_detail_user_order_id_fk`(`orderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `point` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `increase` INTEGER NULL DEFAULT 0,
    `decrease` INTEGER NULL DEFAULT 0,
    `message` VARCHAR(100) NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `point_user_id_fk`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `refund` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `orderId` INTEGER NOT NULL,
    `gameId` INTEGER NOT NULL,
    `title` VARCHAR(200) NOT NULL,
    `content` VARCHAR(1000) NOT NULL,
    `status` VARCHAR(100) NOT NULL DEFAULT '환불요청',
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL,

    INDEX `refund_game_id_fk`(`gameId`),
    INDEX `refund_user_id_fk`(`userId`),
    INDEX `refund_user_order_id_fk`(`orderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(30) NOT NULL,
    `userName` VARCHAR(30) NOT NULL,
    `role` VARCHAR(30) NOT NULL DEFAULT 'user',
    `email` VARCHAR(30) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `birthday` DATETIME(0) NOT NULL,
    `userPoint` INTEGER NOT NULL DEFAULT 0,
    `status` VARCHAR(20) NOT NULL DEFAULT '활동계정',
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_auth` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `hashedPassword` VARCHAR(200) NOT NULL,

    UNIQUE INDEX `user_auth_userId_key`(`userId`),
    INDEX `user_auth_user_id_fk`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `totalPrice` INTEGER NOT NULL,
    `usePoint` INTEGER NULL DEFAULT 0,
    `status` VARCHAR(100) NOT NULL DEFAULT '결제완료',
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL,

    INDEX `user_order_user_id_fk`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_token` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `hashedRefreshToken` VARCHAR(1000) NOT NULL,

    UNIQUE INDEX `user_token_userId_key`(`userId`),
    INDEX `userToken_user_id_fk`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `withdraw` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `text` VARCHAR(400) NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `withdraw_userId_key`(`userId`),
    INDEX `withdraw_user_id_fk`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `article_comment` ADD CONSTRAINT `articleComment_article_id_fk` FOREIGN KEY (`articleId`) REFERENCES `article`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `article_comment` ADD CONSTRAINT `articleComment_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `article_image` ADD CONSTRAINT `articleimage_article_id_fk` FOREIGN KEY (`articleId`) REFERENCES `article`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_game_id_fk` FOREIGN KEY (`gameId`) REFERENCES `game`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `game_comment` ADD CONSTRAINT `game_comment_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `game_comment` ADD CONSTRAINT `game_comment_game_id_fk` FOREIGN KEY (`gameId`) REFERENCES `game`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_detail` ADD CONSTRAINT `order_detail_user_order_id_fk` FOREIGN KEY (`orderId`) REFERENCES `user_order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order_detail` ADD CONSTRAINT `order_detail_game_id_fk` FOREIGN KEY (`gameId`) REFERENCES `game`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `point` ADD CONSTRAINT `point_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `refund` ADD CONSTRAINT `refund_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `refund` ADD CONSTRAINT `refund_user_order_id_fk` FOREIGN KEY (`orderId`) REFERENCES `user_order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `refund` ADD CONSTRAINT `refund_game_id_fk` FOREIGN KEY (`gameId`) REFERENCES `game`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_auth` ADD CONSTRAINT `user_auth_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_order` ADD CONSTRAINT `user_order_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_token` ADD CONSTRAINT `userToken_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `withdraw` ADD CONSTRAINT `withdraw_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
