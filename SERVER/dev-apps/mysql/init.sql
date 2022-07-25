

CREATE SCHEMA `bankacc` ;


CREATE TABLE `bankacc`.`account` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `account_number` VARCHAR(45) NULL,
  `account_balance` INT NULL,
  `account_loan` INT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `bankacc`.`account` (`account_number`, `account_balance`) VALUES ('8888', '25000');


ALTER TABLE `bankacc`.`account` 
ADD COLUMN `waithDrawal` INT NULL AFTER `account_loan`;
