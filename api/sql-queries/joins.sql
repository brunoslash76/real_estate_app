select * from overviews;

alter table houses add others_id int not null;

select * from houses;

select * from houses 
join overviews on overviews.houseId= houses.id
join facts on facts.houseId = houses.id
join others on others.houseId = houses.id
join images on others.houseId = houses.id
join visits on others.houseId = houses.id;

select * from others;

update houses set others_id = 10 where id = 11;
