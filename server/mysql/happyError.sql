DROP DATABASE IF EXISTS `happy_error` ;
CREATE DATABASE `happy_error`;
USE `happy_error`;
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ip` varchar(16) NOT NULL COMMENT '访问ip',
  `country` varchar(32) NOT NULL,
  `city` varchar(32) NOT NULL,
  `browser` varchar(16) COMMENT '浏览器',
  `platform` varchar(32) COMMENT '平台',
  `ratio` varchar(32) COMMENT '分辨率',
  `create_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户信息表';

DROP TABLE IF EXISTS `page_info`;
CREATE TABLE `page_info` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL COMMENT '用户id',
  `url` varchar(1024) COMMENT '浏览地址',
  `project` varchar(32) COMMENT '所属项目名',
  `ready_time` int(10) NULL COMMENT '首次可交互时间',
  `onload_time` int(10) NULL COMMENT '网页全部加载完成时间',
  `during_time` int(10) NULL COMMENT '访问持续时间',
  `create_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `page_info_user_id_foreign` (`user_id`),
  CONSTRAINT `page_info_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `USER_INFO` (`id`)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='项目访问量表';

DROP TABLE IF EXISTS `js_error`;
CREATE TABLE `js_error` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL COMMENT '用户id',
  `msg` varchar(255),
  `create_time` timestamp NULL,
  PRIMARY KEY (`id`),
  KEY `js_error_user_id_foreign` (`user_id`),
  CONSTRAINT `js_error_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `USER_INFO` (`id`)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='js错误表';

DROP TABLE IF EXISTS `api_error`;
CREATE TABLE `api_error` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL COMMENT '用户id',
  `request_url` varchar(32) NOT NULL,
  `error_code`  int(12) NOT NULL,
  `msg` varchar(255),
  `create_time` timestamp NULL,
  PRIMARY KEY (`id`),
  KEY `api_error_user_id_foreign` (`user_id`),
  CONSTRAINT `api_error_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `USER_INFO` (`id`)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='api错误表';

DROP TABLE IF EXISTS `resource_load`;
CREATE TABLE `resource_load` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `page_id` int(10) unsigned NOT NULL COMMENT '浏览id',
  `url` varchar(255) NOT NULL,
  `entry_type` varchar(128) NOT NULL,
  `type` varchar(128) NOT NULL,
  `duration` int(10) NULL COMMENT '加载持续时间',
  `create_time` timestamp NULL,
  PRIMARY KEY (`id`),
  KEY `resource_load_page_id_foreign` (`page_id`),
  CONSTRAINT `resource_load_page_id_foreign` FOREIGN KEY (`page_id`) REFERENCES `PAGE_INFO` (`id`)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='资源加载详情表';
