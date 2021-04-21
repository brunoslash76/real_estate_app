-- Overview
/** 
	House IDs
    2 -> 11
*/

desc overviews;
select * from overviews;

insert into overviews (
	houseId,
	price, 
	beds, 
	baths, 
	neighborhood, 
	address, 
	city,
	zipcode,
	available,
    createdAt,
    updatedAt
) values
(
	2,
	"100000.00",
	5,
	4,
	"Kendall",
	"1234 SW 11th ave",
	"Miami",
	12345,
	1,
    now(),
    now()
),
(
3,
 "120000.00",
	2,
	3,
	"Sunrise",
	"1234 SW 11th ave",
	"Plantation",
	34544,
	0,
    now(),
    now()
),
(
4,
	"260000.00",	
	4,
	6,
	"West Hollywood",
	"1234 SW 11th ave",
	"Pasadena",
	66333,
	0,
    now(),
    now()
 ),
(
5,
 "265000.00",
 3,
 2,
 "Malibu",
 "1234 SW 11th ave",
 "Malibu",
 66322,
 1,
 now(),
    now()
),
(
6,
"365000.00",
3,
4,
"Malibu Beach",
"1234 SW 11th ave",
"Malibu",
66222,
1,
now(),
    now()
),
(
7,
"380000.00",
4,
3,
"Highline",
"1234 SW 11th ave",
"Manhattan",
11223,
1,
now(),
    now()
),
(
8,
"780000.00",
4,
4,
"Uptown",
"1234 SW 11th ave",
"Manhattan",
11211,
1,
now(),
    now()
),
(
9,
"1080000.00",
3,
3,
"Bay Area",
"1234 SW 11th ave",
"San Franscisco",
56566,
1,
now(),
    now()
),
(
10,
"1180000.00",
4,
5,
"Bay Area",
"1234 SW 11th ave",
"San Franscisco",
56566,
1,
now(),
    now()
),
(
11,
"780000.00",
4,
4,
"Uptown",
"1234 SW 11th ave",
"Manhattan",
11211,
1,
now(),
    now()
);
