let sankey1 = [["Amsterdam", "AMS", 55],
["Berlin", "TXL", 36],
["London", "LHR", 72],
["London", "LGW", 20],
["AMS", "British Airways", 10],
["AMS", "KLM", 30],
["AMS", "Air France", 5],
["AMS", "Lufthansa", 10],
["TXL", "British Airways", 6],
["TXL", "Lufthansa", 30],
["LHR", "British Airways", 50],
["LHR", "KLM", 10],
["LHR", "Air France", 5],
["LHR", "Lufthansa", 7],
["LGW", "British Airways", 20],
["British Airways", "Airbus", 14],
["British Airways", "Boeing", 13],
["KLM", "Airbus", 3],
["KLM", "Boeing", 10],
["Air France", "Airbus", 13],
["Air France", "Boeing", 7],
["Lufthansa", "Airbus", 25],
["Lufthansa", "Boeing", 3]];

let bubble1 = [
    {
        value: 10,
        catA: "Male",
        catB: "0-20"
    },
    {
        value: 20,
        catA: "Male",
        catB: "20-40"
    },
    {
        value: 5,
        catA: "Male",
        catB: "40-60"
    },
    {
        value: 25,
        catA: "Male",
        catB: "60-80"
    },
    {
        value: 25,
        catA: "Male",
        catB: "80-100"
    },
    {
        value: 5,
        catA: "Female",
        catB: "0-20"
    },
    {
        value: 10,
        catA: "Female",
        catB: "20-40"
    },
    {
        value: 13,
        catA: "Female",
        catB: "40-60"
    },
    {
        value: 15,
        catA: "Female",
        catB: "60-80"
    },
    {
        value: 24,
        catA: "Female",
        catB: "80-100"
    },
    {
        value: 14,
        catA: "Unknown",
        catB: "0-20"
    },
    {
        value: 17,
        catA: "Unknown",
        catB: "20-40"
    },
    {
        value: 23,
        catA: "Unknown",
        catB: "40-60"
    },
    {
        value: 3,
        catA: "Unknown",
        catB: "60-80"
    },
    {
        value: 4,
        catA: "Unknown",
        catB: "80-100"
    }
];

let forceDirected1 = {
    "nodes": [
        { "name": "TV", "class": "ProductType" },
        { "name": "Smartphone", "class": "ProductType" },
        { "name": "Sony TV", "class": "Product" },
        { "name": "iPhone", "class": "Product" },
        { "name": "Purchase_1", "class": "Purchase" },
        { "name": "Purchase_2", "class": "Purchase" },
        { "name": "Purchase_3", "class": "Purchase" },
        { "name": "Purchase_4", "class": "Purchase" },
        { "name": "Purchase_5", "class": "Purchase" },
        { "name": "Purchase_6", "class": "Purchase" },
        { "name": "Purchase_7", "class": "Purchase" },
        { "name": "Transaction_1", "class": "Transaction" },
        { "name": "Transaction_2", "class": "Transaction" },
        { "name": "Transaction_3", "class": "Transaction" },
        { "name": "Transaction_4", "class": "Transaction" },
        { "name": "Transaction_5", "class": "Transaction" },
        { "name": "Transaction_6", "class": "Transaction" },
        { "name": "Transaction_7", "class": "Transaction" },
        { "name": "Transaction_8", "class": "Transaction" },
        { "name": "Transaction_9", "class": "Transaction" },
        { "name": "Transaction_10", "class": "Transaction" },
        { "name": "Transaction_11", "class": "Transaction" },
        { "name": "a", "class": "Person" },
        { "name": "b", "class": "Person" },
        { "name": "c", "class": "Person" },
        { "name": "d", "class": "Person" },
        { "name": "e", "class": "Person" },
        { "name": "0-50", "class": "AgeGroup" },
        { "name": "50-100", "class": "AgeGroup" },
        { "name": "Amsterdam", "class": "City" },
        { "name": "Rotterdam", "class": "City" },
        { "name": "Albert Heijn", "class": "Company" },
        { "name": "Netflix", "class": "Company" },
        { "name": "Mediamarkt", "class": "Company" }
    ],
    "links": [
        { "source": "Sony TV", "target": "TV" },
        { "source": "iPhone", "target": "Smartphone" },
        { "source": "Purchase_1", "target": "Sony TV" },
        { "source": "Purchase_2", "target": "Sony TV" },
        { "source": "Purchase_3", "target": "Sony TV" },
        { "source": "Purchase_4", "target": "Sony TV" },
        { "source": "Purchase_5", "target": "iPhone" },
        { "source": "Purchase_6", "target": "iPhone" },
        { "source": "Purchase_7", "target": "iPhone" },
        { "source": "Transaction_1", "target": "Purchase_1" },
        { "source": "Transaction_2", "target": "Purchase_2" },
        { "source": "Transaction_3", "target": "Purchase_3" },
        { "source": "Transaction_4", "target": "Purchase_4" },
        { "source": "Transaction_5", "target": "Purchase_5" },
        { "source": "Transaction_6", "target": "Purchase_6" },
        { "source": "Transaction_7", "target": "Purchase_7" },
        { "source": "Transaction_1", "target": "b" },
        { "source": "Transaction_2", "target": "c" },
        { "source": "Transaction_3", "target": "d" },
        { "source": "Transaction_1", "target": "Mediamarkt" },
        { "source": "Transaction_2", "target": "Mediamarkt" },
        { "source": "Transaction_3", "target": "Mediamarkt" },
        { "source": "Transaction_4", "target": "e" },
        { "source": "Transaction_4", "target": "Mediamarkt" },
        { "source": "Transaction_5", "target": "a" },
        { "source": "Transaction_5", "target": "Mediamarkt" },
        { "source": "Transaction_6", "target": "c" },
        { "source": "Transaction_6", "target": "Mediamarkt" },
        { "source": "Transaction_7", "target": "d" },
        { "source": "Transaction_7", "target": "Mediamarkt" },
        { "source": "Transaction_8", "target": "b" },
        { "source": "Transaction_8", "target": "Netflix" },
        { "source": "Transaction_9", "target": "c" },
        { "source": "Transaction_9", "target": "Netflix" },
        { "source": "Transaction_10", "target": "d" },
        { "source": "Transaction_10", "target": "Netflix" },
        { "source": "Transaction_11", "target": "e" },
        { "source": "Transaction_11", "target": "Albert Heijn" },
        { "source": "a", "target": "0-50" },
        { "source": "a", "target": "Amsterdam" },
        { "source": "b", "target": "0-50" },
        { "source": "b", "target": "Amsterdam" },
        { "source": "c", "target": "0-50" },
        { "source": "c", "target": "Rotterdam" },
        { "source": "d", "target": "50-100" },
        { "source": "d", "target": "Amsterdam" },
        { "source": "e", "target": "50-100" },
        { "source": "e", "target": "Rotterdam" }
    ]
};

let constrainedLayout1 = {
    "nodes": [
        { "name": "TV", "class": "ProductType" },
        { "name": "Smartphone", "class": "ProductType" },
        { "name": "Sony TV", "class": "Product" },
        { "name": "iPhone", "class": "Product" },
        { "name": "Purchase_1", "class": "Purchase" },
        { "name": "Purchase_2", "class": "Purchase" },
        { "name": "Purchase_3", "class": "Purchase" },
        { "name": "Purchase_4", "class": "Purchase" },
        { "name": "Purchase_5", "class": "Purchase" },
        { "name": "Purchase_6", "class": "Purchase" },
        { "name": "Purchase_7", "class": "Purchase" },
        { "name": "Transaction_1", "class": "Transaction" },
        { "name": "Transaction_2", "class": "Transaction" },
        { "name": "Transaction_3", "class": "Transaction" },
        { "name": "Transaction_4", "class": "Transaction" },
        { "name": "Transaction_5", "class": "Transaction" },
        { "name": "Transaction_6", "class": "Transaction" },
        { "name": "Transaction_7", "class": "Transaction" },
        { "name": "Transaction_8", "class": "Transaction" },
        { "name": "Transaction_9", "class": "Transaction" },
        { "name": "Transaction_10", "class": "Transaction" },
        { "name": "Transaction_11", "class": "Transaction" },
        { "name": "a", "class": "Person" },
        { "name": "b", "class": "Person" },
        { "name": "c", "class": "Person" },
        { "name": "d", "class": "Person" },
        { "name": "e", "class": "Person" },
        { "name": "0-50", "class": "AgeGroup" },
        { "name": "50-100", "class": "AgeGroup" },
        { "name": "Amsterdam", "class": "City" },
        { "name": "Rotterdam", "class": "City" },
        { "name": "Albert Heijn", "class": "Company" },
        { "name": "Netflix", "class": "Company" },
        { "name": "Mediamarkt", "class": "Company" }
    ],
    "links": [
        { "source": "Sony TV", "target": "TV" },
        { "source": "iPhone", "target": "Smartphone" },
        { "source": "Purchase_1", "target": "Sony TV" },
        { "source": "Purchase_2", "target": "Sony TV" },
        { "source": "Purchase_3", "target": "Sony TV" },
        { "source": "Purchase_4", "target": "Sony TV" },
        { "source": "Purchase_5", "target": "iPhone" },
        { "source": "Purchase_6", "target": "iPhone" },
        { "source": "Purchase_7", "target": "iPhone" },
        { "source": "Transaction_1", "target": "Purchase_1" },
        { "source": "Transaction_2", "target": "Purchase_2" },
        { "source": "Transaction_3", "target": "Purchase_3" },
        { "source": "Transaction_4", "target": "Purchase_4" },
        { "source": "Transaction_5", "target": "Purchase_5" },
        { "source": "Transaction_6", "target": "Purchase_6" },
        { "source": "Transaction_7", "target": "Purchase_7" },
        { "source": "Transaction_1", "target": "b" },
        { "source": "Transaction_2", "target": "c" },
        { "source": "Transaction_3", "target": "d" },
        { "source": "Transaction_1", "target": "Mediamarkt" },
        { "source": "Transaction_2", "target": "Mediamarkt" },
        { "source": "Transaction_3", "target": "Mediamarkt" },
        { "source": "Transaction_4", "target": "e" },
        { "source": "Transaction_4", "target": "Mediamarkt" },
        { "source": "Transaction_5", "target": "a" },
        { "source": "Transaction_5", "target": "Mediamarkt" },
        { "source": "Transaction_6", "target": "c" },
        { "source": "Transaction_6", "target": "Mediamarkt" },
        { "source": "Transaction_7", "target": "d" },
        { "source": "Transaction_7", "target": "Mediamarkt" },
        { "source": "Transaction_8", "target": "b" },
        { "source": "Transaction_8", "target": "Netflix" },
        { "source": "Transaction_9", "target": "c" },
        { "source": "Transaction_9", "target": "Netflix" },
        { "source": "Transaction_10", "target": "d" },
        { "source": "Transaction_10", "target": "Netflix" },
        { "source": "Transaction_11", "target": "e" },
        { "source": "Transaction_11", "target": "Albert Heijn" },
        { "source": "a", "target": "0-50" },
        { "source": "a", "target": "Amsterdam" },
        { "source": "b", "target": "0-50" },
        { "source": "b", "target": "Amsterdam" },
        { "source": "c", "target": "0-50" },
        { "source": "c", "target": "Rotterdam" },
        { "source": "d", "target": "50-100" },
        { "source": "d", "target": "Amsterdam" },
        { "source": "e", "target": "50-100" },
        { "source": "e", "target": "Rotterdam" }
    ]
};

let beeswarm1 = [
    {
      "company": "A. Morin",
      "name": "Agua Grande",
      "ref": 1876,
      "date": 2016,
      "percent": 63,
      "location": "France",
      "rating": 3.75,
      "origin": "Sao Tome"
    },
    {
      "company": "A. Morin",
      "name": "Kpime",
      "ref": 1676,
      "date": 2015,
      "percent": 70,
      "location": "France",
      "rating": 2.75,
      "origin": "Togo"
    },
    {
      "company": "A. Morin",
      "name": "Atsane",
      "ref": 1676,
      "date": 2015,
      "percent": 70,
      "location": "France",
      "rating": 3,
      "origin": "Togo"
    },
    {
      "company": "A. Morin",
      "name": "Akata",
      "ref": 1680,
      "date": 2015,
      "percent": 70,
      "location": "France",
      "rating": 3.5,
      "origin": "Togo"
    },
    {
      "company": "A. Morin",
      "name": "Quilla",
      "ref": 1704,
      "date": 2015,
      "percent": 70,
      "location": "France",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "A. Morin",
      "name": "Carenero",
      "ref": 1315,
      "date": 2014,
      "percent": 70,
      "location": "France",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "A. Morin",
      "name": "Cuba",
      "ref": 1315,
      "date": 2014,
      "percent": 70,
      "location": "France",
      "rating": 3.5,
      "origin": "Cuba"
    },
    {
      "company": "A. Morin",
      "name": "Sur del Lago",
      "ref": 1315,
      "date": 2014,
      "percent": 70,
      "location": "France",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "A. Morin",
      "name": "Puerto Cabello",
      "ref": 1319,
      "date": 2014,
      "percent": 70,
      "location": "France",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "A. Morin",
      "name": "Pablino",
      "ref": 1319,
      "date": 2014,
      "percent": 70,
      "location": "France",
      "rating": 4,
      "origin": "Peru"
    },
    {
      "company": "A. Morin",
      "name": "Panama",
      "ref": 1011,
      "date": 2013,
      "percent": 70,
      "location": "France",
      "rating": 2.75,
      "origin": "Panama"
    },
    {
      "company": "A. Morin",
      "name": "Madagascar",
      "ref": 1011,
      "date": 2013,
      "percent": 70,
      "location": "France",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "A. Morin",
      "name": "Brazil",
      "ref": 1011,
      "date": 2013,
      "percent": 70,
      "location": "France",
      "rating": 3.25,
      "origin": "Brazil"
    },
    {
      "company": "A. Morin",
      "name": "Equateur",
      "ref": 1011,
      "date": 2013,
      "percent": 70,
      "location": "France",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "A. Morin",
      "name": "Colombie",
      "ref": 1015,
      "date": 2013,
      "percent": 70,
      "location": "France",
      "rating": 2.75,
      "origin": "Colombia"
    },
    {
      "company": "A. Morin",
      "name": "Birmanie",
      "ref": 1015,
      "date": 2013,
      "percent": 70,
      "location": "France",
      "rating": 3,
      "origin": "Burma"
    },
    {
      "company": "A. Morin",
      "name": "Papua New Guinea",
      "ref": 1015,
      "date": 2013,
      "percent": 70,
      "location": "France",
      "rating": 3.25,
      "origin": "Papua New Guinea"
    },
    {
      "company": "A. Morin",
      "name": "Chuao",
      "ref": 1015,
      "date": 2013,
      "percent": 70,
      "location": "France",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "A. Morin",
      "name": "Piura",
      "ref": 1019,
      "date": 2013,
      "percent": 70,
      "location": "France",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "A. Morin",
      "name": "Chanchamayo Province",
      "ref": 1019,
      "date": 2013,
      "percent": 70,
      "location": "France",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "A. Morin",
      "name": "Chanchamayo Province",
      "ref": 1019,
      "date": 2013,
      "percent": 63,
      "location": "France",
      "rating": 4,
      "origin": "Peru"
    },
    {
      "company": "A. Morin",
      "name": "Bolivia",
      "ref": 797,
      "date": 2012,
      "percent": 70,
      "location": "France",
      "rating": 3.5,
      "origin": "Bolivia"
    },
    {
      "company": "A. Morin",
      "name": "Peru",
      "ref": 797,
      "date": 2012,
      "percent": 63,
      "location": "France",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Acalli",
      "name": "Chulucanas, El Platanal",
      "ref": 1462,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Acalli",
      "name": "Tumbes, Norandino",
      "ref": 1470,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Adi",
      "name": "Vanua Levu",
      "ref": 705,
      "date": 2011,
      "percent": 60,
      "location": "Fiji",
      "rating": 2.75,
      "origin": "Fiji"
    },
    {
      "company": "Adi",
      "name": "Vanua Levu, Toto-A",
      "ref": 705,
      "date": 2011,
      "percent": 80,
      "location": "Fiji",
      "rating": 3.25,
      "origin": "Fiji"
    },
    {
      "company": "Adi",
      "name": "Vanua Levu",
      "ref": 705,
      "date": 2011,
      "percent": 88,
      "location": "Fiji",
      "rating": 3.5,
      "origin": "Fiji"
    },
    {
      "company": "Adi",
      "name": "Vanua Levu, Ami-Ami-CA",
      "ref": 705,
      "date": 2011,
      "percent": 72,
      "location": "Fiji",
      "rating": 3.5,
      "origin": "Fiji"
    },
    {
      "company": "Aequare (Gianduja)",
      "name": "Los Rios, Quevedo, Arriba",
      "ref": 370,
      "date": 2009,
      "percent": 55,
      "location": "Ecuador",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Aequare (Gianduja)",
      "name": "Los Rios, Quevedo, Arriba",
      "ref": 370,
      "date": 2009,
      "percent": 70,
      "location": "Ecuador",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Ah Cacao",
      "name": "Tabasco",
      "ref": 316,
      "date": 2009,
      "percent": 70,
      "location": "Mexico",
      "rating": 3,
      "origin": "Mexico"
    },
    {
      "company": "Akesson's (Pralus)",
      "name": "Bali (west), Sukrama Family, Melaya area",
      "ref": 636,
      "date": 2011,
      "percent": 75,
      "location": "Switzerland",
      "rating": 3.75,
      "origin": "Indonesia"
    },
    {
      "company": "Akesson's (Pralus)",
      "name": "Madagascar, Ambolikapiky P.",
      "ref": 502,
      "date": 2010,
      "percent": 75,
      "location": "Switzerland",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Akesson's (Pralus)",
      "name": "Monte Alegre, D. Badero",
      "ref": 508,
      "date": 2010,
      "percent": 75,
      "location": "Switzerland",
      "rating": 2.75,
      "origin": "Brazil"
    },
    {
      "company": "Alain Ducasse",
      "name": "Trinite",
      "ref": 1215,
      "date": 2014,
      "percent": 65,
      "location": "France",
      "rating": 2.75,
      "origin": "Trinidad"
    },
    {
      "company": "Alain Ducasse",
      "name": "Vietnam",
      "ref": 1215,
      "date": 2014,
      "percent": 75,
      "location": "France",
      "rating": 2.75,
      "origin": "Vietnam"
    },
    {
      "company": "Alain Ducasse",
      "name": "Madagascar",
      "ref": 1215,
      "date": 2014,
      "percent": 75,
      "location": "France",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Alain Ducasse",
      "name": "Chuao",
      "ref": 1061,
      "date": 2013,
      "percent": 75,
      "location": "France",
      "rating": 2.5,
      "origin": "Venezuela"
    },
    {
      "company": "Alain Ducasse",
      "name": "Piura, Perou",
      "ref": 1173,
      "date": 2013,
      "percent": 75,
      "location": "France",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Alexandre",
      "name": "Winak Coop, Napo",
      "ref": 1944,
      "date": 2017,
      "percent": 70,
      "location": "Netherlands",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Alexandre",
      "name": "La Dalia, Matagalpa",
      "ref": 1944,
      "date": 2017,
      "percent": 70,
      "location": "Netherlands",
      "rating": 3.5,
      "origin": "Nicaragua"
    },
    {
      "company": "Alexandre",
      "name": "Tien Giang",
      "ref": 1944,
      "date": 2017,
      "percent": 70,
      "location": "Netherlands",
      "rating": 3.5,
      "origin": "Vietnam"
    },
    {
      "company": "Alexandre",
      "name": "Makwale Village, Kyela",
      "ref": 1944,
      "date": 2017,
      "percent": 70,
      "location": "Netherlands",
      "rating": 3.5,
      "origin": "Tanzania"
    },
    {
      "company": "Altus aka Cao Artisan",
      "name": "Momotombo",
      "ref": 1728,
      "date": 2016,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Altus aka Cao Artisan",
      "name": "Acopagro",
      "ref": 1728,
      "date": 2016,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Altus aka Cao Artisan",
      "name": "CIAAB Coop",
      "ref": 1732,
      "date": 2016,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Bolivia"
    },
    {
      "company": "Altus aka Cao Artisan",
      "name": "Villa Andina",
      "ref": 1732,
      "date": 2016,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Altus aka Cao Artisan",
      "name": "Gruppo Salinas",
      "ref": 1732,
      "date": 2016,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Altus aka Cao Artisan",
      "name": "Sur del Lago",
      "ref": 1125,
      "date": 2013,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Venezuela"
    },
    {
      "company": "Altus aka Cao Artisan",
      "name": "Conacado",
      "ref": 1125,
      "date": 2013,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Altus aka Cao Artisan",
      "name": "Bolivia",
      "ref": 1129,
      "date": 2013,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Bolivia"
    },
    {
      "company": "Altus aka Cao Artisan",
      "name": "Bolivia",
      "ref": 1133,
      "date": 2013,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Bolivia"
    },
    {
      "company": "Altus aka Cao Artisan",
      "name": "Peru",
      "ref": 1133,
      "date": 2013,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Amano",
      "name": "Morobe",
      "ref": 725,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Amano",
      "name": "Dos Rios",
      "ref": 470,
      "date": 2010,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Amano",
      "name": "Guayas",
      "ref": 470,
      "date": 2010,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Ecuador"
    },
    {
      "company": "Amano",
      "name": "Chuao",
      "ref": 544,
      "date": 2010,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Amano",
      "name": "Montanya",
      "ref": 363,
      "date": 2009,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Amano",
      "name": "Bali, Jembrana",
      "ref": 304,
      "date": 2008,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Indonesia"
    },
    {
      "company": "Amano",
      "name": "Madagascar",
      "ref": 129,
      "date": 2007,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Amano",
      "name": "Cuyagua",
      "ref": 147,
      "date": 2007,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Amano",
      "name": "Ocumare",
      "ref": 175,
      "date": 2007,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Amatller (Simon Coll)",
      "name": "Ghana",
      "ref": 322,
      "date": 2009,
      "percent": 70,
      "location": "Spain",
      "rating": 3,
      "origin": "Ghana"
    },
    {
      "company": "Amatller (Simon Coll)",
      "name": "Ecuador",
      "ref": 327,
      "date": 2009,
      "percent": 70,
      "location": "Spain",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Amatller (Simon Coll)",
      "name": "Ecuador",
      "ref": 464,
      "date": 2009,
      "percent": 85,
      "location": "Spain",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Amatller (Simon Coll)",
      "name": "Ghana",
      "ref": 464,
      "date": 2009,
      "percent": 85,
      "location": "Spain",
      "rating": 3,
      "origin": "Ghana"
    },
    {
      "company": "Amazona",
      "name": "LamasdelChanka, San Martin, Oro Verde coop",
      "ref": 1145,
      "date": 2013,
      "percent": 72,
      "location": "Peru",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Amazona",
      "name": "Bellavista Gran Pajeten, San Martin",
      "ref": 1145,
      "date": 2013,
      "percent": 73,
      "location": "Peru",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Ambrosia",
      "name": "Belize",
      "ref": 1494,
      "date": 2015,
      "percent": 64,
      "location": "Canada",
      "rating": 3,
      "origin": "Belize"
    },
    {
      "company": "Ambrosia",
      "name": "Madagascar",
      "ref": 1494,
      "date": 2015,
      "percent": 66,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Ambrosia",
      "name": "Dominican Republic",
      "ref": 1498,
      "date": 2015,
      "percent": 75,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Ambrosia",
      "name": "Papua New Guinea",
      "ref": 1498,
      "date": 2015,
      "percent": 63,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Ambrosia",
      "name": "Venezuela",
      "ref": 1498,
      "date": 2015,
      "percent": 70,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Ambrosia",
      "name": "Peru",
      "ref": 1498,
      "date": 2015,
      "percent": 68,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Amedei",
      "name": "Piura, Blanco de Criollo",
      "ref": 979,
      "date": 2012,
      "percent": 70,
      "location": "Italy",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Amedei",
      "name": "Porcelana",
      "ref": 111,
      "date": 2007,
      "percent": 70,
      "location": "Italy",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Amedei",
      "name": "Nine",
      "ref": 111,
      "date": 2007,
      "percent": 75,
      "location": "Italy",
      "rating": 4,
      "origin": ""
    },
    {
      "company": "Amedei",
      "name": "Chuao",
      "ref": 111,
      "date": 2007,
      "percent": 70,
      "location": "Italy",
      "rating": 5,
      "origin": "Venezuela"
    },
    {
      "company": "Amedei",
      "name": "Ecuador",
      "ref": 123,
      "date": 2007,
      "percent": 70,
      "location": "Italy",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Amedei",
      "name": "Jamaica",
      "ref": 123,
      "date": 2007,
      "percent": 70,
      "location": "Italy",
      "rating": 3,
      "origin": "Jamaica"
    },
    {
      "company": "Amedei",
      "name": "Grenada",
      "ref": 123,
      "date": 2007,
      "percent": 70,
      "location": "Italy",
      "rating": 3.5,
      "origin": "Grenada"
    },
    {
      "company": "Amedei",
      "name": "Venezuela",
      "ref": 123,
      "date": 2007,
      "percent": 70,
      "location": "Italy",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Amedei",
      "name": "Madagascar",
      "ref": 123,
      "date": 2007,
      "percent": 70,
      "location": "Italy",
      "rating": 4,
      "origin": "Madagascar"
    },
    {
      "company": "Amedei",
      "name": "Trinidad",
      "ref": 129,
      "date": 2007,
      "percent": 70,
      "location": "Italy",
      "rating": 3.5,
      "origin": "Trinidad"
    },
    {
      "company": "Amedei",
      "name": "Toscano Black",
      "ref": 170,
      "date": 2007,
      "percent": 63,
      "location": "Italy",
      "rating": 3.5,
      "origin": ""
    },
    {
      "company": "Amedei",
      "name": "Toscano Black",
      "ref": 40,
      "date": 2006,
      "percent": 70,
      "location": "Italy",
      "rating": 5,
      "origin": ""
    },
    {
      "company": "Amedei",
      "name": "Toscano Black",
      "ref": 75,
      "date": 2006,
      "percent": 66,
      "location": "Italy",
      "rating": 4,
      "origin": ""
    },
    {
      "company": "AMMA",
      "name": "Catongo",
      "ref": 1065,
      "date": 2013,
      "percent": 75,
      "location": "Brazil",
      "rating": 3.25,
      "origin": "Brazil"
    },
    {
      "company": "AMMA",
      "name": "Monte Alegre, 3 diff. plantations",
      "ref": 572,
      "date": 2010,
      "percent": 85,
      "location": "Brazil",
      "rating": 2.75,
      "origin": "Brazil"
    },
    {
      "company": "AMMA",
      "name": "Monte Alegre, 3 diff. plantations",
      "ref": 572,
      "date": 2010,
      "percent": 50,
      "location": "Brazil",
      "rating": 3.75,
      "origin": "Brazil"
    },
    {
      "company": "AMMA",
      "name": "Monte Alegre, 3 diff. plantations",
      "ref": 572,
      "date": 2010,
      "percent": 75,
      "location": "Brazil",
      "rating": 3.75,
      "origin": "Brazil"
    },
    {
      "company": "AMMA",
      "name": "Monte Alegre, 3 diff. plantations",
      "ref": 572,
      "date": 2010,
      "percent": 60,
      "location": "Brazil",
      "rating": 4,
      "origin": "Brazil"
    },
    {
      "company": "Anahata",
      "name": "Elvesia",
      "ref": 1259,
      "date": 2014,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Animas",
      "name": "Alto Beni",
      "ref": 1852,
      "date": 2016,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Bolivia"
    },
    {
      "company": "Ara",
      "name": "Madagascar",
      "ref": 1375,
      "date": 2014,
      "percent": 75,
      "location": "France",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Ara",
      "name": "Chiapas",
      "ref": 1379,
      "date": 2014,
      "percent": 72,
      "location": "France",
      "rating": 2.5,
      "origin": "Mexico"
    },
    {
      "company": "Ara",
      "name": "Equateur",
      "ref": 1379,
      "date": 2014,
      "percent": 75,
      "location": "France",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Ara",
      "name": "Trincheras",
      "ref": 1379,
      "date": 2014,
      "percent": 75,
      "location": "France",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Arete",
      "name": "San Juan",
      "ref": 1724,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Trinidad"
    },
    {
      "company": "Arete",
      "name": "Kokoa Kamili",
      "ref": 1724,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Tanzania"
    },
    {
      "company": "Arete",
      "name": "Tien Giang",
      "ref": 1900,
      "date": 2016,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Vietnam"
    },
    {
      "company": "Arete",
      "name": "Hacienda Victoria",
      "ref": 1904,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Arete",
      "name": "Costa Esmeraldas",
      "ref": 1904,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Arete",
      "name": "Lachua",
      "ref": 1904,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Guatemala"
    },
    {
      "company": "Arete",
      "name": "Rugoso",
      "ref": 1904,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Arete",
      "name": "La Masica, FHIA",
      "ref": 1908,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Honduras"
    },
    {
      "company": "Arete",
      "name": "Coto Brus, Terciopelo",
      "ref": 1908,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Costa Rica"
    },
    {
      "company": "Arete",
      "name": "Phantom",
      "ref": 1924,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Peru"
    },
    {
      "company": "Arete",
      "name": "Elvesia",
      "ref": 1928,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Arete",
      "name": "Matasawalevu",
      "ref": 1928,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Fiji"
    },
    {
      "company": "Arete",
      "name": "Lam Dong",
      "ref": 1928,
      "date": 2016,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Vietnam"
    },
    {
      "company": "Arete",
      "name": "Fazenda Camboa",
      "ref": 1534,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Arete",
      "name": "Nacional",
      "ref": 1534,
      "date": 2015,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Arete",
      "name": "Puerto Quito, heirloom",
      "ref": 1534,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "Arete",
      "name": "Oko Caribe",
      "ref": 1598,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Domincan Republic"
    },
    {
      "company": "Arete",
      "name": "Maya Mountain",
      "ref": 1598,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Belize"
    },
    {
      "company": "Arete",
      "name": "Chuno",
      "ref": 1598,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Nicaragua"
    },
    {
      "company": "Arete",
      "name": "Fazenda Camboa",
      "ref": 1602,
      "date": 2015,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Brazil"
    },
    {
      "company": "Arete",
      "name": "Guatemala",
      "ref": 1602,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Guatemala"
    },
    {
      "company": "Arete",
      "name": "Camino Verde",
      "ref": 1602,
      "date": 2015,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Artisan du Chocolat",
      "name": "Trinidad, Heritage, Limited ed.",
      "ref": 1193,
      "date": 2013,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.25,
      "origin": "Trinidad"
    },
    {
      "company": "Artisan du Chocolat",
      "name": "Colombia, Casa Luker",
      "ref": 947,
      "date": 2012,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.75,
      "origin": "Colombia"
    },
    {
      "company": "Artisan du Chocolat",
      "name": "Haiti",
      "ref": 729,
      "date": 2011,
      "percent": 72,
      "location": "U.K.",
      "rating": 4,
      "origin": "Haiti"
    },
    {
      "company": "Artisan du Chocolat",
      "name": "Panama",
      "ref": 745,
      "date": 2011,
      "percent": 72,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Panama"
    },
    {
      "company": "Artisan du Chocolat",
      "name": "Venezuela",
      "ref": 486,
      "date": 2010,
      "percent": 100,
      "location": "U.K.",
      "rating": 1.75,
      "origin": "Venezuela"
    },
    {
      "company": "Artisan du Chocolat",
      "name": "Jamaica",
      "ref": 531,
      "date": 2010,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.75,
      "origin": "Jamaica"
    },
    {
      "company": "Artisan du Chocolat",
      "name": "Costa Rica",
      "ref": 600,
      "date": 2010,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.25,
      "origin": "Costa Rica"
    },
    {
      "company": "Artisan du Chocolat",
      "name": "Ba Ria Vung Tau Province",
      "ref": 600,
      "date": 2010,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.25,
      "origin": "Vietnam"
    },
    {
      "company": "Artisan du Chocolat",
      "name": "Bali",
      "ref": 600,
      "date": 2010,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.5,
      "origin": "Indonesia"
    },
    {
      "company": "Artisan du Chocolat",
      "name": "Ocumare, Venezuela",
      "ref": 355,
      "date": 2009,
      "percent": 75,
      "location": "U.K.",
      "rating": 2.5,
      "origin": "Venezuela"
    },
    {
      "company": "Artisan du Chocolat",
      "name": "Java",
      "ref": 355,
      "date": 2009,
      "percent": 72,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Indonesia"
    },
    {
      "company": "Artisan du Chocolat",
      "name": "Brazil Rio Doce",
      "ref": 363,
      "date": 2009,
      "percent": 72,
      "location": "U.K.",
      "rating": 1.75,
      "origin": "Brazil"
    },
    {
      "company": "Artisan du Chocolat",
      "name": "Madagascar",
      "ref": 363,
      "date": 2009,
      "percent": 80,
      "location": "U.K.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Artisan du Chocolat",
      "name": "Peru",
      "ref": 363,
      "date": 2009,
      "percent": 75,
      "location": "U.K.",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Artisan du Chocolat",
      "name": "Dominican Republic",
      "ref": 363,
      "date": 2009,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Artisan du Chocolat",
      "name": "Congo",
      "ref": 300,
      "date": 2008,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.75,
      "origin": "Congo"
    },
    {
      "company": "Artisan du Chocolat (Casa Luker)",
      "name": "Orinoqua Region, Arauca",
      "ref": 1181,
      "date": 2013,
      "percent": 72,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Colombia"
    },
    {
      "company": "Askinosie",
      "name": "Mababa",
      "ref": 1780,
      "date": 2016,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Tanzania"
    },
    {
      "company": "Askinosie",
      "name": "Tenende, Uwate",
      "ref": 647,
      "date": 2011,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Tanzania"
    },
    {
      "company": "Askinosie",
      "name": "Cortes",
      "ref": 661,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Honduras"
    },
    {
      "company": "Askinosie",
      "name": "Davao",
      "ref": 331,
      "date": 2009,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Philippines"
    },
    {
      "company": "Askinosie",
      "name": "Xoconusco",
      "ref": 141,
      "date": 2007,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Mexico"
    },
    {
      "company": "Askinosie",
      "name": "San Jose del Tambo",
      "ref": 175,
      "date": 2007,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Bahen & Co.",
      "name": "Houseblend",
      "ref": 1474,
      "date": 2015,
      "percent": 80,
      "location": "Australia",
      "rating": 3.25,
      "origin": ""
    },
    {
      "company": "Bahen & Co.",
      "name": "Papua New Guinea",
      "ref": 1474,
      "date": 2015,
      "percent": 70,
      "location": "Australia",
      "rating": 3.5,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Bahen & Co.",
      "name": "Sambirano",
      "ref": 995,
      "date": 2012,
      "percent": 70,
      "location": "Australia",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Bahen & Co.",
      "name": "Bahia",
      "ref": 999,
      "date": 2012,
      "percent": 70,
      "location": "Australia",
      "rating": 2.5,
      "origin": "Brazil"
    },
    {
      "company": "Bahen & Co.",
      "name": "Houseblend",
      "ref": 999,
      "date": 2012,
      "percent": 70,
      "location": "Australia",
      "rating": 2.5,
      "origin": ""
    },
    {
      "company": "Bakau",
      "name": "Bambamarca, 2015",
      "ref": 1454,
      "date": 2015,
      "percent": 70,
      "location": "Peru",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Bakau",
      "name": "Huallabamba, 2015",
      "ref": 1454,
      "date": 2015,
      "percent": 70,
      "location": "Peru",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Bar Au Chocolat",
      "name": "Bahia",
      "ref": 1554,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Bar Au Chocolat",
      "name": "Maranon Canyon",
      "ref": 1295,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Peru"
    },
    {
      "company": "Bar Au Chocolat",
      "name": "Duarte Province",
      "ref": 983,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Bar Au Chocolat",
      "name": "Chiapas",
      "ref": 983,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Mexico"
    },
    {
      "company": "Bar Au Chocolat",
      "name": "Sambirano",
      "ref": 983,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Madagascar"
    },
    {
      "company": "Baravelli's",
      "name": "single estate",
      "ref": 955,
      "date": 2012,
      "percent": 80,
      "location": "Wales",
      "rating": 2.75,
      "origin": "Costa Rica"
    },
    {
      "company": "Batch",
      "name": "Dominican Republic, Batch 3",
      "ref": 1840,
      "date": 2016,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Domincan Republic"
    },
    {
      "company": "Batch",
      "name": "Brazil",
      "ref": 1868,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Brazil"
    },
    {
      "company": "Batch",
      "name": "Ecuador",
      "ref": 1880,
      "date": 2016,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Beau Cacao",
      "name": "Asajaya E, NW Borneo, b. #132/4500",
      "ref": 1948,
      "date": 2017,
      "percent": 73,
      "location": "U.K.",
      "rating": 3,
      "origin": "Malaysia"
    },
    {
      "company": "Beau Cacao",
      "name": "Serian E., NW Borneo, b. #134/3800",
      "ref": 1948,
      "date": 2017,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.25,
      "origin": "Malaysia"
    },
    {
      "company": "Beehive",
      "name": "Brazil, Batch 20316",
      "ref": 1784,
      "date": 2016,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Brazil"
    },
    {
      "company": "Beehive",
      "name": "Dominican Republic, Batch 31616",
      "ref": 1784,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Domincan Republic"
    },
    {
      "company": "Beehive",
      "name": "Ecuador, Batch 31516",
      "ref": 1784,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Beehive",
      "name": "Ecuador",
      "ref": 1788,
      "date": 2016,
      "percent": 90,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Belcolade",
      "name": "Costa Rica",
      "ref": 586,
      "date": 2010,
      "percent": 64,
      "location": "Belgium",
      "rating": 2.75,
      "origin": "Costa Rica"
    },
    {
      "company": "Belcolade",
      "name": "Papua New Guinea",
      "ref": 586,
      "date": 2010,
      "percent": 64,
      "location": "Belgium",
      "rating": 2.75,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Belcolade",
      "name": "Peru",
      "ref": 586,
      "date": 2010,
      "percent": 64,
      "location": "Belgium",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Belcolade",
      "name": "Ecuador",
      "ref": 586,
      "date": 2010,
      "percent": 71,
      "location": "Belgium",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Bellflower",
      "name": "Kakao Kamili, Kilombero Valley",
      "ref": 1800,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Tanzania"
    },
    {
      "company": "Bellflower",
      "name": "Alto Beni, Palos Blanco",
      "ref": 1804,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Bolivia"
    },
    {
      "company": "Bellflower",
      "name": "Oko Caribe, Duarte P.",
      "ref": 1864,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Domincan Republic"
    },
    {
      "company": "Belyzium",
      "name": "Belize south, low fermentation",
      "ref": 1768,
      "date": 2016,
      "percent": 83,
      "location": "Germany",
      "rating": 2.75,
      "origin": "Belize"
    },
    {
      "company": "Belyzium",
      "name": "Belize south",
      "ref": 1768,
      "date": 2016,
      "percent": 78,
      "location": "Germany",
      "rating": 3,
      "origin": "Belize"
    },
    {
      "company": "Belyzium",
      "name": "Belize south",
      "ref": 1768,
      "date": 2016,
      "percent": 83,
      "location": "Germany",
      "rating": 3.5,
      "origin": "Belize"
    },
    {
      "company": "Benoit Nihant",
      "name": "Baracoa",
      "ref": 1141,
      "date": 2013,
      "percent": 74,
      "location": "Belgium",
      "rating": 3.5,
      "origin": "Cuba"
    },
    {
      "company": "Benoit Nihant",
      "name": "Chuao",
      "ref": 1141,
      "date": 2013,
      "percent": 74,
      "location": "Belgium",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Benoit Nihant",
      "name": "Cuyagua Village",
      "ref": 1141,
      "date": 2013,
      "percent": 74,
      "location": "Belgium",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Benoit Nihant",
      "name": "Rio Peripa H.",
      "ref": 1141,
      "date": 2013,
      "percent": 73,
      "location": "Belgium",
      "rating": 4,
      "origin": "Ecuador"
    },
    {
      "company": "Benoit Nihant",
      "name": "Bali, Sukrama Bros. Farm, Melaya, 62hr C",
      "ref": 757,
      "date": 2011,
      "percent": 72,
      "location": "Belgium",
      "rating": 4,
      "origin": "Indonesia"
    },
    {
      "company": "Benoit Nihant",
      "name": "Somia Plantation, Sambirano, 70hr C",
      "ref": 773,
      "date": 2011,
      "percent": 72,
      "location": "Belgium",
      "rating": 3.75,
      "origin": "Madagascar"
    },
    {
      "company": "Bernachon",
      "name": "Nature",
      "ref": 797,
      "date": 2012,
      "percent": 55,
      "location": "France",
      "rating": 2.75,
      "origin": ""
    },
    {
      "company": "Beschle (Felchlin)",
      "name": "Madagascar",
      "ref": 636,
      "date": 2011,
      "percent": 64,
      "location": "Switzerland",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Beschle (Felchlin)",
      "name": "Maracaibo",
      "ref": 636,
      "date": 2011,
      "percent": 88,
      "location": "Switzerland",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Beschle (Felchlin)",
      "name": "Indigena Amazonia, Grand Cru, Quizas",
      "ref": 636,
      "date": 2011,
      "percent": 72,
      "location": "Switzerland",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Beschle (Felchlin)",
      "name": "Ecuador",
      "ref": 636,
      "date": 2011,
      "percent": 72,
      "location": "Switzerland",
      "rating": 4,
      "origin": "Ecuador"
    },
    {
      "company": "Beschle (Felchlin)",
      "name": "Carenero S., Barlovento, Grand Cru",
      "ref": 508,
      "date": 2010,
      "percent": 70,
      "location": "Switzerland",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Beschle (Felchlin)",
      "name": "Porcelana, Premier Cru, Quizas No. 1",
      "ref": 508,
      "date": 2010,
      "percent": 74,
      "location": "Switzerland",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Beschle (Felchlin)",
      "name": "Java, Grand Cru",
      "ref": 508,
      "date": 2010,
      "percent": 64,
      "location": "Switzerland",
      "rating": 3.5,
      "origin": "Indonesia"
    },
    {
      "company": "Beschle (Felchlin)",
      "name": "Ocumare, Premier Cru, Quizas No. 2",
      "ref": 508,
      "date": 2010,
      "percent": 72,
      "location": "Switzerland",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Bisou",
      "name": "Nicaragua, American style",
      "ref": 1482,
      "date": 2015,
      "percent": 76,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Nicaragua"
    },
    {
      "company": "Bisou",
      "name": "San Andres, American style",
      "ref": 1486,
      "date": 2015,
      "percent": 76,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Costa Rica"
    },
    {
      "company": "Bisou",
      "name": "San Andres, silk",
      "ref": 1486,
      "date": 2015,
      "percent": 78,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Costa Rica"
    },
    {
      "company": "Bisou",
      "name": "Belize",
      "ref": 1486,
      "date": 2015,
      "percent": 86,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Belize"
    },
    {
      "company": "Bittersweet Origins",
      "name": "Ghana",
      "ref": 963,
      "date": 2012,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ghana"
    },
    {
      "company": "Bittersweet Origins",
      "name": "Bali, Singaraja",
      "ref": 478,
      "date": 2010,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Indonesia"
    },
    {
      "company": "Bittersweet Origins",
      "name": "2009 Hapa Nibby",
      "ref": 502,
      "date": 2010,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Rep., Bali"
    },
    {
      "company": "Bittersweet Origins",
      "name": "Bali, Singaraja",
      "ref": 558,
      "date": 2010,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Indonesia"
    },
    {
      "company": "Bittersweet Origins",
      "name": "Sambirano, 2009",
      "ref": 565,
      "date": 2010,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Bittersweet Origins",
      "name": "Ocumare, prototype",
      "ref": 565,
      "date": 2010,
      "percent": 78,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Bittersweet Origins",
      "name": "Puerto Plata",
      "ref": 414,
      "date": 2009,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Bittersweet Origins",
      "name": "Puerto Plata",
      "ref": 414,
      "date": 2009,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Bittersweet Origins",
      "name": "Sambirano",
      "ref": 423,
      "date": 2009,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Bittersweet Origins",
      "name": "Sambirano",
      "ref": 431,
      "date": 2009,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Bittersweet Origins",
      "name": "Sambirano",
      "ref": 233,
      "date": 2008,
      "percent": 71,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Bittersweet Origins",
      "name": "Bocas del Toro",
      "ref": 233,
      "date": 2008,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Panama"
    },
    {
      "company": "Bittersweet Origins",
      "name": "Puerto Plata",
      "ref": 233,
      "date": 2008,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Bittersweet Origins",
      "name": "Ankasa",
      "ref": 256,
      "date": 2008,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ghana"
    },
    {
      "company": "Black Mountain",
      "name": "La Red",
      "ref": 256,
      "date": 2008,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Black Mountain",
      "name": "Carenero Superior",
      "ref": 256,
      "date": 2008,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Black Mountain",
      "name": "Matiguas",
      "ref": 256,
      "date": 2008,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Nicaragua"
    },
    {
      "company": "Black River (A. Morin)",
      "name": "Blue Mountain Region",
      "ref": 1331,
      "date": 2014,
      "percent": 70,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Jamaica"
    },
    {
      "company": "Blanxart",
      "name": "Congo, Grand Cru",
      "ref": 1046,
      "date": 2013,
      "percent": 82,
      "location": "Spain",
      "rating": 3.5,
      "origin": "Congo"
    },
    {
      "company": "Blanxart",
      "name": "Organic Dark",
      "ref": 322,
      "date": 2009,
      "percent": 72,
      "location": "Spain",
      "rating": 2.75,
      "origin": ""
    },
    {
      "company": "Blue Bandana",
      "name": "Akesson's E., Sambirano V.",
      "ref": 1740,
      "date": 2016,
      "percent": 82,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Blue Bandana",
      "name": "Lachua",
      "ref": 1752,
      "date": 2016,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Guatemala"
    },
    {
      "company": "Blue Bandana",
      "name": "Kokoa Kamili",
      "ref": 1752,
      "date": 2016,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Tanzania"
    },
    {
      "company": "Blue Bandana",
      "name": "Zorzal Reserva",
      "ref": 1756,
      "date": 2016,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Blue Bandana",
      "name": "Guatemala",
      "ref": 911,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Guatemala"
    },
    {
      "company": "Blue Bandana",
      "name": "Madagascar",
      "ref": 911,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Madagascar"
    },
    {
      "company": "Bonnat",
      "name": "Selva Maya",
      "ref": 1912,
      "date": 2016,
      "percent": 75,
      "location": "France",
      "rating": 3.5,
      "origin": "Mexico"
    },
    {
      "company": "Bonnat",
      "name": "Kaori",
      "ref": 1339,
      "date": 2014,
      "percent": 75,
      "location": "France",
      "rating": 4,
      "origin": "Brazil"
    },
    {
      "company": "Bonnat",
      "name": "Los Colorados, Santo Domingo, Equateur",
      "ref": 1418,
      "date": 2014,
      "percent": 75,
      "location": "France",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Bonnat",
      "name": "Surfin",
      "ref": 1418,
      "date": 2014,
      "percent": 65,
      "location": "France",
      "rating": 3.75,
      "origin": "Venez,Africa,Brasil,Peru,Mex"
    },
    {
      "company": "Bonnat",
      "name": "Maragnam",
      "ref": 1038,
      "date": 2013,
      "percent": 75,
      "location": "France",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Bonnat",
      "name": "Gabon",
      "ref": 1042,
      "date": 2013,
      "percent": 75,
      "location": "France",
      "rating": 3.25,
      "origin": "Gabon"
    },
    {
      "company": "Bonnat",
      "name": "Cuba",
      "ref": 629,
      "date": 2011,
      "percent": 75,
      "location": "France",
      "rating": 3.5,
      "origin": "Cuba"
    },
    {
      "company": "Bonnat",
      "name": "Cusco, Cacao Cusco",
      "ref": 629,
      "date": 2011,
      "percent": 75,
      "location": "France",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Bonnat",
      "name": "Piura Blanco",
      "ref": 629,
      "date": 2011,
      "percent": 75,
      "location": "France",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Bonnat",
      "name": "Libanio",
      "ref": 629,
      "date": 2011,
      "percent": 75,
      "location": "France",
      "rating": 3.75,
      "origin": "Brazil"
    },
    {
      "company": "Bonnat",
      "name": "Haiti",
      "ref": 629,
      "date": 2011,
      "percent": 75,
      "location": "France",
      "rating": 4,
      "origin": "Haiti"
    },
    {
      "company": "Bonnat",
      "name": "Madagascar, 100 criollo",
      "ref": 629,
      "date": 2011,
      "percent": 75,
      "location": "France",
      "rating": 4,
      "origin": "Madagascar"
    },
    {
      "company": "Bonnat",
      "name": "Juliana",
      "ref": 672,
      "date": 2011,
      "percent": 75,
      "location": "France",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Bonnat",
      "name": "Jamaique",
      "ref": 761,
      "date": 2011,
      "percent": 75,
      "location": "France",
      "rating": 3.25,
      "origin": "Jamaica"
    },
    {
      "company": "Bonnat",
      "name": "Ivory Coast",
      "ref": 331,
      "date": 2009,
      "percent": 75,
      "location": "France",
      "rating": 3,
      "origin": "Ivory Coast"
    },
    {
      "company": "Bonnat",
      "name": "Porcelana, Apotequil",
      "ref": 336,
      "date": 2009,
      "percent": 75,
      "location": "France",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Bonnat",
      "name": "Porcelana, Tabasco, Marfil de Blanco",
      "ref": 336,
      "date": 2009,
      "percent": 75,
      "location": "France",
      "rating": 3,
      "origin": "Mexico"
    },
    {
      "company": "Bonnat",
      "name": "Xoconusco, cacao Real",
      "ref": 395,
      "date": 2009,
      "percent": 75,
      "location": "France",
      "rating": 3,
      "origin": "Mexico"
    },
    {
      "company": "Bonnat",
      "name": "Porcelana, Venezuela",
      "ref": 199,
      "date": 2008,
      "percent": 75,
      "location": "France",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Bonnat",
      "name": "Equateur",
      "ref": 123,
      "date": 2007,
      "percent": 75,
      "location": "France",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Bonnat",
      "name": "Trinite",
      "ref": 24,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 3.75,
      "origin": "Carribean"
    },
    {
      "company": "Bonnat",
      "name": "Ocumare, Puerto Cabello",
      "ref": 32,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Bonnat",
      "name": "Maracaibo, El Rosario",
      "ref": 48,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Bonnat",
      "name": "Madagascar",
      "ref": 75,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 4,
      "origin": "Madagascar"
    },
    {
      "company": "Bonnat",
      "name": "One Hundred",
      "ref": 81,
      "date": 2006,
      "percent": 100,
      "location": "France",
      "rating": 1.5,
      "origin": ""
    },
    {
      "company": "Bonnat",
      "name": "Ceylan",
      "ref": 81,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 3,
      "origin": "Sri Lanka"
    },
    {
      "company": "Bonnat",
      "name": "Chuao",
      "ref": 81,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Bouga Cacao (Tulicorp)",
      "name": "El Oro, Hacienda de Oro",
      "ref": 316,
      "date": 2009,
      "percent": 77,
      "location": "Ecuador",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Bouga Cacao (Tulicorp)",
      "name": "El Oro, Hacienda de Oro",
      "ref": 341,
      "date": 2009,
      "percent": 100,
      "location": "Ecuador",
      "rating": 1.5,
      "origin": "Ecuador"
    },
    {
      "company": "Bowler Man",
      "name": "Maya Mountain",
      "ref": 1267,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Belize"
    },
    {
      "company": "Bowler Man",
      "name": "Conacado",
      "ref": 1271,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Brasstown aka It's Chocolate",
      "name": "Guasare, Zulia Prov.",
      "ref": 1868,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Brasstown aka It's Chocolate",
      "name": "O'payo, Waslala",
      "ref": 1868,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Brasstown aka It's Chocolate",
      "name": "Conacado",
      "ref": 1462,
      "date": 2015,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Brasstown aka It's Chocolate",
      "name": "Maya Mountain",
      "ref": 1255,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Belize"
    },
    {
      "company": "Brasstown aka It's Chocolate",
      "name": "Chuao",
      "ref": 1355,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Brasstown aka It's Chocolate",
      "name": "Cooproagro",
      "ref": 1125,
      "date": 2013,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Brasstown aka It's Chocolate",
      "name": "Camino Verde, Guayas",
      "ref": 1125,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Brasstown aka It's Chocolate",
      "name": "Ghana",
      "ref": 1129,
      "date": 2013,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ghana"
    },
    {
      "company": "Brasstown aka It's Chocolate",
      "name": "Chuao, Mantuano blend",
      "ref": 1129,
      "date": 2013,
      "percent": 85,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Brazen",
      "name": "Elvesia P.",
      "ref": 1514,
      "date": 2015,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Brazen",
      "name": "Elvesia P.",
      "ref": 1514,
      "date": 2015,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Brazen",
      "name": "Alta Verapaz, 2014",
      "ref": 1514,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Guatemala"
    },
    {
      "company": "Brazen",
      "name": "Ambolikapiky P.",
      "ref": 1518,
      "date": 2015,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Brazen",
      "name": "Maya Mountain",
      "ref": 1518,
      "date": 2015,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Belize"
    },
    {
      "company": "Brazen",
      "name": "Ambolikapkly P.",
      "ref": 1518,
      "date": 2015,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Breeze Mill",
      "name": "Jamaica",
      "ref": 1149,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Jamaica"
    },
    {
      "company": "Bright",
      "name": "Somia Plantation",
      "ref": 1231,
      "date": 2014,
      "percent": 72,
      "location": "Australia",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Bright",
      "name": "Marabel Farms",
      "ref": 1231,
      "date": 2014,
      "percent": 70,
      "location": "Australia",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Bright",
      "name": "Camino Verde, Balao, Guayas",
      "ref": 1231,
      "date": 2014,
      "percent": 72,
      "location": "Australia",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Bright",
      "name": "Gran Couva",
      "ref": 1235,
      "date": 2014,
      "percent": 68,
      "location": "Australia",
      "rating": 2.75,
      "origin": "Trinidad"
    },
    {
      "company": "Britarev",
      "name": "Ecuador",
      "ref": 1638,
      "date": 2015,
      "percent": 70,
      "location": "Russia",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Bronx Grrl Chocolate",
      "name": "Dominican Republic",
      "ref": 1181,
      "date": 2013,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Burnt Fork Bend",
      "name": "Trinidad",
      "ref": 1299,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Trinidad"
    },
    {
      "company": "Burnt Fork Bend",
      "name": "Mindo",
      "ref": 1299,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Burnt Fork Bend",
      "name": "Belize",
      "ref": 1303,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Belize"
    },
    {
      "company": "Burnt Fork Bend",
      "name": "Blend",
      "ref": 1303,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": ""
    },
    {
      "company": "Burnt Fork Bend",
      "name": "Ecuador, Bob Bar",
      "ref": 1323,
      "date": 2014,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Cacao Arabuco",
      "name": "Puerto Rico",
      "ref": 1606,
      "date": 2015,
      "percent": 70,
      "location": "Puerto Rico",
      "rating": 2.5,
      "origin": "Puerto Rico"
    },
    {
      "company": "Cacao Atlanta",
      "name": "Tumbes",
      "ref": 1215,
      "date": 2014,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Cacao Atlanta",
      "name": "Dominican Republic, \"Love Bar",
      "ref": 502,
      "date": 2010,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Cacao Atlanta",
      "name": "Dominican Republic w/ nibs",
      "ref": 502,
      "date": 2010,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Cacao Atlanta",
      "name": "Patanemo",
      "ref": 600,
      "date": 2010,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.25,
      "origin": "Venezuela"
    },
    {
      "company": "Cacao Barry",
      "name": "Grand 'Anse",
      "ref": 1716,
      "date": 2016,
      "percent": 65,
      "location": "France",
      "rating": 3.5,
      "origin": "Haiti"
    },
    {
      "company": "Cacao Barry",
      "name": "Santo Domingo",
      "ref": 586,
      "date": 2010,
      "percent": 70,
      "location": "France",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Cacao Barry",
      "name": "Tanzania",
      "ref": 300,
      "date": 2008,
      "percent": 75,
      "location": "France",
      "rating": 2,
      "origin": "Tanzania"
    },
    {
      "company": "Cacao Barry",
      "name": "Venezuela",
      "ref": 141,
      "date": 2007,
      "percent": 72,
      "location": "France",
      "rating": 2,
      "origin": "Venezuela"
    },
    {
      "company": "Cacao Barry",
      "name": "Mexico",
      "ref": 147,
      "date": 2007,
      "percent": 66,
      "location": "France",
      "rating": 3,
      "origin": "Mexico"
    },
    {
      "company": "Cacao de Origen",
      "name": "Chuao",
      "ref": 1688,
      "date": 2015,
      "percent": 77,
      "location": "Venezuela",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Cacao de Origen",
      "name": "Rio Caribe",
      "ref": 1692,
      "date": 2015,
      "percent": 75,
      "location": "Venezuela",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Cacao de Origen",
      "name": "Agua Fria; Sucre region",
      "ref": 1391,
      "date": 2014,
      "percent": 75,
      "location": "Venezuela",
      "rating": 2.5,
      "origin": "Venezuela"
    },
    {
      "company": "Cacao de Origen",
      "name": "Macuare; Miranda; Chloe formula",
      "ref": 1391,
      "date": 2014,
      "percent": 74,
      "location": "Venezuela",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Cacao de Origen",
      "name": "Chuao, Aragua region",
      "ref": 1391,
      "date": 2014,
      "percent": 75,
      "location": "Venezuela",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Cacao de Origen",
      "name": "Chuao, Aragua region",
      "ref": 1395,
      "date": 2014,
      "percent": 70,
      "location": "Venezuela",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Cacao de Origin",
      "name": "Hacienda la Trinidad",
      "ref": 1668,
      "date": 2015,
      "percent": 74,
      "location": "Venezuela",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Cacao Hunters",
      "name": "Macondo",
      "ref": 1816,
      "date": 2016,
      "percent": 71,
      "location": "Colombia",
      "rating": 3.75,
      "origin": "Colombia"
    },
    {
      "company": "Cacao Hunters",
      "name": "Perla Negra",
      "ref": 1816,
      "date": 2016,
      "percent": 74,
      "location": "Colombia",
      "rating": 3.75,
      "origin": "Colombia"
    },
    {
      "company": "Cacao Hunters",
      "name": "Arhuacos",
      "ref": 1662,
      "date": 2015,
      "percent": 72,
      "location": "Colombia",
      "rating": 3.75,
      "origin": "Colombia"
    },
    {
      "company": "Cacao Hunters",
      "name": "Sierra Nevada",
      "ref": 1430,
      "date": 2014,
      "percent": 64,
      "location": "Colombia",
      "rating": 3.5,
      "origin": "Colombia"
    },
    {
      "company": "Cacao Hunters",
      "name": "Tumaco",
      "ref": 1430,
      "date": 2014,
      "percent": 70,
      "location": "Colombia",
      "rating": 3.5,
      "origin": "Colombia"
    },
    {
      "company": "Cacao Hunters",
      "name": "Boyaca, Aprocampa Coop, Pauna",
      "ref": 1434,
      "date": 2014,
      "percent": 69,
      "location": "Colombia",
      "rating": 2.75,
      "origin": "Colombia"
    },
    {
      "company": "Cacao Hunters",
      "name": "Arauca",
      "ref": 1434,
      "date": 2014,
      "percent": 70,
      "location": "Colombia",
      "rating": 3.25,
      "origin": "Colombia"
    },
    {
      "company": "Cacao Market",
      "name": "Jutiapa, lot 050916D",
      "ref": 1860,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Honduras"
    },
    {
      "company": "Cacao Prieto",
      "name": "Criollo, Dominican Republic",
      "ref": 991,
      "date": 2012,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Cacao Prieto",
      "name": "Dominican Republicm, rustic",
      "ref": 641,
      "date": 2011,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Cacao Prieto",
      "name": "Dominican Republic",
      "ref": 641,
      "date": 2011,
      "percent": 66,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Cacao Prieto",
      "name": "Dominican Republic, rustic",
      "ref": 647,
      "date": 2011,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Cacao Sampaka",
      "name": "Mahali, Kasai",
      "ref": 1908,
      "date": 2016,
      "percent": 70,
      "location": "Spain",
      "rating": 3.5,
      "origin": "Congo"
    },
    {
      "company": "Cacao Sampaka",
      "name": "Madagascar",
      "ref": 508,
      "date": 2010,
      "percent": 71,
      "location": "Spain",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Cacao Sampaka",
      "name": "Ecuador",
      "ref": 523,
      "date": 2010,
      "percent": 71,
      "location": "Spain",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "Cacao Sampaka",
      "name": "Papua",
      "ref": 523,
      "date": 2010,
      "percent": 71,
      "location": "Spain",
      "rating": 4,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Cacao Sampaka",
      "name": "Grenada",
      "ref": 537,
      "date": 2010,
      "percent": 71,
      "location": "Spain",
      "rating": 3.25,
      "origin": "Grenada"
    },
    {
      "company": "Cacao Sampaka",
      "name": "Venezuela",
      "ref": 537,
      "date": 2010,
      "percent": 71,
      "location": "Spain",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Cacao Sampaka",
      "name": "Venezuela",
      "ref": 537,
      "date": 2010,
      "percent": 77,
      "location": "Spain",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Cacao Sampaka",
      "name": "Porcelana, Tabasco, La Joya",
      "ref": 336,
      "date": 2009,
      "percent": 70,
      "location": "Spain",
      "rating": 4,
      "origin": "Mexico"
    },
    {
      "company": "Cacao Sampaka",
      "name": "Xoconusco, Chiapas",
      "ref": 346,
      "date": 2009,
      "percent": 70,
      "location": "Spain",
      "rating": 4,
      "origin": "Mexico"
    },
    {
      "company": "Cacao Store",
      "name": "Madagascar",
      "ref": 1684,
      "date": 2015,
      "percent": 70,
      "location": "Japan",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Cacao Store",
      "name": "Peru",
      "ref": 1684,
      "date": 2015,
      "percent": 70,
      "location": "Japan",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Cacao Store",
      "name": "Vietnam",
      "ref": 1684,
      "date": 2015,
      "percent": 70,
      "location": "Japan",
      "rating": 3.5,
      "origin": "Vietnam"
    },
    {
      "company": "Cacaosuyo (Theobroma Inversiones)",
      "name": "Piura",
      "ref": 1173,
      "date": 2013,
      "percent": 70,
      "location": "Peru",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Cacaoyere (Ecuatoriana)",
      "name": "Amazonia",
      "ref": 237,
      "date": 2008,
      "percent": 63,
      "location": "Ecuador",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Cacaoyere (Ecuatoriana)",
      "name": "Esmeraldas",
      "ref": 237,
      "date": 2008,
      "percent": 71,
      "location": "Ecuador",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Cacaoyere (Ecuatoriana)",
      "name": "Bolivar",
      "ref": 245,
      "date": 2008,
      "percent": 82,
      "location": "Ecuador",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Cacaoyere (Ecuatoriana)",
      "name": "Pichincha",
      "ref": 259,
      "date": 2008,
      "percent": 91,
      "location": "Ecuador",
      "rating": 1.5,
      "origin": "Ecuador"
    },
    {
      "company": "Callebaut",
      "name": "Grenade",
      "ref": 296,
      "date": 2008,
      "percent": 60,
      "location": "Belgium",
      "rating": 2.75,
      "origin": "Grenada"
    },
    {
      "company": "Callebaut",
      "name": "Baking",
      "ref": 141,
      "date": 2007,
      "percent": 70,
      "location": "Belgium",
      "rating": 1,
      "origin": "Ecuador"
    },
    {
      "company": "C-Amaro",
      "name": "Cuba",
      "ref": 1442,
      "date": 2014,
      "percent": 75,
      "location": "Italy",
      "rating": 2.5,
      "origin": "Cuba"
    },
    {
      "company": "C-Amaro",
      "name": "Dominican Republic",
      "ref": 1442,
      "date": 2014,
      "percent": 72,
      "location": "Italy",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "C-Amaro",
      "name": "Lago di Como, Blu",
      "ref": 1442,
      "date": 2014,
      "percent": 70,
      "location": "Italy",
      "rating": 3.5,
      "origin": ""
    },
    {
      "company": "C-Amaro",
      "name": "Ecuador",
      "ref": 1185,
      "date": 2013,
      "percent": 100,
      "location": "Italy",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "C-Amaro",
      "name": "Venezuela",
      "ref": 809,
      "date": 2012,
      "percent": 80,
      "location": "Italy",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "C-Amaro",
      "name": "Sao Tome",
      "ref": 749,
      "date": 2011,
      "percent": 78,
      "location": "Italy",
      "rating": 2.25,
      "origin": "Sao Tome"
    },
    {
      "company": "C-Amaro",
      "name": "Trinidad",
      "ref": 765,
      "date": 2011,
      "percent": 70,
      "location": "Italy",
      "rating": 2.5,
      "origin": "Trinidad"
    },
    {
      "company": "Cao",
      "name": "Porcelana",
      "ref": 1804,
      "date": 2016,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Venezuela"
    },
    {
      "company": "Cao",
      "name": "Tanzania",
      "ref": 1804,
      "date": 2016,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Tanzania"
    },
    {
      "company": "Cao",
      "name": "Porcelana, Batch 5163",
      "ref": 1804,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Cao",
      "name": "Bolivia",
      "ref": 1808,
      "date": 2016,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Bolivia"
    },
    {
      "company": "Cao",
      "name": "Brazil",
      "ref": 1808,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Brazil"
    },
    {
      "company": "Caoni (Tulicorp)",
      "name": "Esmeraldas",
      "ref": 237,
      "date": 2008,
      "percent": 77,
      "location": "Ecuador",
      "rating": 2,
      "origin": "Ecuador"
    },
    {
      "company": "Caoni (Tulicorp)",
      "name": "Manabi",
      "ref": 237,
      "date": 2008,
      "percent": 77,
      "location": "Ecuador",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Caoni (Tulicorp)",
      "name": "Los Rios",
      "ref": 245,
      "date": 2008,
      "percent": 77,
      "location": "Ecuador",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Caoni (Tulicorp)",
      "name": "Manabi",
      "ref": 266,
      "date": 2008,
      "percent": 55,
      "location": "Ecuador",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Caoni (Tulicorp)",
      "name": "Los Rios",
      "ref": 269,
      "date": 2008,
      "percent": 55,
      "location": "Ecuador",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Caoni (Tulicorp)",
      "name": "Esmeraldas",
      "ref": 269,
      "date": 2008,
      "percent": 55,
      "location": "Ecuador",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Captain Pembleton",
      "name": "Saidor Estate, Madang P.",
      "ref": 1263,
      "date": 2014,
      "percent": 70,
      "location": "New Zealand",
      "rating": 3.5,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Captain Pembleton",
      "name": "Kulili Estate",
      "ref": 1263,
      "date": 2014,
      "percent": 70,
      "location": "New Zealand",
      "rating": 3.75,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Caribeans",
      "name": "Antigua, Special Reserve",
      "ref": 1582,
      "date": 2015,
      "percent": 72,
      "location": "Costa Rica",
      "rating": 3.5,
      "origin": "Guatemala"
    },
    {
      "company": "Caribeans",
      "name": "Talamanca, Raul-Kekoldo community",
      "ref": 1586,
      "date": 2015,
      "percent": 72,
      "location": "Costa Rica",
      "rating": 3.25,
      "origin": "Costa Rica"
    },
    {
      "company": "Caribeans",
      "name": "Anselmo Paraiso Estate",
      "ref": 1586,
      "date": 2015,
      "percent": 72,
      "location": "Costa Rica",
      "rating": 3.5,
      "origin": "Costa Rica"
    },
    {
      "company": "Caribeans",
      "name": "Costa Rica",
      "ref": 841,
      "date": 2012,
      "percent": 72,
      "location": "Costa Rica",
      "rating": 3,
      "origin": "Costa Rica"
    },
    {
      "company": "Caribeans",
      "name": "Costa Rica",
      "ref": 845,
      "date": 2012,
      "percent": 80,
      "location": "Costa Rica",
      "rating": 2.75,
      "origin": "Costa Rica"
    },
    {
      "company": "Carlotta Chocolat",
      "name": "Arauca",
      "ref": 1884,
      "date": 2016,
      "percent": 65,
      "location": "Colombia",
      "rating": 3,
      "origin": "Colombia"
    },
    {
      "company": "Carlotta Chocolat",
      "name": "Tumaco",
      "ref": 1888,
      "date": 2016,
      "percent": 65,
      "location": "Colombia",
      "rating": 3.25,
      "origin": "Colombia"
    },
    {
      "company": "Carlotta Chocolat",
      "name": "Cordoba",
      "ref": 1888,
      "date": 2016,
      "percent": 65,
      "location": "Colombia",
      "rating": 3.25,
      "origin": "Colombia"
    },
    {
      "company": "Carlotta Chocolat",
      "name": "Huila",
      "ref": 1888,
      "date": 2016,
      "percent": 65,
      "location": "Colombia",
      "rating": 3.5,
      "origin": "Colombia"
    },
    {
      "company": "Carlotta Chocolat",
      "name": "Cesar",
      "ref": 1888,
      "date": 2016,
      "percent": 65,
      "location": "Colombia",
      "rating": 3.5,
      "origin": "Colombia"
    },
    {
      "company": "Castronovo",
      "name": "Maya Mtn, Batch 454, Heirloom",
      "ref": 1724,
      "date": 2016,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Belize"
    },
    {
      "company": "Castronovo",
      "name": "the lost city, gracias a dias, batch 362",
      "ref": 1570,
      "date": 2015,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Honduras"
    },
    {
      "company": "Castronovo",
      "name": "Duarte, Batch 360",
      "ref": 1570,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Domincan Republic"
    },
    {
      "company": "Castronovo",
      "name": "Piaroa, Amazonas, Batch 350",
      "ref": 1574,
      "date": 2015,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Castronovo",
      "name": "Sierra Nevada",
      "ref": 1347,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Colombia"
    },
    {
      "company": "Castronovo",
      "name": "Arauca",
      "ref": 1371,
      "date": 2014,
      "percent": 76,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Colombia"
    },
    {
      "company": "Castronovo",
      "name": "Elvesia P.",
      "ref": 1407,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Castronovo",
      "name": "Bolivia",
      "ref": 1101,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Bolivia"
    },
    {
      "company": "Castronovo",
      "name": "Conacado",
      "ref": 1101,
      "date": 2013,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Castronovo",
      "name": "San Martin",
      "ref": 1105,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Castronovo",
      "name": "Guaniamo, Amazonas",
      "ref": 1105,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Castronovo",
      "name": "Nicaragua",
      "ref": 1109,
      "date": 2013,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Nicaragua"
    },
    {
      "company": "Castronovo",
      "name": "Tumbes",
      "ref": 1153,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Castronovo",
      "name": "Guaniamo",
      "ref": 1153,
      "date": 2013,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Cello",
      "name": "Ecuador",
      "ref": 1247,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Cello",
      "name": "Peru",
      "ref": 1247,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Cello",
      "name": "Venezuela",
      "ref": 1251,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Cello",
      "name": "Bolivia",
      "ref": 1251,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Bolivia"
    },
    {
      "company": "Cemoi",
      "name": "Equateur",
      "ref": 404,
      "date": 2009,
      "percent": 72,
      "location": "France",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Chaleur B",
      "name": "Uganda",
      "ref": 1426,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 2.75,
      "origin": "Uganda"
    },
    {
      "company": "Charm School",
      "name": "Maya Mtn",
      "ref": 1900,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Belize"
    },
    {
      "company": "Chchukululu (Tulicorp)",
      "name": "Arriba",
      "ref": 486,
      "date": 2010,
      "percent": 55,
      "location": "Ecuador",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Chchukululu (Tulicorp)",
      "name": "Los Rios",
      "ref": 252,
      "date": 2008,
      "percent": 75,
      "location": "Ecuador",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Chequessett",
      "name": "la Amistad",
      "ref": 1235,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Costa Rica"
    },
    {
      "company": "Chloe Chocolat",
      "name": "Blend No. 1",
      "ref": 672,
      "date": 2011,
      "percent": 70,
      "location": "France",
      "rating": 3.5,
      "origin": ""
    },
    {
      "company": "Chocablog",
      "name": "Ecuador",
      "ref": 1454,
      "date": 2015,
      "percent": 70,
      "location": "U.K.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Choco Del Sol",
      "name": "Maya Mountain w/ nibs",
      "ref": 1407,
      "date": 2014,
      "percent": 75,
      "location": "Germany",
      "rating": 3,
      "origin": "Belize"
    },
    {
      "company": "Choco Del Sol",
      "name": "Maya Mountain",
      "ref": 1407,
      "date": 2014,
      "percent": 82,
      "location": "Germany",
      "rating": 3.25,
      "origin": "Belize"
    },
    {
      "company": "Choco Dong",
      "name": "Mekong Delta, early 2014 Harvest",
      "ref": 1696,
      "date": 2015,
      "percent": 70,
      "location": "South Korea",
      "rating": 2.75,
      "origin": "Vietnam"
    },
    {
      "company": "Choco Dong",
      "name": "Tawau, Oct. 2015 Harvest",
      "ref": 1696,
      "date": 2015,
      "percent": 70,
      "location": "South Korea",
      "rating": 3.5,
      "origin": "Malaysia"
    },
    {
      "company": "Chocolarder",
      "name": "Peru",
      "ref": 1482,
      "date": 2015,
      "percent": 65,
      "location": "U.K.",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Chocolarder",
      "name": "Peru + nibs",
      "ref": 1482,
      "date": 2015,
      "percent": 65,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Chocolarder",
      "name": "Dominican Republic",
      "ref": 1514,
      "date": 2015,
      "percent": 80,
      "location": "U.K.",
      "rating": 2.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Chocola'te",
      "name": "Madagascar",
      "ref": 647,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Madagascar"
    },
    {
      "company": "Chocola'te",
      "name": "Venezuela",
      "ref": 647,
      "date": 2011,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Chocolate Alchemist-Philly",
      "name": "Tumbes, \"Zarumilla",
      "ref": 1772,
      "date": 2016,
      "percent": 90,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Chocolate Alchemist-Philly",
      "name": "Philly Blend, 5 plantations",
      "ref": 1772,
      "date": 2016,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": ""
    },
    {
      "company": "Chocolate Con Amor",
      "name": "Wild Bolivian",
      "ref": 1760,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Bolivia"
    },
    {
      "company": "Chocolate Con Amor",
      "name": "Uganda",
      "ref": 1760,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Uganda"
    },
    {
      "company": "Chocolate Con Amor",
      "name": "Dominican Republic",
      "ref": 1764,
      "date": 2016,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Chocolate Con Amor",
      "name": "Dominican Republic",
      "ref": 1764,
      "date": 2016,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Chocolate Con Amor",
      "name": "Ocumare",
      "ref": 1764,
      "date": 2016,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Chocolate Con Amor",
      "name": "Ecuador",
      "ref": 1764,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Chocolate Con Amor",
      "name": "Nicaragua",
      "ref": 1768,
      "date": 2016,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Chocolate Conspiracy",
      "name": "Peru",
      "ref": 1259,
      "date": 2014,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Chocolate Makers",
      "name": "Tres Hombres",
      "ref": 1530,
      "date": 2015,
      "percent": 75,
      "location": "Amsterdam",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Chocolate Makers",
      "name": "Congo, Gorilla bar",
      "ref": 1530,
      "date": 2015,
      "percent": 68,
      "location": "Amsterdam",
      "rating": 3.5,
      "origin": "Congo"
    },
    {
      "company": "Chocolate Makers",
      "name": "Peru, Awagum bar",
      "ref": 1530,
      "date": 2015,
      "percent": 80,
      "location": "Amsterdam",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Chocolate Tree, The",
      "name": "Maranon",
      "ref": 1582,
      "date": 2015,
      "percent": 69,
      "location": "Scotland",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Chocolate Tree, The",
      "name": "Carenero Superior",
      "ref": 1582,
      "date": 2015,
      "percent": 80,
      "location": "Scotland",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Chocolate Tree, The",
      "name": "Peru",
      "ref": 1121,
      "date": 2013,
      "percent": 70,
      "location": "Scotland",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Chocolate Tree, The",
      "name": "Ecuador",
      "ref": 919,
      "date": 2012,
      "percent": 82,
      "location": "Scotland",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Chocolate Tree, The",
      "name": "Peru",
      "ref": 919,
      "date": 2012,
      "percent": 68,
      "location": "Scotland",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Chocolate Tree, The",
      "name": "Madagascar",
      "ref": 919,
      "date": 2012,
      "percent": 72,
      "location": "Scotland",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Chocolats Privilege",
      "name": "Xoconusco",
      "ref": 1219,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 2.5,
      "origin": "Mexico"
    },
    {
      "company": "ChocoReko",
      "name": "Patanemo",
      "ref": 1454,
      "date": 2015,
      "percent": 77,
      "location": "Japan",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Chocosol",
      "name": "Chiapas, Lacandon Jungle, Oaxacom Mtn",
      "ref": 682,
      "date": 2011,
      "percent": 65,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Mexico"
    },
    {
      "company": "Chocovic",
      "name": "Xoconusco",
      "ref": 478,
      "date": 2010,
      "percent": 71,
      "location": "Spain",
      "rating": 3.25,
      "origin": "Mexico"
    },
    {
      "company": "Chocovic",
      "name": "Sambirano",
      "ref": 478,
      "date": 2010,
      "percent": 71,
      "location": "Spain",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Chocovic",
      "name": "Kendari",
      "ref": 439,
      "date": 2009,
      "percent": 60,
      "location": "Spain",
      "rating": 3.25,
      "origin": ""
    },
    {
      "company": "Chocovic",
      "name": "Tarakan",
      "ref": 439,
      "date": 2009,
      "percent": 75,
      "location": "Spain",
      "rating": 3.25,
      "origin": ""
    },
    {
      "company": "Chocovic",
      "name": "Ocumare",
      "ref": 209,
      "date": 2008,
      "percent": 71,
      "location": "Spain",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Chocovic",
      "name": "Bolivar, Guaranda",
      "ref": 117,
      "date": 2007,
      "percent": 71,
      "location": "Spain",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Chocovic",
      "name": "Guyave",
      "ref": 117,
      "date": 2007,
      "percent": 71,
      "location": "Spain",
      "rating": 2.5,
      "origin": "Grenada"
    },
    {
      "company": "Chocovic",
      "name": "Maragda",
      "ref": 117,
      "date": 2007,
      "percent": 70,
      "location": "Spain",
      "rating": 3,
      "origin": ""
    },
    {
      "company": "Chocovivo",
      "name": "Tabasco",
      "ref": 1522,
      "date": 2015,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Mexico"
    },
    {
      "company": "Chocovivo",
      "name": "Tabasco",
      "ref": 1522,
      "date": 2015,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Mexico"
    },
    {
      "company": "Choklat",
      "name": "Ocumare",
      "ref": 377,
      "date": 2009,
      "percent": 80,
      "location": "Canada",
      "rating": 2.5,
      "origin": "Venezuela"
    },
    {
      "company": "Choklat",
      "name": "Porcelana, Tabasco",
      "ref": 377,
      "date": 2009,
      "percent": 70,
      "location": "Canada",
      "rating": 2.75,
      "origin": "Mexico"
    },
    {
      "company": "Choklat",
      "name": "Brazilian",
      "ref": 377,
      "date": 2009,
      "percent": 70,
      "location": "Canada",
      "rating": 3,
      "origin": "Brazil"
    },
    {
      "company": "Choklat",
      "name": "Brazilian",
      "ref": 377,
      "date": 2009,
      "percent": 80,
      "location": "Canada",
      "rating": 3,
      "origin": "Brazil"
    },
    {
      "company": "Choklat",
      "name": "Ocumare",
      "ref": 377,
      "date": 2009,
      "percent": 70,
      "location": "Canada",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Chokolat Elot (Girard)",
      "name": "Guadeloupe",
      "ref": 1149,
      "date": 2013,
      "percent": 42,
      "location": "Martinique",
      "rating": 2.75,
      "origin": "Martinique"
    },
    {
      "company": "Choocsol",
      "name": "Chiapas, Lacandon Jungle, Oaxacom Mtn",
      "ref": 1832,
      "date": 2016,
      "percent": 75,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Mexico"
    },
    {
      "company": "Christopher Morel (Felchlin)",
      "name": "Maranon Canyon, Fortunato No. 4",
      "ref": 666,
      "date": 2011,
      "percent": 68,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Chuao Chocolatier",
      "name": "Choroni",
      "ref": 445,
      "date": 2009,
      "percent": 61,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Chuao Chocolatier (Pralus)",
      "name": "Chuao",
      "ref": 486,
      "date": 2010,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Claudio Corallo",
      "name": "Terreiro Velho P.",
      "ref": 470,
      "date": 2010,
      "percent": 73.5,
      "location": "Sao Tome",
      "rating": 3.75,
      "origin": "Sao Tome & Principe"
    },
    {
      "company": "Claudio Corallo",
      "name": "Terreiro Velho P. w/ sugar crystals",
      "ref": 209,
      "date": 2008,
      "percent": 80,
      "location": "Sao Tome",
      "rating": 3,
      "origin": "Sao Tome & Principe"
    },
    {
      "company": "Claudio Corallo",
      "name": "Terreiro Velho P.",
      "ref": 227,
      "date": 2008,
      "percent": 75,
      "location": "Sao Tome",
      "rating": 4,
      "origin": "Sao Tome & Principe"
    },
    {
      "company": "Claudio Corallo",
      "name": "Principe",
      "ref": 252,
      "date": 2008,
      "percent": 100,
      "location": "Sao Tome",
      "rating": 1,
      "origin": "Sao Tome & Principe"
    },
    {
      "company": "Cloudforest",
      "name": "Camino Verde P., Balao, Guayas, 2014",
      "ref": 1486,
      "date": 2015,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Coleman & Davis",
      "name": "Sambirano",
      "ref": 1646,
      "date": 2015,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Compania de Chocolate (Salgado)",
      "name": "Sur del Lago",
      "ref": 579,
      "date": 2010,
      "percent": 70,
      "location": "Argentina",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Compania de Chocolate (Salgado)",
      "name": "Carenero Superior",
      "ref": 292,
      "date": 2008,
      "percent": 80,
      "location": "Argentina",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Compania de Chocolate (Salgado)",
      "name": "Moxos",
      "ref": 292,
      "date": 2008,
      "percent": 72,
      "location": "Argentina",
      "rating": 3.25,
      "origin": "Bolivia"
    },
    {
      "company": "Compania de Chocolate (Salgado)",
      "name": "Ocumare",
      "ref": 292,
      "date": 2008,
      "percent": 70,
      "location": "Argentina",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Compania de Chocolate (Salgado)",
      "name": "Esmeraldas",
      "ref": 296,
      "date": 2008,
      "percent": 88,
      "location": "Argentina",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Condor",
      "name": "Camino Verde",
      "ref": 1630,
      "date": 2015,
      "percent": 76,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Confluence",
      "name": "Tien Giang, 2015, batch 10-2-16",
      "ref": 1916,
      "date": 2016,
      "percent": 78,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Vietnam"
    },
    {
      "company": "Coppeneur",
      "name": "Ecuador, Puristique",
      "ref": 1169,
      "date": 2013,
      "percent": 65,
      "location": "Germany",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Coppeneur",
      "name": "Ghana Puristique",
      "ref": 813,
      "date": 2012,
      "percent": 85,
      "location": "Germany",
      "rating": 3.5,
      "origin": "Ghana"
    },
    {
      "company": "Coppeneur",
      "name": "Ecuador Puristique",
      "ref": 817,
      "date": 2012,
      "percent": 100,
      "location": "Germany",
      "rating": 1.5,
      "origin": "Ecuador"
    },
    {
      "company": "Coppeneur",
      "name": "Uba Budo",
      "ref": 821,
      "date": 2012,
      "percent": 72,
      "location": "Germany",
      "rating": 3.75,
      "origin": "Sao Tome & Principe"
    },
    {
      "company": "Coppeneur",
      "name": "Madagascar",
      "ref": 959,
      "date": 2012,
      "percent": 70,
      "location": "Germany",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Coppeneur",
      "name": "Grenada",
      "ref": 470,
      "date": 2010,
      "percent": 72,
      "location": "Germany",
      "rating": 3.25,
      "origin": "Grenada"
    },
    {
      "company": "Coppeneur",
      "name": "Chuao",
      "ref": 478,
      "date": 2010,
      "percent": 70,
      "location": "Germany",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Coppeneur",
      "name": "Los Rios, H. Iara",
      "ref": 558,
      "date": 2010,
      "percent": 72,
      "location": "Germany",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Coppeneur",
      "name": "Trinidad",
      "ref": 558,
      "date": 2010,
      "percent": 72,
      "location": "Germany",
      "rating": 3,
      "origin": "Trinidad"
    },
    {
      "company": "Coppeneur",
      "name": "Jamaica",
      "ref": 558,
      "date": 2010,
      "percent": 72,
      "location": "Germany",
      "rating": 3.25,
      "origin": "Jamaica"
    },
    {
      "company": "Coppeneur",
      "name": "Ocumare 61",
      "ref": 558,
      "date": 2010,
      "percent": 72,
      "location": "Germany",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Coppeneur",
      "name": "Porcelana, Apotequil",
      "ref": 341,
      "date": 2009,
      "percent": 72,
      "location": "Germany",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Coppeneur",
      "name": "Porcelana, Apotequil",
      "ref": 445,
      "date": 2009,
      "percent": 62,
      "location": "Germany",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Coppeneur",
      "name": "Chuao 100hr",
      "ref": 451,
      "date": 2009,
      "percent": 70,
      "location": "Germany",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Coppeneur",
      "name": "Chuao 70hr",
      "ref": 451,
      "date": 2009,
      "percent": 70,
      "location": "Germany",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Coppeneur",
      "name": "Porcelana, Tabasco, Mexico",
      "ref": 220,
      "date": 2008,
      "percent": 72,
      "location": "Germany",
      "rating": 3,
      "origin": "Mexico"
    },
    {
      "company": "Coppeneur",
      "name": "Porcelana, Venezuela",
      "ref": 220,
      "date": 2008,
      "percent": 72,
      "location": "Germany",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Coppeneur",
      "name": "Sambirano, Menava P.",
      "ref": 196,
      "date": 2007,
      "percent": 72,
      "location": "Germany",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Cote d' Or (Kraft)",
      "name": "Sensations Intense",
      "ref": 48,
      "date": 2006,
      "percent": 70,
      "location": "Belgium",
      "rating": 1,
      "origin": ""
    },
    {
      "company": "Cravve",
      "name": "New Ireland",
      "ref": 1283,
      "date": 2014,
      "percent": 70,
      "location": "Australia",
      "rating": 2.5,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Cravve",
      "name": "Vanuatu, batch 2410",
      "ref": 1335,
      "date": 2014,
      "percent": 83,
      "location": "Australia",
      "rating": 2.75,
      "origin": "Vanuatu"
    },
    {
      "company": "Cravve",
      "name": "Tanzania, batch a1",
      "ref": 971,
      "date": 2012,
      "percent": 75,
      "location": "Australia",
      "rating": 3.25,
      "origin": "Tanzania"
    },
    {
      "company": "Cravve",
      "name": "Bahia, batch a1213",
      "ref": 975,
      "date": 2012,
      "percent": 65,
      "location": "Australia",
      "rating": 3.25,
      "origin": "Brazil"
    },
    {
      "company": "Cravve",
      "name": "Namau Village, N. Taileva P., batch a2812",
      "ref": 975,
      "date": 2012,
      "percent": 67,
      "location": "Australia",
      "rating": 3.25,
      "origin": "Fiji"
    },
    {
      "company": "Cravve",
      "name": "Vanuatu",
      "ref": 975,
      "date": 2012,
      "percent": 64,
      "location": "Australia",
      "rating": 3.25,
      "origin": "Vanuatu"
    },
    {
      "company": "Cravve",
      "name": "Djual Island",
      "ref": 975,
      "date": 2012,
      "percent": 75,
      "location": "Australia",
      "rating": 3.5,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Creo",
      "name": "heirloom\", Arriba Nacional",
      "ref": 1736,
      "date": 2016,
      "percent": 85,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Creo",
      "name": "heirloom\", Arriba Nacional",
      "ref": 1736,
      "date": 2016,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "Daintree",
      "name": "Goodman Estate",
      "ref": 1654,
      "date": 2015,
      "percent": 70,
      "location": "Australia",
      "rating": 2.75,
      "origin": "Australia"
    },
    {
      "company": "Daintree",
      "name": "Daintree Estates, N. Queensland",
      "ref": 785,
      "date": 2011,
      "percent": 70,
      "location": "Australia",
      "rating": 3.25,
      "origin": "Australia"
    },
    {
      "company": "Dalloway",
      "name": "Dominican Republic, batch 7",
      "ref": 1928,
      "date": 2017,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Damson",
      "name": "Robson Estate",
      "ref": 1610,
      "date": 2015,
      "percent": 70,
      "location": "U.K.",
      "rating": 3,
      "origin": "Trinidad"
    },
    {
      "company": "Damson",
      "name": "Los Rios",
      "ref": 1610,
      "date": 2015,
      "percent": 70,
      "location": "U.K.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Damson",
      "name": "Crayfish Bay aka Non Pariel Estate",
      "ref": 1666,
      "date": 2015,
      "percent": 70,
      "location": "U.K.",
      "rating": 2.25,
      "origin": "Grenada"
    },
    {
      "company": "Damson",
      "name": "O'Payo",
      "ref": 1666,
      "date": 2015,
      "percent": 70,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Dandelion",
      "name": "Zorzal Reserva, 2015 H., Kerchner",
      "ref": 1816,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": ""
    },
    {
      "company": "Dandelion",
      "name": "Maya Mtn., Break Bar- Snark",
      "ref": 1446,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Belize"
    },
    {
      "company": "Dandelion",
      "name": "Maya Mountain",
      "ref": 1219,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Belize"
    },
    {
      "company": "Dandelion",
      "name": "Camino Verde P., Balao, Guayas, 2013",
      "ref": 1295,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Dandelion",
      "name": "Buto",
      "ref": 1303,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Liberia"
    },
    {
      "company": "Dandelion",
      "name": "San Francisco de Macoris, Cibao region",
      "ref": 1387,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Dandelion",
      "name": "Cumboto, farmer Jose Lugo",
      "ref": 1026,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Dandelion",
      "name": "Patanemo",
      "ref": 1026,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Dandelion",
      "name": "Mantuano, 2012",
      "ref": 1085,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Dandelion",
      "name": "Papua New Guinea",
      "ref": 1153,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Dandelion",
      "name": "Upala",
      "ref": 805,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Costa Rica"
    },
    {
      "company": "Dandelion",
      "name": "Colombian",
      "ref": 805,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Colombia"
    },
    {
      "company": "Dandelion",
      "name": "Elvesia, 2011",
      "ref": 915,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Dandelion",
      "name": "Dominican Republic",
      "ref": 654,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Dandelion",
      "name": "Madagascar",
      "ref": 654,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Dandelion",
      "name": "Tanzania",
      "ref": 654,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Tanzania"
    },
    {
      "company": "Danta",
      "name": "Los Ujuxtes",
      "ref": 1223,
      "date": 2014,
      "percent": 82,
      "location": "Guatemala",
      "rating": 3.25,
      "origin": "Guatemala"
    },
    {
      "company": "Danta",
      "name": "Chuao",
      "ref": 987,
      "date": 2012,
      "percent": 75,
      "location": "Guatemala",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Danta",
      "name": "Los Ujuxtes",
      "ref": 987,
      "date": 2012,
      "percent": 70,
      "location": "Guatemala",
      "rating": 3.75,
      "origin": "Guatemala"
    },
    {
      "company": "Danta",
      "name": "Sambirano",
      "ref": 987,
      "date": 2012,
      "percent": 70,
      "location": "Guatemala",
      "rating": 3.75,
      "origin": "Madagascar"
    },
    {
      "company": "Danta",
      "name": "Las Acacias E.",
      "ref": 987,
      "date": 2012,
      "percent": 70,
      "location": "Guatemala",
      "rating": 4,
      "origin": "Guatemala"
    },
    {
      "company": "Danta",
      "name": "Oscuro, Finca Chimelb",
      "ref": 991,
      "date": 2012,
      "percent": 70,
      "location": "Guatemala",
      "rating": 3.25,
      "origin": "Guatemala"
    },
    {
      "company": "Danta",
      "name": "Los Ujuxtes",
      "ref": 661,
      "date": 2011,
      "percent": 60,
      "location": "Guatemala",
      "rating": 3.5,
      "origin": "Guatemala"
    },
    {
      "company": "Danta",
      "name": "Las Acacias E.",
      "ref": 423,
      "date": 2009,
      "percent": 75,
      "location": "Guatemala",
      "rating": 3,
      "origin": "Guatemala"
    },
    {
      "company": "Danta",
      "name": "Las Acacias E.",
      "ref": 423,
      "date": 2009,
      "percent": 60,
      "location": "Guatemala",
      "rating": 3.25,
      "origin": "Guatemala"
    },
    {
      "company": "DAR",
      "name": "Venezuela, batch 122",
      "ref": 1920,
      "date": 2016,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "DAR",
      "name": "Vietnam",
      "ref": 1920,
      "date": 2016,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Vietnam"
    },
    {
      "company": "DAR",
      "name": "DUO, batch 002",
      "ref": 1920,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador, Costa Rica"
    },
    {
      "company": "Dark Forest",
      "name": "Bolivia",
      "ref": 1708,
      "date": 2016,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Bolivia"
    },
    {
      "company": "Dark Forest",
      "name": "Madagascar",
      "ref": 1550,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Dark Forest",
      "name": "Ocumare",
      "ref": 1550,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Dark Forest",
      "name": "Tanzania",
      "ref": 1554,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Tanzania"
    },
    {
      "company": "Dark Forest",
      "name": "Ecuador",
      "ref": 1554,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Davis",
      "name": "Ghana",
      "ref": 1093,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Ghana"
    },
    {
      "company": "Davis",
      "name": "Rainforest",
      "ref": 1093,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Davis",
      "name": "Venezuela",
      "ref": 1093,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Davis",
      "name": "West Africa",
      "ref": 907,
      "date": 2012,
      "percent": 58,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "West Africa"
    },
    {
      "company": "De Mendes",
      "name": "Nativo, Varzea",
      "ref": 1462,
      "date": 2015,
      "percent": 72,
      "location": "Brazil",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "De Mendes",
      "name": "Selvagem, Jari",
      "ref": 1462,
      "date": 2015,
      "percent": 65,
      "location": "Brazil",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "De Villiers",
      "name": "Bundibugyo District",
      "ref": 1832,
      "date": 2016,
      "percent": 70,
      "location": "South Africa",
      "rating": 2.5,
      "origin": "Uganda"
    },
    {
      "company": "De Villiers",
      "name": "Sambirano Valley, batch 2477",
      "ref": 1832,
      "date": 2016,
      "percent": 70,
      "location": "South Africa",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Dean and Deluca (Belcolade)",
      "name": "Madagascar",
      "ref": 170,
      "date": 2007,
      "percent": 66,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Madagascar"
    },
    {
      "company": "Dean and Deluca (Belcolade)",
      "name": "Costa Rica",
      "ref": 175,
      "date": 2007,
      "percent": 64,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Costa Rica"
    },
    {
      "company": "Dean and Deluca (Belcolade)",
      "name": "Ecuador",
      "ref": 175,
      "date": 2007,
      "percent": 71,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Dean and Deluca (Belcolade)",
      "name": "Ghana",
      "ref": 175,
      "date": 2007,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ghana"
    },
    {
      "company": "Dean and Deluca (Belcolade)",
      "name": "Papua New Guinea",
      "ref": 180,
      "date": 2007,
      "percent": 64,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Dean and Deluca (Belcolade)",
      "name": "Peru",
      "ref": 180,
      "date": 2007,
      "percent": 64,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Debauve & Gallais (Michel Cluizel)",
      "name": "Papua New Guinea",
      "ref": 423,
      "date": 2009,
      "percent": 64,
      "location": "France",
      "rating": 3,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Debauve & Gallais (Michel Cluizel)",
      "name": "Venezuela",
      "ref": 263,
      "date": 2008,
      "percent": 66,
      "location": "France",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Desbarres",
      "name": "Kilombero, batch 41",
      "ref": 1916,
      "date": 2016,
      "percent": 72,
      "location": "Canada",
      "rating": 2.5,
      "origin": "Tanzania"
    },
    {
      "company": "DeVries",
      "name": "Bolivian",
      "ref": 241,
      "date": 2008,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Bolivia"
    },
    {
      "company": "DeVries",
      "name": "Costa Rica",
      "ref": 166,
      "date": 2007,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Costa Rica"
    },
    {
      "company": "DeVries",
      "name": "Dominican Republic",
      "ref": 166,
      "date": 2007,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Dick Taylor",
      "name": "Lanquin Estate",
      "ref": 1952,
      "date": 2017,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Guatemala"
    },
    {
      "company": "Dick Taylor",
      "name": "Tien Giang",
      "ref": 1864,
      "date": 2016,
      "percent": 78,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Vietnam"
    },
    {
      "company": "Dick Taylor",
      "name": "Alto Beni, Wild Harvest, Limited Ed.",
      "ref": 1634,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Bolivia"
    },
    {
      "company": "Dick Taylor",
      "name": "Elvesia",
      "ref": 1235,
      "date": 2014,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Dick Taylor",
      "name": "Ecuador, Choc. Garage Exclusive",
      "ref": 1034,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Dick Taylor",
      "name": "Camino Verde",
      "ref": 1193,
      "date": 2013,
      "percent": 76,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Dick Taylor",
      "name": "Bolivia",
      "ref": 895,
      "date": 2012,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Bolivia"
    },
    {
      "company": "Dick Taylor",
      "name": "Belize",
      "ref": 955,
      "date": 2012,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Belize"
    },
    {
      "company": "Dick Taylor",
      "name": "Sambirano",
      "ref": 661,
      "date": 2011,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Dick Taylor",
      "name": "Sambirano",
      "ref": 661,
      "date": 2011,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Dick Taylor",
      "name": "Mantuano",
      "ref": 682,
      "date": 2011,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Dick Taylor",
      "name": "La Red",
      "ref": 769,
      "date": 2011,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Dick Taylor",
      "name": "Ecuador",
      "ref": 769,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Doble & Bignall",
      "name": "Puerto Cabello",
      "ref": 1688,
      "date": 2015,
      "percent": 85,
      "location": "U.K.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Doble & Bignall",
      "name": "Panama, Raven",
      "ref": 1371,
      "date": 2014,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.25,
      "origin": "Panama"
    },
    {
      "company": "Doble & Bignall",
      "name": "Puerto Cabello, Mantuano",
      "ref": 1371,
      "date": 2014,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Doble & Bignall",
      "name": "Johe",
      "ref": 1407,
      "date": 2014,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.5,
      "origin": "Nicaragua"
    },
    {
      "company": "Dole (Guittard)",
      "name": "O'ahu, N. Shore, Waialua Estate",
      "ref": 311,
      "date": 2009,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Hawaii"
    },
    {
      "company": "Dolfin (Belcolade)",
      "name": "Africa",
      "ref": 304,
      "date": 2008,
      "percent": 88,
      "location": "Belgium",
      "rating": 3,
      "origin": "West Africa"
    },
    {
      "company": "Dolfin (Belcolade)",
      "name": "Noir",
      "ref": 63,
      "date": 2006,
      "percent": 70,
      "location": "Belgium",
      "rating": 1.5,
      "origin": ""
    },
    {
      "company": "Domori",
      "name": "Hacienda Victoria",
      "ref": 1672,
      "date": 2015,
      "percent": 70,
      "location": "Italy",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "Domori",
      "name": "Ocumare 77",
      "ref": 1672,
      "date": 2015,
      "percent": 70,
      "location": "Italy",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Domori",
      "name": "IL100, H. San Jose",
      "ref": 1109,
      "date": 2013,
      "percent": 100,
      "location": "Italy",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Domori",
      "name": "Morogoro",
      "ref": 863,
      "date": 2012,
      "percent": 70,
      "location": "Italy",
      "rating": 3.5,
      "origin": "Tanzania"
    },
    {
      "company": "Domori",
      "name": "Guasare",
      "ref": 863,
      "date": 2012,
      "percent": 70,
      "location": "Italy",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Domori",
      "name": "Canoabo, Hacienda San Jose",
      "ref": 693,
      "date": 2011,
      "percent": 70,
      "location": "Italy",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Domori",
      "name": "Chuao, Hacienda San Jose",
      "ref": 470,
      "date": 2010,
      "percent": 70,
      "location": "Italy",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Domori",
      "name": "Carupano, H. San Jose",
      "ref": 227,
      "date": 2008,
      "percent": 70,
      "location": "Italy",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Domori",
      "name": "Teyuna",
      "ref": 272,
      "date": 2008,
      "percent": 70,
      "location": "Italy",
      "rating": 3,
      "origin": "Colombia"
    },
    {
      "company": "Domori",
      "name": "Blend No. 1",
      "ref": 272,
      "date": 2008,
      "percent": 78,
      "location": "Italy",
      "rating": 3.5,
      "origin": ""
    },
    {
      "company": "Domori",
      "name": "Ilblend",
      "ref": 272,
      "date": 2008,
      "percent": 70,
      "location": "Italy",
      "rating": 3.75,
      "origin": ""
    },
    {
      "company": "Domori",
      "name": "Porcelana",
      "ref": 111,
      "date": 2007,
      "percent": 70,
      "location": "Italy",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Domori",
      "name": "Ocumare 61, Puertomar",
      "ref": 129,
      "date": 2007,
      "percent": 75,
      "location": "Italy",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Domori",
      "name": "Granella",
      "ref": 135,
      "date": 2007,
      "percent": 60,
      "location": "Italy",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Domori",
      "name": "Madagascar",
      "ref": 135,
      "date": 2007,
      "percent": 70,
      "location": "Italy",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Domori",
      "name": "Madagared",
      "ref": 192,
      "date": 2007,
      "percent": 70,
      "location": "Italy",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Domori",
      "name": "Java, Javablond",
      "ref": 192,
      "date": 2007,
      "percent": 70,
      "location": "Italy",
      "rating": 3.75,
      "origin": "Indonesia"
    },
    {
      "company": "Domori",
      "name": "Ecuador",
      "ref": 192,
      "date": 2007,
      "percent": 70,
      "location": "Italy",
      "rating": 4,
      "origin": "Ecuador"
    },
    {
      "company": "Domori",
      "name": "Ocumare 67, Puertofino",
      "ref": 192,
      "date": 2007,
      "percent": 70,
      "location": "Italy",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Domori",
      "name": "Sur del Lago Classificado",
      "ref": 87,
      "date": 2006,
      "percent": 70,
      "location": "Italy",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Domori",
      "name": "Apurimac",
      "ref": 87,
      "date": 2006,
      "percent": 70,
      "location": "Italy",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Domori",
      "name": "Carenero Superior",
      "ref": 87,
      "date": 2006,
      "percent": 70,
      "location": "Italy",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Dormouse",
      "name": "Non Pariel Estate",
      "ref": 1880,
      "date": 2016,
      "percent": 75,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Grenada"
    },
    {
      "company": "Dormouse",
      "name": "Rio Caribe, Batch 7",
      "ref": 1672,
      "date": 2015,
      "percent": 70,
      "location": "U.K.",
      "rating": 2.5,
      "origin": "Venezuela"
    },
    {
      "company": "Dormouse",
      "name": "Colombia, Batch 9",
      "ref": 1676,
      "date": 2015,
      "percent": 80,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Colombia"
    },
    {
      "company": "Dormouse",
      "name": "Madagascar, Batch 8",
      "ref": 1676,
      "date": 2015,
      "percent": 77,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Duffy's",
      "name": "Rio Dulce, Xoco",
      "ref": 1662,
      "date": 2015,
      "percent": 70,
      "location": "U.K.",
      "rating": 4,
      "origin": "Guatemala"
    },
    {
      "company": "Duffy's",
      "name": "Chuno, Xoco",
      "ref": 1331,
      "date": 2014,
      "percent": 70,
      "location": "U.K.",
      "rating": 3.5,
      "origin": "Nicaragua"
    },
    {
      "company": "Duffy's",
      "name": "Rico Rugoso, Xoco",
      "ref": 1331,
      "date": 2014,
      "percent": 76,
      "location": "U.K.",
      "rating": 3.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Duffy's",
      "name": "Ocumare",
      "ref": 923,
      "date": 2012,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Duffy's",
      "name": "Indio Rojo, Xoco",
      "ref": 623,
      "date": 2011,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.75,
      "origin": "Honduras"
    },
    {
      "company": "Duffy's",
      "name": "Dominican Republic",
      "ref": 661,
      "date": 2011,
      "percent": 65,
      "location": "U.K.",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Duffy's",
      "name": "Bocas del Toro, Tierra Oscura",
      "ref": 697,
      "date": 2011,
      "percent": 72,
      "location": "U.K.",
      "rating": 3,
      "origin": "Panama"
    },
    {
      "company": "Duffy's",
      "name": "Nicaliso, Xoco",
      "ref": 697,
      "date": 2011,
      "percent": 71,
      "location": "U.K.",
      "rating": 3.25,
      "origin": "Nicaragua"
    },
    {
      "company": "Duffy's",
      "name": "Ocumare",
      "ref": 765,
      "date": 2011,
      "percent": 71,
      "location": "U.K.",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Duffy's",
      "name": "Panama",
      "ref": 516,
      "date": 2010,
      "percent": 70,
      "location": "U.K.",
      "rating": 3.5,
      "origin": "Panama"
    },
    {
      "company": "Duffy's",
      "name": "Corazon del Ecuador, Calceta beans",
      "ref": 516,
      "date": 2010,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "Duffy's",
      "name": "Star of Ecuador",
      "ref": 523,
      "date": 2010,
      "percent": 70,
      "location": "U.K.",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Duffy's",
      "name": "Star of Peru",
      "ref": 523,
      "date": 2010,
      "percent": 70,
      "location": "U.K.",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Dulcinea",
      "name": "Dominican Republic",
      "ref": 1506,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Durand",
      "name": "Madagascar",
      "ref": 841,
      "date": 2012,
      "percent": 82,
      "location": "France",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Durci",
      "name": "Maranon, Joya Rara",
      "ref": 1626,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Durci",
      "name": "Rio Caribe, Tepui Treasure",
      "ref": 1626,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Durci",
      "name": "Taino Secret",
      "ref": 1630,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Domincan Republic"
    },
    {
      "company": "Durci",
      "name": "Carenero, Empyrean Sabor",
      "ref": 1630,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Durci",
      "name": "Corona Arriba",
      "ref": 1630,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Ecuador"
    },
    {
      "company": "East Van Roasters",
      "name": "Peru",
      "ref": 1343,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "East Van Roasters",
      "name": "Madagascar",
      "ref": 1343,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "East Van Roasters",
      "name": "Dominican Republic",
      "ref": 1343,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Eau de Rose",
      "name": "Tumaco",
      "ref": 1812,
      "date": 2016,
      "percent": 70,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Colombia"
    },
    {
      "company": "Eau de Rose",
      "name": "Arauca",
      "ref": 1812,
      "date": 2016,
      "percent": 70,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Colombia"
    },
    {
      "company": "Eclat (Felchlin)",
      "name": "Maranon, Good & Evil, w/ nibs",
      "ref": 919,
      "date": 2012,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Edelmond",
      "name": "Porcelana",
      "ref": 1876,
      "date": 2016,
      "percent": 68,
      "location": "Germany",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "El Ceibo",
      "name": "Alto Beni, Covendo Region",
      "ref": 709,
      "date": 2011,
      "percent": 75,
      "location": "Bolivia",
      "rating": 3.75,
      "origin": "Bolivia"
    },
    {
      "company": "El Ceibo",
      "name": "Alto Beni",
      "ref": 252,
      "date": 2008,
      "percent": 71,
      "location": "Bolivia",
      "rating": 2.75,
      "origin": "Bolivia"
    },
    {
      "company": "El Rey",
      "name": "San Joaquin",
      "ref": 1662,
      "date": 2015,
      "percent": 70,
      "location": "Venezuela",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "El Rey",
      "name": "Rio Caribe, Cariaco",
      "ref": 439,
      "date": 2009,
      "percent": 60.5,
      "location": "Venezuela",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "El Rey",
      "name": "Rio Caribe, Macuro",
      "ref": 439,
      "date": 2009,
      "percent": 70,
      "location": "Venezuela",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "El Rey",
      "name": "Carenero Superior, Apamate",
      "ref": 206,
      "date": 2008,
      "percent": 74,
      "location": "Venezuela",
      "rating": 2.5,
      "origin": "Venezuela"
    },
    {
      "company": "El Rey",
      "name": "Carenero Superior, Bucare",
      "ref": 206,
      "date": 2008,
      "percent": 58,
      "location": "Venezuela",
      "rating": 2.5,
      "origin": "Venezuela"
    },
    {
      "company": "El Rey",
      "name": "Carenero Superior, Mijao",
      "ref": 206,
      "date": 2008,
      "percent": 61,
      "location": "Venezuela",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "El Rey",
      "name": "Carenero Superior, Gran Saman",
      "ref": 32,
      "date": 2006,
      "percent": 70,
      "location": "Venezuela",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Emerald Estate",
      "name": "Emerald Estate",
      "ref": 1137,
      "date": 2013,
      "percent": 60,
      "location": "St. Lucia",
      "rating": 2.75,
      "origin": "St. Lucia"
    },
    {
      "company": "Emerald Estate",
      "name": "Emerald Estate",
      "ref": 1137,
      "date": 2013,
      "percent": 70,
      "location": "St. Lucia",
      "rating": 3.25,
      "origin": "St. Lucia"
    },
    {
      "company": "Emily's",
      "name": "Patanemo",
      "ref": 1450,
      "date": 2015,
      "percent": 79,
      "location": "Japan",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Emily's",
      "name": "Peru",
      "ref": 1454,
      "date": 2015,
      "percent": 78,
      "location": "Japan",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "ENNA",
      "name": "Wampusirpi, batch 007",
      "ref": 1916,
      "date": 2016,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Honduras"
    },
    {
      "company": "Enric Rovira (Claudio Corallo)",
      "name": "Terreiro Velho P.",
      "ref": 565,
      "date": 2010,
      "percent": 80,
      "location": "Spain",
      "rating": 3.25,
      "origin": "Sao Tome & Principe"
    },
    {
      "company": "Erithaj (A. Morin)",
      "name": "Ben Tre",
      "ref": 1205,
      "date": 2014,
      "percent": 70,
      "location": "France",
      "rating": 3.25,
      "origin": "Vietnam"
    },
    {
      "company": "Erithaj (A. Morin)",
      "name": "Ham Luong",
      "ref": 1209,
      "date": 2014,
      "percent": 80,
      "location": "France",
      "rating": 3,
      "origin": "Vietnam"
    },
    {
      "company": "Erithaj (A. Morin)",
      "name": "Ba Lai",
      "ref": 1209,
      "date": 2014,
      "percent": 74,
      "location": "France",
      "rating": 3.25,
      "origin": "Vietnam"
    },
    {
      "company": "Escazu",
      "name": "Rio Caribe",
      "ref": 903,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Escazu",
      "name": "Guapiles",
      "ref": 414,
      "date": 2009,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 2,
      "origin": "Costa Rica"
    },
    {
      "company": "Escazu",
      "name": "Carenero Superior",
      "ref": 423,
      "date": 2009,
      "percent": 81,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Escazu",
      "name": "Carenero, Guapiles, Ocumare blend",
      "ref": 431,
      "date": 2009,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Cost Rica, Ven"
    },
    {
      "company": "Escazu",
      "name": "Ocumare",
      "ref": 252,
      "date": 2008,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Ethel's Artisan (Mars)",
      "name": "Peru, Madagascar",
      "ref": 666,
      "date": 2011,
      "percent": 55,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Peru, Madagascar"
    },
    {
      "company": "Ethel's Artisan (Mars)",
      "name": "Trinidad",
      "ref": 666,
      "date": 2011,
      "percent": 55,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Trinidad"
    },
    {
      "company": "Ethel's Artisan (Mars)",
      "name": "Porcelana",
      "ref": 666,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Venezuela"
    },
    {
      "company": "Ethel's Artisan (Mars)",
      "name": "Red Vanilla",
      "ref": 666,
      "date": 2011,
      "percent": 62,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": ""
    },
    {
      "company": "Ethel's Artisan (Mars)",
      "name": "Venezuela, Trinidad",
      "ref": 672,
      "date": 2011,
      "percent": 62,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Venezuela, Trinidad"
    },
    {
      "company": "Ethereal",
      "name": "Belize",
      "ref": 1275,
      "date": 2014,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Belize"
    },
    {
      "company": "Ethereal",
      "name": "Ecuador",
      "ref": 1275,
      "date": 2014,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Ethereal",
      "name": "Dominican Republic",
      "ref": 1275,
      "date": 2014,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Fearless (AMMA)",
      "name": "Monte Alegre, D. Badaro, Raw, Organic",
      "ref": 565,
      "date": 2010,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Brazil"
    },
    {
      "company": "Feitoria Cacao",
      "name": "Blue Mountain",
      "ref": 1732,
      "date": 2016,
      "percent": 76,
      "location": "Portugal",
      "rating": 3,
      "origin": "Jamaica"
    },
    {
      "company": "Feitoria Cacao",
      "name": "Cuyagua",
      "ref": 1736,
      "date": 2016,
      "percent": 76,
      "location": "Portugal",
      "rating": 2.5,
      "origin": "Venezuela"
    },
    {
      "company": "Feitoria Cacao",
      "name": "Maya Mountain",
      "ref": 1736,
      "date": 2016,
      "percent": 76,
      "location": "Portugal",
      "rating": 2.75,
      "origin": "Belize"
    },
    {
      "company": "Felchlin",
      "name": "Grenada",
      "ref": 494,
      "date": 2010,
      "percent": 58,
      "location": "Switzerland",
      "rating": 3.5,
      "origin": "Grenada"
    },
    {
      "company": "Felchlin",
      "name": "Supremo- SF",
      "ref": 105,
      "date": 2006,
      "percent": 62,
      "location": "Switzerland",
      "rating": 2,
      "origin": ""
    },
    {
      "company": "Felchlin",
      "name": "Elvesia P.",
      "ref": 105,
      "date": 2006,
      "percent": 74,
      "location": "Switzerland",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Felchlin",
      "name": "Madagascar, Grand Cru",
      "ref": 48,
      "date": 2006,
      "percent": 64,
      "location": "Switzerland",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Felchlin",
      "name": "Maracaibo Clasificado",
      "ref": 48,
      "date": 2006,
      "percent": 65,
      "location": "Switzerland",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Felchlin",
      "name": "Arriba",
      "ref": 48,
      "date": 2006,
      "percent": 72,
      "location": "Switzerland",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Felchlin",
      "name": "Alto Beni, Cru Savage",
      "ref": 56,
      "date": 2006,
      "percent": 68,
      "location": "Switzerland",
      "rating": 4,
      "origin": "Bolivia"
    },
    {
      "company": "Finca",
      "name": "Puerto Rico",
      "ref": 1283,
      "date": 2014,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 2.25,
      "origin": "Puerto Rico"
    },
    {
      "company": "Finca",
      "name": "Dominican Republic",
      "ref": 1283,
      "date": 2014,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Finca",
      "name": "Dominican Republic",
      "ref": 1283,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Finca",
      "name": "Dominican Republic",
      "ref": 1287,
      "date": 2014,
      "percent": 85,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Forever Cacao",
      "name": "Rio Eni",
      "ref": 1267,
      "date": 2014,
      "percent": 72,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Forteza (Cortes)",
      "name": "Dominican Republic",
      "ref": 1776,
      "date": 2016,
      "percent": 70,
      "location": "Puerto Rico",
      "rating": 2.75,
      "origin": "Domincan Republic"
    },
    {
      "company": "Forteza (Cortes)",
      "name": "Puerto Rico",
      "ref": 1776,
      "date": 2016,
      "percent": 80,
      "location": "Puerto Rico",
      "rating": 2.75,
      "origin": "Domincan Republic"
    },
    {
      "company": "Fossa",
      "name": "Akesson's E., Sambirano V.",
      "ref": 1772,
      "date": 2016,
      "percent": 70,
      "location": "Singapore",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Fossa",
      "name": "Camino Verde P., Balao, Guayas",
      "ref": 1776,
      "date": 2016,
      "percent": 75,
      "location": "Singapore",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Fossa",
      "name": "Kokoa Kamili Coop, Kilombero",
      "ref": 1776,
      "date": 2016,
      "percent": 67,
      "location": "Singapore",
      "rating": 3.75,
      "origin": "Tanzania"
    },
    {
      "company": "Franceschi",
      "name": "Choroni",
      "ref": 1355,
      "date": 2014,
      "percent": 70,
      "location": "Venezuela",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Franceschi",
      "name": "Ocumare",
      "ref": 1355,
      "date": 2014,
      "percent": 70,
      "location": "Venezuela",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Franceschi",
      "name": "Canoabo",
      "ref": 911,
      "date": 2012,
      "percent": 70,
      "location": "Venezuela",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Franceschi",
      "name": "Sur del Lago",
      "ref": 915,
      "date": 2012,
      "percent": 60,
      "location": "Venezuela",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Frederic Blondeel",
      "name": "Costa Rica",
      "ref": 1538,
      "date": 2015,
      "percent": 70,
      "location": "Belgium",
      "rating": 3.5,
      "origin": "Costa Rica"
    },
    {
      "company": "Frederic Blondeel",
      "name": "Peru Brutus",
      "ref": 1538,
      "date": 2015,
      "percent": 75,
      "location": "Belgium",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Frederic Blondeel",
      "name": "Vietnam",
      "ref": 1542,
      "date": 2015,
      "percent": 80,
      "location": "Belgium",
      "rating": 3,
      "origin": "Vietnam"
    },
    {
      "company": "Frederic Blondeel",
      "name": "Ghana",
      "ref": 1351,
      "date": 2014,
      "percent": 60,
      "location": "Belgium",
      "rating": 3.5,
      "origin": "Ghana"
    },
    {
      "company": "Frederic Blondeel",
      "name": "Madagascar",
      "ref": 1351,
      "date": 2014,
      "percent": 65,
      "location": "Belgium",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "French Broad",
      "name": "Norandino, batch 161208",
      "ref": 1940,
      "date": 2017,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "French Broad",
      "name": "Guatemala",
      "ref": 1634,
      "date": 2015,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Guatemala"
    },
    {
      "company": "French Broad",
      "name": "San Andres",
      "ref": 1209,
      "date": 2014,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Costa Rica"
    },
    {
      "company": "French Broad",
      "name": "Matagalpa",
      "ref": 1295,
      "date": 2014,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Nicaragua"
    },
    {
      "company": "French Broad",
      "name": "Palo Blanco, Chulucanas",
      "ref": 1042,
      "date": 2013,
      "percent": 66,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "French Broad",
      "name": "Tumbes Coop",
      "ref": 883,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "French Broad",
      "name": "Palo Blanco, Chulucanas",
      "ref": 883,
      "date": 2012,
      "percent": 61,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "French Broad",
      "name": "Palo Blanco w/ panela, Chulucanas",
      "ref": 887,
      "date": 2012,
      "percent": 81,
      "location": "U.S.A.",
      "rating": 2,
      "origin": "Peru"
    },
    {
      "company": "French Broad",
      "name": "Maranon Canyon, Fortunato No. 4",
      "ref": 781,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "French Broad",
      "name": "La Red",
      "ref": 785,
      "date": 2011,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Fresco",
      "name": "Maranon, #228, MR, SC",
      "ref": 1383,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Fresco",
      "name": "Maranon, #227, LR, MC",
      "ref": 1383,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Fresco",
      "name": "Maranon, #229, MR, LC",
      "ref": 1383,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Fresco",
      "name": "Maranon, #230, DR, LC",
      "ref": 1387,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Fresco",
      "name": "Conacado, #223, MR, SC",
      "ref": 1030,
      "date": 2013,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Fresco",
      "name": "Conacado, #224, MR, MC",
      "ref": 1081,
      "date": 2013,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Fresco",
      "name": "San Martin, Bellavista Coop, #226, DR, MC",
      "ref": 1117,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Fresco",
      "name": "Bellavista Coop, #225, LR, MC, CG Exclusive",
      "ref": 1149,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Peru"
    },
    {
      "company": "Fresco",
      "name": "Markham Valley, #219, LR, MC",
      "ref": 899,
      "date": 2012,
      "percent": 69,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Fresco",
      "name": "Markham Valley, #221, DR, MC",
      "ref": 899,
      "date": 2012,
      "percent": 69,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Fresco",
      "name": "Sambirano Valley, #216, MR, LC",
      "ref": 915,
      "date": 2012,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Madagascar"
    },
    {
      "company": "Fresco",
      "name": "Markham Valley, #220, MR, MC",
      "ref": 927,
      "date": 2012,
      "percent": 69,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Fresco",
      "name": "Markham Valley, #222, LR, 0C",
      "ref": 931,
      "date": 2012,
      "percent": 69,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Fresco",
      "name": "Ghana, #211, MR, MC",
      "ref": 636,
      "date": 2011,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Ghana"
    },
    {
      "company": "Fresco",
      "name": "Jamaica, #209, DR, SC",
      "ref": 642,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Jamaica"
    },
    {
      "company": "Fresco",
      "name": "Conacado, #212, LR, SC",
      "ref": 642,
      "date": 2011,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Fresco",
      "name": "Jamaica, #210, DR, MC",
      "ref": 642,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Jamaica"
    },
    {
      "company": "Fresco",
      "name": "Sambirano Valley, #214, LR, MC",
      "ref": 682,
      "date": 2011,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Fresco",
      "name": "Conacado, #213, DR, -C",
      "ref": 682,
      "date": 2011,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Fresco",
      "name": "Sambirano Valley, #215, MR, MC",
      "ref": 688,
      "date": 2011,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Fresco",
      "name": "Chuao, #218, MR, MC",
      "ref": 745,
      "date": 2011,
      "percent": 76,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Fresco",
      "name": "Chuao, #217, DR, MC",
      "ref": 745,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Fresco",
      "name": "Jamaica, #204, DR, SC",
      "ref": 370,
      "date": 2009,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Jamaica"
    },
    {
      "company": "Fresco",
      "name": "Jamaica, #206, DR, LC",
      "ref": 370,
      "date": 2009,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Jamaica"
    },
    {
      "company": "Fresco",
      "name": "Jamaica, #205, DR, MC",
      "ref": 370,
      "date": 2009,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Jamaica"
    },
    {
      "company": "Fresco",
      "name": "Carenero Superior, #203, MR, SC",
      "ref": 370,
      "date": 2009,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Friis Holm",
      "name": "Rugoso, Bad Fermentation",
      "ref": 1912,
      "date": 2016,
      "percent": 70,
      "location": "Denmark",
      "rating": 3.5,
      "origin": "Nicaragua"
    },
    {
      "company": "Friis Holm (Bonnat)",
      "name": "La Dalia",
      "ref": 1680,
      "date": 2015,
      "percent": 60,
      "location": "Denmark",
      "rating": 3,
      "origin": "Nicaragua"
    },
    {
      "company": "Friis Holm (Bonnat)",
      "name": "La Dalia",
      "ref": 1680,
      "date": 2015,
      "percent": 85,
      "location": "Denmark",
      "rating": 3.25,
      "origin": "Nicaragua"
    },
    {
      "company": "Friis Holm (Bonnat)",
      "name": "La Dalia",
      "ref": 1259,
      "date": 2014,
      "percent": 70,
      "location": "Denmark",
      "rating": 3.5,
      "origin": "Nicaragua"
    },
    {
      "company": "Friis Holm (Bonnat)",
      "name": "Barba, Xoco",
      "ref": 1034,
      "date": 2013,
      "percent": 70,
      "location": "Denmark",
      "rating": 3.25,
      "origin": "Nicaragua"
    },
    {
      "company": "Friis Holm (Bonnat)",
      "name": "Medagla, Xoco",
      "ref": 1034,
      "date": 2013,
      "percent": 70,
      "location": "Denmark",
      "rating": 3.5,
      "origin": "Nicaragua"
    },
    {
      "company": "Friis Holm (Bonnat)",
      "name": "Chuno, triple turned, Xoco",
      "ref": 895,
      "date": 2012,
      "percent": 70,
      "location": "Denmark",
      "rating": 3.25,
      "origin": "Nicaragua"
    },
    {
      "company": "Friis Holm (Bonnat)",
      "name": "Red Mayan, Xoco",
      "ref": 899,
      "date": 2012,
      "percent": 70,
      "location": "Denmark",
      "rating": 3.25,
      "origin": "Honduras"
    },
    {
      "company": "Friis Holm (Bonnat)",
      "name": "Chuno, double turned, Xoco",
      "ref": 899,
      "date": 2012,
      "percent": 70,
      "location": "Denmark",
      "rating": 3.25,
      "origin": "Nicaragua"
    },
    {
      "company": "Friis Holm (Bonnat)",
      "name": "Rugoso, Xoco",
      "ref": 923,
      "date": 2012,
      "percent": 70,
      "location": "Denmark",
      "rating": 3.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Friis Holm (Bonnat)",
      "name": "Johe, Xoco",
      "ref": 623,
      "date": 2011,
      "percent": 70,
      "location": "Denmark",
      "rating": 3.25,
      "origin": "Nicaragua"
    },
    {
      "company": "Friis Holm (Bonnat)",
      "name": "Chuno, Xoco",
      "ref": 623,
      "date": 2011,
      "percent": 70,
      "location": "Denmark",
      "rating": 3.5,
      "origin": "Nicaragua"
    },
    {
      "company": "Friis Holm (Bonnat)",
      "name": "Nicaliso, Xoco",
      "ref": 623,
      "date": 2011,
      "percent": 70,
      "location": "Denmark",
      "rating": 3.5,
      "origin": "Nicaragua"
    },
    {
      "company": "Fruition",
      "name": "Wild Bolivian, Batch 2",
      "ref": 1780,
      "date": 2016,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Bolivia"
    },
    {
      "company": "Fruition",
      "name": "Coto Brus, Heirloom, Batch 1",
      "ref": 1780,
      "date": 2016,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Costa Rica"
    },
    {
      "company": "Fruition",
      "name": "Gran Couva",
      "ref": 1347,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Trinidad"
    },
    {
      "company": "Fruition",
      "name": "Maranon",
      "ref": 1359,
      "date": 2014,
      "percent": 76,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Fruition",
      "name": "La Red",
      "ref": 1046,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Fruition",
      "name": "Camino Verde",
      "ref": 1185,
      "date": 2013,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Fruition",
      "name": "Peru",
      "ref": 863,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Fruition",
      "name": "Signature Blend",
      "ref": 753,
      "date": 2011,
      "percent": 66,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Costa Rica"
    },
    {
      "company": "Fruition",
      "name": "Costa Rica",
      "ref": 781,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Costa Rica"
    },
    {
      "company": "Garden Island",
      "name": "Kaua'I, Alea Estate +world",
      "ref": 1367,
      "date": 2014,
      "percent": 85,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Hawaii"
    },
    {
      "company": "Georgia Ramon",
      "name": "Akesson P.",
      "ref": 1642,
      "date": 2015,
      "percent": 65,
      "location": "Germany",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Georgia Ramon",
      "name": "ABOCFA Coop",
      "ref": 1642,
      "date": 2015,
      "percent": 70,
      "location": "Germany",
      "rating": 4,
      "origin": "Ghana"
    },
    {
      "company": "Georgia Ramon",
      "name": "Conacado Coop",
      "ref": 1646,
      "date": 2015,
      "percent": 70,
      "location": "Germany",
      "rating": 3.5,
      "origin": "Domincan Republic"
    },
    {
      "company": "Georgia Ramon",
      "name": "Conacado Coop",
      "ref": 1646,
      "date": 2015,
      "percent": 80,
      "location": "Germany",
      "rating": 3.5,
      "origin": "Domincan Republic"
    },
    {
      "company": "Georgia Ramon",
      "name": "Akesson P.",
      "ref": 1646,
      "date": 2015,
      "percent": 75,
      "location": "Germany",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Glennmade",
      "name": "Toledo District, 2015 Harvest",
      "ref": 1848,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Belize"
    },
    {
      "company": "Glennmade",
      "name": "Bahia",
      "ref": 1672,
      "date": 2015,
      "percent": 66,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Brazil"
    },
    {
      "company": "Goodnow Farms",
      "name": "Almendra Blanca, batch 1004",
      "ref": 1924,
      "date": 2016,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Mexico"
    },
    {
      "company": "Goodnow Farms",
      "name": "El Carmen, batch 1003",
      "ref": 1924,
      "date": 2016,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Nicaragua"
    },
    {
      "company": "Goodnow Farms",
      "name": "Asochivite, batch 1005",
      "ref": 1924,
      "date": 2016,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Guatemala"
    },
    {
      "company": "Grand Place",
      "name": "Ben Tre, Dong Nai",
      "ref": 741,
      "date": 2011,
      "percent": 72,
      "location": "Vietnam",
      "rating": 3,
      "origin": "Vietnam"
    },
    {
      "company": "Green & Black's (ICAM)",
      "name": "Dark",
      "ref": 15,
      "date": 2006,
      "percent": 70,
      "location": "U.K.",
      "rating": 2.5,
      "origin": ""
    },
    {
      "company": "Green Bean to Bar",
      "name": "Madagascar",
      "ref": 1896,
      "date": 2016,
      "percent": 70,
      "location": "Japan",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Grenada Chocolate Co.",
      "name": "Grenada",
      "ref": 494,
      "date": 2010,
      "percent": 82,
      "location": "Grenada",
      "rating": 3.25,
      "origin": "Grenada"
    },
    {
      "company": "Grenada Chocolate Co.",
      "name": "Grenada",
      "ref": 363,
      "date": 2009,
      "percent": 60,
      "location": "Grenada",
      "rating": 2.75,
      "origin": "Grenada"
    },
    {
      "company": "Grenada Chocolate Co.",
      "name": "Grenada",
      "ref": 241,
      "date": 2008,
      "percent": 71,
      "location": "Grenada",
      "rating": 2.5,
      "origin": "Grenada"
    },
    {
      "company": "Guido Castagna",
      "name": "Arriba",
      "ref": 355,
      "date": 2009,
      "percent": 64,
      "location": "Italy",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Guido Castagna",
      "name": "Ghana",
      "ref": 355,
      "date": 2009,
      "percent": 64,
      "location": "Italy",
      "rating": 3,
      "origin": "Ghana"
    },
    {
      "company": "Guido Castagna",
      "name": "Trinidad & Tobago",
      "ref": 355,
      "date": 2009,
      "percent": 64,
      "location": "Italy",
      "rating": 3,
      "origin": "Trinidad, Tobago"
    },
    {
      "company": "Guido Castagna",
      "name": "Lacri Blend",
      "ref": 355,
      "date": 2009,
      "percent": 76,
      "location": "Italy",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Guido Castagna",
      "name": "Blend",
      "ref": 355,
      "date": 2009,
      "percent": 64,
      "location": "Italy",
      "rating": 3.25,
      "origin": "Ven, Trinidad, Ecuador"
    },
    {
      "company": "Guittard",
      "name": "Epique, Blend No. 49",
      "ref": 1602,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": ""
    },
    {
      "company": "Guittard",
      "name": "Haiti",
      "ref": 1053,
      "date": 2013,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Haiti"
    },
    {
      "company": "Guittard",
      "name": "Nicaragua",
      "ref": 1053,
      "date": 2013,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Guittard",
      "name": "Jamaica",
      "ref": 1053,
      "date": 2013,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Jamaica"
    },
    {
      "company": "Guittard",
      "name": "Ecuador",
      "ref": 1053,
      "date": 2013,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Guittard",
      "name": "Coucher du Soleil",
      "ref": 654,
      "date": 2011,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": ""
    },
    {
      "company": "Guittard",
      "name": "Lever du Soleil",
      "ref": 654,
      "date": 2011,
      "percent": 61,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": ""
    },
    {
      "company": "Guittard",
      "name": "Onyx",
      "ref": 654,
      "date": 2011,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": ""
    },
    {
      "company": "Guittard",
      "name": "Trinidad",
      "ref": 552,
      "date": 2010,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Trinidad"
    },
    {
      "company": "Guittard",
      "name": "O'ahu, N. Shore, Waialua E., Kakoleka",
      "ref": 316,
      "date": 2009,
      "percent": 55,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Hawaii"
    },
    {
      "company": "Guittard",
      "name": "Nocturne",
      "ref": 387,
      "date": 2009,
      "percent": 91,
      "location": "U.S.A.",
      "rating": 3,
      "origin": ""
    },
    {
      "company": "Guittard",
      "name": "Complexite",
      "ref": 387,
      "date": 2009,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": ""
    },
    {
      "company": "Guittard",
      "name": "Machu Pichu",
      "ref": 259,
      "date": 2008,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Guittard",
      "name": "Special Maker Reserve",
      "ref": 276,
      "date": 2008,
      "percent": 64,
      "location": "U.S.A.",
      "rating": 3,
      "origin": ""
    },
    {
      "company": "Guittard",
      "name": "Ocumare",
      "ref": 276,
      "date": 2008,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Guittard",
      "name": "Quetzalcoatl",
      "ref": 147,
      "date": 2007,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": ""
    },
    {
      "company": "Guittard",
      "name": "Chucuri",
      "ref": 15,
      "date": 2006,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Colombia"
    },
    {
      "company": "Guittard",
      "name": "Sur del Lago",
      "ref": 87,
      "date": 2006,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Venezuela"
    },
    {
      "company": "Guittard",
      "name": "Sambirano, Ambanja",
      "ref": 87,
      "date": 2006,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Guittard",
      "name": "Los Rios, Quevedo",
      "ref": 93,
      "date": 2006,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Guittard",
      "name": "Tsaranta",
      "ref": 93,
      "date": 2006,
      "percent": 61,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": ""
    },
    {
      "company": "Guittard",
      "name": "Semisweet",
      "ref": 99,
      "date": 2006,
      "percent": 61,
      "location": "U.S.A.",
      "rating": 3,
      "origin": ""
    },
    {
      "company": "Habitual",
      "name": "Papua New Guinea",
      "ref": 1197,
      "date": 2014,
      "percent": 80,
      "location": "Canada",
      "rating": 2.75,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Habitual",
      "name": "Campesino w/ nibs",
      "ref": 1197,
      "date": 2014,
      "percent": 74,
      "location": "Canada",
      "rating": 2.75,
      "origin": ""
    },
    {
      "company": "Habitual",
      "name": "Dominican Republic",
      "ref": 1197,
      "date": 2014,
      "percent": 75,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Habitual",
      "name": "Trinitario",
      "ref": 1197,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 3.5,
      "origin": ""
    },
    {
      "company": "Habitual",
      "name": "Downtown London",
      "ref": 1201,
      "date": 2014,
      "percent": 65,
      "location": "Canada",
      "rating": 2.75,
      "origin": ""
    },
    {
      "company": "Habitual",
      "name": "Africa meets Latina",
      "ref": 1201,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 3,
      "origin": ""
    },
    {
      "company": "Habitual",
      "name": "Amazonas",
      "ref": 1201,
      "date": 2014,
      "percent": 80,
      "location": "Canada",
      "rating": 3,
      "origin": ""
    },
    {
      "company": "Habitual",
      "name": "Sharkey",
      "ref": 1201,
      "date": 2014,
      "percent": 66,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Hawaii"
    },
    {
      "company": "Habitual",
      "name": "one hundred",
      "ref": 1205,
      "date": 2014,
      "percent": 100,
      "location": "Canada",
      "rating": 2,
      "origin": ""
    },
    {
      "company": "Hachez",
      "name": "Arriba",
      "ref": 166,
      "date": 2007,
      "percent": 77,
      "location": "Germany",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Hacienda El Castillo",
      "name": "Don Homero- Cerecita Valley",
      "ref": 1327,
      "date": 2014,
      "percent": 55,
      "location": "Ecuador",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Hacienda El Castillo",
      "name": "Don Homero- Cerecita Valley",
      "ref": 1327,
      "date": 2014,
      "percent": 70,
      "location": "Ecuador",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Haigh",
      "name": "South America and Africa",
      "ref": 701,
      "date": 2011,
      "percent": 70,
      "location": "Australia",
      "rating": 3,
      "origin": "South America, Africa"
    },
    {
      "company": "Harper Macaw",
      "name": "Vale do Juliana, w/ nibs",
      "ref": 1808,
      "date": 2016,
      "percent": 85,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Brazil"
    },
    {
      "company": "Harper Macaw",
      "name": "Brazil Blend",
      "ref": 1696,
      "date": 2015,
      "percent": 67,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Brazil"
    },
    {
      "company": "Harper Macaw",
      "name": "Tome Acu E., Amazon Rainforest",
      "ref": 1700,
      "date": 2015,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Harper Macaw",
      "name": "Vale do Juliana E., Atlantic Forest",
      "ref": 1700,
      "date": 2015,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Heilemann",
      "name": "Peru",
      "ref": 1876,
      "date": 2016,
      "percent": 64,
      "location": "Germany",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Heirloom Cacao Preservation (Brasstown)",
      "name": "Maya Mtn, Moho R., Toledo D., 2015",
      "ref": 1748,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Belize"
    },
    {
      "company": "Heirloom Cacao Preservation (Fruition)",
      "name": "Cota Brus, Terciopelo, 2015",
      "ref": 1748,
      "date": 2016,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Costa Rica"
    },
    {
      "company": "Heirloom Cacao Preservation (Guittard)",
      "name": "Alto Beni, Upper Rio Beni, 2014",
      "ref": 1239,
      "date": 2014,
      "percent": 67,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Bolivia"
    },
    {
      "company": "Heirloom Cacao Preservation (Guittard)",
      "name": "Wild Beni, Lower Rio Beni, Tranquilidad, 2014",
      "ref": 1243,
      "date": 2014,
      "percent": 67,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Bolivia"
    },
    {
      "company": "Heirloom Cacao Preservation (Guittard)",
      "name": "Los Rios, Hacienda Limon, Orecao, 2014",
      "ref": 1243,
      "date": 2014,
      "percent": 67,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "Heirloom Cacao Preservation (Guittard)",
      "name": "Maunawili, O'ahu, Agri Research C., 2014",
      "ref": 1243,
      "date": 2014,
      "percent": 67,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Hawaii"
    },
    {
      "company": "Heirloom Cacao Preservation (Manoa)",
      "name": "Maunawili, O'ahu, Agri Research C., 2015",
      "ref": 1744,
      "date": 2016,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Hawaii"
    },
    {
      "company": "Heirloom Cacao Preservation (Millcreek)",
      "name": "Los Rios, Hacienda Limon, Orecao, 2015",
      "ref": 1744,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Heirloom Cacao Preservation (Mindo)",
      "name": "Pinchincha, Mindo, Coop Nueva Esper., 2015",
      "ref": 1748,
      "date": 2016,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Heirloom Cacao Preservation (Zokoko)",
      "name": "Alto Beni, Upper Rio Beni, 2015",
      "ref": 1744,
      "date": 2016,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Bolivia"
    },
    {
      "company": "Heirloom Cacao Preservation (Zokoko)",
      "name": "Wild Beni, Lower Rio Beni, Tranquilidad, 2015",
      "ref": 1744,
      "date": 2016,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Bolivia"
    },
    {
      "company": "hello cocoa",
      "name": "Uganda",
      "ref": 1458,
      "date": 2015,
      "percent": 57,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Uganda"
    },
    {
      "company": "hello cocoa",
      "name": "Venezuela",
      "ref": 1462,
      "date": 2015,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "hexx",
      "name": "Tanzania",
      "ref": 1546,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Tanzania"
    },
    {
      "company": "hexx",
      "name": "Madagascar",
      "ref": 1546,
      "date": 2015,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "hexx",
      "name": "Venezuela",
      "ref": 1546,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "hexx",
      "name": "Ecuador",
      "ref": 1550,
      "date": 2015,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "hexx",
      "name": "Peru",
      "ref": 1550,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Hogarth",
      "name": "Akesson's Estate",
      "ref": 1712,
      "date": 2016,
      "percent": 70,
      "location": "New Zealand",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Hogarth",
      "name": "Carenero Superior",
      "ref": 1712,
      "date": 2016,
      "percent": 72,
      "location": "New Zealand",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Hogarth",
      "name": "Conacado",
      "ref": 1712,
      "date": 2016,
      "percent": 75,
      "location": "New Zealand",
      "rating": 3.25,
      "origin": "Domincan Republic"
    },
    {
      "company": "Hogarth",
      "name": "Gran Blanco",
      "ref": 1712,
      "date": 2016,
      "percent": 66,
      "location": "New Zealand",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Hoja Verde (Tulicorp)",
      "name": "Arriba",
      "ref": 414,
      "date": 2009,
      "percent": 80,
      "location": "Ecuador",
      "rating": 2,
      "origin": "Ecuador"
    },
    {
      "company": "Hoja Verde (Tulicorp)",
      "name": "Manabi",
      "ref": 414,
      "date": 2009,
      "percent": 80,
      "location": "Ecuador",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Hoja Verde (Tulicorp)",
      "name": "Arriba",
      "ref": 414,
      "date": 2009,
      "percent": 72,
      "location": "Ecuador",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Hoja Verde (Tulicorp)",
      "name": "Arriba",
      "ref": 414,
      "date": 2009,
      "percent": 58,
      "location": "Ecuador",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Hoja Verde (Tulicorp)",
      "name": "Manabi",
      "ref": 414,
      "date": 2009,
      "percent": 58,
      "location": "Ecuador",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Holy Cacao",
      "name": "Maranon",
      "ref": 1872,
      "date": 2016,
      "percent": 70,
      "location": "Israel",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Holy Cacao",
      "name": "Camino Verde P., Balao, Guayas",
      "ref": 1466,
      "date": 2015,
      "percent": 70,
      "location": "Israel",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Holy Cacao",
      "name": "Sambirano",
      "ref": 1466,
      "date": 2015,
      "percent": 70,
      "location": "Israel",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Holy Cacao",
      "name": "Gran Couva",
      "ref": 1466,
      "date": 2015,
      "percent": 70,
      "location": "Israel",
      "rating": 3.5,
      "origin": "Trinidad"
    },
    {
      "company": "Holy Cacao",
      "name": "Mara",
      "ref": 1466,
      "date": 2015,
      "percent": 70,
      "location": "Israel",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Holy Cacao",
      "name": "Ivory Coast",
      "ref": 431,
      "date": 2009,
      "percent": 70,
      "location": "Israel",
      "rating": 2.5,
      "origin": "Ivory Coast"
    },
    {
      "company": "Holy Cacao",
      "name": "Hispaniola",
      "ref": 431,
      "date": 2009,
      "percent": 70,
      "location": "Israel",
      "rating": 2.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Holy Cacao",
      "name": "San Martin",
      "ref": 431,
      "date": 2009,
      "percent": 70,
      "location": "Israel",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Holy Cacao",
      "name": "Hispaniola w/ nibs",
      "ref": 431,
      "date": 2009,
      "percent": 75,
      "location": "Israel",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Honest",
      "name": "Ecuador, w/ nibs",
      "ref": 1327,
      "date": 2014,
      "percent": 72,
      "location": "South Africa",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Hotel Chocolat",
      "name": "Pepiniere, single Cote",
      "ref": 1654,
      "date": 2015,
      "percent": 70,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "St. Lucia"
    },
    {
      "company": "Hotel Chocolat",
      "name": "Marcial, single Cote, 2012",
      "ref": 1030,
      "date": 2013,
      "percent": 70,
      "location": "U.K.",
      "rating": 4,
      "origin": "St. Lucia"
    },
    {
      "company": "Hotel Chocolat",
      "name": "Island Growers, 2012, 120hr c.",
      "ref": 1113,
      "date": 2013,
      "percent": 100,
      "location": "U.K.",
      "rating": 1.75,
      "origin": "St. Lucia"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Trinidad",
      "ref": 1038,
      "date": 2013,
      "percent": 75,
      "location": "U.K.",
      "rating": 3,
      "origin": "Trinidad"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Mekong Delta & Dong Nai",
      "ref": 1038,
      "date": 2013,
      "percent": 80,
      "location": "U.K.",
      "rating": 3.5,
      "origin": "Vietnam"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Los Rios, H. Iara",
      "ref": 1065,
      "date": 2013,
      "percent": 90,
      "location": "U.K.",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Somia Plantation, Akesson, 2012",
      "ref": 1065,
      "date": 2013,
      "percent": 72,
      "location": "U.K.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Los Rios, H. Iara, 2012",
      "ref": 1065,
      "date": 2013,
      "percent": 82,
      "location": "U.K.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Chanchamayo, Pichanadi, 2012, 60hr c.",
      "ref": 1109,
      "date": 2013,
      "percent": 100,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Los Rios, H. Iara, 2012, 120hr c.",
      "ref": 1113,
      "date": 2013,
      "percent": 100,
      "location": "U.K.",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Conacado, 2012, 120hr c.",
      "ref": 1113,
      "date": 2013,
      "percent": 100,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Sambirano",
      "ref": 809,
      "date": 2012,
      "percent": 66,
      "location": "U.K.",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Los Rios, H. Iara, 96hr c.",
      "ref": 623,
      "date": 2011,
      "percent": 80,
      "location": "U.K.",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Island Growers, 120hr c.",
      "ref": 623,
      "date": 2011,
      "percent": 65,
      "location": "U.K.",
      "rating": 3,
      "origin": "St. Lucia"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Island Growers, 96hr c.",
      "ref": 623,
      "date": 2011,
      "percent": 65,
      "location": "U.K.",
      "rating": 3.25,
      "origin": "St. Lucia"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Ecuador",
      "ref": 552,
      "date": 2010,
      "percent": 70,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Santo Domingo",
      "ref": 552,
      "date": 2010,
      "percent": 70,
      "location": "U.K.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Chuao",
      "ref": 600,
      "date": 2010,
      "percent": 70,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "St. Lucia",
      "ref": 245,
      "date": 2008,
      "percent": 72,
      "location": "U.K.",
      "rating": 3,
      "origin": "St. Lucia"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Uganda",
      "ref": 296,
      "date": 2008,
      "percent": 80,
      "location": "U.K.",
      "rating": 2.5,
      "origin": "Uganda"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Tanzania",
      "ref": 296,
      "date": 2008,
      "percent": 75,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Tanzania"
    },
    {
      "company": "Hotel Chocolat (Coppeneur)",
      "name": "Uba Budo",
      "ref": 300,
      "date": 2008,
      "percent": 72,
      "location": "U.K.",
      "rating": 3,
      "origin": "Sao Tome"
    },
    {
      "company": "Hummingbird",
      "name": "Lam Dong",
      "ref": 1542,
      "date": 2015,
      "percent": 70,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Vietnam"
    },
    {
      "company": "Hummingbird",
      "name": "Bolivia",
      "ref": 1307,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 3,
      "origin": "Bolivia"
    },
    {
      "company": "Hummingbird",
      "name": "Bolivia, Bo-nib-ia, w/ nibs",
      "ref": 1311,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 3,
      "origin": "Bolivia"
    },
    {
      "company": "Hummingbird",
      "name": "Momotombo",
      "ref": 1311,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 3,
      "origin": "Nicaragua"
    },
    {
      "company": "Hummingbird",
      "name": "Hispaniola",
      "ref": 1311,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Hummingbird",
      "name": "Zorzal Reserva w/ Charles Kerchner",
      "ref": 1387,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Hummingbird",
      "name": "Ocumare, Cumboto",
      "ref": 1097,
      "date": 2013,
      "percent": 70,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Hummingbird",
      "name": "Amazonas",
      "ref": 1097,
      "date": 2013,
      "percent": 70,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Idilio (Felchlin)",
      "name": "Chuao, Venezuela",
      "ref": 1085,
      "date": 2013,
      "percent": 72,
      "location": "Switzerland",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Idilio (Felchlin)",
      "name": "Coopertiva Amazona",
      "ref": 725,
      "date": 2011,
      "percent": 72,
      "location": "Switzerland",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Idilio (Felchlin)",
      "name": "Sur del Lago, Amiari Meridena, Zulia, 48hr c.",
      "ref": 725,
      "date": 2011,
      "percent": 72,
      "location": "Switzerland",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Idilio (Felchlin)",
      "name": "Choroni, Finca Torres, 48hr c.",
      "ref": 729,
      "date": 2011,
      "percent": 72,
      "location": "Switzerland",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Idilio (Felchlin)",
      "name": "Ocumare, H. Cata, 48hr c.",
      "ref": 733,
      "date": 2011,
      "percent": 72,
      "location": "Switzerland",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Idilio (Felchlin)",
      "name": "Porcelana, Zulia",
      "ref": 733,
      "date": 2011,
      "percent": 74,
      "location": "Switzerland",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Idilio (Felchlin)",
      "name": "Ocumare, H. Cata, w/ nibs",
      "ref": 737,
      "date": 2011,
      "percent": 72,
      "location": "Switzerland",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Idilio (Felchlin)",
      "name": "Carenero Superior, Urrutia, Barlovento",
      "ref": 737,
      "date": 2011,
      "percent": 70,
      "location": "Switzerland",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Idilio (Felchlin)",
      "name": "Coopertiva Amazona w/ nibs",
      "ref": 737,
      "date": 2011,
      "percent": 72,
      "location": "Switzerland",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Idilio (Felchlin)",
      "name": "Sur del Lago, Amiari Meridena, Zulia, w/ nibs",
      "ref": 737,
      "date": 2011,
      "percent": 72,
      "location": "Switzerland",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Indah",
      "name": "India (south)",
      "ref": 1788,
      "date": 2016,
      "percent": 61,
      "location": "India",
      "rating": 2.5,
      "origin": "India"
    },
    {
      "company": "Indaphoria",
      "name": "La Red",
      "ref": 821,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Indaphoria",
      "name": "Conacado, Manifesto",
      "ref": 907,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Indi",
      "name": "Honduras",
      "ref": 1255,
      "date": 2014,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Honduras"
    },
    {
      "company": "iQ Chocolate",
      "name": "Satipo region, white label",
      "ref": 943,
      "date": 2012,
      "percent": 72,
      "location": "Scotland",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "iQ Chocolate",
      "name": "black label",
      "ref": 943,
      "date": 2012,
      "percent": 72,
      "location": "Scotland",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Isidro",
      "name": "Madagascar",
      "ref": 1275,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Isidro",
      "name": "Peru",
      "ref": 1279,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 2.25,
      "origin": "Peru"
    },
    {
      "company": "Isidro",
      "name": "Belize",
      "ref": 1279,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Belize"
    },
    {
      "company": "Isidro",
      "name": "Dominican Republic",
      "ref": 1279,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Izard",
      "name": "Maya Mountain, Toledo, Batch 29",
      "ref": 1542,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Belize"
    },
    {
      "company": "Izard",
      "name": "Elvesia P., Batch 32",
      "ref": 1546,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Jacque Torres",
      "name": "Trinatario Treasure",
      "ref": 5,
      "date": 2006,
      "percent": 71,
      "location": "U.S.A.",
      "rating": 2,
      "origin": "Ghana"
    },
    {
      "company": "Jordis",
      "name": "Madagascar",
      "ref": 1534,
      "date": 2015,
      "percent": 63,
      "location": "Czech Republic",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Just Good Chocolate",
      "name": "Belize",
      "ref": 1375,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Belize"
    },
    {
      "company": "Just Good Chocolate",
      "name": "Madagascar",
      "ref": 1375,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Just Good Chocolate",
      "name": "Peru",
      "ref": 1375,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Peru"
    },
    {
      "company": "Kah Kow",
      "name": "Rizek Cacao, Cibao Valley, Domin. Rep.",
      "ref": 1061,
      "date": 2013,
      "percent": 70,
      "location": "Domincan Republic",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Kah Kow",
      "name": "Rizek Cacao, Domin. Rep.",
      "ref": 1069,
      "date": 2013,
      "percent": 82,
      "location": "Domincan Republic",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Kah Kow",
      "name": "Rizek Cacao, Domin. Rep.",
      "ref": 1069,
      "date": 2013,
      "percent": 55,
      "location": "Domincan Republic",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Kah Kow",
      "name": "Rizek Cacao, Domin. Rep.",
      "ref": 1073,
      "date": 2013,
      "percent": 62,
      "location": "Domincan Republic",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Kakao",
      "name": "Peru",
      "ref": 837,
      "date": 2012,
      "percent": 64,
      "location": "Germany",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Kakao",
      "name": "Vanuatu",
      "ref": 387,
      "date": 2009,
      "percent": 65,
      "location": "Germany",
      "rating": 3.75,
      "origin": "Vanuatu"
    },
    {
      "company": "Kallari (Ecuatoriana)",
      "name": "Sisa 36hr/ W. F. blend prototype",
      "ref": 241,
      "date": 2008,
      "percent": 70,
      "location": "Ecuador",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Kallari (Ecuatoriana)",
      "name": "Sisa's Secret/ original micro",
      "ref": 241,
      "date": 2008,
      "percent": 70,
      "location": "Ecuador",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Kallari (Ecuatoriana)",
      "name": "Roberto",
      "ref": 245,
      "date": 2008,
      "percent": 75,
      "location": "Ecuador",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Kallari (Ecuatoriana)",
      "name": "Diego/ original micro",
      "ref": 248,
      "date": 2008,
      "percent": 85,
      "location": "Ecuador",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Kallari (Ecuatoriana)",
      "name": "Diego 48hr/ W.F. blend prototype",
      "ref": 248,
      "date": 2008,
      "percent": 85,
      "location": "Ecuador",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Kallari (Ecuatoriana)",
      "name": "Diego 60hr/ W.F. blend prototype",
      "ref": 248,
      "date": 2008,
      "percent": 85,
      "location": "Ecuador",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Kallari (Ecuatoriana)",
      "name": "Cacao Nacional W.F.",
      "ref": 263,
      "date": 2008,
      "percent": 75,
      "location": "Ecuador",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Kallari (Ecuatoriana)",
      "name": "Cacao Nacional W.F.",
      "ref": 269,
      "date": 2008,
      "percent": 85,
      "location": "Ecuador",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Kaoka (Cemoi)",
      "name": "Noir",
      "ref": 404,
      "date": 2009,
      "percent": 70,
      "location": "France",
      "rating": 2.75,
      "origin": ""
    },
    {
      "company": "Kaoka (Cemoi)",
      "name": "Ecuador",
      "ref": 423,
      "date": 2009,
      "percent": 80,
      "location": "France",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Kerchner",
      "name": "La Red, Project Reserva, Guaconejo",
      "ref": 1133,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Ki' Xocolatl",
      "name": "Dark",
      "ref": 431,
      "date": 2009,
      "percent": 72,
      "location": "Mexico",
      "rating": 2,
      "origin": "Mexico"
    },
    {
      "company": "Kiskadee",
      "name": "La Red, Guanconjeco",
      "ref": 1251,
      "date": 2014,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Kto",
      "name": "San Martin",
      "ref": 1422,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Kto",
      "name": "Ocumare",
      "ref": 1422,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Kto",
      "name": "Belize",
      "ref": 1422,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Belize"
    },
    {
      "company": "Kto",
      "name": "Sambirano Valley",
      "ref": 1422,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Kto",
      "name": "Belize",
      "ref": 1426,
      "date": 2014,
      "percent": 90,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Belize"
    },
    {
      "company": "Kto",
      "name": "Elvesia",
      "ref": 1426,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Kto",
      "name": "ROIG",
      "ref": 1426,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "K'ul",
      "name": "Kafupbo, Petit Bourg, De Borgnes",
      "ref": 1840,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Haiti"
    },
    {
      "company": "K'ul",
      "name": "Maranon, Fortunato No. 4",
      "ref": 1852,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "K'ul",
      "name": "Los Rios, Hacienda Limon, Heirloom",
      "ref": 1852,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "K'ul",
      "name": "Bahia, Fazenda Camboa",
      "ref": 1852,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Brazil"
    },
    {
      "company": "Kyya",
      "name": "Uganda",
      "ref": 1359,
      "date": 2014,
      "percent": 72.5,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Uganda"
    },
    {
      "company": "Kyya",
      "name": "Hispaniola",
      "ref": 1359,
      "date": 2014,
      "percent": 72.5,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Kyya",
      "name": "Ecuador",
      "ref": 1363,
      "date": 2014,
      "percent": 72.5,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Kyya",
      "name": "Madagascar",
      "ref": 1363,
      "date": 2014,
      "percent": 72.5,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "L.A. Burdick (Felchlin)",
      "name": "Peru",
      "ref": 891,
      "date": 2012,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "L.A. Burdick (Felchlin)",
      "name": "Brazil",
      "ref": 891,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Brazil"
    },
    {
      "company": "L.A. Burdick (Felchlin)",
      "name": "Chuao",
      "ref": 927,
      "date": 2012,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "L.A. Burdick (Felchlin)",
      "name": "Quito",
      "ref": 682,
      "date": 2011,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "L.A. Burdick (Felchlin)",
      "name": "Grenada",
      "ref": 576,
      "date": 2010,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Grenada"
    },
    {
      "company": "L.A. Burdick (Felchlin)",
      "name": "Dominican Republic",
      "ref": 576,
      "date": 2010,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "L.A. Burdick (Felchlin)",
      "name": "Venzuela",
      "ref": 597,
      "date": 2010,
      "percent": 71,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "L.A. Burdick (Felchlin)",
      "name": "Madagascar",
      "ref": 431,
      "date": 2009,
      "percent": 64,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "L.A. Burdick (Felchlin)",
      "name": "Bolivian",
      "ref": 451,
      "date": 2009,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Bolivia"
    },
    {
      "company": "La Chocolaterie Nanairo",
      "name": "Lumas, 2015 Harvest, Batch 6, brown sugar",
      "ref": 1892,
      "date": 2016,
      "percent": 70,
      "location": "Japan",
      "rating": 2.25,
      "origin": "Peru"
    },
    {
      "company": "La Chocolaterie Nanairo",
      "name": "Lumas, 2015 Harvest, Batch 7",
      "ref": 1892,
      "date": 2016,
      "percent": 70,
      "location": "Japan",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "La Chocolaterie Nanairo",
      "name": "Tumbes, 2013 Harvest, Batch 8",
      "ref": 1892,
      "date": 2016,
      "percent": 70,
      "location": "Japan",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "La Chocolaterie Nanairo",
      "name": "Belize, 2014 Harvest, Batch 9",
      "ref": 1892,
      "date": 2016,
      "percent": 70,
      "location": "Japan",
      "rating": 3,
      "origin": "Belize"
    },
    {
      "company": "La Maison du Chocolat (Valrhona)",
      "name": "Cuana, 2013",
      "ref": 1121,
      "date": 2013,
      "percent": 74,
      "location": "France",
      "rating": 2.75,
      "origin": "Africa, Carribean, C. Am."
    },
    {
      "company": "La Maison du Chocolat (Valrhona)",
      "name": "Tobago",
      "ref": 1145,
      "date": 2013,
      "percent": 60,
      "location": "France",
      "rating": 3.25,
      "origin": "Tobago"
    },
    {
      "company": "La Maison du Chocolat (Valrhona)",
      "name": "Acarigua, w/ nibs",
      "ref": 1189,
      "date": 2013,
      "percent": 56,
      "location": "France",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "La Maison du Chocolat (Valrhona)",
      "name": "Loma Sotavento",
      "ref": 891,
      "date": 2012,
      "percent": 66,
      "location": "France",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "La Maison du Chocolat (Valrhona)",
      "name": "Grenada",
      "ref": 741,
      "date": 2011,
      "percent": 68,
      "location": "France",
      "rating": 3.5,
      "origin": "Grenada"
    },
    {
      "company": "La Maison du Chocolat (Valrhona)",
      "name": "Akosombo",
      "ref": 346,
      "date": 2009,
      "percent": 68,
      "location": "France",
      "rating": 3.25,
      "origin": "Ghana"
    },
    {
      "company": "La Maison du Chocolat (Valrhona)",
      "name": "Porcelana, Pariguan",
      "ref": 346,
      "date": 2009,
      "percent": 69,
      "location": "France",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "La Maison du Chocolat (Valrhona)",
      "name": "Kuruba",
      "ref": 439,
      "date": 2009,
      "percent": 60,
      "location": "France",
      "rating": 3,
      "origin": ""
    },
    {
      "company": "La Maison du Chocolat (Valrhona)",
      "name": "Orinoco",
      "ref": 445,
      "date": 2009,
      "percent": 60,
      "location": "France",
      "rating": 3.75,
      "origin": ""
    },
    {
      "company": "La Maison du Chocolat (Valrhona)",
      "name": "Cuana, 2008",
      "ref": 230,
      "date": 2008,
      "percent": 74,
      "location": "France",
      "rating": 3.5,
      "origin": "Ven., Indonesia, Ecuad."
    },
    {
      "company": "La Oroquidea",
      "name": "Peruvian Amazon",
      "ref": 721,
      "date": 2011,
      "percent": 72,
      "location": "Peru",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "La Pepa de Oro",
      "name": "Vinces",
      "ref": 713,
      "date": 2011,
      "percent": 60,
      "location": "Ecuador",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Laia aka Chat-Noir",
      "name": "Madagascar, Batch 59/100",
      "ref": 1590,
      "date": 2015,
      "percent": 75,
      "location": "France",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Laia aka Chat-Noir",
      "name": "Vietnam, Batch 50/100",
      "ref": 1590,
      "date": 2015,
      "percent": 75,
      "location": "France",
      "rating": 2.75,
      "origin": "Vietnam"
    },
    {
      "company": "Laia aka Chat-Noir",
      "name": "Cuba, Batch 59/100",
      "ref": 1590,
      "date": 2015,
      "percent": 75,
      "location": "France",
      "rating": 3,
      "origin": "Cuba"
    },
    {
      "company": "Laia aka Chat-Noir",
      "name": "Peru, Batch 51/100",
      "ref": 1590,
      "date": 2015,
      "percent": 75,
      "location": "France",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Laia aka Chat-Noir",
      "name": "Ivory Coast, Batch 56/100",
      "ref": 1594,
      "date": 2015,
      "percent": 75,
      "location": "France",
      "rating": 3,
      "origin": "Ivory Coast"
    },
    {
      "company": "Laia aka Chat-Noir",
      "name": "Sao Tome, Batch 151",
      "ref": 1638,
      "date": 2015,
      "percent": 75,
      "location": "France",
      "rating": 3.5,
      "origin": "Sao Tome"
    },
    {
      "company": "Laia aka Chat-Noir",
      "name": "Bahia, Batch 148",
      "ref": 1642,
      "date": 2015,
      "percent": 75,
      "location": "France",
      "rating": 3.25,
      "origin": "Brazil"
    },
    {
      "company": "Laia aka Chat-Noir",
      "name": "Lam Dong, Batch 153",
      "ref": 1642,
      "date": 2015,
      "percent": 75,
      "location": "France",
      "rating": 3.75,
      "origin": "Vietnam"
    },
    {
      "company": "Laia aka Chat-Noir",
      "name": "Cuba",
      "ref": 1434,
      "date": 2014,
      "percent": 70,
      "location": "France",
      "rating": 2.75,
      "origin": "Cuba"
    },
    {
      "company": "Laia aka Chat-Noir",
      "name": "Trinidad-Tobago",
      "ref": 1438,
      "date": 2014,
      "percent": 68,
      "location": "France",
      "rating": 2.75,
      "origin": "Trinidad-Tobago"
    },
    {
      "company": "Lajedo do Ouro",
      "name": "Catongo",
      "ref": 927,
      "date": 2012,
      "percent": 70,
      "location": "Brazil",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Lake Champlain (Callebaut)",
      "name": "Tanzania",
      "ref": 327,
      "date": 2009,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Tanzania"
    },
    {
      "company": "L'Amourette",
      "name": "Rugoso",
      "ref": 1784,
      "date": 2016,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Nicaragua"
    },
    {
      "company": "L'Amourette",
      "name": "Carenero Superior",
      "ref": 833,
      "date": 2012,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "L'Amourette",
      "name": "Rio Caribe",
      "ref": 833,
      "date": 2012,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "L'Amourette",
      "name": "Blend",
      "ref": 853,
      "date": 2012,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Peru, Ecuador, Venezuela"
    },
    {
      "company": "Letterpress",
      "name": "La Masica, Batch 7, FHIA",
      "ref": 1952,
      "date": 2017,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Honduras"
    },
    {
      "company": "Letterpress",
      "name": "Maya Mtn, Batch 18, Heirloom",
      "ref": 1952,
      "date": 2017,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Belize"
    },
    {
      "company": "Letterpress",
      "name": "Liberia",
      "ref": 1728,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Liberia"
    },
    {
      "company": "Letterpress",
      "name": "Beniamo",
      "ref": 1562,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Bolivia"
    },
    {
      "company": "Letterpress",
      "name": "San Juan Estate, Gran Couva",
      "ref": 1562,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Trinidad"
    },
    {
      "company": "Letterpress",
      "name": "San Andres",
      "ref": 1566,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Costa Rica"
    },
    {
      "company": "Letterpress",
      "name": "La Red, Guaconejo",
      "ref": 1566,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Domincan Republic"
    },
    {
      "company": "Letterpress",
      "name": "Kokoa Kamili",
      "ref": 1566,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Tanzania"
    },
    {
      "company": "Letterpress",
      "name": "Maranura",
      "ref": 1371,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Levy",
      "name": "Sambirano",
      "ref": 1231,
      "date": 2014,
      "percent": 71,
      "location": "Finland",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Lilla",
      "name": "Madagascar",
      "ref": 1856,
      "date": 2016,
      "percent": 70,
      "location": "Finland",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Lillie Belle",
      "name": "Perfect Illusion",
      "ref": 855,
      "date": 2012,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Lillie Belle",
      "name": "Bolivia, Wild Thing",
      "ref": 903,
      "date": 2012,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Bolivia"
    },
    {
      "company": "Lillie Belle",
      "name": "La Selva",
      "ref": 903,
      "date": 2012,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Lillie Belle",
      "name": "Purple Haze",
      "ref": 947,
      "date": 2012,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela, Dom. Rep."
    },
    {
      "company": "Lillie Belle",
      "name": "The Other One, Grand Cru",
      "ref": 947,
      "date": 2012,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Lillie Belle",
      "name": "Wild Thing",
      "ref": 947,
      "date": 2012,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Bolivia"
    },
    {
      "company": "Lindt & Sprungli",
      "name": "Excellence (US Version)",
      "ref": 157,
      "date": 2007,
      "percent": 85,
      "location": "Switzerland",
      "rating": 3,
      "origin": ""
    },
    {
      "company": "Loiza",
      "name": "Puerto Rico",
      "ref": 1049,
      "date": 2013,
      "percent": 65,
      "location": "Puerto Rico",
      "rating": 2.5,
      "origin": "Puerto Rico"
    },
    {
      "company": "Lonohana",
      "name": "Haleiwa, O'ahu; Lonohana E., Kanahiku",
      "ref": 1383,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Hawaii"
    },
    {
      "company": "Lonohana",
      "name": "Haleiwa E, O'ahu, 2014",
      "ref": 1395,
      "date": 2014,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Hawaii"
    },
    {
      "company": "Lonohana",
      "name": "Haleiwa E, O'ahu, 2014",
      "ref": 1395,
      "date": 2014,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Hawaii"
    },
    {
      "company": "Lonohana",
      "name": "Opaeula Estate, O'ahu, Nene, CG Exclusive",
      "ref": 1093,
      "date": 2013,
      "percent": 71,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Hawaii"
    },
    {
      "company": "Lonohana",
      "name": "Opaeula Estate, O'ahu, Ele'ele",
      "ref": 1097,
      "date": 2013,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Hawaii"
    },
    {
      "company": "Lonohana",
      "name": "Hawaiian Crown, Kona Vanilla",
      "ref": 1097,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Hawaii"
    },
    {
      "company": "Love Bar",
      "name": "Nicaragua",
      "ref": 1502,
      "date": 2015,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2,
      "origin": "Nicaragua"
    },
    {
      "company": "Luker",
      "name": "Selva",
      "ref": 552,
      "date": 2010,
      "percent": 46,
      "location": "Colombia",
      "rating": 2.75,
      "origin": "Colombia, Ecuador"
    },
    {
      "company": "Luker",
      "name": "Macondo",
      "ref": 552,
      "date": 2010,
      "percent": 60,
      "location": "Colombia",
      "rating": 3,
      "origin": "Colombia, Ecuador"
    },
    {
      "company": "Luker",
      "name": "Misterio",
      "ref": 552,
      "date": 2010,
      "percent": 58,
      "location": "Colombia",
      "rating": 3,
      "origin": "Colombia, Ecuador"
    },
    {
      "company": "Luker",
      "name": "Santander",
      "ref": 552,
      "date": 2010,
      "percent": 65,
      "location": "Colombia",
      "rating": 3.5,
      "origin": "Colombia"
    },
    {
      "company": "Machu Picchu Trading Co.",
      "name": "Peru",
      "ref": 721,
      "date": 2011,
      "percent": 70,
      "location": "Peru",
      "rating": 1.5,
      "origin": "Peru"
    },
    {
      "company": "Machu Picchu Trading Co.",
      "name": "Peru",
      "ref": 552,
      "date": 2010,
      "percent": 55,
      "location": "Peru",
      "rating": 2.25,
      "origin": "Peru"
    },
    {
      "company": "Madecasse (Cinagra)",
      "name": "Madagascar",
      "ref": 284,
      "date": 2008,
      "percent": 67,
      "location": "Madagascar",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Madecasse (Cinagra)",
      "name": "Madagascar",
      "ref": 284,
      "date": 2008,
      "percent": 70,
      "location": "Madagascar",
      "rating": 3.75,
      "origin": "Madagascar"
    },
    {
      "company": "Madecasse (Cinagra)",
      "name": "Madagascar",
      "ref": 284,
      "date": 2008,
      "percent": 63,
      "location": "Madagascar",
      "rating": 4,
      "origin": "Madagascar"
    },
    {
      "company": "Madecasse (Cinagra)",
      "name": "Madagascar",
      "ref": 288,
      "date": 2008,
      "percent": 75,
      "location": "Madagascar",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Madre",
      "name": "Guadalcanal",
      "ref": 1940,
      "date": 2017,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Solomon Islands"
    },
    {
      "company": "Madre",
      "name": "Puerto Rico",
      "ref": 1085,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Puerto Rico"
    },
    {
      "company": "Madre",
      "name": "Brazil",
      "ref": 1085,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Madre",
      "name": "Choobua, Kona",
      "ref": 1089,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Hawaii"
    },
    {
      "company": "Madre",
      "name": "Xocunusco, Chiapas, Pichucalco",
      "ref": 1089,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Mexico"
    },
    {
      "company": "Madre",
      "name": "Hamakua Coast, Kokoleka",
      "ref": 991,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Hawaii"
    },
    {
      "company": "Madre",
      "name": "Criollo, Hawaii",
      "ref": 995,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Hawaii"
    },
    {
      "company": "Madre",
      "name": "Kaua'i",
      "ref": 995,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Hawaii"
    },
    {
      "company": "Madre",
      "name": "Dominican",
      "ref": 672,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Madre",
      "name": "Upala",
      "ref": 693,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Costa Rica"
    },
    {
      "company": "Madre",
      "name": "Chiapas, Triple Cacao",
      "ref": 607,
      "date": 2010,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Mexico"
    },
    {
      "company": "Maglio",
      "name": "Africa",
      "ref": 300,
      "date": 2008,
      "percent": 75,
      "location": "Italy",
      "rating": 2,
      "origin": "Tanzania"
    },
    {
      "company": "Maglio",
      "name": "Ecuador",
      "ref": 308,
      "date": 2008,
      "percent": 70,
      "location": "Italy",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Maglio",
      "name": "Cuba",
      "ref": 308,
      "date": 2008,
      "percent": 70,
      "location": "Italy",
      "rating": 3.25,
      "origin": "Cuba"
    },
    {
      "company": "Maglio",
      "name": "Santo Domingo",
      "ref": 308,
      "date": 2008,
      "percent": 70,
      "location": "Italy",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Majani",
      "name": "Ecuador",
      "ref": 531,
      "date": 2010,
      "percent": 70,
      "location": "Italy",
      "rating": 2,
      "origin": "Ecuador"
    },
    {
      "company": "Malagasy (Chocolaterie Robert)",
      "name": "Sambirano 2006",
      "ref": 184,
      "date": 2007,
      "percent": 75,
      "location": "Madagascar",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Malagasy (Chocolaterie Robert)",
      "name": "Mora Mora 2006",
      "ref": 184,
      "date": 2007,
      "percent": 73,
      "location": "Madagascar",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Malagos",
      "name": "Davao, Mt. Talamo foothills",
      "ref": 1121,
      "date": 2013,
      "percent": 65,
      "location": "Philippines",
      "rating": 3.5,
      "origin": "Philippines"
    },
    {
      "company": "Malie Kai (Guittard)",
      "name": "O'ahu, N. Shore, Waialua Estate w/ nibs",
      "ref": 502,
      "date": 2010,
      "percent": 55,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Hawaii"
    },
    {
      "company": "Malie Kai (Guittard)",
      "name": "O'ahu, N. Shore, Waialua Estate",
      "ref": 311,
      "date": 2009,
      "percent": 55,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Hawaii"
    },
    {
      "company": "Malmo",
      "name": "Chuao",
      "ref": 1856,
      "date": 2016,
      "percent": 70,
      "location": "Sweden",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Mana",
      "name": "Ecuador",
      "ref": 1446,
      "date": 2015,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Mana",
      "name": "Peru",
      "ref": 1219,
      "date": 2014,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Mana",
      "name": "Venezuela",
      "ref": 1219,
      "date": 2014,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Mana",
      "name": "Conacado",
      "ref": 821,
      "date": 2012,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Manifesto Cacao",
      "name": "Colombia",
      "ref": 1331,
      "date": 2014,
      "percent": 70,
      "location": "Colombia",
      "rating": 2.75,
      "origin": "Colombia"
    },
    {
      "company": "Manoa",
      "name": "Markham Valley",
      "ref": 1522,
      "date": 2015,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Manoa",
      "name": "Coto Brus",
      "ref": 1522,
      "date": 2015,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Costa Rica"
    },
    {
      "company": "Manoa",
      "name": "Waiahole, O'ahu",
      "ref": 1089,
      "date": 2013,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Hawaii"
    },
    {
      "company": "Manoa",
      "name": "Liberia, #174",
      "ref": 1003,
      "date": 2012,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Liberia"
    },
    {
      "company": "Manoa",
      "name": "Hamakua, Hawaiian Crown, #176",
      "ref": 1007,
      "date": 2012,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Hawaii"
    },
    {
      "company": "Manoa",
      "name": "Piura",
      "ref": 1007,
      "date": 2012,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Manoa",
      "name": "Oahu, Winward, #151, Maunawili district",
      "ref": 1007,
      "date": 2012,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Hawaii"
    },
    {
      "company": "Manufaktura Czekolady",
      "name": "Johe",
      "ref": 1844,
      "date": 2016,
      "percent": 70,
      "location": "Poland",
      "rating": 3.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Manufaktura Czekolady",
      "name": "Peru",
      "ref": 1848,
      "date": 2016,
      "percent": 70,
      "location": "Poland",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Manufaktura Czekolady",
      "name": "Porcelana",
      "ref": 1255,
      "date": 2014,
      "percent": 70,
      "location": "Poland",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Manufaktura Czekolady",
      "name": "Kolumbia",
      "ref": 1279,
      "date": 2014,
      "percent": 85,
      "location": "Poland",
      "rating": 3.5,
      "origin": "Colombia"
    },
    {
      "company": "Manufaktura Czekolady",
      "name": "Grand Cru Dominican Republic",
      "ref": 871,
      "date": 2012,
      "percent": 70,
      "location": "Poland",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Manufaktura Czekolady",
      "name": "Grand Cru Ghana",
      "ref": 871,
      "date": 2012,
      "percent": 70,
      "location": "Poland",
      "rating": 3.5,
      "origin": "Ghana"
    },
    {
      "company": "Manufaktura Czekolady",
      "name": "Grand Cru Ecuador",
      "ref": 875,
      "date": 2012,
      "percent": 70,
      "location": "Poland",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Map Chocolate",
      "name": "Ben Tre, Surprise Valley",
      "ref": 1896,
      "date": 2016,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Vietnam"
    },
    {
      "company": "Map Chocolate",
      "name": "ROIG, 2014",
      "ref": 1474,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Map Chocolate",
      "name": "Maranon, 2014",
      "ref": 1474,
      "date": 2015,
      "percent": 62,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Map Chocolate",
      "name": "Ecuador",
      "ref": 1478,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Map Chocolate",
      "name": "San Juan Estate, Cherry Blossoms at Night",
      "ref": 1606,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Trinidad"
    },
    {
      "company": "Map Chocolate",
      "name": "A case of the Xerces Blues, triple roast",
      "ref": 1606,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Nicaragua"
    },
    {
      "company": "Map Chocolate",
      "name": "Tumbes, Dear Mr. Finley, 2014",
      "ref": 1606,
      "date": 2015,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Map Chocolate",
      "name": "Colombia",
      "ref": 1610,
      "date": 2015,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Colombia"
    },
    {
      "company": "Map Chocolate",
      "name": "Kakoa Kamili, Both Man & Bird & Beast",
      "ref": 1610,
      "date": 2015,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Tanzania"
    },
    {
      "company": "Map Chocolate",
      "name": "Le Chocolat Chaud",
      "ref": 1634,
      "date": 2015,
      "percent": 78,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Honduras"
    },
    {
      "company": "Marana",
      "name": "Piura",
      "ref": 1872,
      "date": 2016,
      "percent": 70,
      "location": "Peru",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Marana",
      "name": "Cusco",
      "ref": 1884,
      "date": 2016,
      "percent": 70,
      "location": "Peru",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Marana",
      "name": "San Martin",
      "ref": 1884,
      "date": 2016,
      "percent": 70,
      "location": "Peru",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Marigold's Finest",
      "name": "Cacao Nib Crunch",
      "ref": 1808,
      "date": 2016,
      "percent": 75,
      "location": "Canada",
      "rating": 3.25,
      "origin": ""
    },
    {
      "company": "Marou",
      "name": "Tan Phu Dong Island, Heart of Darkness",
      "ref": 1650,
      "date": 2015,
      "percent": 85,
      "location": "Vietnam",
      "rating": 3.25,
      "origin": "Vietnam"
    },
    {
      "company": "Marou",
      "name": "Ben Tre",
      "ref": 1650,
      "date": 2015,
      "percent": 68,
      "location": "Vietnam",
      "rating": 3.5,
      "origin": "Vietnam"
    },
    {
      "company": "Marou",
      "name": "Dak Lak, Batch 2451",
      "ref": 1650,
      "date": 2015,
      "percent": 70,
      "location": "Vietnam",
      "rating": 3.75,
      "origin": "Vietnam"
    },
    {
      "company": "Marou",
      "name": "Tan Phu Dong, Treasure Island",
      "ref": 1149,
      "date": 2013,
      "percent": 75,
      "location": "Vietnam",
      "rating": 3.5,
      "origin": "Vietnam"
    },
    {
      "company": "Marou",
      "name": "Ba Ria",
      "ref": 845,
      "date": 2012,
      "percent": 76,
      "location": "Vietnam",
      "rating": 3.5,
      "origin": "Vietnam"
    },
    {
      "company": "Marou",
      "name": "Dong Nai",
      "ref": 845,
      "date": 2012,
      "percent": 72,
      "location": "Vietnam",
      "rating": 3.5,
      "origin": "Vietnam"
    },
    {
      "company": "Marou",
      "name": "Tien Giang, Gao Co-op",
      "ref": 845,
      "date": 2012,
      "percent": 70,
      "location": "Vietnam",
      "rating": 3.5,
      "origin": "Vietnam"
    },
    {
      "company": "Marou",
      "name": "Ben Tre",
      "ref": 849,
      "date": 2012,
      "percent": 78,
      "location": "Vietnam",
      "rating": 3.5,
      "origin": "Vietnam"
    },
    {
      "company": "Marou",
      "name": "Tien Giang",
      "ref": 895,
      "date": 2012,
      "percent": 80,
      "location": "Vietnam",
      "rating": 3,
      "origin": "Vietnam"
    },
    {
      "company": "Marou",
      "name": "Lam Dong",
      "ref": 955,
      "date": 2012,
      "percent": 74,
      "location": "Vietnam",
      "rating": 3.5,
      "origin": "Vietnam"
    },
    {
      "company": "Mars",
      "name": "Matina 1-6, prototype",
      "ref": 537,
      "date": 2010,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Costa Rica"
    },
    {
      "company": "Mars",
      "name": "Ivory Coast",
      "ref": 544,
      "date": 2010,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ivory Coast"
    },
    {
      "company": "Mars",
      "name": "Nigeria",
      "ref": 544,
      "date": 2010,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Nigeria"
    },
    {
      "company": "Mars",
      "name": "Ghana, prototype",
      "ref": 544,
      "date": 2010,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ghana"
    },
    {
      "company": "Marsatta",
      "name": "Dominican Republic",
      "ref": 1189,
      "date": 2013,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 2.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Marsatta",
      "name": "Dominican Republic",
      "ref": 1189,
      "date": 2013,
      "percent": 89,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Martin Mayer",
      "name": "Alto Beni",
      "ref": 1836,
      "date": 2016,
      "percent": 76,
      "location": "Austria",
      "rating": 2.75,
      "origin": "Bolivia"
    },
    {
      "company": "Martin Mayer",
      "name": "Pisa",
      "ref": 1836,
      "date": 2016,
      "percent": 82,
      "location": "Austria",
      "rating": 3,
      "origin": "Haiti"
    },
    {
      "company": "Martin Mayer",
      "name": "Tumaco",
      "ref": 1836,
      "date": 2016,
      "percent": 74,
      "location": "Austria",
      "rating": 3.25,
      "origin": "Colombia"
    },
    {
      "company": "Mast Brothers",
      "name": "Guatemala",
      "ref": 1450,
      "date": 2015,
      "percent": 76,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Guatemala"
    },
    {
      "company": "Mast Brothers",
      "name": "Tanzania",
      "ref": 1450,
      "date": 2015,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Tanzania"
    },
    {
      "company": "Mast Brothers",
      "name": "French Laundry 20th Anniversary",
      "ref": 1359,
      "date": 2014,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Peru, Belize"
    },
    {
      "company": "Mast Brothers",
      "name": "Shake Shack",
      "ref": 959,
      "date": 2012,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Peru, Mad., Dom. Rep."
    },
    {
      "company": "Mast Brothers",
      "name": "Madagascar",
      "ref": 999,
      "date": 2012,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": ""
    },
    {
      "company": "Mast Brothers",
      "name": "Chuao",
      "ref": 999,
      "date": 2012,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Mast Brothers",
      "name": "Brooklyn Blend",
      "ref": 672,
      "date": 2011,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": ""
    },
    {
      "company": "Mast Brothers",
      "name": "Chuao, Med. Roast",
      "ref": 701,
      "date": 2011,
      "percent": 76,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Mast Brothers",
      "name": "Chuao, Dark Roast",
      "ref": 709,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Mast Brothers",
      "name": "Chuao, Light Roast",
      "ref": 713,
      "date": 2011,
      "percent": 81,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Mast Brothers",
      "name": "Moho River",
      "ref": 773,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Belize"
    },
    {
      "company": "Mast Brothers",
      "name": "Papua New Guinea",
      "ref": 777,
      "date": 2011,
      "percent": 71,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Mast Brothers",
      "name": "San Martin",
      "ref": 777,
      "date": 2011,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Mast Brothers",
      "name": "Conacado",
      "ref": 777,
      "date": 2011,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Mast Brothers",
      "name": "La Red de Guanconejo, N. Highlands coop",
      "ref": 777,
      "date": 2011,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Mast Brothers",
      "name": "Patanemo",
      "ref": 572,
      "date": 2010,
      "percent": 81,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Mast Brothers",
      "name": "Ocumare de la Costa",
      "ref": 572,
      "date": 2010,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Mast Brothers",
      "name": "Dominican Republic, Coop",
      "ref": 572,
      "date": 2010,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Matale",
      "name": "Malekula P., 2013",
      "ref": 1177,
      "date": 2013,
      "percent": 72,
      "location": "Australia",
      "rating": 3.5,
      "origin": "Vanuatu"
    },
    {
      "company": "Matale",
      "name": "Somia, 2013",
      "ref": 1177,
      "date": 2013,
      "percent": 68,
      "location": "Australia",
      "rating": 4,
      "origin": "Madagascar"
    },
    {
      "company": "Matale",
      "name": "Kulili P., 2013",
      "ref": 1177,
      "date": 2013,
      "percent": 74,
      "location": "Australia",
      "rating": 4,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Matale",
      "name": "Blend",
      "ref": 1181,
      "date": 2013,
      "percent": 70,
      "location": "Australia",
      "rating": 3.75,
      "origin": "PNG, Vanuatu, Mad"
    },
    {
      "company": "Maverick",
      "name": "Maya Mountain",
      "ref": 1367,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Belize"
    },
    {
      "company": "Maverick",
      "name": "Elvesia",
      "ref": 1367,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Maverick",
      "name": "Tumbes",
      "ref": 1430,
      "date": 2014,
      "percent": 82,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Maverick",
      "name": "Morropon, Norandiono Coop, Piura",
      "ref": 1430,
      "date": 2014,
      "percent": 63,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Mayacama",
      "name": "Hispaniola",
      "ref": 1728,
      "date": 2016,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Domincan Republic"
    },
    {
      "company": "Meadowlands",
      "name": "Bolivia",
      "ref": 1287,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Bolivia"
    },
    {
      "company": "Meadowlands",
      "name": "Venezuela",
      "ref": 1287,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Meadowlands",
      "name": "Belize",
      "ref": 1287,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Belize"
    },
    {
      "company": "Meadowlands",
      "name": "Nicaragua, w/ inbs",
      "ref": 1291,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Nicaragua"
    },
    {
      "company": "Meadowlands",
      "name": "Dominican Republic",
      "ref": 1291,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Menakao (aka Cinagra)",
      "name": "Madagascar",
      "ref": 837,
      "date": 2012,
      "percent": 80,
      "location": "Madagascar",
      "rating": 2.5,
      "origin": "Madagascar"
    },
    {
      "company": "Menakao (aka Cinagra)",
      "name": "Madagascar",
      "ref": 841,
      "date": 2012,
      "percent": 72,
      "location": "Madagascar",
      "rating": 2.5,
      "origin": "Madagascar"
    },
    {
      "company": "Mesocacao",
      "name": "El Salvador",
      "ref": 1494,
      "date": 2015,
      "percent": 80,
      "location": "Honduras",
      "rating": 2.75,
      "origin": "El Salvador"
    },
    {
      "company": "Mesocacao",
      "name": "El Salvador",
      "ref": 1494,
      "date": 2015,
      "percent": 70,
      "location": "Honduras",
      "rating": 3,
      "origin": "El Salvador"
    },
    {
      "company": "Mesocacao",
      "name": "Honduras",
      "ref": 1347,
      "date": 2014,
      "percent": 80,
      "location": "Honduras",
      "rating": 3.25,
      "origin": "Honduras"
    },
    {
      "company": "Mesocacao",
      "name": "Honduras",
      "ref": 1347,
      "date": 2014,
      "percent": 70,
      "location": "Honduras",
      "rating": 3.5,
      "origin": "Honduras"
    },
    {
      "company": "Mesocacao",
      "name": "La Tronca, Matagalpa",
      "ref": 1351,
      "date": 2014,
      "percent": 70,
      "location": "Honduras",
      "rating": 3.25,
      "origin": "Nicaragua"
    },
    {
      "company": "Mesocacao",
      "name": "La Tronca, Matagalpa",
      "ref": 1351,
      "date": 2014,
      "percent": 80,
      "location": "Honduras",
      "rating": 3.5,
      "origin": "Nicaragua"
    },
    {
      "company": "Metiisto",
      "name": "Fazenda Sempre Firme P., Bahia",
      "ref": 1267,
      "date": 2014,
      "percent": 70,
      "location": "Sweden",
      "rating": 3,
      "origin": "Brazil"
    },
    {
      "company": "Metiisto",
      "name": "Akesson Estate",
      "ref": 1267,
      "date": 2014,
      "percent": 72,
      "location": "Sweden",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Metropolitan",
      "name": "South America",
      "ref": 1688,
      "date": 2015,
      "percent": 70,
      "location": "Amsterdam",
      "rating": 3.5,
      "origin": "South America"
    },
    {
      "company": "Michel Cluizel",
      "name": "Chiapas, Mokaya P.",
      "ref": 963,
      "date": 2012,
      "percent": 66,
      "location": "France",
      "rating": 3.75,
      "origin": "Mexico"
    },
    {
      "company": "Michel Cluizel",
      "name": "Carenero Superior, Concepcion",
      "ref": 117,
      "date": 2007,
      "percent": 66,
      "location": "France",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Michel Cluizel",
      "name": "Vila Gracinda",
      "ref": 135,
      "date": 2007,
      "percent": 67,
      "location": "France",
      "rating": 3.5,
      "origin": "Sao Tome"
    },
    {
      "company": "Michel Cluizel",
      "name": "Carre Amer",
      "ref": 24,
      "date": 2006,
      "percent": 60,
      "location": "France",
      "rating": 2,
      "origin": ""
    },
    {
      "company": "Michel Cluizel",
      "name": "Carre Grand Noir",
      "ref": 24,
      "date": 2006,
      "percent": 85,
      "location": "France",
      "rating": 2,
      "origin": ""
    },
    {
      "company": "Michel Cluizel",
      "name": "Tamarina",
      "ref": 24,
      "date": 2006,
      "percent": 70,
      "location": "France",
      "rating": 3,
      "origin": "Sao Tome"
    },
    {
      "company": "Michel Cluizel",
      "name": "Los Ancones P.",
      "ref": 24,
      "date": 2006,
      "percent": 67,
      "location": "France",
      "rating": 4,
      "origin": "Dominican Republic"
    },
    {
      "company": "Michel Cluizel",
      "name": "Mangaro P.",
      "ref": 24,
      "date": 2006,
      "percent": 65,
      "location": "France",
      "rating": 4,
      "origin": "Madagascar"
    },
    {
      "company": "Michel Cluizel",
      "name": "Maralumi P.",
      "ref": 24,
      "date": 2006,
      "percent": 64,
      "location": "France",
      "rating": 4,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Michel Cluizel",
      "name": "Noir Infini",
      "ref": 81,
      "date": 2006,
      "percent": 99,
      "location": "France",
      "rating": 2,
      "origin": ""
    },
    {
      "company": "Middlebury",
      "name": "Maya Mountain",
      "ref": 1490,
      "date": 2015,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Belize"
    },
    {
      "company": "Middlebury",
      "name": "San Juan Estate",
      "ref": 1490,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Trinidad"
    },
    {
      "company": "Middlebury",
      "name": "Oko Caribe",
      "ref": 1490,
      "date": 2015,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Middlebury",
      "name": "Patanemo, Epoch, Donaldo",
      "ref": 1490,
      "date": 2015,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Middlebury",
      "name": "Kokoa Kamili",
      "ref": 1538,
      "date": 2015,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Tanzania"
    },
    {
      "company": "Middlebury",
      "name": "Matagalpa, Cacao Bisiesto",
      "ref": 1538,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Nicaragua"
    },
    {
      "company": "Middlebury",
      "name": "La Red",
      "ref": 1117,
      "date": 2013,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Middlebury",
      "name": "Belize",
      "ref": 1117,
      "date": 2013,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Belize"
    },
    {
      "company": "Middlebury",
      "name": "Houseblend",
      "ref": 887,
      "date": 2012,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 1.5,
      "origin": ""
    },
    {
      "company": "Middlebury",
      "name": "Alto Beni",
      "ref": 887,
      "date": 2012,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2,
      "origin": "Bolivia"
    },
    {
      "company": "Middlebury",
      "name": "Balinese, Java",
      "ref": 887,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Indonesia"
    },
    {
      "company": "Millcreek Cacao Roasters",
      "name": "Ecuador",
      "ref": 1073,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Millcreek Cacao Roasters",
      "name": "Ecuador",
      "ref": 825,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Mindo",
      "name": "Ecuador",
      "ref": 607,
      "date": 2010,
      "percent": 67,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Mindo",
      "name": "Ecuador",
      "ref": 607,
      "date": 2010,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Minimal",
      "name": "Acul-du-Nord, 2015",
      "ref": 1920,
      "date": 2016,
      "percent": 70,
      "location": "Japan",
      "rating": 3.5,
      "origin": "Haiti"
    },
    {
      "company": "Mission",
      "name": "Fazenda Camboa, Bahia",
      "ref": 1880,
      "date": 2016,
      "percent": 75,
      "location": "Brazil",
      "rating": 3.75,
      "origin": "Brazil"
    },
    {
      "company": "Mission",
      "name": "Bahia, Fazenda Venturosa",
      "ref": 1626,
      "date": 2015,
      "percent": 70,
      "location": "Brazil",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Mita",
      "name": "Tumaco",
      "ref": 955,
      "date": 2012,
      "percent": 65,
      "location": "Colombia",
      "rating": 2.5,
      "origin": "Colombia"
    },
    {
      "company": "Moho",
      "name": "Toledo District, w/ nibs",
      "ref": 1026,
      "date": 2013,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Belize"
    },
    {
      "company": "Moho",
      "name": "Toledo District",
      "ref": 1030,
      "date": 2013,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Belize"
    },
    {
      "company": "Moho",
      "name": "Umoho R., Toledo District, San Felipe",
      "ref": 607,
      "date": 2010,
      "percent": 67,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Belize"
    },
    {
      "company": "Molucca",
      "name": "La Red",
      "ref": 1614,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Domincan Republic"
    },
    {
      "company": "Molucca",
      "name": "Indonesia",
      "ref": 1618,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Indonesia"
    },
    {
      "company": "Molucca",
      "name": "Peru",
      "ref": 1618,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Momotombo",
      "name": "Matagalpa",
      "ref": 661,
      "date": 2011,
      "percent": 70,
      "location": "Nicaragua",
      "rating": 2.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Momotombo",
      "name": "Mombacho",
      "ref": 661,
      "date": 2011,
      "percent": 70,
      "location": "Nicaragua",
      "rating": 2.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Momotombo",
      "name": "Oscuro",
      "ref": 772,
      "date": 2011,
      "percent": 70,
      "location": "Nicaragua",
      "rating": 3.25,
      "origin": "Nicaragua"
    },
    {
      "company": "Monarque",
      "name": "Oko Caribe",
      "ref": 1812,
      "date": 2016,
      "percent": 72,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Monsieur Truffe",
      "name": "Papaua New Guinea",
      "ref": 1391,
      "date": 2014,
      "percent": 70,
      "location": "Australia",
      "rating": 3.25,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Montecristi",
      "name": "Manabi",
      "ref": 1654,
      "date": 2015,
      "percent": 70,
      "location": "Ecuador",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Montecristi",
      "name": "Manabi",
      "ref": 1654,
      "date": 2015,
      "percent": 63,
      "location": "Ecuador",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Montecristi",
      "name": "Manabi",
      "ref": 1658,
      "date": 2015,
      "percent": 85,
      "location": "Ecuador",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Muchomas (Mesocacao)",
      "name": "Nicaragua",
      "ref": 1462,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Nicaragua"
    },
    {
      "company": "Muchomas (Mesocacao)",
      "name": "Nicaragua",
      "ref": 1462,
      "date": 2015,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Nicaragua"
    },
    {
      "company": "Mutari",
      "name": "Kokoa Kamili, batch 1 SRB",
      "ref": 1896,
      "date": 2016,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Tanzania"
    },
    {
      "company": "Mutari",
      "name": "Oko Caribe, batch 1 SRB",
      "ref": 1896,
      "date": 2016,
      "percent": 71,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Domincan Republic"
    },
    {
      "company": "Mutari",
      "name": "Ambanja, batch 1 SRB",
      "ref": 1900,
      "date": 2016,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Mutari",
      "name": "Tien Giang, batch 1 SRB",
      "ref": 1900,
      "date": 2016,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Vietnam"
    },
    {
      "company": "Nahua",
      "name": "Costa Rica, Oscuro",
      "ref": 1049,
      "date": 2013,
      "percent": 58,
      "location": "Costa Rica",
      "rating": 2.5,
      "origin": "Costa Rica"
    },
    {
      "company": "Nahua",
      "name": "Costa Rica, Oscuro",
      "ref": 1049,
      "date": 2013,
      "percent": 70,
      "location": "Costa Rica",
      "rating": 3,
      "origin": "Costa Rica"
    },
    {
      "company": "Naive",
      "name": "Trinidad & Tobago",
      "ref": 1046,
      "date": 2013,
      "percent": 70,
      "location": "Lithuania",
      "rating": 3.75,
      "origin": "Trinidad, Tobago"
    },
    {
      "company": "Naive",
      "name": "Maranon Canyon, Fortunato No. 4",
      "ref": 1133,
      "date": 2013,
      "percent": 78,
      "location": "Lithuania",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Naive",
      "name": "Grenada",
      "ref": 867,
      "date": 2012,
      "percent": 71,
      "location": "Lithuania",
      "rating": 2.5,
      "origin": "Grenada"
    },
    {
      "company": "Na�ve",
      "name": "Nicaragua",
      "ref": 1379,
      "date": 2014,
      "percent": 70,
      "location": "Lithuania",
      "rating": 3.25,
      "origin": "Nicaragua"
    },
    {
      "company": "Na�ve",
      "name": "Chuao",
      "ref": 1399,
      "date": 2014,
      "percent": 75,
      "location": "Lithuania",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Na�ve",
      "name": "Barinas",
      "ref": 1399,
      "date": 2014,
      "percent": 70,
      "location": "Lithuania",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Nanea",
      "name": "Criollo Blend",
      "ref": 1007,
      "date": 2013,
      "percent": 85,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Hawaii"
    },
    {
      "company": "Nathan Miller",
      "name": "Peru",
      "ref": 1403,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 2.25,
      "origin": "Peru"
    },
    {
      "company": "Nathan Miller",
      "name": "Hispaniola",
      "ref": 1403,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Nathan Miller",
      "name": "Madagascar",
      "ref": 1403,
      "date": 2014,
      "percent": 73.5,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Madagascar"
    },
    {
      "company": "Nathan Miller",
      "name": "Ghana",
      "ref": 1403,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ghana"
    },
    {
      "company": "Neuhaus (Callebaut)",
      "name": "Papua New Guinea",
      "ref": 531,
      "date": 2010,
      "percent": 70,
      "location": "Belgium",
      "rating": 2.5,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Neuhaus (Callebaut)",
      "name": "Manickchand Estate",
      "ref": 230,
      "date": 2008,
      "percent": 67,
      "location": "Belgium",
      "rating": 3.75,
      "origin": "Trinidad"
    },
    {
      "company": "Neuhaus (Callebaut)",
      "name": "Dark",
      "ref": 135,
      "date": 2007,
      "percent": 73,
      "location": "Belgium",
      "rating": 1,
      "origin": ""
    },
    {
      "company": "Neuhaus (Callebaut)",
      "name": "West Africa",
      "ref": 15,
      "date": 2006,
      "percent": 73,
      "location": "Belgium",
      "rating": 2,
      "origin": "West Africa"
    },
    {
      "company": "Neuhaus (Callebaut)",
      "name": "Sao Tome",
      "ref": 15,
      "date": 2006,
      "percent": 75,
      "location": "Belgium",
      "rating": 2.75,
      "origin": "Sao Tome"
    },
    {
      "company": "Neuhaus (Callebaut)",
      "name": "Ocumare",
      "ref": 24,
      "date": 2006,
      "percent": 71,
      "location": "Belgium",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Nibble",
      "name": "Patanemo",
      "ref": 1526,
      "date": 2015,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 2.25,
      "origin": "Venezuela"
    },
    {
      "company": "Nibble",
      "name": "Elvesia P.",
      "ref": 1526,
      "date": 2015,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Nibble",
      "name": "Ambanja, Sambirano Valley",
      "ref": 1526,
      "date": 2015,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Nibble",
      "name": "Tumbes",
      "ref": 1526,
      "date": 2015,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Night Owl",
      "name": "Peru",
      "ref": 1022,
      "date": 2013,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Night Owl",
      "name": "Ecuador",
      "ref": 1022,
      "date": 2013,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Noble Bean aka Jerjobo",
      "name": "Ghana",
      "ref": 1295,
      "date": 2014,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ghana"
    },
    {
      "company": "Noble Bean aka Jerjobo",
      "name": "Moho Valley",
      "ref": 1299,
      "date": 2014,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Belize"
    },
    {
      "company": "Noble Bean aka Jerjobo",
      "name": "Maranon Canyon",
      "ref": 1299,
      "date": 2014,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Noir d' Ebine",
      "name": "Venezuela",
      "ref": 837,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Noir d' Ebine",
      "name": "Ecuador",
      "ref": 841,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Nova Monda",
      "name": "La Patriota, cacao Indio, purple label",
      "ref": 931,
      "date": 2012,
      "percent": 70,
      "location": "Nicaragua",
      "rating": 3,
      "origin": "Nicaragua"
    },
    {
      "company": "Nova Monda",
      "name": "La Dalia, Matagalpa,cacao Bisesto,green label",
      "ref": 935,
      "date": 2012,
      "percent": 75,
      "location": "Niacragua",
      "rating": 2.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Nova Monda",
      "name": "Punta Galera, cacao Nacional, gold label",
      "ref": 935,
      "date": 2012,
      "percent": 80,
      "location": "Nicaragua",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Nuance",
      "name": "Ghana, 2013",
      "ref": 1454,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Ghana"
    },
    {
      "company": "Nuance",
      "name": "Ecuador, 2013",
      "ref": 1458,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Nuance",
      "name": "Canoabo, 2013",
      "ref": 1458,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Nuance",
      "name": "Sambirano Valley, 2012",
      "ref": 1458,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Nuance",
      "name": "La Red",
      "ref": 1470,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Nugali",
      "name": "Fazenda Leolinda",
      "ref": 1876,
      "date": 2016,
      "percent": 70,
      "location": "Brazil",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Oakland Chocolate Co.",
      "name": "Jamaica",
      "ref": 478,
      "date": 2010,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Jamaica"
    },
    {
      "company": "Obolo",
      "name": "Pangoa",
      "ref": 1638,
      "date": 2015,
      "percent": 70,
      "location": "Chile",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Obolo",
      "name": "Pangoa, w/ nibs",
      "ref": 1638,
      "date": 2015,
      "percent": 70,
      "location": "Chile",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Ocelot",
      "name": "Virunga",
      "ref": 1558,
      "date": 2015,
      "percent": 70,
      "location": "Scotland",
      "rating": 3.75,
      "origin": "Congo"
    },
    {
      "company": "Ocelot",
      "name": "Piura",
      "ref": 1558,
      "date": 2015,
      "percent": 75,
      "location": "Scotland",
      "rating": 4,
      "origin": "Peru"
    },
    {
      "company": "Ocho",
      "name": "Sang Yum Coop",
      "ref": 1760,
      "date": 2016,
      "percent": 100,
      "location": "New Zealand",
      "rating": 2.75,
      "origin": "Samoa"
    },
    {
      "company": "Ocho",
      "name": "Sang Yum Coop",
      "ref": 1760,
      "date": 2016,
      "percent": 70,
      "location": "New Zealand",
      "rating": 3.5,
      "origin": "Samoa"
    },
    {
      "company": "Ocho",
      "name": "PNG, Devotion",
      "ref": 1411,
      "date": 2014,
      "percent": 66,
      "location": "New Zealand",
      "rating": 2.75,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Ocho",
      "name": "PNG, Revolution",
      "ref": 1411,
      "date": 2014,
      "percent": 70,
      "location": "New Zealand",
      "rating": 3,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Ocho",
      "name": "PNG, Voodoo",
      "ref": 1411,
      "date": 2014,
      "percent": 88,
      "location": "New Zealand",
      "rating": 3.25,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Ocho",
      "name": "PNG, Nib Bar",
      "ref": 1411,
      "date": 2014,
      "percent": 74,
      "location": "New Zealand",
      "rating": 3.5,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Ohiyo",
      "name": "San Juan Estate, Gran Couva",
      "ref": 1594,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Trinidad"
    },
    {
      "company": "Ohiyo",
      "name": "Tanzania",
      "ref": 1598,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Tanzania"
    },
    {
      "company": "Oialla by Bojessen (Malmo)",
      "name": "Sylvestre, Oialla",
      "ref": 761,
      "date": 2011,
      "percent": 70,
      "location": "Germany",
      "rating": 3.5,
      "origin": "Bolivia"
    },
    {
      "company": "Olive and Sinclair",
      "name": "Dominican Republic prototype",
      "ref": 486,
      "date": 2010,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Olive and Sinclair",
      "name": "Ghana prototype",
      "ref": 486,
      "date": 2010,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ghana"
    },
    {
      "company": "Olive and Sinclair",
      "name": "Dark 67",
      "ref": 457,
      "date": 2009,
      "percent": 67,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Ghana, Domin. Rep"
    },
    {
      "company": "Olive and Sinclair",
      "name": "Dark 75",
      "ref": 457,
      "date": 2009,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ghana, Domin. Rep"
    },
    {
      "company": "Olivia",
      "name": "Carribean-Raw",
      "ref": 688,
      "date": 2011,
      "percent": 76,
      "location": "Canada",
      "rating": 2,
      "origin": "Carribean"
    },
    {
      "company": "Olivia",
      "name": "Carribean",
      "ref": 688,
      "date": 2011,
      "percent": 76,
      "location": "Canada",
      "rating": 2.75,
      "origin": "Carribean"
    },
    {
      "company": "Olivia",
      "name": "Carribean",
      "ref": 688,
      "date": 2011,
      "percent": 85,
      "location": "Canada",
      "rating": 2.75,
      "origin": "Carribean"
    },
    {
      "company": "Olivia",
      "name": "Carribean-Raw",
      "ref": 688,
      "date": 2011,
      "percent": 85,
      "location": "Canada",
      "rating": 3,
      "origin": "Carribean"
    },
    {
      "company": "Omanhene",
      "name": "Ghana",
      "ref": 693,
      "date": 2011,
      "percent": 80,
      "location": "Ghana",
      "rating": 2.75,
      "origin": "Ghana"
    },
    {
      "company": "Omnom",
      "name": "Kakao Kamili, Kilombero Valley",
      "ref": 1816,
      "date": 2016,
      "percent": 70,
      "location": "Iceland",
      "rating": 3.75,
      "origin": "Tanzania"
    },
    {
      "company": "Omnom",
      "name": "Papua New Guinea",
      "ref": 1247,
      "date": 2014,
      "percent": 70,
      "location": "Iceland",
      "rating": 3,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Omnom",
      "name": "Madagascar",
      "ref": 1247,
      "date": 2014,
      "percent": 66,
      "location": "Iceland",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "organicfair",
      "name": "Maya Mountain",
      "ref": 1161,
      "date": 2013,
      "percent": 74,
      "location": "Canada",
      "rating": 2.75,
      "origin": "Belize"
    },
    {
      "company": "organicfair",
      "name": "La Red",
      "ref": 1165,
      "date": 2013,
      "percent": 72,
      "location": "Canada",
      "rating": 2.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "organicfair",
      "name": "Nicaraqua",
      "ref": 1165,
      "date": 2013,
      "percent": 72,
      "location": "Canada",
      "rating": 2.75,
      "origin": "Nicaragua"
    },
    {
      "company": "organicfair",
      "name": "Caribe",
      "ref": 1165,
      "date": 2013,
      "percent": 72,
      "location": "Canada",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "organicfair",
      "name": "Mindo",
      "ref": 1165,
      "date": 2013,
      "percent": 72,
      "location": "Canada",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Original Beans (Felchlin)",
      "name": "Papua Kerafat",
      "ref": 1438,
      "date": 2014,
      "percent": 68,
      "location": "Switzerland",
      "rating": 2.75,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Original Beans (Felchlin)",
      "name": "Grand Cru Blend No.1, 5 yr. Anniversary Ed",
      "ref": 1442,
      "date": 2014,
      "percent": 80,
      "location": "Switzerland",
      "rating": 3.25,
      "origin": ""
    },
    {
      "company": "Original Beans (Felchlin)",
      "name": "Alto Beni, Wild Harvest, Itenez R. 24hr c.",
      "ref": 733,
      "date": 2011,
      "percent": 66,
      "location": "Switzerland",
      "rating": 3.75,
      "origin": "Bolivia"
    },
    {
      "company": "Original Beans (Felchlin)",
      "name": "D.R. Congo, Cru Virunga",
      "ref": 331,
      "date": 2009,
      "percent": 70,
      "location": "Switzerland",
      "rating": 3,
      "origin": "Congo"
    },
    {
      "company": "Original Beans (Felchlin)",
      "name": "Piura, Apotequil, \"Porcelana\" 72hr c.",
      "ref": 341,
      "date": 2009,
      "percent": 75,
      "location": "Switzerland",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Original Beans (Felchlin)",
      "name": "Alto Beni, Wild Harvest, Itenez R., 60hr c.",
      "ref": 341,
      "date": 2009,
      "percent": 68,
      "location": "Switzerland",
      "rating": 3.25,
      "origin": "Bolivia"
    },
    {
      "company": "Original Hawaiin Chocolate Factory",
      "name": "Hawai'i, Kona Grand Cru E.",
      "ref": 316,
      "date": 2009,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Hawaii"
    },
    {
      "company": "Original Hawaiin Chocolate Factory",
      "name": "Hawai'i, Kona Estate Grown",
      "ref": 24,
      "date": 2006,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Hawaii"
    },
    {
      "company": "Orquidea",
      "name": "Peru",
      "ref": 859,
      "date": 2012,
      "percent": 65,
      "location": "Peru",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Orquidea",
      "name": "Peru",
      "ref": 859,
      "date": 2012,
      "percent": 72,
      "location": "Peru",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Pacari",
      "name": "Sierra Nevada, Tutu Iku",
      "ref": 1848,
      "date": 2016,
      "percent": 70,
      "location": "Ecuador",
      "rating": 4,
      "origin": "Colombia"
    },
    {
      "company": "Pacari",
      "name": "Garaua",
      "ref": 1415,
      "date": 2014,
      "percent": 70,
      "location": "Ecuador",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Pacari",
      "name": "Cumbia",
      "ref": 1415,
      "date": 2014,
      "percent": 70,
      "location": "Ecuador",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Pacari",
      "name": "Montubia",
      "ref": 1415,
      "date": 2014,
      "percent": 70,
      "location": "Ecuador",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "Pacari",
      "name": "Tangara",
      "ref": 1415,
      "date": 2014,
      "percent": 70,
      "location": "Ecuador",
      "rating": 4,
      "origin": "Ecuador"
    },
    {
      "company": "Pacari",
      "name": "Ecuador, raw",
      "ref": 817,
      "date": 2012,
      "percent": 85,
      "location": "Ecuador",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Pacari",
      "name": "Piura",
      "ref": 863,
      "date": 2012,
      "percent": 70,
      "location": "Ecuador",
      "rating": 4,
      "origin": "Peru"
    },
    {
      "company": "Pacari",
      "name": "Nube- prototype",
      "ref": 721,
      "date": 2011,
      "percent": 70,
      "location": "Ecuador",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Pacari",
      "name": "Esmeraldas",
      "ref": 224,
      "date": 2008,
      "percent": 60,
      "location": "Ecuador",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Pacari",
      "name": "Manabi",
      "ref": 224,
      "date": 2008,
      "percent": 65,
      "location": "Ecuador",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Pacari",
      "name": "Los Rios",
      "ref": 224,
      "date": 2008,
      "percent": 72,
      "location": "Ecuador",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Pacari",
      "name": "Raw",
      "ref": 266,
      "date": 2008,
      "percent": 100,
      "location": "Ecuador",
      "rating": 2,
      "origin": "Ecuador"
    },
    {
      "company": "Pacari",
      "name": "Raw",
      "ref": 266,
      "date": 2008,
      "percent": 70,
      "location": "Ecuador",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Palette de Bine",
      "name": "Lachua",
      "ref": 1720,
      "date": 2016,
      "percent": 70,
      "location": "Canada",
      "rating": 2.75,
      "origin": "Guatemala"
    },
    {
      "company": "Palette de Bine",
      "name": "Maya Mtn",
      "ref": 1720,
      "date": 2016,
      "percent": 72,
      "location": "Canada",
      "rating": 3,
      "origin": "Belize"
    },
    {
      "company": "Palette de Bine",
      "name": "Silvestre, La Paz, Beni",
      "ref": 1570,
      "date": 2015,
      "percent": 70,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Bolivia"
    },
    {
      "company": "Palette de Bine",
      "name": "San Juan Estate, Gran Couva",
      "ref": 1570,
      "date": 2015,
      "percent": 70,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Trinidad"
    },
    {
      "company": "Palette de Bine",
      "name": "Kokoa Kamili",
      "ref": 1574,
      "date": 2015,
      "percent": 72,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Tanzania"
    },
    {
      "company": "Palette de Bine",
      "name": "Lam Dong",
      "ref": 1574,
      "date": 2015,
      "percent": 72,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Vietnam"
    },
    {
      "company": "Palette de Bine",
      "name": "Alto Beni, Palos Blancos",
      "ref": 1239,
      "date": 2014,
      "percent": 72,
      "location": "Canada",
      "rating": 2.75,
      "origin": "Bolivia"
    },
    {
      "company": "Palette de Bine",
      "name": "Sambirano",
      "ref": 1239,
      "date": 2014,
      "percent": 78,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Madagascar"
    },
    {
      "company": "Palette de Bine",
      "name": "Camino Verde P., Balao, Guayas",
      "ref": 1303,
      "date": 2014,
      "percent": 75,
      "location": "Canada",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Palette de Bine",
      "name": "Duo- Gran Couva & Camino Verde",
      "ref": 1399,
      "date": 2014,
      "percent": 75,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Trinidad, Ecuador"
    },
    {
      "company": "Palette de Bine",
      "name": "Gran Couva",
      "ref": 1399,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Trinidad"
    },
    {
      "company": "Pangea",
      "name": "Matasawalevu",
      "ref": 1860,
      "date": 2016,
      "percent": 76,
      "location": "Spain",
      "rating": 3,
      "origin": "Fiji"
    },
    {
      "company": "Park 75",
      "name": "South America",
      "ref": 1363,
      "date": 2014,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "South America"
    },
    {
      "company": "Parliament",
      "name": "Kilombero Valley",
      "ref": 1856,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Tanzania"
    },
    {
      "company": "Parliament",
      "name": "Lachua, Q'egchi families",
      "ref": 1542,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Guatemala"
    },
    {
      "company": "Parliament",
      "name": "Alto Beni",
      "ref": 1251,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Bolivia"
    },
    {
      "company": "Parliament",
      "name": "Oko Caribe",
      "ref": 1255,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Pascha",
      "name": "Peru",
      "ref": 1137,
      "date": 2013,
      "percent": 55,
      "location": "Peru",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Pascha",
      "name": "Peru",
      "ref": 1137,
      "date": 2013,
      "percent": 70,
      "location": "Peru",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Patric",
      "name": "Signature Blend",
      "ref": 636,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": ""
    },
    {
      "company": "Patric",
      "name": "Madagascar",
      "ref": 331,
      "date": 2009,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Madagascar"
    },
    {
      "company": "Patric",
      "name": "Madagascar",
      "ref": 439,
      "date": 2009,
      "percent": 67,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Patric",
      "name": "Rio Caribe, Paria Penninsula",
      "ref": 439,
      "date": 2009,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Patric",
      "name": "Madagascar",
      "ref": 196,
      "date": 2007,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Madagascar"
    },
    {
      "company": "Patric",
      "name": "Piura, Choc. Garage Exclusive",
      "ref": 1034,
      "date": 2013,
      "percent": 67,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Peru"
    },
    {
      "company": "Paul Young",
      "name": "Madagascar, w/ shell",
      "ref": 1271,
      "date": 2014,
      "percent": 73,
      "location": "U.K.",
      "rating": 2.25,
      "origin": "Madagascar"
    },
    {
      "company": "Paul Young",
      "name": "Madagascar, w/ shell",
      "ref": 1271,
      "date": 2014,
      "percent": 64,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Peppalo",
      "name": "Dominican Republic",
      "ref": 1454,
      "date": 2015,
      "percent": 82,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Pierre Marcolini",
      "name": "Haut Penja, w/ nibs",
      "ref": 1658,
      "date": 2015,
      "percent": 70,
      "location": "Belgium",
      "rating": 3.25,
      "origin": "Cameroon"
    },
    {
      "company": "Pierre Marcolini",
      "name": "Chuao",
      "ref": 478,
      "date": 2010,
      "percent": 75,
      "location": "Belgium",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Pierre Marcolini",
      "name": "Trinite",
      "ref": 478,
      "date": 2010,
      "percent": 75,
      "location": "Belgium",
      "rating": 3.25,
      "origin": "Trinidad"
    },
    {
      "company": "Pierre Marcolini",
      "name": "Baracoa, Cuba",
      "ref": 516,
      "date": 2010,
      "percent": 78,
      "location": "Belgium",
      "rating": 3.75,
      "origin": "Cuba"
    },
    {
      "company": "Pierre Marcolini",
      "name": "Peru, Las Pampas P.",
      "ref": 531,
      "date": 2010,
      "percent": 85,
      "location": "Belgium",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Pierre Marcolini",
      "name": "Bahia Brazil, Fazenda Sao Pedro",
      "ref": 414,
      "date": 2009,
      "percent": 72,
      "location": "Belgium",
      "rating": 3,
      "origin": "Brazil"
    },
    {
      "company": "Pierre Marcolini",
      "name": "Porcelana, Tabasco, Finca La Joya",
      "ref": 445,
      "date": 2009,
      "percent": 72,
      "location": "Belgium",
      "rating": 3,
      "origin": "Mexico"
    },
    {
      "company": "Pierre Marcolini",
      "name": "Cabosse",
      "ref": 111,
      "date": 2007,
      "percent": 70,
      "location": "Belgium",
      "rating": 4,
      "origin": "Venezuela, Java"
    },
    {
      "company": "Pierre Marcolini",
      "name": "Los Rios, Puerto Romero, Equateur",
      "ref": 129,
      "date": 2007,
      "percent": 72,
      "location": "Belgium",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "Pierre Marcolini",
      "name": "Sambirano, Ambanja, Madagascar",
      "ref": 141,
      "date": 2007,
      "percent": 72,
      "location": "Belgium",
      "rating": 4,
      "origin": "Madagascar"
    },
    {
      "company": "Pierre Marcolini",
      "name": "Fleur de Cacao",
      "ref": 166,
      "date": 2007,
      "percent": 85,
      "location": "Belgium",
      "rating": 3.5,
      "origin": "Venezuela/ Ghana"
    },
    {
      "company": "Pierre Marcolini",
      "name": "Porcelana, Tabasco, Limited Ed.",
      "ref": 81,
      "date": 2006,
      "percent": 72,
      "location": "Belgium",
      "rating": 4,
      "origin": "Mexico"
    },
    {
      "company": "Pierre Marcolini",
      "name": "Kendem Lembu, Java",
      "ref": 93,
      "date": 2006,
      "percent": 72,
      "location": "Belgium",
      "rating": 3,
      "origin": "Indonesia"
    },
    {
      "company": "Pierre Marcolini",
      "name": "Ocumare, Puerto Cabello, Venezuela",
      "ref": 93,
      "date": 2006,
      "percent": 72,
      "location": "Belgium",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Pinellas",
      "name": "Wampusirpi Region",
      "ref": 1772,
      "date": 2016,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Honduras"
    },
    {
      "company": "Pitch Dark",
      "name": "Tenor",
      "ref": 1506,
      "date": 2015,
      "percent": 62,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Nicaragua"
    },
    {
      "company": "Pitch Dark",
      "name": "Johe",
      "ref": 1506,
      "date": 2015,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Pitch Dark",
      "name": "Chuno",
      "ref": 1510,
      "date": 2015,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Pitch Dark",
      "name": "Nicalizo",
      "ref": 1510,
      "date": 2015,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Pitch Dark",
      "name": "Rugoso",
      "ref": 1510,
      "date": 2015,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Nicaragua"
    },
    {
      "company": "Pitch Dark",
      "name": "Akesson Estate",
      "ref": 1311,
      "date": 2014,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Pitch Dark",
      "name": "Namau Village",
      "ref": 1315,
      "date": 2014,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Fiji"
    },
    {
      "company": "Pitch Dark",
      "name": "Camino Verde P., Balao, Guayas, \"Fruity",
      "ref": 1319,
      "date": 2014,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Pitch Dark",
      "name": "Camino Verde P., Balao, Guayas, \"Floral",
      "ref": 1319,
      "date": 2014,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Pomm (aka Dead Dog)",
      "name": "La Red, 2011",
      "ref": 829,
      "date": 2012,
      "percent": 76,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Pomm (aka Dead Dog)",
      "name": "Peru",
      "ref": 829,
      "date": 2012,
      "percent": 82,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Potomac",
      "name": "Oko Caribe, Duarte Province, 2016 H.",
      "ref": 1820,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Domincan Republic"
    },
    {
      "company": "Potomac",
      "name": "Cuyagua, 2013",
      "ref": 1387,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Potomac",
      "name": "Upala w/ nibs",
      "ref": 647,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Costa Rica"
    },
    {
      "company": "Potomac",
      "name": "Upala, Batch 18",
      "ref": 654,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Costa Rica"
    },
    {
      "company": "Potomac",
      "name": "San Martin, Amazonian Highlands",
      "ref": 789,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Potomac",
      "name": "Bahia",
      "ref": 789,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Potomac",
      "name": "Upala, Batch 12",
      "ref": 607,
      "date": 2010,
      "percent": 82,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Costa Rica"
    },
    {
      "company": "Pralus",
      "name": "Peru",
      "ref": 1446,
      "date": 2015,
      "percent": 75,
      "location": "France",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Pralus",
      "name": "Porcelana, S. of Lake Maracaibo",
      "ref": 717,
      "date": 2011,
      "percent": 75,
      "location": "France",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Pralus",
      "name": "Chuao",
      "ref": 486,
      "date": 2010,
      "percent": 75,
      "location": "France",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Pralus",
      "name": "Cuyagua",
      "ref": 451,
      "date": 2009,
      "percent": 75,
      "location": "France",
      "rating": 2,
      "origin": "Venezuela"
    },
    {
      "company": "Pralus",
      "name": "Papouasie",
      "ref": 199,
      "date": 2008,
      "percent": 75,
      "location": "France",
      "rating": 3,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Pralus",
      "name": "Sambirano Valley, Le 100",
      "ref": 202,
      "date": 2008,
      "percent": 100,
      "location": "France",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Pralus",
      "name": "Dominican Republic-Organic",
      "ref": 280,
      "date": 2008,
      "percent": 75,
      "location": "France",
      "rating": 2,
      "origin": "Dominican Republic"
    },
    {
      "company": "Pralus",
      "name": "Monte Alegre, Diego Badero",
      "ref": 280,
      "date": 2008,
      "percent": 75,
      "location": "France",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Pralus",
      "name": "Claudio Corallo w/ nibs",
      "ref": 162,
      "date": 2007,
      "percent": 75,
      "location": "France",
      "rating": 4,
      "origin": "Sao Tome"
    },
    {
      "company": "Pralus",
      "name": "Monte Alegre (Itacare), Brazil",
      "ref": 105,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 3,
      "origin": "Brazil"
    },
    {
      "company": "Pralus",
      "name": "Tanzania",
      "ref": 105,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 3.5,
      "origin": "Tanzania"
    },
    {
      "company": "Pralus",
      "name": "Sao Tome & Principe",
      "ref": 5,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 3.5,
      "origin": "Sao Tome & Principe"
    },
    {
      "company": "Pralus",
      "name": "Trinidad",
      "ref": 5,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 3.5,
      "origin": "Trinidad"
    },
    {
      "company": "Pralus",
      "name": "Madagascar, Nosy Be Isle.",
      "ref": 5,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 3.75,
      "origin": "Madagascar"
    },
    {
      "company": "Pralus",
      "name": "Java, Indonesie",
      "ref": 32,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 3.5,
      "origin": "Indonesia"
    },
    {
      "company": "Pralus",
      "name": "Barlovento, Venezuela",
      "ref": 32,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Pralus",
      "name": "Jamaique",
      "ref": 32,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 4,
      "origin": "Jamaica"
    },
    {
      "company": "Pralus",
      "name": "Equateur",
      "ref": 40,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Pralus",
      "name": "Vanuatu",
      "ref": 40,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 3,
      "origin": "Vanuatu"
    },
    {
      "company": "Pralus",
      "name": "Ghana",
      "ref": 40,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 3.25,
      "origin": "Ghana"
    },
    {
      "company": "Pralus",
      "name": "Colombie",
      "ref": 40,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 3.5,
      "origin": "Colombia"
    },
    {
      "company": "Pralus",
      "name": "Fortissima",
      "ref": 93,
      "date": 2006,
      "percent": 80,
      "location": "France",
      "rating": 4,
      "origin": "Ecuador"
    },
    {
      "company": "Pralus",
      "name": "Cuba",
      "ref": 99,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 3,
      "origin": "Cuba"
    },
    {
      "company": "Pralus",
      "name": "Caracas, Venezuela and Ghana",
      "ref": 99,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 3,
      "origin": "Venezuela, Ghana"
    },
    {
      "company": "Pralus",
      "name": "Djakarta, Java and Ghana",
      "ref": 99,
      "date": 2006,
      "percent": 75,
      "location": "France",
      "rating": 3.5,
      "origin": "Indonesia, Ghana"
    },
    {
      "company": "Pump Street Bakery",
      "name": "Chocoan Rainforest, Teroro Escondido, ESM",
      "ref": 1872,
      "date": 2016,
      "percent": 77,
      "location": "U.K.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Pump Street Bakery",
      "name": "Crayfish Bay Estate, 2014",
      "ref": 1502,
      "date": 2015,
      "percent": 70,
      "location": "U.K.",
      "rating": 3.5,
      "origin": "Grenada"
    },
    {
      "company": "Pump Street Bakery",
      "name": "Akesson's, batch 4411",
      "ref": 1530,
      "date": 2015,
      "percent": 74,
      "location": "U.K.",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Pump Street Bakery",
      "name": "Honduras",
      "ref": 1688,
      "date": 2015,
      "percent": 80,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Honduras"
    },
    {
      "company": "Pump Street Bakery",
      "name": "Patanemo Vil., Carabobo State, Tisano family",
      "ref": 1223,
      "date": 2014,
      "percent": 75,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Pump Street Bakery",
      "name": "Guantupi River",
      "ref": 1223,
      "date": 2014,
      "percent": 75,
      "location": "U.K.",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Pump Street Bakery",
      "name": "Akessons Estate, Sambirano, Ambanja",
      "ref": 1223,
      "date": 2014,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Pump Street Bakery",
      "name": "Guantupi River",
      "ref": 1227,
      "date": 2014,
      "percent": 85,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Pura Delizia",
      "name": "Venezuela",
      "ref": 931,
      "date": 2012,
      "percent": 73,
      "location": "Italy",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Q Chocolate",
      "name": "Brazil",
      "ref": 1057,
      "date": 2013,
      "percent": 75,
      "location": "Brazil",
      "rating": 3.25,
      "origin": "Brazil"
    },
    {
      "company": "Q Chocolate",
      "name": "Brazil",
      "ref": 1057,
      "date": 2013,
      "percent": 85,
      "location": "Brazil",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Q Chocolate",
      "name": "Brazil",
      "ref": 1069,
      "date": 2013,
      "percent": 55,
      "location": "Brazil",
      "rating": 2.75,
      "origin": "Brazil"
    },
    {
      "company": "Q Chocolate",
      "name": "Brazil",
      "ref": 1069,
      "date": 2013,
      "percent": 80,
      "location": "Brazil",
      "rating": 3.25,
      "origin": "Brazil"
    },
    {
      "company": "Q Chocolate",
      "name": "Brazil",
      "ref": 935,
      "date": 2012,
      "percent": 60,
      "location": "Brazil",
      "rating": 3,
      "origin": "Brazil"
    },
    {
      "company": "Q Chocolate",
      "name": "Brazil",
      "ref": 935,
      "date": 2012,
      "percent": 65,
      "location": "Brazil",
      "rating": 3.25,
      "origin": "Brazil"
    },
    {
      "company": "Quetzalli (Wolter)",
      "name": "Mexico, Lot 28022016",
      "ref": 1796,
      "date": 2016,
      "percent": 70,
      "location": "Mexico",
      "rating": 2.75,
      "origin": "Mexico"
    },
    {
      "company": "Quetzalli (Wolter)",
      "name": "Uranga, Lot 22032016",
      "ref": 1800,
      "date": 2016,
      "percent": 74,
      "location": "Mexico",
      "rating": 3,
      "origin": "Mexico"
    },
    {
      "company": "Raaka",
      "name": "Amazon Basin Blend",
      "ref": 1788,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Peru(SMartin,Pangoa,nacional)"
    },
    {
      "company": "Raaka",
      "name": "Virunga",
      "ref": 1708,
      "date": 2015,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Congo"
    },
    {
      "company": "Raaka",
      "name": "Madagascar",
      "ref": 959,
      "date": 2012,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Raaka",
      "name": "La Red",
      "ref": 785,
      "date": 2011,
      "percent": 85,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Rain Republic",
      "name": "Suchitepequez E.",
      "ref": 470,
      "date": 2010,
      "percent": 70,
      "location": "Guatemala",
      "rating": 2.75,
      "origin": "Guatemala"
    },
    {
      "company": "Rancho San Jacinto",
      "name": "Ecuador",
      "ref": 565,
      "date": 2010,
      "percent": 75,
      "location": "Eucador",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Ranger",
      "name": "San Martin, Batch 2",
      "ref": 1558,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Ranger",
      "name": "Chulucanas, Batch 1",
      "ref": 1562,
      "date": 2015,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Ranger",
      "name": "Tumbes, Batch 2",
      "ref": 1562,
      "date": 2015,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Raoul Boulanger",
      "name": "Piura",
      "ref": 1872,
      "date": 2016,
      "percent": 75,
      "location": "France",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Raw Cocoa",
      "name": "Raw",
      "ref": 867,
      "date": 2012,
      "percent": 70,
      "location": "Poland",
      "rating": 2.5,
      "origin": ""
    },
    {
      "company": "Republica del Cacao (aka Confecta)",
      "name": "Esmeraldas",
      "ref": 494,
      "date": 2010,
      "percent": 75,
      "location": "Ecuador",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Republica del Cacao (aka Confecta)",
      "name": "Los Rios, Vinces",
      "ref": 439,
      "date": 2009,
      "percent": 75,
      "location": "Ecuador",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Republica del Cacao (aka Confecta)",
      "name": "Manabi",
      "ref": 147,
      "date": 2007,
      "percent": 75,
      "location": "Ecuador",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Republica del Cacao (aka Confecta)",
      "name": "El Oro",
      "ref": 147,
      "date": 2007,
      "percent": 67,
      "location": "Ecuador",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Republica del Cacao (aka Confecta)",
      "name": "Los Rios",
      "ref": 170,
      "date": 2007,
      "percent": 75,
      "location": "Ecuador",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "Ritual",
      "name": "Camino Verde P., Balao, 2015 harvest, batch8",
      "ref": 1860,
      "date": 2016,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "Ritual",
      "name": "Camino Verde P., Balao, Guayas, 2014",
      "ref": 1466,
      "date": 2015,
      "percent": 85,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Ritual",
      "name": "Mid Mountain, 2014",
      "ref": 1466,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": ""
    },
    {
      "company": "Ritual",
      "name": "Toledo District, Maya",
      "ref": 1089,
      "date": 2013,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Belize"
    },
    {
      "company": "Ritual",
      "name": "Maranon, Cajamarca",
      "ref": 1181,
      "date": 2013,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Ritual",
      "name": "Sambirano",
      "ref": 891,
      "date": 2012,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Madagascar"
    },
    {
      "company": "Ritual",
      "name": "Camino Verde P., 2012, Balao, Guayas",
      "ref": 967,
      "date": 2012,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Ritual",
      "name": "Gran Couva",
      "ref": 979,
      "date": 2012,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Trinidad"
    },
    {
      "company": "Ritual",
      "name": "Costa Rica",
      "ref": 745,
      "date": 2011,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Costa Rica"
    },
    {
      "company": "Roasting Masters",
      "name": "La Dorado, light roast",
      "ref": 1844,
      "date": 2016,
      "percent": 70,
      "location": "South Korea",
      "rating": 3.25,
      "origin": "Costa Rica"
    },
    {
      "company": "Roasting Masters",
      "name": "Tapanti, light roast",
      "ref": 1844,
      "date": 2016,
      "percent": 70,
      "location": "South Korea",
      "rating": 3.25,
      "origin": "Costa Rica"
    },
    {
      "company": "Roasting Masters",
      "name": "Maleku",
      "ref": 1844,
      "date": 2016,
      "percent": 70,
      "location": "South Korea",
      "rating": 3.25,
      "origin": "Costa Rica"
    },
    {
      "company": "Robert (aka Chocolaterie Robert)",
      "name": "Madagascar",
      "ref": 1061,
      "date": 2013,
      "percent": 75,
      "location": "Madagascar",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Robert (aka Chocolaterie Robert)",
      "name": "Madagascar w/ nibs",
      "ref": 1061,
      "date": 2013,
      "percent": 68,
      "location": "Madagascar",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Rococo (Grenada Chocolate Co.)",
      "name": "Gru Grococo, St. Andrews",
      "ref": 923,
      "date": 2012,
      "percent": 66,
      "location": "U.K.",
      "rating": 3.5,
      "origin": "Grenada"
    },
    {
      "company": "Rogue",
      "name": "La Masica, Batch 1, FHIA Research Center",
      "ref": 1748,
      "date": 2016,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Honduras"
    },
    {
      "company": "Rogue",
      "name": "Caranero, Choc. Garage Exclusive",
      "ref": 1446,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Rogue",
      "name": "Tranquilidad, Batch 1",
      "ref": 1566,
      "date": 2015,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Bolivia"
    },
    {
      "company": "Rogue",
      "name": "Porcelana",
      "ref": 1209,
      "date": 2014,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Rogue",
      "name": "Akessons Estate, Sambirano, 2013",
      "ref": 1038,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Rogue",
      "name": "Hispaniola, 2013",
      "ref": 1081,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Rogue",
      "name": "Silvestre, Batch 7, 2013",
      "ref": 1081,
      "date": 2013,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Bolivia"
    },
    {
      "company": "Rogue",
      "name": "Bachelor's Hall E., St. Thomas Parish",
      "ref": 1193,
      "date": 2013,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Jamaica"
    },
    {
      "company": "Rogue",
      "name": "Camino Verde P., Balao, Guayas",
      "ref": 979,
      "date": 2012,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "Rogue",
      "name": "Silvestre, Batch 1, 2011",
      "ref": 793,
      "date": 2011,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Bolivia"
    },
    {
      "company": "Rogue",
      "name": "Piura",
      "ref": 565,
      "date": 2010,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Rogue",
      "name": "Rio Caribe",
      "ref": 327,
      "date": 2009,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Rogue",
      "name": "Hispaniola, 2008",
      "ref": 213,
      "date": 2008,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Rogue",
      "name": "Jamaica",
      "ref": 213,
      "date": 2008,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Jamaica"
    },
    {
      "company": "Rogue",
      "name": "Sambirano, 2008",
      "ref": 213,
      "date": 2008,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Rogue",
      "name": "Trinidad",
      "ref": 213,
      "date": 2008,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Trinidad"
    },
    {
      "company": "Rozsavolgyi",
      "name": "Sur del Lago",
      "ref": 809,
      "date": 2012,
      "percent": 84,
      "location": "Hungary",
      "rating": 2.5,
      "origin": "Venezuela"
    },
    {
      "company": "Rozsavolgyi",
      "name": "Rio Caribe Superior, Paria Penninsula",
      "ref": 871,
      "date": 2012,
      "percent": 76,
      "location": "Hungary",
      "rating": 2.25,
      "origin": "Venezuela"
    },
    {
      "company": "Rozsavolgyi",
      "name": "Sambirano, Akesson Estate",
      "ref": 871,
      "date": 2012,
      "percent": 72,
      "location": "Hungary",
      "rating": 2.5,
      "origin": "Madagascar"
    },
    {
      "company": "Rozsavolgyi",
      "name": "Carenero Superior",
      "ref": 713,
      "date": 2011,
      "percent": 73,
      "location": "Hungary",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Rozsavolgyi",
      "name": "Porcelana",
      "ref": 717,
      "date": 2011,
      "percent": 71,
      "location": "Hungary",
      "rating": 2.5,
      "origin": "Venezuela"
    },
    {
      "company": "Rozsavolgyi",
      "name": "Aragua, Trincheras",
      "ref": 717,
      "date": 2011,
      "percent": 70,
      "location": "Hungary",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Rozsavolgyi",
      "name": "Principe",
      "ref": 765,
      "date": 2011,
      "percent": 77,
      "location": "Hungary",
      "rating": 2.75,
      "origin": "Principe"
    },
    {
      "company": "S.A.I.D.",
      "name": "Malgascio",
      "ref": 607,
      "date": 2010,
      "percent": 64,
      "location": "Italy",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "S.A.I.D.",
      "name": "100 percent",
      "ref": 615,
      "date": 2010,
      "percent": 100,
      "location": "Italy",
      "rating": 1.5,
      "origin": ""
    },
    {
      "company": "S.A.I.D.",
      "name": "Samana",
      "ref": 615,
      "date": 2010,
      "percent": 70,
      "location": "Italy",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "S.A.I.D.",
      "name": "Arawak",
      "ref": 615,
      "date": 2010,
      "percent": 72,
      "location": "Italy",
      "rating": 3.5,
      "origin": "Carribean"
    },
    {
      "company": "S.A.I.D.",
      "name": "Latino",
      "ref": 615,
      "date": 2010,
      "percent": 72,
      "location": "Italy",
      "rating": 3.5,
      "origin": ""
    },
    {
      "company": "Sacred",
      "name": "Midnight",
      "ref": 813,
      "date": 2012,
      "percent": 83,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Central and S. America"
    },
    {
      "company": "Sacred",
      "name": "Twilight",
      "ref": 813,
      "date": 2012,
      "percent": 69,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Central and S. America"
    },
    {
      "company": "Salgado",
      "name": "Bahia Superior",
      "ref": 288,
      "date": 2008,
      "percent": 70,
      "location": "Argentina",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Salgado",
      "name": "Esmeraldas",
      "ref": 288,
      "date": 2008,
      "percent": 70,
      "location": "Argentina",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Salgado",
      "name": "Carenero Superior",
      "ref": 288,
      "date": 2008,
      "percent": 70,
      "location": "Argentina",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Salgado",
      "name": "Rio Arriba",
      "ref": 292,
      "date": 2008,
      "percent": 70,
      "location": "Argentina",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Santander (Compania Nacional)",
      "name": "Colombian 2008",
      "ref": 404,
      "date": 2009,
      "percent": 75,
      "location": "Colombia",
      "rating": 2.75,
      "origin": "Colombia"
    },
    {
      "company": "Santander (Compania Nacional)",
      "name": "Colombian w/ nibs",
      "ref": 414,
      "date": 2009,
      "percent": 70,
      "location": "Colombia",
      "rating": 3,
      "origin": "Colombia"
    },
    {
      "company": "Santander (Compania Nacional)",
      "name": "Colombian Semi Dark",
      "ref": 32,
      "date": 2006,
      "percent": 53,
      "location": "Colombia",
      "rating": 2,
      "origin": "Colombia"
    },
    {
      "company": "Santander (Compania Nacional)",
      "name": "Colombian",
      "ref": 32,
      "date": 2006,
      "percent": 65,
      "location": "Colombia",
      "rating": 3,
      "origin": "Colombia"
    },
    {
      "company": "Santander (Compania Nacional)",
      "name": "Colombian Dark",
      "ref": 32,
      "date": 2006,
      "percent": 70,
      "location": "Colombia",
      "rating": 4,
      "origin": "Colombia"
    },
    {
      "company": "Santome",
      "name": "Sao Tome",
      "ref": 761,
      "date": 2011,
      "percent": 70,
      "location": "France",
      "rating": 2.75,
      "origin": "Sao Tome"
    },
    {
      "company": "Scharffen Berger",
      "name": "San Juan de Cheni",
      "ref": 959,
      "date": 2012,
      "percent": 78,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Peru"
    },
    {
      "company": "Scharffen Berger",
      "name": "Markham Valley",
      "ref": 781,
      "date": 2011,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Scharffen Berger",
      "name": "Camahogne",
      "ref": 464,
      "date": 2010,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Grenada"
    },
    {
      "company": "Scharffen Berger",
      "name": "Amina",
      "ref": 464,
      "date": 2010,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Madagascar"
    },
    {
      "company": "Scharffen Berger",
      "name": "Tome Acu",
      "ref": 336,
      "date": 2009,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Brazil"
    },
    {
      "company": "Scharffen Berger",
      "name": "Asante",
      "ref": 336,
      "date": 2009,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Ghana"
    },
    {
      "company": "Scharffen Berger",
      "name": "Ben Tre",
      "ref": 445,
      "date": 2009,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Vietnam"
    },
    {
      "company": "Scharffen Berger",
      "name": "Finisterra",
      "ref": 227,
      "date": 2008,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ven., Trinidad, Mad."
    },
    {
      "company": "Scharffen Berger",
      "name": "Las Islas",
      "ref": 117,
      "date": 2007,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Carribean(DR/Jam/Tri)"
    },
    {
      "company": "Scharffen Berger",
      "name": "Nibby",
      "ref": 135,
      "date": 2007,
      "percent": 62,
      "location": "U.S.A.",
      "rating": 3,
      "origin": ""
    },
    {
      "company": "Scharffen Berger",
      "name": "Cuyagua",
      "ref": 135,
      "date": 2007,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Scharffen Berger",
      "name": "Antilles (Trin/Gren/DR/Ven)",
      "ref": 188,
      "date": 2007,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Carribean"
    },
    {
      "company": "Scharffen Berger",
      "name": "Extra Dark",
      "ref": 15,
      "date": 2006,
      "percent": 82,
      "location": "U.S.A.",
      "rating": 2,
      "origin": ""
    },
    {
      "company": "Scharffen Berger",
      "name": "Bittersweet",
      "ref": 15,
      "date": 2006,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": ""
    },
    {
      "company": "Scharffen Berger",
      "name": "Kumasi Sambirano",
      "ref": 40,
      "date": 2006,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 2,
      "origin": "Ghana & Madagascar"
    },
    {
      "company": "Scharffen Berger",
      "name": "Jamaica a l'ancienne",
      "ref": 56,
      "date": 2006,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2,
      "origin": "Jamaica"
    },
    {
      "company": "Scharffen Berger",
      "name": "Semisweet",
      "ref": 56,
      "date": 2006,
      "percent": 62,
      "location": "U.S.A.",
      "rating": 3,
      "origin": ""
    },
    {
      "company": "Seaforth",
      "name": "Dominican Republic",
      "ref": 1658,
      "date": 2015,
      "percent": 70,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Domincan Republic"
    },
    {
      "company": "Seaforth",
      "name": "Grenada",
      "ref": 1658,
      "date": 2015,
      "percent": 70,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Grenada"
    },
    {
      "company": "Shark Mountain",
      "name": "Jamaica",
      "ref": 1450,
      "date": 2015,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Jamaica"
    },
    {
      "company": "Shark Mountain",
      "name": "Papua New Guinea",
      "ref": 1450,
      "date": 2015,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Shark Mountain",
      "name": "Cuyagua",
      "ref": 1466,
      "date": 2015,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Shark Mountain",
      "name": "ROIG",
      "ref": 1466,
      "date": 2015,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Shark Mountain",
      "name": "Ecuador",
      "ref": 1335,
      "date": 2014,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Shark Mountain",
      "name": "Belize, 2013",
      "ref": 1335,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Belize"
    },
    {
      "company": "Shark's",
      "name": "Hilo",
      "ref": 713,
      "date": 2011,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 2,
      "origin": "Hawaii"
    },
    {
      "company": "Shark's",
      "name": "Hilo, w/ added cocoa butter",
      "ref": 721,
      "date": 2011,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Hawaii"
    },
    {
      "company": "Shattel",
      "name": "Tingo Maria",
      "ref": 1884,
      "date": 2016,
      "percent": 70,
      "location": "Peru",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Shattell",
      "name": "Porcelana",
      "ref": 757,
      "date": 2011,
      "percent": 75,
      "location": "Peru",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Sibu",
      "name": "Oro",
      "ref": 1586,
      "date": 2015,
      "percent": 82,
      "location": "Costa Rica",
      "rating": 3.25,
      "origin": "Costa Rica"
    },
    {
      "company": "Sibu",
      "name": "Oscuro",
      "ref": 1586,
      "date": 2015,
      "percent": 70,
      "location": "Costa Rica",
      "rating": 3.5,
      "origin": "Costa Rica"
    },
    {
      "company": "Sibu Sura",
      "name": "Peru",
      "ref": 911,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Silvio Bessone",
      "name": "Maya Belize",
      "ref": 717,
      "date": 2011,
      "percent": 67,
      "location": "Italy",
      "rating": 3,
      "origin": "Belize"
    },
    {
      "company": "Silvio Bessone",
      "name": "Trintade, Sao Tome",
      "ref": 725,
      "date": 2011,
      "percent": 65,
      "location": "Italy",
      "rating": 3.25,
      "origin": "Sao Tome"
    },
    {
      "company": "Silvio Bessone",
      "name": "Bahia, Scavina",
      "ref": 729,
      "date": 2011,
      "percent": 60,
      "location": "Italy",
      "rating": 3.25,
      "origin": "Brazil"
    },
    {
      "company": "Silvio Bessone",
      "name": "Porcelana, Colombia, Amazonas",
      "ref": 741,
      "date": 2011,
      "percent": 68,
      "location": "Italy",
      "rating": 3,
      "origin": "Colombia"
    },
    {
      "company": "Sirene",
      "name": "Wild Bolivia",
      "ref": 1788,
      "date": 2016,
      "percent": 73,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Bolivia"
    },
    {
      "company": "Sirene",
      "name": "Kokoa Kamili Coop",
      "ref": 1856,
      "date": 2016,
      "percent": 73,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Tanzania"
    },
    {
      "company": "Sirene",
      "name": "Esmeraldas, Salazar Farm",
      "ref": 1860,
      "date": 2016,
      "percent": 73,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "Sirene",
      "name": "Somia Plantation, 2012",
      "ref": 1502,
      "date": 2015,
      "percent": 100,
      "location": "Canada",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Sirene",
      "name": "Camino Verde P., Balao, Guayas, 2012",
      "ref": 1506,
      "date": 2015,
      "percent": 100,
      "location": "Canada",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Sirene",
      "name": "Lachua w/ cane sugar",
      "ref": 1614,
      "date": 2015,
      "percent": 73,
      "location": "Canada",
      "rating": 3,
      "origin": "Guatemala"
    },
    {
      "company": "Sirene",
      "name": "Lachua w/ maple sugar, batch 5",
      "ref": 1614,
      "date": 2015,
      "percent": 73,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Guatemala"
    },
    {
      "company": "Sirene",
      "name": "Pisa",
      "ref": 1650,
      "date": 2015,
      "percent": 73,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Haiti"
    },
    {
      "company": "Sirene",
      "name": "Somia Plantation, 2012",
      "ref": 1339,
      "date": 2014,
      "percent": 67,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Madagascar"
    },
    {
      "company": "Sirene",
      "name": "Somia Plantation, 2012",
      "ref": 1339,
      "date": 2014,
      "percent": 73,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Madagascar"
    },
    {
      "company": "Sirene",
      "name": "Camino Verde P., Balao, Guayas",
      "ref": 1343,
      "date": 2014,
      "percent": 73,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "Sjolinds",
      "name": "Ghana",
      "ref": 1454,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Ghana"
    },
    {
      "company": "Sjolinds",
      "name": "Nicaragua",
      "ref": 1462,
      "date": 2015,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Nicaragua"
    },
    {
      "company": "Smooth Chocolator, The",
      "name": "Oko Caribe, DOR005",
      "ref": 1940,
      "date": 2017,
      "percent": 70,
      "location": "Australia",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Smooth Chocolator, The",
      "name": "Guasare, La Sierra de Perija, batch gua001",
      "ref": 1740,
      "date": 2016,
      "percent": 70,
      "location": "Australia",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Smooth Chocolator, The",
      "name": "Porcelana, Sorotaima,Machiques,batch pcl001",
      "ref": 1740,
      "date": 2016,
      "percent": 70,
      "location": "Australia",
      "rating": 4,
      "origin": "Ecuador"
    },
    {
      "company": "Smooth Chocolator, The",
      "name": "Maya Mtn, Moho R., Toledo D.",
      "ref": 1756,
      "date": 2016,
      "percent": 70,
      "location": "Australia",
      "rating": 3.75,
      "origin": "Belize"
    },
    {
      "company": "Smooth Chocolator, The",
      "name": "Tien Giang",
      "ref": 1864,
      "date": 2016,
      "percent": 70,
      "location": "Australia",
      "rating": 3,
      "origin": "Vietnam"
    },
    {
      "company": "Smooth Chocolator, The",
      "name": "Australia",
      "ref": 1864,
      "date": 2016,
      "percent": 67,
      "location": "Australia",
      "rating": 3.75,
      "origin": "Australia"
    },
    {
      "company": "Smooth Chocolator, The",
      "name": "Chimelb, Lanquin, Alta Verapaz, b-GUA001",
      "ref": 1908,
      "date": 2016,
      "percent": 70,
      "location": "Australia",
      "rating": 3.25,
      "origin": "Guatemala"
    },
    {
      "company": "Smooth Chocolator, The",
      "name": "Akesson's Estate",
      "ref": 1618,
      "date": 2015,
      "percent": 65,
      "location": "Australia",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Smooth Chocolator, The",
      "name": "Akesson's Estate",
      "ref": 1622,
      "date": 2015,
      "percent": 70,
      "location": "Australia",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Smooth Chocolator, The",
      "name": "Kokoa Kamili",
      "ref": 1622,
      "date": 2015,
      "percent": 67,
      "location": "Australia",
      "rating": 3.75,
      "origin": "Tanzania"
    },
    {
      "company": "Smooth Chocolator, The",
      "name": "San Juan Estate",
      "ref": 1622,
      "date": 2015,
      "percent": 70,
      "location": "Australia",
      "rating": 3.75,
      "origin": "Trinidad"
    },
    {
      "company": "Smooth Chocolator, The",
      "name": "Camino Verde",
      "ref": 1622,
      "date": 2015,
      "percent": 72,
      "location": "Australia",
      "rating": 4,
      "origin": "Ecuador"
    },
    {
      "company": "Smooth Chocolator, The",
      "name": "Bolivia",
      "ref": 1626,
      "date": 2015,
      "percent": 72,
      "location": "Australia",
      "rating": 2.75,
      "origin": "Bolivia"
    },
    {
      "company": "Smooth Chocolator, The",
      "name": "Papua New Guinea, triple roast, batch 1",
      "ref": 1662,
      "date": 2015,
      "percent": 65,
      "location": "Australia",
      "rating": 3.5,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Smooth Chocolator, The",
      "name": "Maranon, batch 2",
      "ref": 1666,
      "date": 2015,
      "percent": 67,
      "location": "Australia",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Smooth Chocolator, The",
      "name": "Chuao, batch 3",
      "ref": 1666,
      "date": 2015,
      "percent": 70,
      "location": "Australia",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Snake & Butterfly",
      "name": "Ghana",
      "ref": 693,
      "date": 2011,
      "percent": 67,
      "location": "U.S.A.",
      "rating": 1.5,
      "origin": "Ghana"
    },
    {
      "company": "Snake & Butterfly",
      "name": "Madagascar",
      "ref": 502,
      "date": 2010,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Snake & Butterfly",
      "name": "Ecuador",
      "ref": 502,
      "date": 2010,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Sol Cacao",
      "name": "Ecuador, Batch 1",
      "ref": 1812,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Sol Cacao",
      "name": "Madagascar",
      "ref": 1518,
      "date": 2015,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Solkiki",
      "name": "Maranon, Fortunato No. 4",
      "ref": 1840,
      "date": 2016,
      "percent": 68,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Solkiki",
      "name": "Castillo, Hispaniola, unroasted",
      "ref": 1840,
      "date": 2016,
      "percent": 85,
      "location": "U.K.",
      "rating": 2.75,
      "origin": "Domincan Republic"
    },
    {
      "company": "Solomons Gold",
      "name": "Solomon Island",
      "ref": 1792,
      "date": 2016,
      "percent": 70,
      "location": "New Zealand",
      "rating": 3.25,
      "origin": "Solomon Islands"
    },
    {
      "company": "Solomons Gold",
      "name": "Solomon Island w/ nibs",
      "ref": 1796,
      "date": 2016,
      "percent": 75,
      "location": "New Zealand",
      "rating": 3.25,
      "origin": "Solomon Islands"
    },
    {
      "company": "Solstice",
      "name": "Bundibugyo",
      "ref": 1335,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Uganda"
    },
    {
      "company": "Solstice",
      "name": "Sambirano",
      "ref": 1157,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Solstice",
      "name": "Amazonas",
      "ref": 1157,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Solstice",
      "name": "Bolivia",
      "ref": 1161,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Bolivia"
    },
    {
      "company": "Solstice",
      "name": "San Martin",
      "ref": 1161,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Solstice",
      "name": "Wasatch",
      "ref": 1161,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": ""
    },
    {
      "company": "Soma",
      "name": "Oko Caribe, Duarte P., Collab w Chocosol",
      "ref": 1820,
      "date": 2016,
      "percent": 62,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Domincan Republic"
    },
    {
      "company": "Soma",
      "name": "Sambirano Valley, Black Science, B-60307.0",
      "ref": 1820,
      "date": 2016,
      "percent": 70,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Soma",
      "name": "Bahia Black, batch bra50722.1",
      "ref": 1828,
      "date": 2016,
      "percent": 70,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Soma",
      "name": "Abstract S. w/ Jamaica nibs,batch abs60323.0",
      "ref": 1828,
      "date": 2016,
      "percent": 75,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Ven.,Ecu.,Peru,Nic."
    },
    {
      "company": "Soma",
      "name": "Chuno, San Jose de Bocay, Pantasma R.,B.S.",
      "ref": 1828,
      "date": 2016,
      "percent": 70,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Soma",
      "name": "Tien Giang, Black S., batch VIT60420.0",
      "ref": 1828,
      "date": 2016,
      "percent": 70,
      "location": "Canada",
      "rating": 4,
      "origin": "Vietnam"
    },
    {
      "company": "Soma",
      "name": "Camino Verde, Black S., batch cvu6030.0",
      "ref": 1832,
      "date": 2016,
      "percent": 70,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Soma",
      "name": "CSB Chama",
      "ref": 1594,
      "date": 2015,
      "percent": 70,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Soma",
      "name": "Porcelana",
      "ref": 1594,
      "date": 2015,
      "percent": 75,
      "location": "Canada",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Soma",
      "name": "La Tronca, Matagalpa",
      "ref": 1227,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Nicaragua"
    },
    {
      "company": "Soma",
      "name": "Maranon Canyon",
      "ref": 1259,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Soma",
      "name": "La Dalia",
      "ref": 1307,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Nicaragua"
    },
    {
      "company": "Soma",
      "name": "Camino Verde P., Balao, Guayas",
      "ref": 1307,
      "date": 2014,
      "percent": 80,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Soma",
      "name": "Espiritu Santo, 'Smoke Monster'",
      "ref": 1307,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Vanuatu"
    },
    {
      "company": "Soma",
      "name": "Little Big Man",
      "ref": 1339,
      "date": 2014,
      "percent": 70,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Madagascar & Ecuador"
    },
    {
      "company": "Soma",
      "name": "Rizek Cacao, Domin. Rep.",
      "ref": 1019,
      "date": 2013,
      "percent": 77,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Soma",
      "name": "Java",
      "ref": 1030,
      "date": 2013,
      "percent": 70,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Indonesia"
    },
    {
      "company": "Soma",
      "name": "Apurimac, El Quinacho Co-op",
      "ref": 1073,
      "date": 2013,
      "percent": 70,
      "location": "Canada",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Soma",
      "name": "Sangre Grande P., Trinidad",
      "ref": 1073,
      "date": 2013,
      "percent": 70,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Trinidad"
    },
    {
      "company": "Soma",
      "name": "Chef's Blend",
      "ref": 1077,
      "date": 2013,
      "percent": 70,
      "location": "Canada",
      "rating": 3.25,
      "origin": ""
    },
    {
      "company": "Soma",
      "name": "Patanemo",
      "ref": 1077,
      "date": 2013,
      "percent": 70,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Soma",
      "name": "Crazy 88",
      "ref": 1077,
      "date": 2013,
      "percent": 88,
      "location": "Canada",
      "rating": 4,
      "origin": "Guat., D.R., Peru, Mad., PNG"
    },
    {
      "company": "Soma",
      "name": "Maracaibo, El Vigia",
      "ref": 1077,
      "date": 2013,
      "percent": 70,
      "location": "Canada",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Soma",
      "name": "Equator",
      "ref": 1081,
      "date": 2013,
      "percent": 67,
      "location": "Canada",
      "rating": 4,
      "origin": "Peru, Dom. Rep"
    },
    {
      "company": "Soma",
      "name": "Orinoco",
      "ref": 1173,
      "date": 2013,
      "percent": 70,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Soma",
      "name": "Bachelor's Hall E., St. Thomas Parish",
      "ref": 1177,
      "date": 2013,
      "percent": 70,
      "location": "Canada",
      "rating": 4,
      "origin": "Jamaica"
    },
    {
      "company": "Soma",
      "name": "Noula Coop",
      "ref": 817,
      "date": 2012,
      "percent": 70,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Haiti"
    },
    {
      "company": "Soma",
      "name": "O'ahu",
      "ref": 833,
      "date": 2012,
      "percent": 70,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Hawaii"
    },
    {
      "company": "Soma",
      "name": "Dual Origins, Sambirano, Elvesia",
      "ref": 867,
      "date": 2012,
      "percent": 70,
      "location": "Canada",
      "rating": 4,
      "origin": "Dom. Rep., Madagascar"
    },
    {
      "company": "Soma",
      "name": "Dancing in Your Head, 5 bean blend",
      "ref": 867,
      "date": 2012,
      "percent": 70,
      "location": "Canada",
      "rating": 4,
      "origin": "Gre., PNG, Haw., Haiti, Mad"
    },
    {
      "company": "Soma",
      "name": "Cahabon Region",
      "ref": 951,
      "date": 2012,
      "percent": 70,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Guatemala"
    },
    {
      "company": "Soma",
      "name": "Carenero Superior",
      "ref": 951,
      "date": 2012,
      "percent": 70,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Soma",
      "name": "Eastern Promises",
      "ref": 967,
      "date": 2012,
      "percent": 70,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Mad., Java, PNG"
    },
    {
      "company": "Soma",
      "name": "Papua New Guinea",
      "ref": 983,
      "date": 2012,
      "percent": 85,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Soma",
      "name": "Grenada, Black Science",
      "ref": 676,
      "date": 2011,
      "percent": 70,
      "location": "Canada",
      "rating": 2.75,
      "origin": "Grenada"
    },
    {
      "company": "Soma",
      "name": "Alto Beni, Wild Bolivian",
      "ref": 676,
      "date": 2011,
      "percent": 70,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Bolivia"
    },
    {
      "company": "Soma",
      "name": "Peruvian",
      "ref": 676,
      "date": 2011,
      "percent": 64,
      "location": "Canada",
      "rating": 4,
      "origin": "Peru"
    },
    {
      "company": "Soma",
      "name": "Three Amigos(Chuao, Wild Bolivia, D.R.)",
      "ref": 676,
      "date": 2011,
      "percent": 70,
      "location": "Canada",
      "rating": 4,
      "origin": "Ven, Bolivia, D.R."
    },
    {
      "company": "Soma",
      "name": "Elvesia P., Black Science",
      "ref": 682,
      "date": 2011,
      "percent": 70,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Soma",
      "name": "Chuao",
      "ref": 688,
      "date": 2011,
      "percent": 70,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Soma",
      "name": "Black Science Blend 1",
      "ref": 607,
      "date": 2010,
      "percent": 70,
      "location": "Canada",
      "rating": 3.75,
      "origin": "DR, Ecuador, Peru"
    },
    {
      "company": "Soma",
      "name": "Hispaniola",
      "ref": 377,
      "date": 2009,
      "percent": 70,
      "location": "Canada",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Soma",
      "name": "Africa",
      "ref": 377,
      "date": 2009,
      "percent": 70,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Ghana"
    },
    {
      "company": "Soma",
      "name": "Conacado",
      "ref": 387,
      "date": 2009,
      "percent": 70,
      "location": "Canada",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Soma",
      "name": "Papua New Guinea",
      "ref": 387,
      "date": 2009,
      "percent": 70,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Soma",
      "name": "Madagascar",
      "ref": 387,
      "date": 2009,
      "percent": 70,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Madagascar"
    },
    {
      "company": "Soma",
      "name": "Ocumare",
      "ref": 387,
      "date": 2009,
      "percent": 70,
      "location": "Canada",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Somerville",
      "name": "Nicaragua",
      "ref": 1367,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Nicaragua"
    },
    {
      "company": "Somerville",
      "name": "Hawaiian, Big Island",
      "ref": 1395,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Hawaii"
    },
    {
      "company": "Soul",
      "name": "Dominican Republic",
      "ref": 1932,
      "date": 2017,
      "percent": 70,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Soul",
      "name": "Madagascar",
      "ref": 1936,
      "date": 2017,
      "percent": 70,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Soul",
      "name": "Venezuela",
      "ref": 1936,
      "date": 2017,
      "percent": 75,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Soul",
      "name": "Ecuador",
      "ref": 1936,
      "date": 2017,
      "percent": 75,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Soul",
      "name": "Papua New Guinea",
      "ref": 1936,
      "date": 2017,
      "percent": 77,
      "location": "Canada",
      "rating": 3.25,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Soul",
      "name": "Tanzania",
      "ref": 1940,
      "date": 2017,
      "percent": 80,
      "location": "Canada",
      "rating": 3.5,
      "origin": "Tanzania"
    },
    {
      "company": "Spagnvola",
      "name": "AgroCriso Plantation",
      "ref": 793,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Spagnvola",
      "name": "AgroCriso Plantation",
      "ref": 793,
      "date": 2012,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Spagnvola",
      "name": "AgroCriso Plantation",
      "ref": 793,
      "date": 2012,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Spencer",
      "name": "Dominican Republic",
      "ref": 1932,
      "date": 2017,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Spencer",
      "name": "Ecuador",
      "ref": 1932,
      "date": 2017,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Spencer",
      "name": "Peru",
      "ref": 1932,
      "date": 2017,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Spencer",
      "name": "Dominican Republic, lot D82R",
      "ref": 1792,
      "date": 2016,
      "percent": 70,
      "location": "Australia",
      "rating": 3.5,
      "origin": "Domincan Republic"
    },
    {
      "company": "Spencer",
      "name": "Ecuador, lot E432314L",
      "ref": 1792,
      "date": 2016,
      "percent": 70,
      "location": "Australia",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "Spencer",
      "name": "Madagascar, lot M0403R",
      "ref": 1792,
      "date": 2016,
      "percent": 70,
      "location": "Australia",
      "rating": 3.75,
      "origin": "Madagascar"
    },
    {
      "company": "Spencer",
      "name": "Malekula Island",
      "ref": 1434,
      "date": 2014,
      "percent": 72,
      "location": "Australia",
      "rating": 2.75,
      "origin": "Vanuatu"
    },
    {
      "company": "Sprungli (Felchlin)",
      "name": "Alto Beni",
      "ref": 1057,
      "date": 2013,
      "percent": 70,
      "location": "Switzerland",
      "rating": 3,
      "origin": "Bolivia"
    },
    {
      "company": "SRSLY",
      "name": "Dominican Republic",
      "ref": 1113,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "SRSLY",
      "name": "Dominican Republic",
      "ref": 1121,
      "date": 2013,
      "percent": 84,
      "location": "U.S.A.",
      "rating": 2.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Starchild",
      "name": "Bolivar, Arriba",
      "ref": 1634,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Starchild",
      "name": "Hispaniola",
      "ref": 1692,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Domincan Republic"
    },
    {
      "company": "Starchild",
      "name": "Cacao Verapaz",
      "ref": 1692,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Guatemala"
    },
    {
      "company": "Starchild",
      "name": "Rio Tuma",
      "ref": 1692,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Nicaragua"
    },
    {
      "company": "Starchild",
      "name": "Sambirano Valley",
      "ref": 1696,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Stella (aka Bernrain)",
      "name": "Bahia, Agri-Forestal Plantation, 2010",
      "ref": 859,
      "date": 2012,
      "percent": 68,
      "location": "Switzerland",
      "rating": 2.75,
      "origin": "Brazil"
    },
    {
      "company": "Stella (aka Bernrain)",
      "name": "India",
      "ref": 729,
      "date": 2011,
      "percent": 72,
      "location": "Switzerland",
      "rating": 3.25,
      "origin": "India"
    },
    {
      "company": "Stone Grindz",
      "name": "Ecuador, Midnight Dark",
      "ref": 1291,
      "date": 2014,
      "percent": 84,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Stone Grindz",
      "name": "Ecuador, Twilght Dark",
      "ref": 1291,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "StRita Supreme",
      "name": "Samar, East Visayas region",
      "ref": 939,
      "date": 2012,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Philippines"
    },
    {
      "company": "StRita Supreme",
      "name": "Samar, East Visayas region",
      "ref": 943,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Philippines"
    },
    {
      "company": "StRita Supreme",
      "name": "Samar, East Visayas region",
      "ref": 943,
      "date": 2012,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Philippines"
    },
    {
      "company": "Sublime Origins",
      "name": "Sambirano",
      "ref": 1157,
      "date": 2013,
      "percent": 67,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Sublime Origins",
      "name": "Moho Valley",
      "ref": 1157,
      "date": 2013,
      "percent": 78,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Belize"
    },
    {
      "company": "Summerbird",
      "name": "Peru",
      "ref": 1800,
      "date": 2016,
      "percent": 61,
      "location": "Denmark",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Summerbird",
      "name": "Peru",
      "ref": 1800,
      "date": 2016,
      "percent": 71,
      "location": "Denmark",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Suruca Chocolate",
      "name": "Venezuela",
      "ref": 1796,
      "date": 2016,
      "percent": 70,
      "location": "Venezuela",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Suruca Chocolate",
      "name": "Venezuela",
      "ref": 1796,
      "date": 2016,
      "percent": 60,
      "location": "Venezuela",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Svenska Kakaobolaget",
      "name": "Sri Lanka",
      "ref": 1618,
      "date": 2015,
      "percent": 70,
      "location": "Sweden",
      "rating": 2.75,
      "origin": "Sri Lanka"
    },
    {
      "company": "Szanto Tibor",
      "name": "Nacional",
      "ref": 1668,
      "date": 2015,
      "percent": 70,
      "location": "Hungary",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Szanto Tibor",
      "name": "Baracoa",
      "ref": 1704,
      "date": 2015,
      "percent": 88,
      "location": "Hungary",
      "rating": 3.25,
      "origin": "Cuba"
    },
    {
      "company": "Szanto Tibor",
      "name": "Ambolikapiky",
      "ref": 1704,
      "date": 2015,
      "percent": 70,
      "location": "Hungary",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Szanto Tibor",
      "name": "Winak, Sumaco",
      "ref": 1704,
      "date": 2015,
      "percent": 70,
      "location": "Hungary",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "Szanto Tibor",
      "name": "Ben Tre, Mekong Delta",
      "ref": 1708,
      "date": 2015,
      "percent": 70,
      "location": "Hungary",
      "rating": 3.25,
      "origin": "Vietnam"
    },
    {
      "company": "Szanto Tibor",
      "name": "Fazenda Sempre Firme, Bahia",
      "ref": 1708,
      "date": 2015,
      "percent": 70,
      "location": "Hungary",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Szanto Tibor",
      "name": "Porcelana",
      "ref": 1263,
      "date": 2014,
      "percent": 70,
      "location": "Hungary",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Szanto Tibor",
      "name": "Baracoa",
      "ref": 1263,
      "date": 2014,
      "percent": 70,
      "location": "Hungary",
      "rating": 3.75,
      "origin": "Cuba"
    },
    {
      "company": "Szanto Tibor",
      "name": "Autumn, Primary Harvest, 2012",
      "ref": 1185,
      "date": 2013,
      "percent": 70,
      "location": "Hungary",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Szanto Tibor",
      "name": "Spring, Secondary Harvest, 2012",
      "ref": 1185,
      "date": 2013,
      "percent": 70,
      "location": "Hungary",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Szanto Tibor",
      "name": "Cacao Blanco",
      "ref": 1193,
      "date": 2013,
      "percent": 70,
      "location": "Hungary",
      "rating": 3.25,
      "origin": "Nicaragua"
    },
    {
      "company": "Szanto Tibor",
      "name": "Santo Domingo",
      "ref": 939,
      "date": 2012,
      "percent": 70,
      "location": "Hungary",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Szanto Tibor",
      "name": "Millot Plantation",
      "ref": 939,
      "date": 2012,
      "percent": 70,
      "location": "Hungary",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Szanto Tibor",
      "name": "Ayacucho, \"El Guinacho",
      "ref": 939,
      "date": 2012,
      "percent": 70,
      "location": "Hungary",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Szanto Tibor",
      "name": "Crudo",
      "ref": 761,
      "date": 2011,
      "percent": 70,
      "location": "Hungary",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Tabal",
      "name": "Costa Rica",
      "ref": 1101,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Costa Rica"
    },
    {
      "company": "Tabal",
      "name": "Dominican Republic",
      "ref": 1101,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Tabal",
      "name": "Chiapas, Lacandon Jungle",
      "ref": 1105,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Mexico"
    },
    {
      "company": "Tabal",
      "name": "Peru",
      "ref": 1105,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Tablette (aka Vanillabeans)",
      "name": "Colombia",
      "ref": 1450,
      "date": 2015,
      "percent": 70,
      "location": "Japan",
      "rating": 3,
      "origin": "Colombia"
    },
    {
      "company": "Tablette (aka Vanillabeans)",
      "name": "Papua",
      "ref": 1450,
      "date": 2015,
      "percent": 62,
      "location": "Japan",
      "rating": 3.25,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Tablette (aka Vanillabeans)",
      "name": "Vietnam",
      "ref": 1450,
      "date": 2015,
      "percent": 60,
      "location": "Japan",
      "rating": 3.25,
      "origin": "Vietnam"
    },
    {
      "company": "Tablette (aka Vanillabeans)",
      "name": "Trinidad",
      "ref": 1680,
      "date": 2015,
      "percent": 77,
      "location": "Japan",
      "rating": 2.75,
      "origin": "Trinidad"
    },
    {
      "company": "Tan Ban Skrati",
      "name": "Paramaribo, batch 20160043-01",
      "ref": 1868,
      "date": 2016,
      "percent": 70,
      "location": "Suriname",
      "rating": 3.25,
      "origin": "Suriname"
    },
    {
      "company": "Taza",
      "name": "Belize",
      "ref": 1271,
      "date": 2014,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Belize"
    },
    {
      "company": "Taza",
      "name": "Alto Beni",
      "ref": 785,
      "date": 2011,
      "percent": 87,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Bolivia"
    },
    {
      "company": "Taza",
      "name": "Chiapan",
      "ref": 451,
      "date": 2009,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Mexico"
    },
    {
      "company": "Taza",
      "name": "Dark, Stone Ground",
      "ref": 180,
      "date": 2007,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "TCHO",
      "name": "West Africa",
      "ref": 1716,
      "date": 2016,
      "percent": 62,
      "location": "U.S.A.",
      "rating": 2,
      "origin": "West Africa"
    },
    {
      "company": "TCHO",
      "name": "Peru- Ecuador",
      "ref": 915,
      "date": 2012,
      "percent": 99,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Peru, Ecuador"
    },
    {
      "company": "TCHO",
      "name": "TCHOPro 60.5",
      "ref": 387,
      "date": 2009,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": ""
    },
    {
      "company": "TCHO",
      "name": "TCHOPro 68",
      "ref": 387,
      "date": 2009,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3,
      "origin": ""
    },
    {
      "company": "TCHO",
      "name": "Chocolatey-beta",
      "ref": 199,
      "date": 2008,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Ghana"
    },
    {
      "company": "TCHO",
      "name": "Fruity-beta",
      "ref": 280,
      "date": 2008,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "TCHO",
      "name": "Citrus-beta",
      "ref": 280,
      "date": 2008,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "TCHO",
      "name": "Nutty-beta",
      "ref": 284,
      "date": 2008,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Tejas",
      "name": "Concepcion",
      "ref": 801,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Tejas",
      "name": "Bayou Blend",
      "ref": 801,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ecuador, Mad., PNG"
    },
    {
      "company": "Tejas",
      "name": "Aranama",
      "ref": 805,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Tejas",
      "name": "Presidio",
      "ref": 805,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Tejas",
      "name": "La Bahia, w/ cane juice",
      "ref": 817,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Tejas",
      "name": "Capistrano",
      "ref": 821,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2,
      "origin": "Peru"
    },
    {
      "company": "Tejas",
      "name": "La Bahia, w/ cane sugar",
      "ref": 825,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Tejas",
      "name": "San Jose",
      "ref": 829,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Bolivia"
    },
    {
      "company": "Tejas",
      "name": "Capistrano*",
      "ref": 829,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Tejas",
      "name": "Espada",
      "ref": 833,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Mexico"
    },
    {
      "company": "Tejas",
      "name": "Espada",
      "ref": 967,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Brazil"
    },
    {
      "company": "Tejas",
      "name": "Concepcion*",
      "ref": 971,
      "date": 2012,
      "percent": 80,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Tejas",
      "name": "San Jose",
      "ref": 971,
      "date": 2012,
      "percent": 67,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Bolivia"
    },
    {
      "company": "Tejas",
      "name": "Bahia, Floresta Azul,Good Friends Reserve#3",
      "ref": 971,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Brazil"
    },
    {
      "company": "Terroir",
      "name": "Peru",
      "ref": 1478,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Terroir",
      "name": "Belize",
      "ref": 1478,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Belize"
    },
    {
      "company": "Terroir",
      "name": "Madagascar",
      "ref": 1478,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Madagascar"
    },
    {
      "company": "Terroir",
      "name": "Ecuador",
      "ref": 1482,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Terroir",
      "name": "Oko Caribe",
      "ref": 1554,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Domincan Republic"
    },
    {
      "company": "Terroir",
      "name": "Guatemala",
      "ref": 1558,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Guatemala"
    },
    {
      "company": "Terroir",
      "name": "Ecuador",
      "ref": 1323,
      "date": 2014,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Terroir",
      "name": "Madagascar",
      "ref": 1323,
      "date": 2014,
      "percent": 67,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Madagascar"
    },
    {
      "company": "Terroir",
      "name": "Uganda",
      "ref": 1323,
      "date": 2014,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Uganda"
    },
    {
      "company": "The Barn",
      "name": "Peru",
      "ref": 1614,
      "date": 2015,
      "percent": 70,
      "location": "Sweden",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Theo",
      "name": "Congo w/ nibs",
      "ref": 903,
      "date": 2012,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Congo"
    },
    {
      "company": "Theo",
      "name": "Madagascar",
      "ref": 162,
      "date": 2007,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Theo",
      "name": "Ivory Coast",
      "ref": 184,
      "date": 2007,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Ivory Coast"
    },
    {
      "company": "Theo",
      "name": "Ghana, Kumasi",
      "ref": 184,
      "date": 2007,
      "percent": 84,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ghana"
    },
    {
      "company": "Theo",
      "name": "Venezuela; Barinos, Merida, Tachron",
      "ref": 188,
      "date": 2007,
      "percent": 91,
      "location": "U.S.A.",
      "rating": 2,
      "origin": "Venezuela"
    },
    {
      "company": "Theo",
      "name": "Ghana, Panama, Ecuador",
      "ref": 188,
      "date": 2007,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ghana, Panama, Ecuador"
    },
    {
      "company": "Theobroma",
      "name": "Piura Select, Cacao Blanc",
      "ref": 1684,
      "date": 2015,
      "percent": 70,
      "location": "Japan",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Timo A. Meyer",
      "name": "Belize, med roast",
      "ref": 1836,
      "date": 2016,
      "percent": 72,
      "location": "Germany",
      "rating": 3.75,
      "origin": "Belize"
    },
    {
      "company": "To'ak (Ecuatoriana)",
      "name": "Manabi",
      "ref": 1418,
      "date": 2014,
      "percent": 81,
      "location": "Ecuador",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Tobago Estate (Pralus)",
      "name": "Roxborough, Tobago",
      "ref": 895,
      "date": 2012,
      "percent": 70,
      "location": "France",
      "rating": 4,
      "origin": "Tobago"
    },
    {
      "company": "Tocoti",
      "name": "Wild Bolivian, Jungle Love",
      "ref": 927,
      "date": 2012,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Bolivia"
    },
    {
      "company": "Tocoti",
      "name": "Venezuela",
      "ref": 789,
      "date": 2011,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Venezuela"
    },
    {
      "company": "Tocoti",
      "name": "Dominican Republic",
      "ref": 789,
      "date": 2011,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Treehouse",
      "name": "Conacado",
      "ref": 1239,
      "date": 2014,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Tsara (Cinagra)",
      "name": "Ambanja, Tsara Valley",
      "ref": 753,
      "date": 2011,
      "percent": 72,
      "location": "Madagascar",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "twenty-four blackbirds",
      "name": "Oko Caribe",
      "ref": 1700,
      "date": 2015,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Domincan Republic"
    },
    {
      "company": "twenty-four blackbirds",
      "name": "Cedeno, lot 271",
      "ref": 1700,
      "date": 2015,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "twenty-four blackbirds",
      "name": "Madagascar",
      "ref": 1235,
      "date": 2014,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "twenty-four blackbirds",
      "name": "Dominican Republic",
      "ref": 1022,
      "date": 2013,
      "percent": 68,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "twenty-four blackbirds",
      "name": "Palos Blancos",
      "ref": 1026,
      "date": 2013,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Bolivia"
    },
    {
      "company": "twenty-four blackbirds",
      "name": "Dominican Republic",
      "ref": 753,
      "date": 2011,
      "percent": 73,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Two Ravens",
      "name": "Peru",
      "ref": 1740,
      "date": 2016,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Un Dimanche A Paris",
      "name": "Dominican Republic",
      "ref": 709,
      "date": 2011,
      "percent": 63,
      "location": "France",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Undone",
      "name": "Matagalpa",
      "ref": 1438,
      "date": 2014,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Nicaragua"
    },
    {
      "company": "Undone",
      "name": "Nourish",
      "ref": 1438,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Upchurch",
      "name": "Madagascar, Sassy Bar",
      "ref": 1752,
      "date": 2016,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Upchurch",
      "name": "Tanzania, Party Bar",
      "ref": 1752,
      "date": 2016,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Tanzania"
    },
    {
      "company": "Urzi",
      "name": "Sur del Lago, Merida",
      "ref": 1327,
      "date": 2014,
      "percent": 65,
      "location": "Italy",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Valrhona",
      "name": "Piura, Illanka, Quemazon",
      "ref": 1510,
      "date": 2015,
      "percent": 63,
      "location": "France",
      "rating": 4,
      "origin": "Peru"
    },
    {
      "company": "Valrhona",
      "name": "Andoa, Grand Cru blend",
      "ref": 1145,
      "date": 2013,
      "percent": 70,
      "location": "France",
      "rating": 3.5,
      "origin": ""
    },
    {
      "company": "Valrhona",
      "name": "Loma Sotavento, 2013",
      "ref": 1153,
      "date": 2013,
      "percent": 64,
      "location": "France",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Valrhona",
      "name": "Otucan, Grand Cru",
      "ref": 931,
      "date": 2012,
      "percent": 69,
      "location": "France",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Valrhona",
      "name": "Caraque",
      "ref": 709,
      "date": 2011,
      "percent": 56,
      "location": "France",
      "rating": 3.25,
      "origin": ""
    },
    {
      "company": "Valrhona",
      "name": "Porcelana, Pedegral",
      "ref": 757,
      "date": 2011,
      "percent": 64,
      "location": "France",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Valrhona",
      "name": "Tainori",
      "ref": 327,
      "date": 2009,
      "percent": 64,
      "location": "France",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Valrhona",
      "name": "Alpaco",
      "ref": 370,
      "date": 2009,
      "percent": 66,
      "location": "France",
      "rating": 3.75,
      "origin": "Ecuador"
    },
    {
      "company": "Valrhona",
      "name": "Nyangbo",
      "ref": 395,
      "date": 2009,
      "percent": 68,
      "location": "France",
      "rating": 3.5,
      "origin": "Ghana"
    },
    {
      "company": "Valrhona",
      "name": "Araguani",
      "ref": 117,
      "date": 2007,
      "percent": 72,
      "location": "France",
      "rating": 3,
      "origin": "Venezuela, Carribean"
    },
    {
      "company": "Valrhona",
      "name": "Chuao 2002 P.",
      "ref": 129,
      "date": 2007,
      "percent": 65,
      "location": "France",
      "rating": 3.75,
      "origin": "Venezuela"
    },
    {
      "company": "Valrhona",
      "name": "Manjari",
      "ref": 129,
      "date": 2007,
      "percent": 64,
      "location": "France",
      "rating": 4,
      "origin": "Madagascar"
    },
    {
      "company": "Valrhona",
      "name": "Le Noir Extra Amer",
      "ref": 147,
      "date": 2007,
      "percent": 85,
      "location": "France",
      "rating": 1.5,
      "origin": ""
    },
    {
      "company": "Valrhona",
      "name": "Abinao",
      "ref": 153,
      "date": 2007,
      "percent": 85,
      "location": "France",
      "rating": 2.5,
      "origin": "West Africa"
    },
    {
      "company": "Valrhona",
      "name": "Le Noir Amer",
      "ref": 157,
      "date": 2007,
      "percent": 71,
      "location": "France",
      "rating": 2.75,
      "origin": "West Africa"
    },
    {
      "company": "Valrhona",
      "name": "Porcelana, Maracaibo, Palmira P. 2006",
      "ref": 162,
      "date": 2007,
      "percent": 64,
      "location": "France",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Valrhona",
      "name": "Caraibe",
      "ref": 63,
      "date": 2006,
      "percent": 66,
      "location": "France",
      "rating": 3,
      "origin": "Carribean"
    },
    {
      "company": "Valrhona",
      "name": "Guanaja",
      "ref": 63,
      "date": 2006,
      "percent": 70,
      "location": "France",
      "rating": 4,
      "origin": "South America"
    },
    {
      "company": "Valrhona",
      "name": "Gran Couva 2005 P.",
      "ref": 75,
      "date": 2006,
      "percent": 64,
      "location": "France",
      "rating": 2.5,
      "origin": "Trinidad"
    },
    {
      "company": "Valrhona",
      "name": "Porcelana, Maracaibo, Palmira P. 2005",
      "ref": 75,
      "date": 2006,
      "percent": 64,
      "location": "France",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Valrhona",
      "name": "Sambirano, Ampamakia 2005, Millot P.",
      "ref": 75,
      "date": 2006,
      "percent": 64,
      "location": "France",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Vanleer (Barry Callebaut)",
      "name": "Manhattan",
      "ref": 963,
      "date": 2012,
      "percent": 72,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Ghana"
    },
    {
      "company": "Vanleer (Barry Callebaut)",
      "name": "Napa",
      "ref": 963,
      "date": 2012,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Ghana"
    },
    {
      "company": "Vao Vao (Chocolaterie Robert)",
      "name": "Madagascar",
      "ref": 404,
      "date": 2009,
      "percent": 72,
      "location": "Madagascar",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Vao Vao (Chocolaterie Robert)",
      "name": "Madagascar",
      "ref": 404,
      "date": 2009,
      "percent": 76,
      "location": "Madagascar",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Vao Vao (Chocolaterie Robert)",
      "name": "Madagascar",
      "ref": 404,
      "date": 2009,
      "percent": 80,
      "location": "Madagascar",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Vao Vao (Chocolaterie Robert)",
      "name": "Madagascar",
      "ref": 404,
      "date": 2009,
      "percent": 70,
      "location": "Madagascar",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Vao Vao (Chocolaterie Robert)",
      "name": "Madagascar w/ nibs",
      "ref": 404,
      "date": 2009,
      "percent": 68,
      "location": "Madagascar",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Vao Vao (Chocolaterie Robert)",
      "name": "Madagascar",
      "ref": 404,
      "date": 2009,
      "percent": 64,
      "location": "Madagascar",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Vicuna",
      "name": "Palos Blancos",
      "ref": 1470,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Bolivia"
    },
    {
      "company": "Vicuna",
      "name": "Palos Blancos + nibs",
      "ref": 1470,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Bolivia"
    },
    {
      "company": "Videri",
      "name": "Dominican Republic",
      "ref": 1211,
      "date": 2014,
      "percent": 90,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Dominican Republic"
    },
    {
      "company": "Videri",
      "name": "Trinidad",
      "ref": 1211,
      "date": 2014,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Trinidad"
    },
    {
      "company": "Videri",
      "name": "Mindo",
      "ref": 1227,
      "date": 2014,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Ecuador"
    },
    {
      "company": "Videri",
      "name": "Dark",
      "ref": 1117,
      "date": 2013,
      "percent": 90,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Central and S. America"
    },
    {
      "company": "Videri",
      "name": "Classic",
      "ref": 991,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Central and S. America"
    },
    {
      "company": "Vietcacao (A. Morin)",
      "name": "Ben Tre, Mekong Delta, MoCay",
      "ref": 951,
      "date": 2012,
      "percent": 70,
      "location": "France",
      "rating": 3.5,
      "origin": "Vietnam"
    },
    {
      "company": "Vintage Plantations",
      "name": "San Martin",
      "ref": 1205,
      "date": 2014,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Vintage Plantations (Tulicorp)",
      "name": "Los Rios, Rancho Grande 2004/2007",
      "ref": 153,
      "date": 2007,
      "percent": 100,
      "location": "U.S.A.",
      "rating": 2,
      "origin": "Ecuador"
    },
    {
      "company": "Vintage Plantations (Tulicorp)",
      "name": "Los Rios, Rancho Grande 2004/2007",
      "ref": 153,
      "date": 2007,
      "percent": 90,
      "location": "U.S.A.",
      "rating": 2,
      "origin": "Ecuador"
    },
    {
      "company": "Vintage Plantations (Tulicorp)",
      "name": "Los Rios, Rancho Grande 2004/2007",
      "ref": 153,
      "date": 2007,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Vintage Plantations (Tulicorp)",
      "name": "Los Rios, Rancho Grande 2007",
      "ref": 153,
      "date": 2007,
      "percent": 65,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Violet Sky",
      "name": "Sambirano Valley",
      "ref": 1458,
      "date": 2015,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Violet Sky",
      "name": "Moho River Valley",
      "ref": 1458,
      "date": 2015,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Belize"
    },
    {
      "company": "Violet Sky",
      "name": "Cuyagua",
      "ref": 1458,
      "date": 2015,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Violet Sky",
      "name": "Peru",
      "ref": 1458,
      "date": 2015,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Violet Sky",
      "name": "Cahabon",
      "ref": 1502,
      "date": 2015,
      "percent": 77,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Guatemala"
    },
    {
      "company": "Vivra",
      "name": "Peru",
      "ref": 1720,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Vivra",
      "name": "Ocumare",
      "ref": 1720,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Venezuela"
    },
    {
      "company": "Vivra",
      "name": "Dominican Republic",
      "ref": 1724,
      "date": 2016,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Domincan Republic"
    },
    {
      "company": "Wellington Chocolate Factory",
      "name": "Conacado",
      "ref": 1756,
      "date": 2016,
      "percent": 70,
      "location": "New Zealand",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Wellington Chocolate Factory",
      "name": "Piura Blanco, Norandino",
      "ref": 1756,
      "date": 2016,
      "percent": 70,
      "location": "New Zealand",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Whittakers",
      "name": "Ghana",
      "ref": 733,
      "date": 2011,
      "percent": 72,
      "location": "New Zealand",
      "rating": 2.5,
      "origin": "Ghana"
    },
    {
      "company": "Wilkie's Organic",
      "name": "Amazonas",
      "ref": 1169,
      "date": 2013,
      "percent": 75,
      "location": "Ireland",
      "rating": 2.5,
      "origin": "Peru"
    },
    {
      "company": "Wilkie's Organic",
      "name": "Amazonas",
      "ref": 1169,
      "date": 2013,
      "percent": 89,
      "location": "Ireland",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Wilkie's Organic",
      "name": "Tumbes",
      "ref": 1169,
      "date": 2013,
      "percent": 75,
      "location": "Ireland",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Wilkie's Organic",
      "name": "Amazonas w/ nibs",
      "ref": 1173,
      "date": 2013,
      "percent": 75,
      "location": "Ireland",
      "rating": 2.75,
      "origin": "Peru"
    },
    {
      "company": "Willie's Cacao",
      "name": "Los Llanos",
      "ref": 1848,
      "date": 2016,
      "percent": 70,
      "location": "U.K.",
      "rating": 4,
      "origin": "Colombia"
    },
    {
      "company": "Willie's Cacao",
      "name": "Los Llanos",
      "ref": 1227,
      "date": 2014,
      "percent": 88,
      "location": "U.K.",
      "rating": 3,
      "origin": "Colombia"
    },
    {
      "company": "Willie's Cacao",
      "name": "Java, Indonesian Black",
      "ref": 1109,
      "date": 2013,
      "percent": 100,
      "location": "U.K.",
      "rating": 2.25,
      "origin": "Indonesia"
    },
    {
      "company": "Willie's Cacao",
      "name": "Sambirano",
      "ref": 593,
      "date": 2010,
      "percent": 71,
      "location": "U.K.",
      "rating": 3,
      "origin": "Madagascar"
    },
    {
      "company": "Willie's Cacao",
      "name": "Hacienda Las Trincheras",
      "ref": 593,
      "date": 2010,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.5,
      "origin": "Venezuela"
    },
    {
      "company": "Willie's Cacao",
      "name": "Java",
      "ref": 593,
      "date": 2010,
      "percent": 69,
      "location": "U.K.",
      "rating": 3.75,
      "origin": "Indonesia"
    },
    {
      "company": "Willie's Cacao",
      "name": "San Martin",
      "ref": 457,
      "date": 2009,
      "percent": 70,
      "location": "U.K.",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Willie's Cacao",
      "name": "Rio Caribe",
      "ref": 457,
      "date": 2009,
      "percent": 72,
      "location": "U.K.",
      "rating": 3.25,
      "origin": "Venezuela"
    },
    {
      "company": "Wm",
      "name": "Guasare, Zulia Prov., 2015, batch 124",
      "ref": 1912,
      "date": 2016,
      "percent": 74,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Venezuela"
    },
    {
      "company": "Wm",
      "name": "Wild Beniano, 2016, batch 128, Heirloom",
      "ref": 1912,
      "date": 2016,
      "percent": 76,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Bolivia"
    },
    {
      "company": "Wm",
      "name": "Ghana, 2013, batch 129",
      "ref": 1916,
      "date": 2016,
      "percent": 75,
      "location": "U.S.A.",
      "rating": 3.75,
      "origin": "Ghana"
    },
    {
      "company": "Woodblock",
      "name": "Maranon, Cajamarca",
      "ref": 1243,
      "date": 2014,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Woodblock",
      "name": "Camino Verde P., Balao, Guayas",
      "ref": 1042,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Ecuador"
    },
    {
      "company": "Woodblock",
      "name": "Gran Couva",
      "ref": 1042,
      "date": 2013,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Trinidad"
    },
    {
      "company": "Woodblock",
      "name": "Ecuador",
      "ref": 825,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Ecuador"
    },
    {
      "company": "Woodblock",
      "name": "Costa Rica",
      "ref": 825,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Costa Rica"
    },
    {
      "company": "Woodblock",
      "name": "Sambirano",
      "ref": 951,
      "date": 2012,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Woodblock",
      "name": "Ocumare",
      "ref": 741,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 4,
      "origin": "Venezuela"
    },
    {
      "company": "Woodblock",
      "name": "La Red",
      "ref": 769,
      "date": 2011,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Xocolat",
      "name": "Hispaniola",
      "ref": 1057,
      "date": 2013,
      "percent": 66,
      "location": "Domincan Republic",
      "rating": 3,
      "origin": "Dominican Republic"
    },
    {
      "company": "Xocolla",
      "name": "Sambirano, batch 170102",
      "ref": 1948,
      "date": 2017,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.75,
      "origin": "Madagascar"
    },
    {
      "company": "Xocolla",
      "name": "Hispaniola, batch 170104",
      "ref": 1948,
      "date": 2017,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 2.5,
      "origin": "Dominican Republic"
    },
    {
      "company": "Zak's",
      "name": "Papua New Guinea, Batch 2",
      "ref": 1574,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Zak's",
      "name": "Dominican Republic, Batch D2",
      "ref": 1578,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Domincan Republic"
    },
    {
      "company": "Zak's",
      "name": "Madagascar, Batch 2",
      "ref": 1578,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Madagascar"
    },
    {
      "company": "Zak's",
      "name": "Peru, Batch 1",
      "ref": 1578,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.25,
      "origin": "Peru"
    },
    {
      "company": "Zak's",
      "name": "Belize, Batch 2",
      "ref": 1578,
      "date": 2015,
      "percent": 70,
      "location": "U.S.A.",
      "rating": 3.5,
      "origin": "Belize"
    },
    {
      "company": "Zak's",
      "name": "House Blend, Batch 2",
      "ref": 1582,
      "date": 2015,
      "percent": 60,
      "location": "U.S.A.",
      "rating": 3,
      "origin": ""
    },
    {
      "company": "Zart Pralinen",
      "name": "Millot P., Ambanja",
      "ref": 1820,
      "date": 2016,
      "percent": 70,
      "location": "Austria",
      "rating": 3.5,
      "origin": "Madagascar"
    },
    {
      "company": "Zart Pralinen",
      "name": "UNOCACE",
      "ref": 1824,
      "date": 2016,
      "percent": 70,
      "location": "Austria",
      "rating": 2.75,
      "origin": "Ecuador"
    },
    {
      "company": "Zart Pralinen",
      "name": "San Juan Estate",
      "ref": 1824,
      "date": 2016,
      "percent": 85,
      "location": "Austria",
      "rating": 2.75,
      "origin": "Trinidad"
    },
    {
      "company": "Zart Pralinen",
      "name": "Kakao Kamili, Kilombero Valley",
      "ref": 1824,
      "date": 2016,
      "percent": 85,
      "location": "Austria",
      "rating": 3,
      "origin": "Tanzania"
    },
    {
      "company": "Zart Pralinen",
      "name": "Kakao Kamili, Kilombero Valley",
      "ref": 1824,
      "date": 2016,
      "percent": 70,
      "location": "Austria",
      "rating": 3.5,
      "origin": "Tanzania"
    },
    {
      "company": "Zart Pralinen",
      "name": "San Juan Estate, Gran Couva",
      "ref": 1880,
      "date": 2016,
      "percent": 78,
      "location": "Austria",
      "rating": 3.5,
      "origin": "Trinidad"
    },
    {
      "company": "Zokoko",
      "name": "Guadalcanal",
      "ref": 1716,
      "date": 2016,
      "percent": 78,
      "location": "Australia",
      "rating": 3.75,
      "origin": "Solomon Islands"
    },
    {
      "company": "Zokoko",
      "name": "Goddess Blend",
      "ref": 1780,
      "date": 2016,
      "percent": 65,
      "location": "Australia",
      "rating": 3.25,
      "origin": ""
    },
    {
      "company": "Zokoko",
      "name": "Alto Beni",
      "ref": 697,
      "date": 2011,
      "percent": 68,
      "location": "Australia",
      "rating": 3.5,
      "origin": "Bolivia"
    },
    {
      "company": "Zokoko",
      "name": "Tokiala",
      "ref": 701,
      "date": 2011,
      "percent": 66,
      "location": "Australia",
      "rating": 3.5,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Zokoko",
      "name": "Tranquilidad, Baures",
      "ref": 701,
      "date": 2011,
      "percent": 72,
      "location": "Australia",
      "rating": 3.75,
      "origin": "Bolivia"
    },
    {
      "company": "Zotter",
      "name": "Raw",
      "ref": 1205,
      "date": 2014,
      "percent": 80,
      "location": "Austria",
      "rating": 2.75,
      "origin": ""
    },
    {
      "company": "Zotter",
      "name": "Bocas del Toro, Cocabo Co-op",
      "ref": 801,
      "date": 2012,
      "percent": 72,
      "location": "Austria",
      "rating": 3.5,
      "origin": "Panama"
    },
    {
      "company": "Zotter",
      "name": "Amazonas Frucht",
      "ref": 801,
      "date": 2012,
      "percent": 65,
      "location": "Austria",
      "rating": 3.5,
      "origin": ""
    },
    {
      "company": "Zotter",
      "name": "Satipo Pangoa region, 16hr conche",
      "ref": 875,
      "date": 2012,
      "percent": 70,
      "location": "Austria",
      "rating": 3,
      "origin": "Peru"
    },
    {
      "company": "Zotter",
      "name": "Satipo Pangoa region, 20hr conche",
      "ref": 875,
      "date": 2012,
      "percent": 70,
      "location": "Austria",
      "rating": 3.5,
      "origin": "Peru"
    },
    {
      "company": "Zotter",
      "name": "Loma Los Pinos, Yacao region, D.R.",
      "ref": 875,
      "date": 2012,
      "percent": 62,
      "location": "Austria",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Zotter",
      "name": "El Oro",
      "ref": 879,
      "date": 2012,
      "percent": 75,
      "location": "Austria",
      "rating": 3,
      "origin": "Ecuador"
    },
    {
      "company": "Zotter",
      "name": "Huiwani Coop",
      "ref": 879,
      "date": 2012,
      "percent": 75,
      "location": "Austria",
      "rating": 3,
      "origin": "Papua New Guinea"
    },
    {
      "company": "Zotter",
      "name": "El Ceibo Coop",
      "ref": 879,
      "date": 2012,
      "percent": 90,
      "location": "Austria",
      "rating": 3.25,
      "origin": "Bolivia"
    },
    {
      "company": "Zotter",
      "name": "Santo Domingo",
      "ref": 879,
      "date": 2012,
      "percent": 70,
      "location": "Austria",
      "rating": 3.75,
      "origin": "Dominican Republic"
    },
    {
      "company": "Zotter",
      "name": "Kongo, Highlands",
      "ref": 883,
      "date": 2012,
      "percent": 68,
      "location": "Austria",
      "rating": 3.25,
      "origin": "Congo"
    },
    {
      "company": "Zotter",
      "name": "Indianer, Raw",
      "ref": 883,
      "date": 2012,
      "percent": 58,
      "location": "Austria",
      "rating": 3.5,
      "origin": ""
    },
    {
      "company": "Zotter",
      "name": "Peru",
      "ref": 647,
      "date": 2011,
      "percent": 70,
      "location": "Austria",
      "rating": 3.75,
      "origin": "Peru"
    },
    {
      "company": "Zotter",
      "name": "Congo",
      "ref": 749,
      "date": 2011,
      "percent": 65,
      "location": "Austria",
      "rating": 3,
      "origin": "Congo"
    },
    {
      "company": "Zotter",
      "name": "Kerala State",
      "ref": 749,
      "date": 2011,
      "percent": 65,
      "location": "Austria",
      "rating": 3.5,
      "origin": "India"
    },
    {
      "company": "Zotter",
      "name": "Kerala State",
      "ref": 781,
      "date": 2011,
      "percent": 62,
      "location": "Austria",
      "rating": 3.25,
      "origin": "India"
    },
    {
      "company": "Zotter",
      "name": "Brazil, Mitzi Blue",
      "ref": 486,
      "date": 2010,
      "percent": 65,
      "location": "Austria",
      "rating": 3,
      "origin": "Brazil"
    }
  ];

let beeswarm2 = beeswarm1.filter(function(d,i){
    return i<200;
});

let demoData = {
    sankeyData: sankey1,
    bubbleData: bubble1,
    forceDirectedGraphData: forceDirected1,
    constrainedLayoutData: constrainedLayout1,
    beeswarmDataLarge: beeswarm1,
    beeswarmDataSmall: beeswarm2
};