create database realestate;
use realestate;
show tables;
select * from houses;
desc houses;

insert into houses (homeImage, createdAt, updatedAt) values
	('./images/property-1.jpg', now(), now()),
    ('./images/property-2.jpg', now(), now()),
    ('./images/property-3.jpg', now(), now()),
    ('./images/property-4.jpg', now(), now()),
    ('./images/property-5.jpg', now(), now()),
    ('./images/property-6.jpg', now(), now()),
    ('./images/property-7.jpg', now(), now()),
    ('./images/property-8.jpg', now(), now()),
    ('./images/property-9.jpg', now(), now()),
    ('./images/property-10.jpg', now(), now());


