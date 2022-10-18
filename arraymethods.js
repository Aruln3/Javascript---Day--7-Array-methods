/*1.Get all the countries from the Asia continent /region using the Filter function*/

const countries = [
    { name: 'india', continent: 'Asia'},
    { name: 'Nepal', continent: 'Asia'},
    { name: 'srilanka', continent: 'Asia'},
    { name: 'russia', continent: 'Asia'},
    { name: 'pakistan', continent: 'Asia'},
    { name: 'bangladesh', continent: 'Asia'},
    { name: 'japan', continent: 'Asia'},
    { name: 'south korea', continent: 'Asia'},
    { name: 'north korea', continent: 'Asia'},
    { name: 'indonesia', continent: 'Asia'},
    { name: 'china', continent: 'Asia'},
    { name: 'thailand', continent: 'Asia'},
    { name: 'philippines', continent: 'Asia'},
    { name: 'singapore', continent: 'Asia'},
    { name: 'malaysia', continent: 'Asia'},
    { name: 'vietnam', continent: 'Asia'},
    { name: 'hong kong', continent: 'Asia'},
    { name: 'saudi arabia', continent: 'Asia'},
    { name: 'taiwan', continent: 'Asia'},
    { name: 'cambodia', continent: 'Asia'},
    { name: 'myanmar', continent: 'Asia'},
    { name: 'laos', continent: 'Asia'},
    { name: 'iran', continent: 'Asia'},
    { name: 'afghanistan', continent: 'Asia'},
    { name: 'israel', continent: 'Asia'},
    { name: 'qatar', continent: 'Asia'},
    { name: 'mongolia', continent: 'Asia'},
    { name: 'maldives', continent: 'Asia'},
    { name: 'brunei', continent: 'Asia'},
    { name: 'uzbekistan', continent: 'Asia'},
    { name: 'iraq', continent: 'Asia'},
    { name: 'yemen', continent: 'Asia'},
    { name: 'chirstmas island', continent: 'Asia'},
    { name: 'macao', continent: 'Asia'},
    { name: 'armenia', continent: 'Asia'},
    { name: 'lebanon', continent: 'Asia'},
    { name: 'united arab emirates', continent: 'Asia'},
    { name: 'syria', continent: 'Asia'},
    { name: 'jordan', continent: 'Asia'},
    { name: 'kyrgzstan', continent: 'Asia'},
    { name: 'kuwait', continent: 'Asia'},
    { name: 'turkmenist', continent: 'Asia'},
    { name: 'bahrain', continent: 'Asia'},
    { name: 'oman', continent: 'Asia'},
    { name: 'palestine', continent: 'Asia'},
    { name: 'bhutan', continent: 'Asia'},
    { name: 'british indian ocean territory', continent: 'Asia'},
    { name: 'cocos', continent: 'Asia'},
    { name: 'tajikistan', continent: 'Asia'},
    { name: 'timor leste', continent: 'Asia'}

]
--------------------------------------------------------------------------------------------------------------
/* Filter function - */

let asianCountries = countries.filter(country => {
    return country.continent === 'Asia';
})
console.log(asianCountries);

--------------------------------------------------------------------------------------------------------------
/*Output - */

0
: 
{name: 'india', continent: 'Asia'}
1
: 
{name: 'Nepal', continent: 'Asia'}
2
: 
{name: 'srilanka', continent: 'Asia'}
3
: 
{name: 'russia', continent: 'Asia'}
4
: 
{name: 'pakistan', continent: 'Asia'}
5
: 
{name: 'bangladesh', continent: 'Asia'}
6
: 
{name: 'japan', continent: 'Asia'}
7
: 
{name: 'south korea', continent: 'Asia'}
8
: 
{name: 'north korea', continent: 'Asia'}
9
: 
{name: 'indonesia', continent: 'Asia'}
10
: 
{name: 'china', continent: 'Asia'}
11
: 
{name: 'thailand', continent: 'Asia'}
12
: 
{name: 'philippines', continent: 'Asia'}
13
: 
{name: 'singapore', continent: 'Asia'}
14
: 
{name: 'malaysia', continent: 'Asia'}
15
: 
{name: 'vietnam', continent: 'Asia'}
16
: 
{name: 'hong kong', continent: 'Asia'}
17
: 
{name: 'saudi arabia', continent: 'Asia'}
18
: 
{name: 'taiwan', continent: 'Asia'}
19
: 
{name: 'cambodia', continent: 'Asia'}
20
: 
{name: 'myanmar', continent: 'Asia'}
21
: 
{name: 'laos', continent: 'Asia'}
22
: 
{name: 'iran', continent: 'Asia'}
23
: 
{name: 'afghanistan', continent: 'Asia'}
24
: 
{name: 'israel', continent: 'Asia'}
25
: 
{name: 'qatar', continent: 'Asia'}
26
: 
{name: 'mongolia', continent: 'Asia'}
27
: 
{name: 'maldives', continent: 'Asia'}
28
: 
{name: 'brunei', continent: 'Asia'}
29
: 
{name: 'uzbekistan', continent: 'Asia'}
30
: 
{name: 'iraq', continent: 'Asia'}
31
: 
{name: 'yemen', continent: 'Asia'}
32
: 
{name: 'chirstmas island', continent: 'Asia'}
33
: 
{name: 'macao', continent: 'Asia'}
34
: 
{name: 'armenia', continent: 'Asia'}
35
: 
{name: 'lebanon', continent: 'Asia'}
36
: 
{name: 'united arab emirates', continent: 'Asia'}
37
: 
{name: 'syria', continent: 'Asia'}
38
: 
{name: 'jordan', continent: 'Asia'}
39
: 
{name: 'kyrgzstan', continent: 'Asia'}
40
: 
{name: 'kuwait', continent: 'Asia'}
41
: 
{name: 'turkmenist', continent: 'Asia'}
42
: 
{name: 'bahrain', continent: 'Asia'}
43
: 
{name: 'oman', continent: 'Asia'}
44
: 
{name: 'palestine', continent: 'Asia'}
45
: 
{name: 'bhutan', continent: 'Asia'}
46
: 
{name: 'british indian ocean territory', continent: 'Asia'}
47
: 
{name: 'cocos', continent: 'Asia'}
48
: 
{name: 'tajikistan', continent: 'Asia'}
49
: 
{name: 'timor leste', continent: 'Asia'}
length
: 
50
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------





/*2.Get all the countries with a population of less than 2 lakhs using Filter function*/

let cities = [
    {name: 'Latvia', population: 1893000 },
    {name: 'Guinea-Bissau', population: 1625000},
    {name: 'Equatorial Guinea', population: 1558000 },
    {name: 'Bahrain', population: 1472000	 },
    {name: 'Timor-Leste (East Timor)', population: 1369000},
    {name: 'Trinidad and Tobago', population: 1368000},
    {name: 'Estonia', population: 1328000},
    {name: 'Mauritius', population: 1266000},
    {name: 'Eswatini (Swaziland)', population: 1185000},
    {name: 'Djibouti', population: 1016000	},
    {name: 'Comoros', population: 907000},
    {name: 'Fiji', population: 893468},
    {name: 'Cyprus', population: 888000},
    {name: 'Réunion (France)', population: 869000},
    {name: 'Bhutan', population: 756000	},
    {name: 'Guyana', population: 744000},
    {name: 'Solomon Islands', population: 721000},
    {name: 'Macao', population: 683200},
    {name: 'Luxembourg', population: 634730},
    {name: 'Montenegro', population: 621000},
    {name: 'Western Sahara', population: 626000},
    {name: 'Suriname', population: 598000},
    {name: 'Maldives', population: 579000},
    {name: 'Wyoming', population: 578803},
    {name: 'Cape Verde', population: 569500},
    {name: 'Malta', population: 516000},
    {name: 'Brunei', population: 453600},
    {name: 'Belize', population: 432500},
    {name: 'Bahamas', population: 389400},
    {name: 'Guadeloupe (France)', population: 384000},
    {name: 'Iceland', population: 369000},
    {name: 'Martinique', population: 364500},
    {name: 'Vanuatu', population: 300000	},
    {name: 'French Guiana', population: 282000},
    {name: 'French Polynesia', population: 276000},
    {name: 'Barbados',population: 273000  },
    {name: 'Mayotte (France)', population: 256500 },
    {name: 'New Caledonia', population: 271400},
    {name: 'São Tomé and Príncipe', population: 228000},
    {name: 'Samoa', population: 205770	},
    {name: 'Saint Lucia', population: 185000},
    {name: 'Guam (USA)', population: 168800},
    {name: 'Curaçao (Netherlands)', population: 151000},
    {name: 'Kiribati', population: 119438},
    {name: 'Grenada', population: 113000},
    {name: 'Aruba (Netherlands)', population: 111000},
    {name: 'Saint Vincent and the Grenadines', population: 110784},
    {name: 'U.S. Virgin Islands', population: 106000},
    {name: 'Federated States of Micronesia', population: 105000},
    {name: 'Tonga', population: 100200},
    {name: 'Antigua and Barbuda', population:99300 },
    {name: 'Seychelles', population: 97600},
    {name: 'Andorra', population: 79535},
    {name: 'Dominica', population: 72000},
    {name: 'Cayman Islands (UK)	', population:69656 },
    {name: 'Bermuda (UK)', population: 63700},
    {name: 'Greenland', population:56420 },
    {name: 'Marshall Islands', population:54516 },
    {name: 'Saint Kitts and Nevis', population: 54000},
    {name: 'Faroe IslandsDenmark', population: 53664},
    {name: 'Northern Mariana Islands', population: 51660	},
    {name: 'American Samoa', population: 46366},
    {name: 'Turks and Caicos Islands', population: 44540},
    {name: 'Sint Maarten', population: 41500},
    {name: 'Liechtenstein', population: 39151},
    {name: 'Monaco', population: 38350},
    {name: 'San Marino', population: 33700},
    {name: 'Saint Martin', population: 32489},
    {name: 'British Virgin Islands', population: 31000},
    {name: 'Caribbean Netherlands', population: 25987},
    {name: 'Palau', population: 17957},
    {name: 'Anguilla ', population: 15100},
    {name: 'Nauru', population: 11832},
    {name: 'Tuvalu', population: 10679},
    {name: 'Montserrat', population:4626 },
    {name: 'Vatican City ', population: 800},
];

--------------------------------------------------------------------------------------------------------------
/*Filter function - */

let lowCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population < 200000) {
        lowCities.push(cities[i]);
    }
}
console.log(lowCities);

--------------------------------------------------------------------------------------------------------------
/*Output - */

0
: 
{name: 'Saint Lucia', population: 185000}
1
: 
{name: 'Guam (USA)', population: 168800}
2
: 
{name: 'Curaçao (Netherlands)', population: 151000}
3
: 
{name: 'Kiribati', population: 119438}
4
: 
{name: 'Grenada', population: 113000}
5
: 
{name: 'Aruba (Netherlands)', population: 111000}
6
: 
{name: 'Saint Vincent and the Grenadines', population: 110784}
7
: 
{name: 'U.S. Virgin Islands', population: 106000}
8
: 
{name: 'Federated States of Micronesia', population: 105000}
9
: 
{name: 'Tonga', population: 100200}
10
: 
{name: 'Antigua and Barbuda', population: 99300}
11
: 
{name: 'Seychelles', population: 97600}
12
: 
{name: 'Andorra', population: 79535}
13
: 
{name: 'Dominica', population: 72000}
14
: 
{name: 'Cayman Islands (UK)\t', population: 69656}
15
: 
{name: 'Bermuda (UK)', population: 63700}
16
: 
{name: 'Greenland', population: 56420}
17
: 
{name: 'Marshall Islands', population: 54516}
18
: 
{name: 'Saint Kitts and Nevis', population: 54000}
19
: 
{name: 'Faroe IslandsDenmark', population: 53664}
20
: 
{name: 'Northern Mariana Islands', population: 51660}
21
: 
{name: 'American Samoa', population: 46366}
22
: 
{name: 'Turks and Caicos Islands', population: 44540}
23
: 
{name: 'Sint Maarten', population: 41500}
24
: 
{name: 'Liechtenstein', population: 39151}
25
: 
{name: 'Monaco', population: 38350}
26
: 
{name: 'San Marino', population: 33700}
27
: 
{name: 'Saint Martin', population: 32489}
28
: 
{name: 'British Virgin Islands', population: 31000}
29
: 
{name: 'Caribbean Netherlands', population: 25987}
30
: 
{name: 'Palau', population: 17957}
31
: 
{name: 'Anguilla ', population: 15100}
32
: 
{name: 'Nauru', population: 11832}
33
: 
{name: 'Tuvalu', population: 10679}
34
: 
{name: 'Montserrat', population: 4626}
35
: 
{name: 'Vatican City ', population: 800}
length
: 
36
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------





/*3.Print the following details name, capital, flag using forEach function*/

var country = [
    {name: 'India', capital: 'Delhi', flag: 'https://www.countryflags.io/in/flat/64.png'},
    {name: 'USA', capital: 'Washington DC', flag: 'https://www.countryflags.io/us/flat/64.png'},
    {name: 'China', capital: 'Beijing', flag: 'https://www.countryflags.io/cn/flat/64.png'}
];
var printDetails = function(obj) {
    console.log('Name : ', obj['name']);
    console.log('Capital : ', obj['capital']);
    console.log('Flag : ', obj['flag']);   
};
country.forEach(printDetails);

--------------------------------------------------------------------------------------------------------------
/*Output - */

Name :  India
VM1368:9 Capital :  Delhi
VM1368:10 Flag :  https://www.countryflags.io/in/flat/64.png
VM1368:8 Name :  USA
VM1368:9 Capital :  Washington DC
VM1368:10 Flag :  https://www.countryflags.io/us/flat/64.png
VM1368:8 Name :  China
VM1368:9 Capital :  Beijing
VM1368:10 Flag :  https://www.countryflags.io/cn/flat/64.png
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------





/*4.Print the total population of countries using reduce function*/

const totalPopulation = (acc, curr) => acc + curr.population;
const countries = [
  { name: 'China', population: 1347350000 },
  { name: 'India', population: 1251690000 },
  { name: 'United States', population: 313912000 },
  { name: 'Indonesia', population: 237641326 }
];
console.log(countries.reduce(totalPopulation, 0));

--------------------------------------------------------------------------------------------------------------
/*Output - */

3150593326
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------





/*4.Print the country which uses US Dollars as currency*/

const countries = [
    { name: 'Japan', currency: 'yen' },
    { name: 'USA', currency: 'dollar' },
    { name: 'India', currency: 'rupee' },
    { name: 'France', currency: 'euro' }
  ];
  const usa = countries.find(country => country.currency === 'dollar');
  console.log(usa);
--------------------------------------------------------------------------------------------------------------
/*Output - */

{name: 'USA', currency: 'dollar'}
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
