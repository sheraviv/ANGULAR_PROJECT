
Take LOAN

UPDATE `bankacc`.`account` SET `account_loan` = '2000' WHERE (`id` = '1');


Take from Balance

SELECT  account_balance - '1000' FROM bankacc.account;

