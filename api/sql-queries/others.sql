-- others
desc others;

select * from others;

alter table others modify anualTax decimal(10, 2) not null;

delete from others where id < 100;

insert into others(
	houseId,
	anualTax,
	hasGarage,
	pool,
	virtualTourLink,
	parcelNumber,
	lastSold,
    createdAt,
    updatedAt
) values 
(
	2, 
    5000.45,
	1,
	0,
	"https://vt.test",
	12345678,
	"12-12-2019",
    now(),
    now()
),
(
	3, 
    5000.45,
	1,
	0,
	"https://vt.test",
	12345678,
	"12-11-2019",
    now(),
    now()
), 
(
	4,
    5000.45,
	1,
	0,
	"https://vt.test",
	12345678,
	"12-10-2019",
    now(),
    now()
),
(
	5,
	5000.45,
	1,
	0,
	"https://vt.test",
	12345678,
	"10-10-2019",
    now(),
    now()
),
(
	6,
	5000.45,
	1,
	0,
	"https://vt.test",
	12345678,
	"10-9-2019",
    now(),
    now()
),
(
	7,
	5000.45,
	1,
	0,
	"https://vt.test",
	12345678,
	"8-9-2019",
    now(),
    now()
),
(
	8, 
    5000.45,
	1,
	0,
	"https://vt.test",
	12345678,
	"1-9-2019",
    now(),
    now()
),
(
	9, 
    5000.45,
	1,
	0,
	"https://vt.test",
	12345678,
	"1-8-2019",
    now(),
    now()
),
(
	10, 
    5000.45,
	1,
	0,
	"https://vt.test",
	12345678,
	"1-1-2019",
    now(),
    now()
),
(
	11,
	5000.45,
	1,
	0,
	"https://vt.test",
	12345678,
	"2-1-2019",
    now(),
    now()
)
    
    
    
    
    
    
    
    
    