(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.semi = global.semi || {}, global.semi.demoData = factory());
}(this, (function () { 'use strict';

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

  let bubble2 = [
      {
        "product": "TV",
        "company": "Mediamarkt",
        "value": 20
      },
      {
        "product": "TV",
        "company": "Apple",
        "value": 36
      },
      {
        "product": "TV",
        "company": "Sony",
        "value": 30
      },
      {
        "product": "TV",
        "company": "Albert Heijn",
        "value": 0
      },
      {
        "product": "Smartphone",
        "company": "Mediamarkt",
        "value": 26
      },
      {
        "product": "Smartphone",
        "company": "Apple",
        "value": 71
      },
      {
        "product": "Smartphone",
        "company": "Sony",
        "value": 54
      },
      {
        "product": "Smartphone",
        "company": "Albert Heijn",
        "value": 44
      }
    ];

  let bubble1 = [
      {
          connections: 10,
          gender: "Male",
          age: "0-20"
      },
      {
          connections: 20,
          gender: "Male",
          age: "20-40"
      },
      {
          connections: 5,
          gender: "Male",
          age: "40-60"
      },
      {
          connections: 25,
          gender: "Male",
          age: "60-80"
      },
      {
          connections: 25,
          gender: "Male",
          age: "80-100"
      },
      {
          connections: 5,
          gender: "Female",
          age: "0-20"
      },
      {
          connections: 10,
          gender: "Female",
          age: "20-40"
      },
      {
          connections: 13,
          gender: "Female",
          age: "40-60"
      },
      {
          connections: 15,
          gender: "Female",
          age: "60-80"
      },
      {
          connections: 24,
          gender: "Female",
          age: "80-100"
      },
      {
          connections: 14,
          gender: "Unknown",
          age: "0-20"
      },
      {
          connections: 17,
          gender: "Unknown",
          age: "20-40"
      },
      {
          connections: 23,
          gender: "Unknown",
          age: "40-60"
      },
      {
          connections: 3,
          gender: "Unknown",
          age: "60-80"
      },
      {
          connections: 4,
          gender: "Unknown",
          age: "80-100"
      }
  ];

  let forceDirected1 = {
      "nodes": [
          { "id": "TV", "class": "ProductType" },
          { "id": "Smartphone", "class": "ProductType" },
          { "id": "Sony TV", "class": "Product" },
          { "id": "iPhone", "class": "Product" },
          { "id": "Purchase_1", "class": "Purchase" },
          { "id": "Purchase_2", "class": "Purchase" },
          { "id": "Purchase_3", "class": "Purchase" },
          { "id": "Purchase_4", "class": "Purchase" },
          { "id": "Purchase_5", "class": "Purchase" },
          { "id": "Purchase_6", "class": "Purchase" },
          { "id": "Purchase_7", "class": "Purchase" },
          { "id": "Transaction_1", "class": "Transaction" },
          { "id": "Transaction_2", "class": "Transaction" },
          { "id": "Transaction_3", "class": "Transaction" },
          { "id": "Transaction_4", "class": "Transaction" },
          { "id": "Transaction_5", "class": "Transaction" },
          { "id": "Transaction_6", "class": "Transaction" },
          { "id": "Transaction_7", "class": "Transaction" },
          { "id": "Transaction_8", "class": "Transaction" },
          { "id": "Transaction_9", "class": "Transaction" },
          { "id": "Transaction_10", "class": "Transaction" },
          { "id": "Transaction_11", "class": "Transaction" },
          { "id": "a", "class": "Person" },
          { "id": "b", "class": "Person" },
          { "id": "c", "class": "Person" },
          { "id": "d", "class": "Person" },
          { "id": "e", "class": "Person" },
          { "id": "0-50", "class": "AgeGroup" },
          { "id": "50-100", "class": "AgeGroup" },
          { "id": "Amsterdam", "class": "City" },
          { "id": "Rotterdam", "class": "City" },
          { "id": "Albert Heijn", "class": "Company" },
          { "id": "Netflix", "class": "Company" },
          { "id": "Mediamarkt", "class": "Company" }
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
          { "id": "TV", "class": "ProductType" },
          { "id": "Smartphone", "class": "ProductType" },
          { "id": "Sony TV", "class": "Product" },
          { "id": "iPhone", "class": "Product" },
          { "id": "Purchase_1", "class": "Purchase" },
          { "id": "Purchase_2", "class": "Purchase" },
          { "id": "Purchase_3", "class": "Purchase" },
          { "id": "Purchase_4", "class": "Purchase" },
          { "id": "Purchase_5", "class": "Purchase" },
          { "id": "Purchase_6", "class": "Purchase" },
          { "id": "Purchase_7", "class": "Purchase" },
          { "id": "Transaction_1", "class": "Transaction" },
          { "id": "Transaction_2", "class": "Transaction" },
          { "id": "Transaction_3", "class": "Transaction" },
          { "id": "Transaction_4", "class": "Transaction" },
          { "id": "Transaction_5", "class": "Transaction" },
          { "id": "Transaction_6", "class": "Transaction" },
          { "id": "Transaction_7", "class": "Transaction" },
          { "id": "Transaction_8", "class": "Transaction" },
          { "id": "Transaction_9", "class": "Transaction" },
          { "id": "Transaction_10", "class": "Transaction" },
          { "id": "Transaction_11", "class": "Transaction" },
          { "id": "a", "class": "Person" },
          { "id": "b", "class": "Person" },
          { "id": "c", "class": "Person" },
          { "id": "d", "class": "Person" },
          { "id": "e", "class": "Person" },
          { "id": "0-50", "class": "AgeGroup" },
          { "id": "50-100", "class": "AgeGroup" },
          { "id": "Amsterdam", "class": "City" },
          { "id": "Rotterdam", "class": "City" },
          { "id": "Albert Heijn", "class": "Company" },
          { "id": "Netflix", "class": "Company" },
          { "id": "Mediamarkt", "class": "Company" }
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
          "ref": 1876,
          "date": 2016,
          "percent": 63,
          "location": "France",
          "rating": 3.75,
          "origin": "Sao Tome"
      },
      {
          "company": "A. Morin",
          "ref": 1676,
          "date": 2015,
          "percent": 70,
          "location": "France",
          "rating": 2.75,
          "origin": "Togo"
      },
      {
          "company": "A. Morin",
          "ref": 1676,
          "date": 2015,
          "percent": 70,
          "location": "France",
          "rating": 3,
          "origin": "Togo"
      },
      {
          "company": "A. Morin",
          "ref": 1680,
          "date": 2015,
          "percent": 70,
          "location": "France",
          "rating": 3.5,
          "origin": "Togo"
      },
      {
          "company": "A. Morin",
          "ref": 1704,
          "date": 2015,
          "percent": 70,
          "location": "France",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "A. Morin",
          "ref": 1315,
          "date": 2014,
          "percent": 70,
          "location": "France",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "A. Morin",
          "ref": 1315,
          "date": 2014,
          "percent": 70,
          "location": "France",
          "rating": 3.5,
          "origin": "Cuba"
      },
      {
          "company": "A. Morin",
          "ref": 1315,
          "date": 2014,
          "percent": 70,
          "location": "France",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "A. Morin",
          "ref": 1319,
          "date": 2014,
          "percent": 70,
          "location": "France",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "A. Morin",
          "ref": 1319,
          "date": 2014,
          "percent": 70,
          "location": "France",
          "rating": 4,
          "origin": "Peru"
      },
      {
          "company": "A. Morin",
          "ref": 1011,
          "date": 2013,
          "percent": 70,
          "location": "France",
          "rating": 2.75,
          "origin": "Panama"
      },
      {
          "company": "A. Morin",
          "ref": 1011,
          "date": 2013,
          "percent": 70,
          "location": "France",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "A. Morin",
          "ref": 1011,
          "date": 2013,
          "percent": 70,
          "location": "France",
          "rating": 3.25,
          "origin": "Brazil"
      },
      {
          "company": "A. Morin",
          "ref": 1011,
          "date": 2013,
          "percent": 70,
          "location": "France",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "A. Morin",
          "ref": 1015,
          "date": 2013,
          "percent": 70,
          "location": "France",
          "rating": 2.75,
          "origin": "Colombia"
      },
      {
          "company": "A. Morin",
          "ref": 1015,
          "date": 2013,
          "percent": 70,
          "location": "France",
          "rating": 3,
          "origin": "Burma"
      },
      {
          "company": "A. Morin",
          "ref": 1015,
          "date": 2013,
          "percent": 70,
          "location": "France",
          "rating": 3.25,
          "origin": "Papua New Guinea"
      },
      {
          "company": "A. Morin",
          "ref": 1015,
          "date": 2013,
          "percent": 70,
          "location": "France",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "A. Morin",
          "ref": 1019,
          "date": 2013,
          "percent": 70,
          "location": "France",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "A. Morin",
          "ref": 1019,
          "date": 2013,
          "percent": 70,
          "location": "France",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "A. Morin",
          "ref": 1019,
          "date": 2013,
          "percent": 63,
          "location": "France",
          "rating": 4,
          "origin": "Peru"
      },
      {
          "company": "A. Morin",
          "ref": 797,
          "date": 2012,
          "percent": 70,
          "location": "France",
          "rating": 3.5,
          "origin": "Bolivia"
      },
      {
          "company": "A. Morin",
          "ref": 797,
          "date": 2012,
          "percent": 63,
          "location": "France",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Acalli",
          "ref": 1462,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Acalli",
          "ref": 1470,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Adi",
          "ref": 705,
          "date": 2011,
          "percent": 60,
          "location": "Fiji",
          "rating": 2.75,
          "origin": "Fiji"
      },
      {
          "company": "Adi",
          "ref": 705,
          "date": 2011,
          "percent": 80,
          "location": "Fiji",
          "rating": 3.25,
          "origin": "Fiji"
      },
      {
          "company": "Adi",
          "ref": 705,
          "date": 2011,
          "percent": 88,
          "location": "Fiji",
          "rating": 3.5,
          "origin": "Fiji"
      },
      {
          "company": "Adi",
          "ref": 705,
          "date": 2011,
          "percent": 72,
          "location": "Fiji",
          "rating": 3.5,
          "origin": "Fiji"
      },
      {
          "company": "Aequare (Gianduja)",
          "ref": 370,
          "date": 2009,
          "percent": 55,
          "location": "Ecuador",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Aequare (Gianduja)",
          "ref": 370,
          "date": 2009,
          "percent": 70,
          "location": "Ecuador",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Ah Cacao",
          "ref": 316,
          "date": 2009,
          "percent": 70,
          "location": "Mexico",
          "rating": 3,
          "origin": "Mexico"
      },
      {
          "company": "Akesson's (Pralus)",
          "ref": 636,
          "date": 2011,
          "percent": 75,
          "location": "Switzerland",
          "rating": 3.75,
          "origin": "Indonesia"
      },
      {
          "company": "Akesson's (Pralus)",
          "ref": 502,
          "date": 2010,
          "percent": 75,
          "location": "Switzerland",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Akesson's (Pralus)",
          "ref": 508,
          "date": 2010,
          "percent": 75,
          "location": "Switzerland",
          "rating": 2.75,
          "origin": "Brazil"
      },
      {
          "company": "Alain Ducasse",
          "ref": 1215,
          "date": 2014,
          "percent": 65,
          "location": "France",
          "rating": 2.75,
          "origin": "Trinidad"
      },
      {
          "company": "Alain Ducasse",
          "ref": 1215,
          "date": 2014,
          "percent": 75,
          "location": "France",
          "rating": 2.75,
          "origin": "Vietnam"
      },
      {
          "company": "Alain Ducasse",
          "ref": 1215,
          "date": 2014,
          "percent": 75,
          "location": "France",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Alain Ducasse",
          "ref": 1061,
          "date": 2013,
          "percent": 75,
          "location": "France",
          "rating": 2.5,
          "origin": "Venezuela"
      },
      {
          "company": "Alain Ducasse",
          "ref": 1173,
          "date": 2013,
          "percent": 75,
          "location": "France",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Alexandre",
          "ref": 1944,
          "date": 2017,
          "percent": 70,
          "location": "Netherlands",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Alexandre",
          "ref": 1944,
          "date": 2017,
          "percent": 70,
          "location": "Netherlands",
          "rating": 3.5,
          "origin": "Nicaragua"
      },
      {
          "company": "Alexandre",
          "ref": 1944,
          "date": 2017,
          "percent": 70,
          "location": "Netherlands",
          "rating": 3.5,
          "origin": "Vietnam"
      },
      {
          "company": "Alexandre",
          "ref": 1944,
          "date": 2017,
          "percent": 70,
          "location": "Netherlands",
          "rating": 3.5,
          "origin": "Tanzania"
      },
      {
          "company": "Altus aka Cao Artisan",
          "ref": 1728,
          "date": 2016,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Altus aka Cao Artisan",
          "ref": 1728,
          "date": 2016,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Altus aka Cao Artisan",
          "ref": 1732,
          "date": 2016,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Bolivia"
      },
      {
          "company": "Altus aka Cao Artisan",
          "ref": 1732,
          "date": 2016,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Altus aka Cao Artisan",
          "ref": 1732,
          "date": 2016,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Altus aka Cao Artisan",
          "ref": 1125,
          "date": 2013,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Venezuela"
      },
      {
          "company": "Altus aka Cao Artisan",
          "ref": 1125,
          "date": 2013,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Altus aka Cao Artisan",
          "ref": 1129,
          "date": 2013,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Bolivia"
      },
      {
          "company": "Altus aka Cao Artisan",
          "ref": 1133,
          "date": 2013,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Bolivia"
      },
      {
          "company": "Altus aka Cao Artisan",
          "ref": 1133,
          "date": 2013,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Amano",
          "ref": 725,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Amano",
          "ref": 470,
          "date": 2010,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Amano",
          "ref": 470,
          "date": 2010,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Ecuador"
      },
      {
          "company": "Amano",
          "ref": 544,
          "date": 2010,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Amano",
          "ref": 363,
          "date": 2009,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Amano",
          "ref": 304,
          "date": 2008,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Indonesia"
      },
      {
          "company": "Amano",
          "ref": 129,
          "date": 2007,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Amano",
          "ref": 147,
          "date": 2007,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Amano",
          "ref": 175,
          "date": 2007,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Amatller (Simon Coll)",
          "ref": 322,
          "date": 2009,
          "percent": 70,
          "location": "Spain",
          "rating": 3,
          "origin": "Ghana"
      },
      {
          "company": "Amatller (Simon Coll)",
          "ref": 327,
          "date": 2009,
          "percent": 70,
          "location": "Spain",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Amatller (Simon Coll)",
          "ref": 464,
          "date": 2009,
          "percent": 85,
          "location": "Spain",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Amatller (Simon Coll)",
          "ref": 464,
          "date": 2009,
          "percent": 85,
          "location": "Spain",
          "rating": 3,
          "origin": "Ghana"
      },
      {
          "company": "Amazona",
          "ref": 1145,
          "date": 2013,
          "percent": 72,
          "location": "Peru",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Amazona",
          "ref": 1145,
          "date": 2013,
          "percent": 73,
          "location": "Peru",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Ambrosia",
          "ref": 1494,
          "date": 2015,
          "percent": 64,
          "location": "Canada",
          "rating": 3,
          "origin": "Belize"
      },
      {
          "company": "Ambrosia",
          "ref": 1494,
          "date": 2015,
          "percent": 66,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Ambrosia",
          "ref": 1498,
          "date": 2015,
          "percent": 75,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Ambrosia",
          "ref": 1498,
          "date": 2015,
          "percent": 63,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Ambrosia",
          "ref": 1498,
          "date": 2015,
          "percent": 70,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Ambrosia",
          "ref": 1498,
          "date": 2015,
          "percent": 68,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Amedei",
          "ref": 979,
          "date": 2012,
          "percent": 70,
          "location": "Italy",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Amedei",
          "ref": 111,
          "date": 2007,
          "percent": 70,
          "location": "Italy",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Amedei",
          "ref": 111,
          "date": 2007,
          "percent": 75,
          "location": "Italy",
          "rating": 4,
          "origin": ""
      },
      {
          "company": "Amedei",
          "ref": 111,
          "date": 2007,
          "percent": 70,
          "location": "Italy",
          "rating": 5,
          "origin": "Venezuela"
      },
      {
          "company": "Amedei",
          "ref": 123,
          "date": 2007,
          "percent": 70,
          "location": "Italy",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Amedei",
          "ref": 123,
          "date": 2007,
          "percent": 70,
          "location": "Italy",
          "rating": 3,
          "origin": "Jamaica"
      },
      {
          "company": "Amedei",
          "ref": 123,
          "date": 2007,
          "percent": 70,
          "location": "Italy",
          "rating": 3.5,
          "origin": "Grenada"
      },
      {
          "company": "Amedei",
          "ref": 123,
          "date": 2007,
          "percent": 70,
          "location": "Italy",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Amedei",
          "ref": 123,
          "date": 2007,
          "percent": 70,
          "location": "Italy",
          "rating": 4,
          "origin": "Madagascar"
      },
      {
          "company": "Amedei",
          "ref": 129,
          "date": 2007,
          "percent": 70,
          "location": "Italy",
          "rating": 3.5,
          "origin": "Trinidad"
      },
      {
          "company": "Amedei",
          "ref": 170,
          "date": 2007,
          "percent": 63,
          "location": "Italy",
          "rating": 3.5,
          "origin": ""
      },
      {
          "company": "Amedei",
          "ref": 40,
          "date": 2006,
          "percent": 70,
          "location": "Italy",
          "rating": 5,
          "origin": ""
      },
      {
          "company": "Amedei",
          "ref": 75,
          "date": 2006,
          "percent": 66,
          "location": "Italy",
          "rating": 4,
          "origin": ""
      },
      {
          "company": "AMMA",
          "ref": 1065,
          "date": 2013,
          "percent": 75,
          "location": "Brazil",
          "rating": 3.25,
          "origin": "Brazil"
      },
      {
          "company": "AMMA",
          "ref": 572,
          "date": 2010,
          "percent": 85,
          "location": "Brazil",
          "rating": 2.75,
          "origin": "Brazil"
      },
      {
          "company": "AMMA",
          "ref": 572,
          "date": 2010,
          "percent": 50,
          "location": "Brazil",
          "rating": 3.75,
          "origin": "Brazil"
      },
      {
          "company": "AMMA",
          "ref": 572,
          "date": 2010,
          "percent": 75,
          "location": "Brazil",
          "rating": 3.75,
          "origin": "Brazil"
      },
      {
          "company": "AMMA",
          "ref": 572,
          "date": 2010,
          "percent": 60,
          "location": "Brazil",
          "rating": 4,
          "origin": "Brazil"
      },
      {
          "company": "Anahata",
          "ref": 1259,
          "date": 2014,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Animas",
          "ref": 1852,
          "date": 2016,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Bolivia"
      },
      {
          "company": "Ara",
          "ref": 1375,
          "date": 2014,
          "percent": 75,
          "location": "France",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Ara",
          "ref": 1379,
          "date": 2014,
          "percent": 72,
          "location": "France",
          "rating": 2.5,
          "origin": "Mexico"
      },
      {
          "company": "Ara",
          "ref": 1379,
          "date": 2014,
          "percent": 75,
          "location": "France",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Ara",
          "ref": 1379,
          "date": 2014,
          "percent": 75,
          "location": "France",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Arete",
          "ref": 1724,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Trinidad"
      },
      {
          "company": "Arete",
          "ref": 1724,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Tanzania"
      },
      {
          "company": "Arete",
          "ref": 1900,
          "date": 2016,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Vietnam"
      },
      {
          "company": "Arete",
          "ref": 1904,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Arete",
          "ref": 1904,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Arete",
          "ref": 1904,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Guatemala"
      },
      {
          "company": "Arete",
          "ref": 1904,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Arete",
          "ref": 1908,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Honduras"
      },
      {
          "company": "Arete",
          "ref": 1908,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Costa Rica"
      },
      {
          "company": "Arete",
          "ref": 1924,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Peru"
      },
      {
          "company": "Arete",
          "ref": 1928,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Arete",
          "ref": 1928,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Fiji"
      },
      {
          "company": "Arete",
          "ref": 1928,
          "date": 2016,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Vietnam"
      },
      {
          "company": "Arete",
          "ref": 1534,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Arete",
          "ref": 1534,
          "date": 2015,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Arete",
          "ref": 1534,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "Arete",
          "ref": 1598,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Domincan Republic"
      },
      {
          "company": "Arete",
          "ref": 1598,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Belize"
      },
      {
          "company": "Arete",
          "ref": 1598,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Nicaragua"
      },
      {
          "company": "Arete",
          "ref": 1602,
          "date": 2015,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Brazil"
      },
      {
          "company": "Arete",
          "ref": 1602,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Guatemala"
      },
      {
          "company": "Arete",
          "ref": 1602,
          "date": 2015,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Artisan du Chocolat",
          "ref": 1193,
          "date": 2013,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.25,
          "origin": "Trinidad"
      },
      {
          "company": "Artisan du Chocolat",
          "ref": 947,
          "date": 2012,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.75,
          "origin": "Colombia"
      },
      {
          "company": "Artisan du Chocolat",
          "ref": 729,
          "date": 2011,
          "percent": 72,
          "location": "U.K.",
          "rating": 4,
          "origin": "Haiti"
      },
      {
          "company": "Artisan du Chocolat",
          "ref": 745,
          "date": 2011,
          "percent": 72,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Panama"
      },
      {
          "company": "Artisan du Chocolat",
          "ref": 486,
          "date": 2010,
          "percent": 100,
          "location": "U.K.",
          "rating": 1.75,
          "origin": "Venezuela"
      },
      {
          "company": "Artisan du Chocolat",
          "ref": 531,
          "date": 2010,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.75,
          "origin": "Jamaica"
      },
      {
          "company": "Artisan du Chocolat",
          "ref": 600,
          "date": 2010,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.25,
          "origin": "Costa Rica"
      },
      {
          "company": "Artisan du Chocolat",
          "ref": 600,
          "date": 2010,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.25,
          "origin": "Vietnam"
      },
      {
          "company": "Artisan du Chocolat",
          "ref": 600,
          "date": 2010,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.5,
          "origin": "Indonesia"
      },
      {
          "company": "Artisan du Chocolat",
          "ref": 355,
          "date": 2009,
          "percent": 75,
          "location": "U.K.",
          "rating": 2.5,
          "origin": "Venezuela"
      },
      {
          "company": "Artisan du Chocolat",
          "ref": 355,
          "date": 2009,
          "percent": 72,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Indonesia"
      },
      {
          "company": "Artisan du Chocolat",
          "ref": 363,
          "date": 2009,
          "percent": 72,
          "location": "U.K.",
          "rating": 1.75,
          "origin": "Brazil"
      },
      {
          "company": "Artisan du Chocolat",
          "ref": 363,
          "date": 2009,
          "percent": 80,
          "location": "U.K.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Artisan du Chocolat",
          "ref": 363,
          "date": 2009,
          "percent": 75,
          "location": "U.K.",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Artisan du Chocolat",
          "ref": 363,
          "date": 2009,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Artisan du Chocolat",
          "ref": 300,
          "date": 2008,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.75,
          "origin": "Congo"
      },
      {
          "company": "Artisan du Chocolat (CL)",
          "ref": 1181,
          "date": 2013,
          "percent": 72,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Colombia"
      },
      {
          "company": "Askinosie",
          "ref": 1780,
          "date": 2016,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Tanzania"
      },
      {
          "company": "Askinosie",
          "ref": 647,
          "date": 2011,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Tanzania"
      },
      {
          "company": "Askinosie",
          "ref": 661,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Honduras"
      },
      {
          "company": "Askinosie",
          "ref": 331,
          "date": 2009,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Philippines"
      },
      {
          "company": "Askinosie",
          "ref": 141,
          "date": 2007,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Mexico"
      },
      {
          "company": "Askinosie",
          "ref": 175,
          "date": 2007,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Bahen & Co.",
          "ref": 1474,
          "date": 2015,
          "percent": 80,
          "location": "Australia",
          "rating": 3.25,
          "origin": ""
      },
      {
          "company": "Bahen & Co.",
          "ref": 1474,
          "date": 2015,
          "percent": 70,
          "location": "Australia",
          "rating": 3.5,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Bahen & Co.",
          "ref": 995,
          "date": 2012,
          "percent": 70,
          "location": "Australia",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Bahen & Co.",
          "ref": 999,
          "date": 2012,
          "percent": 70,
          "location": "Australia",
          "rating": 2.5,
          "origin": "Brazil"
      },
      {
          "company": "Bahen & Co.",
          "ref": 999,
          "date": 2012,
          "percent": 70,
          "location": "Australia",
          "rating": 2.5,
          "origin": ""
      },
      {
          "company": "Bakau",
          "ref": 1454,
          "date": 2015,
          "percent": 70,
          "location": "Peru",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Bakau",
          "ref": 1454,
          "date": 2015,
          "percent": 70,
          "location": "Peru",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Bar Au Chocolat",
          "ref": 1554,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Bar Au Chocolat",
          "ref": 1295,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Peru"
      },
      {
          "company": "Bar Au Chocolat",
          "ref": 983,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Bar Au Chocolat",
          "ref": 983,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Mexico"
      },
      {
          "company": "Bar Au Chocolat",
          "ref": 983,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Madagascar"
      },
      {
          "company": "Baravelli's",
          "ref": 955,
          "date": 2012,
          "percent": 80,
          "location": "Wales",
          "rating": 2.75,
          "origin": "Costa Rica"
      },
      {
          "company": "Batch",
          "ref": 1840,
          "date": 2016,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Domincan Republic"
      },
      {
          "company": "Batch",
          "ref": 1868,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Brazil"
      },
      {
          "company": "Batch",
          "ref": 1880,
          "date": 2016,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Beau Cacao",
          "ref": 1948,
          "date": 2017,
          "percent": 73,
          "location": "U.K.",
          "rating": 3,
          "origin": "Malaysia"
      },
      {
          "company": "Beau Cacao",
          "ref": 1948,
          "date": 2017,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.25,
          "origin": "Malaysia"
      },
      {
          "company": "Beehive",
          "ref": 1784,
          "date": 2016,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Brazil"
      },
      {
          "company": "Beehive",
          "ref": 1784,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Domincan Republic"
      },
      {
          "company": "Beehive",
          "ref": 1784,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Beehive",
          "ref": 1788,
          "date": 2016,
          "percent": 90,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Belcolade",
          "ref": 586,
          "date": 2010,
          "percent": 64,
          "location": "Belgium",
          "rating": 2.75,
          "origin": "Costa Rica"
      },
      {
          "company": "Belcolade",
          "ref": 586,
          "date": 2010,
          "percent": 64,
          "location": "Belgium",
          "rating": 2.75,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Belcolade",
          "ref": 586,
          "date": 2010,
          "percent": 64,
          "location": "Belgium",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Belcolade",
          "ref": 586,
          "date": 2010,
          "percent": 71,
          "location": "Belgium",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Bellflower",
          "ref": 1800,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Tanzania"
      },
      {
          "company": "Bellflower",
          "ref": 1804,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Bolivia"
      },
      {
          "company": "Bellflower",
          "ref": 1864,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Domincan Republic"
      },
      {
          "company": "Belyzium",
          "ref": 1768,
          "date": 2016,
          "percent": 83,
          "location": "Germany",
          "rating": 2.75,
          "origin": "Belize"
      },
      {
          "company": "Belyzium",
          "ref": 1768,
          "date": 2016,
          "percent": 78,
          "location": "Germany",
          "rating": 3,
          "origin": "Belize"
      },
      {
          "company": "Belyzium",
          "ref": 1768,
          "date": 2016,
          "percent": 83,
          "location": "Germany",
          "rating": 3.5,
          "origin": "Belize"
      },
      {
          "company": "Benoit Nihant",
          "ref": 1141,
          "date": 2013,
          "percent": 74,
          "location": "Belgium",
          "rating": 3.5,
          "origin": "Cuba"
      },
      {
          "company": "Benoit Nihant",
          "ref": 1141,
          "date": 2013,
          "percent": 74,
          "location": "Belgium",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Benoit Nihant",
          "ref": 1141,
          "date": 2013,
          "percent": 74,
          "location": "Belgium",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Benoit Nihant",
          "ref": 1141,
          "date": 2013,
          "percent": 73,
          "location": "Belgium",
          "rating": 4,
          "origin": "Ecuador"
      },
      {
          "company": "Benoit Nihant",
          "ref": 757,
          "date": 2011,
          "percent": 72,
          "location": "Belgium",
          "rating": 4,
          "origin": "Indonesia"
      },
      {
          "company": "Benoit Nihant",
          "ref": 773,
          "date": 2011,
          "percent": 72,
          "location": "Belgium",
          "rating": 3.75,
          "origin": "Madagascar"
      },
      {
          "company": "Bernachon",
          "ref": 797,
          "date": 2012,
          "percent": 55,
          "location": "France",
          "rating": 2.75,
          "origin": ""
      },
      {
          "company": "Beschle (Felchlin)",
          "ref": 636,
          "date": 2011,
          "percent": 64,
          "location": "Switzerland",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Beschle (Felchlin)",
          "ref": 636,
          "date": 2011,
          "percent": 88,
          "location": "Switzerland",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Beschle (Felchlin)",
          "ref": 636,
          "date": 2011,
          "percent": 72,
          "location": "Switzerland",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Beschle (Felchlin)",
          "ref": 636,
          "date": 2011,
          "percent": 72,
          "location": "Switzerland",
          "rating": 4,
          "origin": "Ecuador"
      },
      {
          "company": "Beschle (Felchlin)",
          "ref": 508,
          "date": 2010,
          "percent": 70,
          "location": "Switzerland",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Beschle (Felchlin)",
          "ref": 508,
          "date": 2010,
          "percent": 74,
          "location": "Switzerland",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Beschle (Felchlin)",
          "ref": 508,
          "date": 2010,
          "percent": 64,
          "location": "Switzerland",
          "rating": 3.5,
          "origin": "Indonesia"
      },
      {
          "company": "Beschle (Felchlin)",
          "ref": 508,
          "date": 2010,
          "percent": 72,
          "location": "Switzerland",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Bisou",
          "ref": 1482,
          "date": 2015,
          "percent": 76,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Nicaragua"
      },
      {
          "company": "Bisou",
          "ref": 1486,
          "date": 2015,
          "percent": 76,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Costa Rica"
      },
      {
          "company": "Bisou",
          "ref": 1486,
          "date": 2015,
          "percent": 78,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Costa Rica"
      },
      {
          "company": "Bisou",
          "ref": 1486,
          "date": 2015,
          "percent": 86,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Belize"
      },
      {
          "company": "Bittersweet Origins",
          "ref": 963,
          "date": 2012,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ghana"
      },
      {
          "company": "Bittersweet Origins",
          "ref": 478,
          "date": 2010,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Indonesia"
      },
      {
          "company": "Bittersweet Origins",
          "ref": 502,
          "date": 2010,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Rep., Bali"
      },
      {
          "company": "Bittersweet Origins",
          "ref": 558,
          "date": 2010,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Indonesia"
      },
      {
          "company": "Bittersweet Origins",
          "ref": 565,
          "date": 2010,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Bittersweet Origins",
          "ref": 565,
          "date": 2010,
          "percent": 78,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Bittersweet Origins",
          "ref": 414,
          "date": 2009,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Bittersweet Origins",
          "ref": 414,
          "date": 2009,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Bittersweet Origins",
          "ref": 423,
          "date": 2009,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Bittersweet Origins",
          "ref": 431,
          "date": 2009,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Bittersweet Origins",
          "ref": 233,
          "date": 2008,
          "percent": 71,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Bittersweet Origins",
          "ref": 233,
          "date": 2008,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Panama"
      },
      {
          "company": "Bittersweet Origins",
          "ref": 233,
          "date": 2008,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Bittersweet Origins",
          "ref": 256,
          "date": 2008,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ghana"
      },
      {
          "company": "Black Mountain",
          "ref": 256,
          "date": 2008,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Black Mountain",
          "ref": 256,
          "date": 2008,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Black Mountain",
          "ref": 256,
          "date": 2008,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Nicaragua"
      },
      {
          "company": "Black River (A. Morin)",
          "ref": 1331,
          "date": 2014,
          "percent": 70,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Jamaica"
      },
      {
          "company": "Blanxart",
          "ref": 1046,
          "date": 2013,
          "percent": 82,
          "location": "Spain",
          "rating": 3.5,
          "origin": "Congo"
      },
      {
          "company": "Blanxart",
          "ref": 322,
          "date": 2009,
          "percent": 72,
          "location": "Spain",
          "rating": 2.75,
          "origin": ""
      },
      {
          "company": "Blue Bandana",
          "ref": 1740,
          "date": 2016,
          "percent": 82,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Blue Bandana",
          "ref": 1752,
          "date": 2016,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Guatemala"
      },
      {
          "company": "Blue Bandana",
          "ref": 1752,
          "date": 2016,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Tanzania"
      },
      {
          "company": "Blue Bandana",
          "ref": 1756,
          "date": 2016,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Blue Bandana",
          "ref": 911,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Guatemala"
      },
      {
          "company": "Blue Bandana",
          "ref": 911,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Madagascar"
      },
      {
          "company": "Bonnat",
          "ref": 1912,
          "date": 2016,
          "percent": 75,
          "location": "France",
          "rating": 3.5,
          "origin": "Mexico"
      },
      {
          "company": "Bonnat",
          "ref": 1339,
          "date": 2014,
          "percent": 75,
          "location": "France",
          "rating": 4,
          "origin": "Brazil"
      },
      {
          "company": "Bonnat",
          "ref": 1418,
          "date": 2014,
          "percent": 75,
          "location": "France",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Bonnat",
          "ref": 1418,
          "date": 2014,
          "percent": 65,
          "location": "France",
          "rating": 3.75,
          "origin": "Venez,Africa,Brasil,Peru,Mex"
      },
      {
          "company": "Bonnat",
          "ref": 1038,
          "date": 2013,
          "percent": 75,
          "location": "France",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Bonnat",
          "ref": 1042,
          "date": 2013,
          "percent": 75,
          "location": "France",
          "rating": 3.25,
          "origin": "Gabon"
      },
      {
          "company": "Bonnat",
          "ref": 629,
          "date": 2011,
          "percent": 75,
          "location": "France",
          "rating": 3.5,
          "origin": "Cuba"
      },
      {
          "company": "Bonnat",
          "ref": 629,
          "date": 2011,
          "percent": 75,
          "location": "France",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Bonnat",
          "ref": 629,
          "date": 2011,
          "percent": 75,
          "location": "France",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Bonnat",
          "ref": 629,
          "date": 2011,
          "percent": 75,
          "location": "France",
          "rating": 3.75,
          "origin": "Brazil"
      },
      {
          "company": "Bonnat",
          "ref": 629,
          "date": 2011,
          "percent": 75,
          "location": "France",
          "rating": 4,
          "origin": "Haiti"
      },
      {
          "company": "Bonnat",
          "ref": 629,
          "date": 2011,
          "percent": 75,
          "location": "France",
          "rating": 4,
          "origin": "Madagascar"
      },
      {
          "company": "Bonnat",
          "ref": 672,
          "date": 2011,
          "percent": 75,
          "location": "France",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Bonnat",
          "ref": 761,
          "date": 2011,
          "percent": 75,
          "location": "France",
          "rating": 3.25,
          "origin": "Jamaica"
      },
      {
          "company": "Bonnat",
          "ref": 331,
          "date": 2009,
          "percent": 75,
          "location": "France",
          "rating": 3,
          "origin": "Ivory Coast"
      },
      {
          "company": "Bonnat",
          "ref": 336,
          "date": 2009,
          "percent": 75,
          "location": "France",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Bonnat",
          "ref": 336,
          "date": 2009,
          "percent": 75,
          "location": "France",
          "rating": 3,
          "origin": "Mexico"
      },
      {
          "company": "Bonnat",
          "ref": 395,
          "date": 2009,
          "percent": 75,
          "location": "France",
          "rating": 3,
          "origin": "Mexico"
      },
      {
          "company": "Bonnat",
          "ref": 199,
          "date": 2008,
          "percent": 75,
          "location": "France",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Bonnat",
          "ref": 123,
          "date": 2007,
          "percent": 75,
          "location": "France",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Bonnat",
          "ref": 24,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 3.75,
          "origin": "Carribean"
      },
      {
          "company": "Bonnat",
          "ref": 32,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Bonnat",
          "ref": 48,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Bonnat",
          "ref": 75,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 4,
          "origin": "Madagascar"
      },
      {
          "company": "Bonnat",
          "ref": 81,
          "date": 2006,
          "percent": 100,
          "location": "France",
          "rating": 1.5,
          "origin": ""
      },
      {
          "company": "Bonnat",
          "ref": 81,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 3,
          "origin": "Sri Lanka"
      },
      {
          "company": "Bonnat",
          "ref": 81,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Bouga Cacao (Tulicorp)",
          "ref": 316,
          "date": 2009,
          "percent": 77,
          "location": "Ecuador",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Bouga Cacao (Tulicorp)",
          "ref": 341,
          "date": 2009,
          "percent": 100,
          "location": "Ecuador",
          "rating": 1.5,
          "origin": "Ecuador"
      },
      {
          "company": "Bowler Man",
          "ref": 1267,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Belize"
      },
      {
          "company": "Bowler Man",
          "ref": 1271,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Brasstown aka It's Chocolate",
          "ref": 1868,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Brasstown aka It's Chocolate",
          "ref": 1868,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Brasstown aka It's Chocolate",
          "ref": 1462,
          "date": 2015,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Brasstown aka It's Chocolate",
          "ref": 1255,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Belize"
      },
      {
          "company": "Brasstown aka It's Chocolate",
          "ref": 1355,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Brasstown aka It's Chocolate",
          "ref": 1125,
          "date": 2013,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Brasstown aka It's Chocolate",
          "ref": 1125,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Brasstown aka It's Chocolate",
          "ref": 1129,
          "date": 2013,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ghana"
      },
      {
          "company": "Brasstown aka It's Chocolate",
          "ref": 1129,
          "date": 2013,
          "percent": 85,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Brazen",
          "ref": 1514,
          "date": 2015,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Brazen",
          "ref": 1514,
          "date": 2015,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Brazen",
          "ref": 1514,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Guatemala"
      },
      {
          "company": "Brazen",
          "ref": 1518,
          "date": 2015,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Brazen",
          "ref": 1518,
          "date": 2015,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Belize"
      },
      {
          "company": "Brazen",
          "ref": 1518,
          "date": 2015,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Breeze Mill",
          "ref": 1149,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Jamaica"
      },
      {
          "company": "Bright",
          "ref": 1231,
          "date": 2014,
          "percent": 72,
          "location": "Australia",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Bright",
          "ref": 1231,
          "date": 2014,
          "percent": 70,
          "location": "Australia",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Bright",
          "ref": 1231,
          "date": 2014,
          "percent": 72,
          "location": "Australia",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Bright",
          "ref": 1235,
          "date": 2014,
          "percent": 68,
          "location": "Australia",
          "rating": 2.75,
          "origin": "Trinidad"
      },
      {
          "company": "Britarev",
          "ref": 1638,
          "date": 2015,
          "percent": 70,
          "location": "Russia",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Bronx Grrl Chocolate",
          "ref": 1181,
          "date": 2013,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Burnt Fork Bend",
          "ref": 1299,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Trinidad"
      },
      {
          "company": "Burnt Fork Bend",
          "ref": 1299,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Burnt Fork Bend",
          "ref": 1303,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Belize"
      },
      {
          "company": "Burnt Fork Bend",
          "ref": 1303,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": ""
      },
      {
          "company": "Burnt Fork Bend",
          "ref": 1323,
          "date": 2014,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Cacao Arabuco",
          "ref": 1606,
          "date": 2015,
          "percent": 70,
          "location": "Puerto Rico",
          "rating": 2.5,
          "origin": "Puerto Rico"
      },
      {
          "company": "Cacao Atlanta",
          "ref": 1215,
          "date": 2014,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Cacao Atlanta",
          "ref": 502,
          "date": 2010,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Cacao Atlanta",
          "ref": 502,
          "date": 2010,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Cacao Atlanta",
          "ref": 600,
          "date": 2010,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.25,
          "origin": "Venezuela"
      },
      {
          "company": "Cacao Barry",
          "ref": 1716,
          "date": 2016,
          "percent": 65,
          "location": "France",
          "rating": 3.5,
          "origin": "Haiti"
      },
      {
          "company": "Cacao Barry",
          "ref": 586,
          "date": 2010,
          "percent": 70,
          "location": "France",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Cacao Barry",
          "ref": 300,
          "date": 2008,
          "percent": 75,
          "location": "France",
          "rating": 2,
          "origin": "Tanzania"
      },
      {
          "company": "Cacao Barry",
          "ref": 141,
          "date": 2007,
          "percent": 72,
          "location": "France",
          "rating": 2,
          "origin": "Venezuela"
      },
      {
          "company": "Cacao Barry",
          "ref": 147,
          "date": 2007,
          "percent": 66,
          "location": "France",
          "rating": 3,
          "origin": "Mexico"
      },
      {
          "company": "Cacao de Origen",
          "ref": 1688,
          "date": 2015,
          "percent": 77,
          "location": "Venezuela",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Cacao de Origen",
          "ref": 1692,
          "date": 2015,
          "percent": 75,
          "location": "Venezuela",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Cacao de Origen",
          "ref": 1391,
          "date": 2014,
          "percent": 75,
          "location": "Venezuela",
          "rating": 2.5,
          "origin": "Venezuela"
      },
      {
          "company": "Cacao de Origen",
          "ref": 1391,
          "date": 2014,
          "percent": 74,
          "location": "Venezuela",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Cacao de Origen",
          "ref": 1391,
          "date": 2014,
          "percent": 75,
          "location": "Venezuela",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Cacao de Origen",
          "ref": 1395,
          "date": 2014,
          "percent": 70,
          "location": "Venezuela",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Cacao de Origin",
          "ref": 1668,
          "date": 2015,
          "percent": 74,
          "location": "Venezuela",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Cacao Hunters",
          "ref": 1816,
          "date": 2016,
          "percent": 71,
          "location": "Colombia",
          "rating": 3.75,
          "origin": "Colombia"
      },
      {
          "company": "Cacao Hunters",
          "ref": 1816,
          "date": 2016,
          "percent": 74,
          "location": "Colombia",
          "rating": 3.75,
          "origin": "Colombia"
      },
      {
          "company": "Cacao Hunters",
          "ref": 1662,
          "date": 2015,
          "percent": 72,
          "location": "Colombia",
          "rating": 3.75,
          "origin": "Colombia"
      },
      {
          "company": "Cacao Hunters",
          "ref": 1430,
          "date": 2014,
          "percent": 64,
          "location": "Colombia",
          "rating": 3.5,
          "origin": "Colombia"
      },
      {
          "company": "Cacao Hunters",
          "ref": 1430,
          "date": 2014,
          "percent": 70,
          "location": "Colombia",
          "rating": 3.5,
          "origin": "Colombia"
      },
      {
          "company": "Cacao Hunters",
          "ref": 1434,
          "date": 2014,
          "percent": 69,
          "location": "Colombia",
          "rating": 2.75,
          "origin": "Colombia"
      },
      {
          "company": "Cacao Hunters",
          "ref": 1434,
          "date": 2014,
          "percent": 70,
          "location": "Colombia",
          "rating": 3.25,
          "origin": "Colombia"
      },
      {
          "company": "Cacao Market",
          "ref": 1860,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Honduras"
      },
      {
          "company": "Cacao Prieto",
          "ref": 991,
          "date": 2012,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Cacao Prieto",
          "ref": 641,
          "date": 2011,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Cacao Prieto",
          "ref": 641,
          "date": 2011,
          "percent": 66,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Cacao Prieto",
          "ref": 647,
          "date": 2011,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Cacao Sampaka",
          "ref": 1908,
          "date": 2016,
          "percent": 70,
          "location": "Spain",
          "rating": 3.5,
          "origin": "Congo"
      },
      {
          "company": "Cacao Sampaka",
          "ref": 508,
          "date": 2010,
          "percent": 71,
          "location": "Spain",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Cacao Sampaka",
          "ref": 523,
          "date": 2010,
          "percent": 71,
          "location": "Spain",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "Cacao Sampaka",
          "ref": 523,
          "date": 2010,
          "percent": 71,
          "location": "Spain",
          "rating": 4,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Cacao Sampaka",
          "ref": 537,
          "date": 2010,
          "percent": 71,
          "location": "Spain",
          "rating": 3.25,
          "origin": "Grenada"
      },
      {
          "company": "Cacao Sampaka",
          "ref": 537,
          "date": 2010,
          "percent": 71,
          "location": "Spain",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Cacao Sampaka",
          "ref": 537,
          "date": 2010,
          "percent": 77,
          "location": "Spain",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Cacao Sampaka",
          "ref": 336,
          "date": 2009,
          "percent": 70,
          "location": "Spain",
          "rating": 4,
          "origin": "Mexico"
      },
      {
          "company": "Cacao Sampaka",
          "ref": 346,
          "date": 2009,
          "percent": 70,
          "location": "Spain",
          "rating": 4,
          "origin": "Mexico"
      },
      {
          "company": "Cacao Store",
          "ref": 1684,
          "date": 2015,
          "percent": 70,
          "location": "Japan",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Cacao Store",
          "ref": 1684,
          "date": 2015,
          "percent": 70,
          "location": "Japan",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Cacao Store",
          "ref": 1684,
          "date": 2015,
          "percent": 70,
          "location": "Japan",
          "rating": 3.5,
          "origin": "Vietnam"
      },
      {
          "company": "Cacaosuyo (Theobroma Inversiones)",
          "ref": 1173,
          "date": 2013,
          "percent": 70,
          "location": "Peru",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Cacaoyere (Ecuatoriana)",
          "ref": 237,
          "date": 2008,
          "percent": 63,
          "location": "Ecuador",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Cacaoyere (Ecuatoriana)",
          "ref": 237,
          "date": 2008,
          "percent": 71,
          "location": "Ecuador",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Cacaoyere (Ecuatoriana)",
          "ref": 245,
          "date": 2008,
          "percent": 82,
          "location": "Ecuador",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Cacaoyere (Ecuatoriana)",
          "ref": 259,
          "date": 2008,
          "percent": 91,
          "location": "Ecuador",
          "rating": 1.5,
          "origin": "Ecuador"
      },
      {
          "company": "Callebaut",
          "ref": 296,
          "date": 2008,
          "percent": 60,
          "location": "Belgium",
          "rating": 2.75,
          "origin": "Grenada"
      },
      {
          "company": "Callebaut",
          "ref": 141,
          "date": 2007,
          "percent": 70,
          "location": "Belgium",
          "rating": 1,
          "origin": "Ecuador"
      },
      {
          "company": "C-Amaro",
          "ref": 1442,
          "date": 2014,
          "percent": 75,
          "location": "Italy",
          "rating": 2.5,
          "origin": "Cuba"
      },
      {
          "company": "C-Amaro",
          "ref": 1442,
          "date": 2014,
          "percent": 72,
          "location": "Italy",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "C-Amaro",
          "ref": 1442,
          "date": 2014,
          "percent": 70,
          "location": "Italy",
          "rating": 3.5,
          "origin": ""
      },
      {
          "company": "C-Amaro",
          "ref": 1185,
          "date": 2013,
          "percent": 100,
          "location": "Italy",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "C-Amaro",
          "ref": 809,
          "date": 2012,
          "percent": 80,
          "location": "Italy",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "C-Amaro",
          "ref": 749,
          "date": 2011,
          "percent": 78,
          "location": "Italy",
          "rating": 2.25,
          "origin": "Sao Tome"
      },
      {
          "company": "C-Amaro",
          "ref": 765,
          "date": 2011,
          "percent": 70,
          "location": "Italy",
          "rating": 2.5,
          "origin": "Trinidad"
      },
      {
          "company": "Cao",
          "ref": 1804,
          "date": 2016,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Venezuela"
      },
      {
          "company": "Cao",
          "ref": 1804,
          "date": 2016,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Tanzania"
      },
      {
          "company": "Cao",
          "ref": 1804,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Cao",
          "ref": 1808,
          "date": 2016,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Bolivia"
      },
      {
          "company": "Cao",
          "ref": 1808,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Brazil"
      },
      {
          "company": "Caoni (Tulicorp)",
          "ref": 237,
          "date": 2008,
          "percent": 77,
          "location": "Ecuador",
          "rating": 2,
          "origin": "Ecuador"
      },
      {
          "company": "Caoni (Tulicorp)",
          "ref": 237,
          "date": 2008,
          "percent": 77,
          "location": "Ecuador",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Caoni (Tulicorp)",
          "ref": 245,
          "date": 2008,
          "percent": 77,
          "location": "Ecuador",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Caoni (Tulicorp)",
          "ref": 266,
          "date": 2008,
          "percent": 55,
          "location": "Ecuador",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Caoni (Tulicorp)",
          "ref": 269,
          "date": 2008,
          "percent": 55,
          "location": "Ecuador",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Caoni (Tulicorp)",
          "ref": 269,
          "date": 2008,
          "percent": 55,
          "location": "Ecuador",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Captain Pembleton",
          "ref": 1263,
          "date": 2014,
          "percent": 70,
          "location": "New Zealand",
          "rating": 3.5,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Captain Pembleton",
          "ref": 1263,
          "date": 2014,
          "percent": 70,
          "location": "New Zealand",
          "rating": 3.75,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Caribeans",
          "ref": 1582,
          "date": 2015,
          "percent": 72,
          "location": "Costa Rica",
          "rating": 3.5,
          "origin": "Guatemala"
      },
      {
          "company": "Caribeans",
          "ref": 1586,
          "date": 2015,
          "percent": 72,
          "location": "Costa Rica",
          "rating": 3.25,
          "origin": "Costa Rica"
      },
      {
          "company": "Caribeans",
          "ref": 1586,
          "date": 2015,
          "percent": 72,
          "location": "Costa Rica",
          "rating": 3.5,
          "origin": "Costa Rica"
      },
      {
          "company": "Caribeans",
          "ref": 841,
          "date": 2012,
          "percent": 72,
          "location": "Costa Rica",
          "rating": 3,
          "origin": "Costa Rica"
      },
      {
          "company": "Caribeans",
          "ref": 845,
          "date": 2012,
          "percent": 80,
          "location": "Costa Rica",
          "rating": 2.75,
          "origin": "Costa Rica"
      },
      {
          "company": "Carlotta Chocolat",
          "ref": 1884,
          "date": 2016,
          "percent": 65,
          "location": "Colombia",
          "rating": 3,
          "origin": "Colombia"
      },
      {
          "company": "Carlotta Chocolat",
          "ref": 1888,
          "date": 2016,
          "percent": 65,
          "location": "Colombia",
          "rating": 3.25,
          "origin": "Colombia"
      },
      {
          "company": "Carlotta Chocolat",
          "ref": 1888,
          "date": 2016,
          "percent": 65,
          "location": "Colombia",
          "rating": 3.25,
          "origin": "Colombia"
      },
      {
          "company": "Carlotta Chocolat",
          "ref": 1888,
          "date": 2016,
          "percent": 65,
          "location": "Colombia",
          "rating": 3.5,
          "origin": "Colombia"
      },
      {
          "company": "Carlotta Chocolat",
          "ref": 1888,
          "date": 2016,
          "percent": 65,
          "location": "Colombia",
          "rating": 3.5,
          "origin": "Colombia"
      },
      {
          "company": "Castronovo",
          "ref": 1724,
          "date": 2016,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Belize"
      },
      {
          "company": "Castronovo",
          "ref": 1570,
          "date": 2015,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Honduras"
      },
      {
          "company": "Castronovo",
          "ref": 1570,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Domincan Republic"
      },
      {
          "company": "Castronovo",
          "ref": 1574,
          "date": 2015,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Castronovo",
          "ref": 1347,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Colombia"
      },
      {
          "company": "Castronovo",
          "ref": 1371,
          "date": 2014,
          "percent": 76,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Colombia"
      },
      {
          "company": "Castronovo",
          "ref": 1407,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Castronovo",
          "ref": 1101,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Bolivia"
      },
      {
          "company": "Castronovo",
          "ref": 1101,
          "date": 2013,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Castronovo",
          "ref": 1105,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Castronovo",
          "ref": 1105,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Castronovo",
          "ref": 1109,
          "date": 2013,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Nicaragua"
      },
      {
          "company": "Castronovo",
          "ref": 1153,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Castronovo",
          "ref": 1153,
          "date": 2013,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Cello",
          "ref": 1247,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Cello",
          "ref": 1247,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Cello",
          "ref": 1251,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Cello",
          "ref": 1251,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Bolivia"
      },
      {
          "company": "Cemoi",
          "ref": 404,
          "date": 2009,
          "percent": 72,
          "location": "France",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Chaleur B",
          "ref": 1426,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 2.75,
          "origin": "Uganda"
      },
      {
          "company": "Charm School",
          "ref": 1900,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Belize"
      },
      {
          "company": "Chchukululu (Tulicorp)",
          "ref": 486,
          "date": 2010,
          "percent": 55,
          "location": "Ecuador",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Chchukululu (Tulicorp)",
          "ref": 252,
          "date": 2008,
          "percent": 75,
          "location": "Ecuador",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Chequessett",
          "ref": 1235,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Costa Rica"
      },
      {
          "company": "Chloe Chocolat",
          "ref": 672,
          "date": 2011,
          "percent": 70,
          "location": "France",
          "rating": 3.5,
          "origin": ""
      },
      {
          "company": "Chocablog",
          "ref": 1454,
          "date": 2015,
          "percent": 70,
          "location": "U.K.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Choco Del Sol",
          "ref": 1407,
          "date": 2014,
          "percent": 75,
          "location": "Germany",
          "rating": 3,
          "origin": "Belize"
      },
      {
          "company": "Choco Del Sol",
          "ref": 1407,
          "date": 2014,
          "percent": 82,
          "location": "Germany",
          "rating": 3.25,
          "origin": "Belize"
      },
      {
          "company": "Choco Dong",
          "ref": 1696,
          "date": 2015,
          "percent": 70,
          "location": "South Korea",
          "rating": 2.75,
          "origin": "Vietnam"
      },
      {
          "company": "Choco Dong",
          "ref": 1696,
          "date": 2015,
          "percent": 70,
          "location": "South Korea",
          "rating": 3.5,
          "origin": "Malaysia"
      },
      {
          "company": "Chocolarder",
          "ref": 1482,
          "date": 2015,
          "percent": 65,
          "location": "U.K.",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Chocolarder",
          "ref": 1482,
          "date": 2015,
          "percent": 65,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Chocolarder",
          "ref": 1514,
          "date": 2015,
          "percent": 80,
          "location": "U.K.",
          "rating": 2.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Chocola'te",
          "ref": 647,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Madagascar"
      },
      {
          "company": "Chocola'te",
          "ref": 647,
          "date": 2011,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Chocolate Alchemist-Philly",
          "ref": 1772,
          "date": 2016,
          "percent": 90,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Chocolate Alchemist-Philly",
          "ref": 1772,
          "date": 2016,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": ""
      },
      {
          "company": "Chocolate Con Amor",
          "ref": 1760,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Bolivia"
      },
      {
          "company": "Chocolate Con Amor",
          "ref": 1760,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Uganda"
      },
      {
          "company": "Chocolate Con Amor",
          "ref": 1764,
          "date": 2016,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Chocolate Con Amor",
          "ref": 1764,
          "date": 2016,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Chocolate Con Amor",
          "ref": 1764,
          "date": 2016,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Chocolate Con Amor",
          "ref": 1764,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Chocolate Con Amor",
          "ref": 1768,
          "date": 2016,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Chocolate Conspiracy",
          "ref": 1259,
          "date": 2014,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Chocolate Makers",
          "ref": 1530,
          "date": 2015,
          "percent": 75,
          "location": "Amsterdam",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Chocolate Makers",
          "ref": 1530,
          "date": 2015,
          "percent": 68,
          "location": "Amsterdam",
          "rating": 3.5,
          "origin": "Congo"
      },
      {
          "company": "Chocolate Makers",
          "ref": 1530,
          "date": 2015,
          "percent": 80,
          "location": "Amsterdam",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Chocolate Tree, The",
          "ref": 1582,
          "date": 2015,
          "percent": 69,
          "location": "Scotland",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Chocolate Tree, The",
          "ref": 1582,
          "date": 2015,
          "percent": 80,
          "location": "Scotland",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Chocolate Tree, The",
          "ref": 1121,
          "date": 2013,
          "percent": 70,
          "location": "Scotland",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Chocolate Tree, The",
          "ref": 919,
          "date": 2012,
          "percent": 82,
          "location": "Scotland",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Chocolate Tree, The",
          "ref": 919,
          "date": 2012,
          "percent": 68,
          "location": "Scotland",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Chocolate Tree, The",
          "ref": 919,
          "date": 2012,
          "percent": 72,
          "location": "Scotland",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Chocolats Privilege",
          "ref": 1219,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 2.5,
          "origin": "Mexico"
      },
      {
          "company": "ChocoReko",
          "ref": 1454,
          "date": 2015,
          "percent": 77,
          "location": "Japan",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Chocosol",
          "ref": 682,
          "date": 2011,
          "percent": 65,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Mexico"
      },
      {
          "company": "Chocovic",
          "ref": 478,
          "date": 2010,
          "percent": 71,
          "location": "Spain",
          "rating": 3.25,
          "origin": "Mexico"
      },
      {
          "company": "Chocovic",
          "ref": 478,
          "date": 2010,
          "percent": 71,
          "location": "Spain",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Chocovic",
          "ref": 439,
          "date": 2009,
          "percent": 60,
          "location": "Spain",
          "rating": 3.25,
          "origin": ""
      },
      {
          "company": "Chocovic",
          "ref": 439,
          "date": 2009,
          "percent": 75,
          "location": "Spain",
          "rating": 3.25,
          "origin": ""
      },
      {
          "company": "Chocovic",
          "ref": 209,
          "date": 2008,
          "percent": 71,
          "location": "Spain",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Chocovic",
          "ref": 117,
          "date": 2007,
          "percent": 71,
          "location": "Spain",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Chocovic",
          "ref": 117,
          "date": 2007,
          "percent": 71,
          "location": "Spain",
          "rating": 2.5,
          "origin": "Grenada"
      },
      {
          "company": "Chocovic",
          "ref": 117,
          "date": 2007,
          "percent": 70,
          "location": "Spain",
          "rating": 3,
          "origin": ""
      },
      {
          "company": "Chocovivo",
          "ref": 1522,
          "date": 2015,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Mexico"
      },
      {
          "company": "Chocovivo",
          "ref": 1522,
          "date": 2015,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Mexico"
      },
      {
          "company": "Choklat",
          "ref": 377,
          "date": 2009,
          "percent": 80,
          "location": "Canada",
          "rating": 2.5,
          "origin": "Venezuela"
      },
      {
          "company": "Choklat",
          "ref": 377,
          "date": 2009,
          "percent": 70,
          "location": "Canada",
          "rating": 2.75,
          "origin": "Mexico"
      },
      {
          "company": "Choklat",
          "ref": 377,
          "date": 2009,
          "percent": 70,
          "location": "Canada",
          "rating": 3,
          "origin": "Brazil"
      },
      {
          "company": "Choklat",
          "ref": 377,
          "date": 2009,
          "percent": 80,
          "location": "Canada",
          "rating": 3,
          "origin": "Brazil"
      },
      {
          "company": "Choklat",
          "ref": 377,
          "date": 2009,
          "percent": 70,
          "location": "Canada",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Chokolat Elot (Girard)",
          "ref": 1149,
          "date": 2013,
          "percent": 42,
          "location": "Martinique",
          "rating": 2.75,
          "origin": "Martinique"
      },
      {
          "company": "Choocsol",
          "ref": 1832,
          "date": 2016,
          "percent": 75,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Mexico"
      },
      {
          "company": "Christopher Morel (Felchlin)",
          "ref": 666,
          "date": 2011,
          "percent": 68,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Chuao Chocolatier",
          "ref": 445,
          "date": 2009,
          "percent": 61,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Chuao Chocolatier (Pralus)",
          "ref": 486,
          "date": 2010,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Claudio Corallo",
          "ref": 470,
          "date": 2010,
          "percent": 73.5,
          "location": "Sao Tome",
          "rating": 3.75,
          "origin": "Sao Tome & Principe"
      },
      {
          "company": "Claudio Corallo",
          "ref": 209,
          "date": 2008,
          "percent": 80,
          "location": "Sao Tome",
          "rating": 3,
          "origin": "Sao Tome & Principe"
      },
      {
          "company": "Claudio Corallo",
          "ref": 227,
          "date": 2008,
          "percent": 75,
          "location": "Sao Tome",
          "rating": 4,
          "origin": "Sao Tome & Principe"
      },
      {
          "company": "Claudio Corallo",
          "ref": 252,
          "date": 2008,
          "percent": 100,
          "location": "Sao Tome",
          "rating": 1,
          "origin": "Sao Tome & Principe"
      },
      {
          "company": "Cloudforest",
          "ref": 1486,
          "date": 2015,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Coleman & Davis",
          "ref": 1646,
          "date": 2015,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Compania de Chocolate (Salgado)",
          "ref": 579,
          "date": 2010,
          "percent": 70,
          "location": "Argentina",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Compania de Chocolate (Salgado)",
          "ref": 292,
          "date": 2008,
          "percent": 80,
          "location": "Argentina",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Compania de Chocolate (Salgado)",
          "ref": 292,
          "date": 2008,
          "percent": 72,
          "location": "Argentina",
          "rating": 3.25,
          "origin": "Bolivia"
      },
      {
          "company": "Compania de Chocolate (Salgado)",
          "ref": 292,
          "date": 2008,
          "percent": 70,
          "location": "Argentina",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Compania de Chocolate (Salgado)",
          "ref": 296,
          "date": 2008,
          "percent": 88,
          "location": "Argentina",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Condor",
          "ref": 1630,
          "date": 2015,
          "percent": 76,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Confluence",
          "ref": 1916,
          "date": 2016,
          "percent": 78,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Vietnam"
      },
      {
          "company": "Coppeneur",
          "ref": 1169,
          "date": 2013,
          "percent": 65,
          "location": "Germany",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Coppeneur",
          "ref": 813,
          "date": 2012,
          "percent": 85,
          "location": "Germany",
          "rating": 3.5,
          "origin": "Ghana"
      },
      {
          "company": "Coppeneur",
          "ref": 817,
          "date": 2012,
          "percent": 100,
          "location": "Germany",
          "rating": 1.5,
          "origin": "Ecuador"
      },
      {
          "company": "Coppeneur",
          "ref": 821,
          "date": 2012,
          "percent": 72,
          "location": "Germany",
          "rating": 3.75,
          "origin": "Sao Tome & Principe"
      },
      {
          "company": "Coppeneur",
          "ref": 959,
          "date": 2012,
          "percent": 70,
          "location": "Germany",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Coppeneur",
          "ref": 470,
          "date": 2010,
          "percent": 72,
          "location": "Germany",
          "rating": 3.25,
          "origin": "Grenada"
      },
      {
          "company": "Coppeneur",
          "ref": 478,
          "date": 2010,
          "percent": 70,
          "location": "Germany",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Coppeneur",
          "ref": 558,
          "date": 2010,
          "percent": 72,
          "location": "Germany",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Coppeneur",
          "ref": 558,
          "date": 2010,
          "percent": 72,
          "location": "Germany",
          "rating": 3,
          "origin": "Trinidad"
      },
      {
          "company": "Coppeneur",
          "ref": 558,
          "date": 2010,
          "percent": 72,
          "location": "Germany",
          "rating": 3.25,
          "origin": "Jamaica"
      },
      {
          "company": "Coppeneur",
          "ref": 558,
          "date": 2010,
          "percent": 72,
          "location": "Germany",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Coppeneur",
          "ref": 341,
          "date": 2009,
          "percent": 72,
          "location": "Germany",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Coppeneur",
          "ref": 445,
          "date": 2009,
          "percent": 62,
          "location": "Germany",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Coppeneur",
          "ref": 451,
          "date": 2009,
          "percent": 70,
          "location": "Germany",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Coppeneur",
          "ref": 451,
          "date": 2009,
          "percent": 70,
          "location": "Germany",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Coppeneur",
          "ref": 220,
          "date": 2008,
          "percent": 72,
          "location": "Germany",
          "rating": 3,
          "origin": "Mexico"
      },
      {
          "company": "Coppeneur",
          "ref": 220,
          "date": 2008,
          "percent": 72,
          "location": "Germany",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Coppeneur",
          "ref": 196,
          "date": 2007,
          "percent": 72,
          "location": "Germany",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Cote d' Or (Kraft)",
          "ref": 48,
          "date": 2006,
          "percent": 70,
          "location": "Belgium",
          "rating": 1,
          "origin": ""
      },
      {
          "company": "Cravve",
          "ref": 1283,
          "date": 2014,
          "percent": 70,
          "location": "Australia",
          "rating": 2.5,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Cravve",
          "ref": 1335,
          "date": 2014,
          "percent": 83,
          "location": "Australia",
          "rating": 2.75,
          "origin": "Vanuatu"
      },
      {
          "company": "Cravve",
          "ref": 971,
          "date": 2012,
          "percent": 75,
          "location": "Australia",
          "rating": 3.25,
          "origin": "Tanzania"
      },
      {
          "company": "Cravve",
          "ref": 975,
          "date": 2012,
          "percent": 65,
          "location": "Australia",
          "rating": 3.25,
          "origin": "Brazil"
      },
      {
          "company": "Cravve",
          "ref": 975,
          "date": 2012,
          "percent": 67,
          "location": "Australia",
          "rating": 3.25,
          "origin": "Fiji"
      },
      {
          "company": "Cravve",
          "ref": 975,
          "date": 2012,
          "percent": 64,
          "location": "Australia",
          "rating": 3.25,
          "origin": "Vanuatu"
      },
      {
          "company": "Cravve",
          "ref": 975,
          "date": 2012,
          "percent": 75,
          "location": "Australia",
          "rating": 3.5,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Creo",
          "ref": 1736,
          "date": 2016,
          "percent": 85,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Creo",
          "ref": 1736,
          "date": 2016,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "Daintree",
          "ref": 1654,
          "date": 2015,
          "percent": 70,
          "location": "Australia",
          "rating": 2.75,
          "origin": "Australia"
      },
      {
          "company": "Daintree",
          "ref": 785,
          "date": 2011,
          "percent": 70,
          "location": "Australia",
          "rating": 3.25,
          "origin": "Australia"
      },
      {
          "company": "Dalloway",
          "ref": 1928,
          "date": 2017,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Damson",
          "ref": 1610,
          "date": 2015,
          "percent": 70,
          "location": "U.K.",
          "rating": 3,
          "origin": "Trinidad"
      },
      {
          "company": "Damson",
          "ref": 1610,
          "date": 2015,
          "percent": 70,
          "location": "U.K.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Damson",
          "ref": 1666,
          "date": 2015,
          "percent": 70,
          "location": "U.K.",
          "rating": 2.25,
          "origin": "Grenada"
      },
      {
          "company": "Damson",
          "ref": 1666,
          "date": 2015,
          "percent": 70,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Dandelion",
          "ref": 1816,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": ""
      },
      {
          "company": "Dandelion",
          "ref": 1446,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Belize"
      },
      {
          "company": "Dandelion",
          "ref": 1219,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Belize"
      },
      {
          "company": "Dandelion",
          "ref": 1295,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Dandelion",
          "ref": 1303,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Liberia"
      },
      {
          "company": "Dandelion",
          "ref": 1387,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Dandelion",
          "ref": 1026,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Dandelion",
          "ref": 1026,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Dandelion",
          "ref": 1085,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Dandelion",
          "ref": 1153,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Dandelion",
          "ref": 805,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Costa Rica"
      },
      {
          "company": "Dandelion",
          "ref": 805,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Colombia"
      },
      {
          "company": "Dandelion",
          "ref": 915,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Dandelion",
          "ref": 654,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Dandelion",
          "ref": 654,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Dandelion",
          "ref": 654,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Tanzania"
      },
      {
          "company": "Danta",
          "ref": 1223,
          "date": 2014,
          "percent": 82,
          "location": "Guatemala",
          "rating": 3.25,
          "origin": "Guatemala"
      },
      {
          "company": "Danta",
          "ref": 987,
          "date": 2012,
          "percent": 75,
          "location": "Guatemala",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Danta",
          "ref": 987,
          "date": 2012,
          "percent": 70,
          "location": "Guatemala",
          "rating": 3.75,
          "origin": "Guatemala"
      },
      {
          "company": "Danta",
          "ref": 987,
          "date": 2012,
          "percent": 70,
          "location": "Guatemala",
          "rating": 3.75,
          "origin": "Madagascar"
      },
      {
          "company": "Danta",
          "ref": 987,
          "date": 2012,
          "percent": 70,
          "location": "Guatemala",
          "rating": 4,
          "origin": "Guatemala"
      },
      {
          "company": "Danta",
          "ref": 991,
          "date": 2012,
          "percent": 70,
          "location": "Guatemala",
          "rating": 3.25,
          "origin": "Guatemala"
      },
      {
          "company": "Danta",
          "ref": 661,
          "date": 2011,
          "percent": 60,
          "location": "Guatemala",
          "rating": 3.5,
          "origin": "Guatemala"
      },
      {
          "company": "Danta",
          "ref": 423,
          "date": 2009,
          "percent": 75,
          "location": "Guatemala",
          "rating": 3,
          "origin": "Guatemala"
      },
      {
          "company": "Danta",
          "ref": 423,
          "date": 2009,
          "percent": 60,
          "location": "Guatemala",
          "rating": 3.25,
          "origin": "Guatemala"
      },
      {
          "company": "DAR",
          "ref": 1920,
          "date": 2016,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "DAR",
          "ref": 1920,
          "date": 2016,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Vietnam"
      },
      {
          "company": "DAR",
          "ref": 1920,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador, Costa Rica"
      },
      {
          "company": "Dark Forest",
          "ref": 1708,
          "date": 2016,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Bolivia"
      },
      {
          "company": "Dark Forest",
          "ref": 1550,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Dark Forest",
          "ref": 1550,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Dark Forest",
          "ref": 1554,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Tanzania"
      },
      {
          "company": "Dark Forest",
          "ref": 1554,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Davis",
          "ref": 1093,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Ghana"
      },
      {
          "company": "Davis",
          "ref": 1093,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Davis",
          "ref": 1093,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Davis",
          "ref": 907,
          "date": 2012,
          "percent": 58,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "West Africa"
      },
      {
          "company": "De Mendes",
          "ref": 1462,
          "date": 2015,
          "percent": 72,
          "location": "Brazil",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "De Mendes",
          "ref": 1462,
          "date": 2015,
          "percent": 65,
          "location": "Brazil",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "De Villiers",
          "ref": 1832,
          "date": 2016,
          "percent": 70,
          "location": "South Africa",
          "rating": 2.5,
          "origin": "Uganda"
      },
      {
          "company": "De Villiers",
          "ref": 1832,
          "date": 2016,
          "percent": 70,
          "location": "South Africa",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Dean and Deluca (Belcolade)",
          "ref": 170,
          "date": 2007,
          "percent": 66,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Madagascar"
      },
      {
          "company": "Dean and Deluca (Belcolade)",
          "ref": 175,
          "date": 2007,
          "percent": 64,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Costa Rica"
      },
      {
          "company": "Dean and Deluca (Belcolade)",
          "ref": 175,
          "date": 2007,
          "percent": 71,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Dean and Deluca (Belcolade)",
          "ref": 175,
          "date": 2007,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ghana"
      },
      {
          "company": "Dean and Deluca (Belcolade)",
          "ref": 180,
          "date": 2007,
          "percent": 64,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Dean and Deluca (Belcolade)",
          "ref": 180,
          "date": 2007,
          "percent": 64,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Debauve & Gallais (Michel Cluizel)",
          "ref": 423,
          "date": 2009,
          "percent": 64,
          "location": "France",
          "rating": 3,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Debauve & Gallais (Michel Cluizel)",
          "ref": 263,
          "date": 2008,
          "percent": 66,
          "location": "France",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Desbarres",
          "ref": 1916,
          "date": 2016,
          "percent": 72,
          "location": "Canada",
          "rating": 2.5,
          "origin": "Tanzania"
      },
      {
          "company": "DeVries",
          "ref": 241,
          "date": 2008,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Bolivia"
      },
      {
          "company": "DeVries",
          "ref": 166,
          "date": 2007,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Costa Rica"
      },
      {
          "company": "DeVries",
          "ref": 166,
          "date": 2007,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Dick Taylor",
          "ref": 1952,
          "date": 2017,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Guatemala"
      },
      {
          "company": "Dick Taylor",
          "ref": 1864,
          "date": 2016,
          "percent": 78,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Vietnam"
      },
      {
          "company": "Dick Taylor",
          "ref": 1634,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Bolivia"
      },
      {
          "company": "Dick Taylor",
          "ref": 1235,
          "date": 2014,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Dick Taylor",
          "ref": 1034,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Dick Taylor",
          "ref": 1193,
          "date": 2013,
          "percent": 76,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Dick Taylor",
          "ref": 895,
          "date": 2012,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Bolivia"
      },
      {
          "company": "Dick Taylor",
          "ref": 955,
          "date": 2012,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Belize"
      },
      {
          "company": "Dick Taylor",
          "ref": 661,
          "date": 2011,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Dick Taylor",
          "ref": 661,
          "date": 2011,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Dick Taylor",
          "ref": 682,
          "date": 2011,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Dick Taylor",
          "ref": 769,
          "date": 2011,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Dick Taylor",
          "ref": 769,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Doble & Bignall",
          "ref": 1688,
          "date": 2015,
          "percent": 85,
          "location": "U.K.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Doble & Bignall",
          "ref": 1371,
          "date": 2014,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.25,
          "origin": "Panama"
      },
      {
          "company": "Doble & Bignall",
          "ref": 1371,
          "date": 2014,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Doble & Bignall",
          "ref": 1407,
          "date": 2014,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.5,
          "origin": "Nicaragua"
      },
      {
          "company": "Dole (Guittard)",
          "ref": 311,
          "date": 2009,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Hawaii"
      },
      {
          "company": "Dolfin (Belcolade)",
          "ref": 304,
          "date": 2008,
          "percent": 88,
          "location": "Belgium",
          "rating": 3,
          "origin": "West Africa"
      },
      {
          "company": "Dolfin (Belcolade)",
          "ref": 63,
          "date": 2006,
          "percent": 70,
          "location": "Belgium",
          "rating": 1.5,
          "origin": ""
      },
      {
          "company": "Domori",
          "ref": 1672,
          "date": 2015,
          "percent": 70,
          "location": "Italy",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "Domori",
          "ref": 1672,
          "date": 2015,
          "percent": 70,
          "location": "Italy",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Domori",
          "ref": 1109,
          "date": 2013,
          "percent": 100,
          "location": "Italy",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Domori",
          "ref": 863,
          "date": 2012,
          "percent": 70,
          "location": "Italy",
          "rating": 3.5,
          "origin": "Tanzania"
      },
      {
          "company": "Domori",
          "ref": 863,
          "date": 2012,
          "percent": 70,
          "location": "Italy",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Domori",
          "ref": 693,
          "date": 2011,
          "percent": 70,
          "location": "Italy",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Domori",
          "ref": 470,
          "date": 2010,
          "percent": 70,
          "location": "Italy",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Domori",
          "ref": 227,
          "date": 2008,
          "percent": 70,
          "location": "Italy",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Domori",
          "ref": 272,
          "date": 2008,
          "percent": 70,
          "location": "Italy",
          "rating": 3,
          "origin": "Colombia"
      },
      {
          "company": "Domori",
          "ref": 272,
          "date": 2008,
          "percent": 78,
          "location": "Italy",
          "rating": 3.5,
          "origin": ""
      },
      {
          "company": "Domori",
          "ref": 272,
          "date": 2008,
          "percent": 70,
          "location": "Italy",
          "rating": 3.75,
          "origin": ""
      },
      {
          "company": "Domori",
          "ref": 111,
          "date": 2007,
          "percent": 70,
          "location": "Italy",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Domori",
          "ref": 129,
          "date": 2007,
          "percent": 75,
          "location": "Italy",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Domori",
          "ref": 135,
          "date": 2007,
          "percent": 60,
          "location": "Italy",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Domori",
          "ref": 135,
          "date": 2007,
          "percent": 70,
          "location": "Italy",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Domori",
          "ref": 192,
          "date": 2007,
          "percent": 70,
          "location": "Italy",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Domori",
          "ref": 192,
          "date": 2007,
          "percent": 70,
          "location": "Italy",
          "rating": 3.75,
          "origin": "Indonesia"
      },
      {
          "company": "Domori",
          "ref": 192,
          "date": 2007,
          "percent": 70,
          "location": "Italy",
          "rating": 4,
          "origin": "Ecuador"
      },
      {
          "company": "Domori",
          "ref": 192,
          "date": 2007,
          "percent": 70,
          "location": "Italy",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Domori",
          "ref": 87,
          "date": 2006,
          "percent": 70,
          "location": "Italy",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Domori",
          "ref": 87,
          "date": 2006,
          "percent": 70,
          "location": "Italy",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Domori",
          "ref": 87,
          "date": 2006,
          "percent": 70,
          "location": "Italy",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Dormouse",
          "ref": 1880,
          "date": 2016,
          "percent": 75,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Grenada"
      },
      {
          "company": "Dormouse",
          "ref": 1672,
          "date": 2015,
          "percent": 70,
          "location": "U.K.",
          "rating": 2.5,
          "origin": "Venezuela"
      },
      {
          "company": "Dormouse",
          "ref": 1676,
          "date": 2015,
          "percent": 80,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Colombia"
      },
      {
          "company": "Dormouse",
          "ref": 1676,
          "date": 2015,
          "percent": 77,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Duffy's",
          "ref": 1662,
          "date": 2015,
          "percent": 70,
          "location": "U.K.",
          "rating": 4,
          "origin": "Guatemala"
      },
      {
          "company": "Duffy's",
          "ref": 1331,
          "date": 2014,
          "percent": 70,
          "location": "U.K.",
          "rating": 3.5,
          "origin": "Nicaragua"
      },
      {
          "company": "Duffy's",
          "ref": 1331,
          "date": 2014,
          "percent": 76,
          "location": "U.K.",
          "rating": 3.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Duffy's",
          "ref": 923,
          "date": 2012,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Duffy's",
          "ref": 623,
          "date": 2011,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.75,
          "origin": "Honduras"
      },
      {
          "company": "Duffy's",
          "ref": 661,
          "date": 2011,
          "percent": 65,
          "location": "U.K.",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Duffy's",
          "ref": 697,
          "date": 2011,
          "percent": 72,
          "location": "U.K.",
          "rating": 3,
          "origin": "Panama"
      },
      {
          "company": "Duffy's",
          "ref": 697,
          "date": 2011,
          "percent": 71,
          "location": "U.K.",
          "rating": 3.25,
          "origin": "Nicaragua"
      },
      {
          "company": "Duffy's",
          "ref": 765,
          "date": 2011,
          "percent": 71,
          "location": "U.K.",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Duffy's",
          "ref": 516,
          "date": 2010,
          "percent": 70,
          "location": "U.K.",
          "rating": 3.5,
          "origin": "Panama"
      },
      {
          "company": "Duffy's",
          "ref": 516,
          "date": 2010,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "Duffy's",
          "ref": 523,
          "date": 2010,
          "percent": 70,
          "location": "U.K.",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Duffy's",
          "ref": 523,
          "date": 2010,
          "percent": 70,
          "location": "U.K.",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Dulcinea",
          "ref": 1506,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Durand",
          "ref": 841,
          "date": 2012,
          "percent": 82,
          "location": "France",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Durci",
          "ref": 1626,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Durci",
          "ref": 1626,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Durci",
          "ref": 1630,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Domincan Republic"
      },
      {
          "company": "Durci",
          "ref": 1630,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Durci",
          "ref": 1630,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Ecuador"
      },
      {
          "company": "East Van Roasters",
          "ref": 1343,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "East Van Roasters",
          "ref": 1343,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "East Van Roasters",
          "ref": 1343,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Eau de Rose",
          "ref": 1812,
          "date": 2016,
          "percent": 70,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Colombia"
      },
      {
          "company": "Eau de Rose",
          "ref": 1812,
          "date": 2016,
          "percent": 70,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Colombia"
      },
      {
          "company": "Eclat (Felchlin)",
          "ref": 919,
          "date": 2012,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Edelmond",
          "ref": 1876,
          "date": 2016,
          "percent": 68,
          "location": "Germany",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "El Ceibo",
          "ref": 709,
          "date": 2011,
          "percent": 75,
          "location": "Bolivia",
          "rating": 3.75,
          "origin": "Bolivia"
      },
      {
          "company": "El Ceibo",
          "ref": 252,
          "date": 2008,
          "percent": 71,
          "location": "Bolivia",
          "rating": 2.75,
          "origin": "Bolivia"
      },
      {
          "company": "El Rey",
          "ref": 1662,
          "date": 2015,
          "percent": 70,
          "location": "Venezuela",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "El Rey",
          "ref": 439,
          "date": 2009,
          "percent": 60.5,
          "location": "Venezuela",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "El Rey",
          "ref": 439,
          "date": 2009,
          "percent": 70,
          "location": "Venezuela",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "El Rey",
          "ref": 206,
          "date": 2008,
          "percent": 74,
          "location": "Venezuela",
          "rating": 2.5,
          "origin": "Venezuela"
      },
      {
          "company": "El Rey",
          "ref": 206,
          "date": 2008,
          "percent": 58,
          "location": "Venezuela",
          "rating": 2.5,
          "origin": "Venezuela"
      },
      {
          "company": "El Rey",
          "ref": 206,
          "date": 2008,
          "percent": 61,
          "location": "Venezuela",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "El Rey",
          "ref": 32,
          "date": 2006,
          "percent": 70,
          "location": "Venezuela",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Emerald Estate",
          "ref": 1137,
          "date": 2013,
          "percent": 60,
          "location": "St. Lucia",
          "rating": 2.75,
          "origin": "St. Lucia"
      },
      {
          "company": "Emerald Estate",
          "ref": 1137,
          "date": 2013,
          "percent": 70,
          "location": "St. Lucia",
          "rating": 3.25,
          "origin": "St. Lucia"
      },
      {
          "company": "Emily's",
          "ref": 1450,
          "date": 2015,
          "percent": 79,
          "location": "Japan",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Emily's",
          "ref": 1454,
          "date": 2015,
          "percent": 78,
          "location": "Japan",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "ENNA",
          "ref": 1916,
          "date": 2016,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Honduras"
      },
      {
          "company": "Enric Rovira (Claudio Corallo)",
          "ref": 565,
          "date": 2010,
          "percent": 80,
          "location": "Spain",
          "rating": 3.25,
          "origin": "Sao Tome & Principe"
      },
      {
          "company": "Erithaj (A. Morin)",
          "ref": 1205,
          "date": 2014,
          "percent": 70,
          "location": "France",
          "rating": 3.25,
          "origin": "Vietnam"
      },
      {
          "company": "Erithaj (A. Morin)",
          "ref": 1209,
          "date": 2014,
          "percent": 80,
          "location": "France",
          "rating": 3,
          "origin": "Vietnam"
      },
      {
          "company": "Erithaj (A. Morin)",
          "ref": 1209,
          "date": 2014,
          "percent": 74,
          "location": "France",
          "rating": 3.25,
          "origin": "Vietnam"
      },
      {
          "company": "Escazu",
          "ref": 903,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Escazu",
          "ref": 414,
          "date": 2009,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 2,
          "origin": "Costa Rica"
      },
      {
          "company": "Escazu",
          "ref": 423,
          "date": 2009,
          "percent": 81,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Escazu",
          "ref": 431,
          "date": 2009,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Cost Rica, Ven"
      },
      {
          "company": "Escazu",
          "ref": 252,
          "date": 2008,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Ethel's Artisan (Mars)",
          "ref": 666,
          "date": 2011,
          "percent": 55,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Peru, Madagascar"
      },
      {
          "company": "Ethel's Artisan (Mars)",
          "ref": 666,
          "date": 2011,
          "percent": 55,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Trinidad"
      },
      {
          "company": "Ethel's Artisan (Mars)",
          "ref": 666,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Venezuela"
      },
      {
          "company": "Ethel's Artisan (Mars)",
          "ref": 666,
          "date": 2011,
          "percent": 62,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": ""
      },
      {
          "company": "Ethel's Artisan (Mars)",
          "ref": 672,
          "date": 2011,
          "percent": 62,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Venezuela, Trinidad"
      },
      {
          "company": "Ethereal",
          "ref": 1275,
          "date": 2014,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Belize"
      },
      {
          "company": "Ethereal",
          "ref": 1275,
          "date": 2014,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Ethereal",
          "ref": 1275,
          "date": 2014,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Fearless (AMMA)",
          "ref": 565,
          "date": 2010,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Brazil"
      },
      {
          "company": "Feitoria Cacao",
          "ref": 1732,
          "date": 2016,
          "percent": 76,
          "location": "Portugal",
          "rating": 3,
          "origin": "Jamaica"
      },
      {
          "company": "Feitoria Cacao",
          "ref": 1736,
          "date": 2016,
          "percent": 76,
          "location": "Portugal",
          "rating": 2.5,
          "origin": "Venezuela"
      },
      {
          "company": "Feitoria Cacao",
          "ref": 1736,
          "date": 2016,
          "percent": 76,
          "location": "Portugal",
          "rating": 2.75,
          "origin": "Belize"
      },
      {
          "company": "Felchlin",
          "ref": 494,
          "date": 2010,
          "percent": 58,
          "location": "Switzerland",
          "rating": 3.5,
          "origin": "Grenada"
      },
      {
          "company": "Felchlin",
          "ref": 105,
          "date": 2006,
          "percent": 62,
          "location": "Switzerland",
          "rating": 2,
          "origin": ""
      },
      {
          "company": "Felchlin",
          "ref": 105,
          "date": 2006,
          "percent": 74,
          "location": "Switzerland",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Felchlin",
          "ref": 48,
          "date": 2006,
          "percent": 64,
          "location": "Switzerland",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Felchlin",
          "ref": 48,
          "date": 2006,
          "percent": 65,
          "location": "Switzerland",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Felchlin",
          "ref": 48,
          "date": 2006,
          "percent": 72,
          "location": "Switzerland",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Felchlin",
          "ref": 56,
          "date": 2006,
          "percent": 68,
          "location": "Switzerland",
          "rating": 4,
          "origin": "Bolivia"
      },
      {
          "company": "Finca",
          "ref": 1283,
          "date": 2014,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 2.25,
          "origin": "Puerto Rico"
      },
      {
          "company": "Finca",
          "ref": 1283,
          "date": 2014,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Finca",
          "ref": 1283,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Finca",
          "ref": 1287,
          "date": 2014,
          "percent": 85,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Forever Cacao",
          "ref": 1267,
          "date": 2014,
          "percent": 72,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Forteza (Cortes)",
          "ref": 1776,
          "date": 2016,
          "percent": 70,
          "location": "Puerto Rico",
          "rating": 2.75,
          "origin": "Domincan Republic"
      },
      {
          "company": "Forteza (Cortes)",
          "ref": 1776,
          "date": 2016,
          "percent": 80,
          "location": "Puerto Rico",
          "rating": 2.75,
          "origin": "Domincan Republic"
      },
      {
          "company": "Fossa",
          "ref": 1772,
          "date": 2016,
          "percent": 70,
          "location": "Singapore",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Fossa",
          "ref": 1776,
          "date": 2016,
          "percent": 75,
          "location": "Singapore",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Fossa",
          "ref": 1776,
          "date": 2016,
          "percent": 67,
          "location": "Singapore",
          "rating": 3.75,
          "origin": "Tanzania"
      },
      {
          "company": "Franceschi",
          "ref": 1355,
          "date": 2014,
          "percent": 70,
          "location": "Venezuela",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Franceschi",
          "ref": 1355,
          "date": 2014,
          "percent": 70,
          "location": "Venezuela",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Franceschi",
          "ref": 911,
          "date": 2012,
          "percent": 70,
          "location": "Venezuela",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Franceschi",
          "ref": 915,
          "date": 2012,
          "percent": 60,
          "location": "Venezuela",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Frederic Blondeel",
          "ref": 1538,
          "date": 2015,
          "percent": 70,
          "location": "Belgium",
          "rating": 3.5,
          "origin": "Costa Rica"
      },
      {
          "company": "Frederic Blondeel",
          "ref": 1538,
          "date": 2015,
          "percent": 75,
          "location": "Belgium",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Frederic Blondeel",
          "ref": 1542,
          "date": 2015,
          "percent": 80,
          "location": "Belgium",
          "rating": 3,
          "origin": "Vietnam"
      },
      {
          "company": "Frederic Blondeel",
          "ref": 1351,
          "date": 2014,
          "percent": 60,
          "location": "Belgium",
          "rating": 3.5,
          "origin": "Ghana"
      },
      {
          "company": "Frederic Blondeel",
          "ref": 1351,
          "date": 2014,
          "percent": 65,
          "location": "Belgium",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "French Broad",
          "ref": 1940,
          "date": 2017,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "French Broad",
          "ref": 1634,
          "date": 2015,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Guatemala"
      },
      {
          "company": "French Broad",
          "ref": 1209,
          "date": 2014,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Costa Rica"
      },
      {
          "company": "French Broad",
          "ref": 1295,
          "date": 2014,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Nicaragua"
      },
      {
          "company": "French Broad",
          "ref": 1042,
          "date": 2013,
          "percent": 66,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "French Broad",
          "ref": 883,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "French Broad",
          "ref": 883,
          "date": 2012,
          "percent": 61,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "French Broad",
          "ref": 887,
          "date": 2012,
          "percent": 81,
          "location": "U.S.A.",
          "rating": 2,
          "origin": "Peru"
      },
      {
          "company": "French Broad",
          "ref": 781,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "French Broad",
          "ref": 785,
          "date": 2011,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Fresco",
          "ref": 1383,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Fresco",
          "ref": 1383,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Fresco",
          "ref": 1383,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Fresco",
          "ref": 1387,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Fresco",
          "ref": 1030,
          "date": 2013,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Fresco",
          "ref": 1081,
          "date": 2013,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Fresco",
          "ref": 1117,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Fresco",
          "ref": 1149,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Peru"
      },
      {
          "company": "Fresco",
          "ref": 899,
          "date": 2012,
          "percent": 69,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Fresco",
          "ref": 899,
          "date": 2012,
          "percent": 69,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Fresco",
          "ref": 915,
          "date": 2012,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Madagascar"
      },
      {
          "company": "Fresco",
          "ref": 927,
          "date": 2012,
          "percent": 69,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Fresco",
          "ref": 931,
          "date": 2012,
          "percent": 69,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Fresco",
          "ref": 636,
          "date": 2011,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Ghana"
      },
      {
          "company": "Fresco",
          "ref": 642,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Jamaica"
      },
      {
          "company": "Fresco",
          "ref": 642,
          "date": 2011,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Fresco",
          "ref": 642,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Jamaica"
      },
      {
          "company": "Fresco",
          "ref": 682,
          "date": 2011,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Fresco",
          "ref": 682,
          "date": 2011,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Fresco",
          "ref": 688,
          "date": 2011,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Fresco",
          "ref": 745,
          "date": 2011,
          "percent": 76,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Fresco",
          "ref": 745,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Fresco",
          "ref": 370,
          "date": 2009,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Jamaica"
      },
      {
          "company": "Fresco",
          "ref": 370,
          "date": 2009,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Jamaica"
      },
      {
          "company": "Fresco",
          "ref": 370,
          "date": 2009,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Jamaica"
      },
      {
          "company": "Fresco",
          "ref": 370,
          "date": 2009,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Friis Holm",
          "ref": 1912,
          "date": 2016,
          "percent": 70,
          "location": "Denmark",
          "rating": 3.5,
          "origin": "Nicaragua"
      },
      {
          "company": "Friis Holm (Bonnat)",
          "ref": 1680,
          "date": 2015,
          "percent": 60,
          "location": "Denmark",
          "rating": 3,
          "origin": "Nicaragua"
      },
      {
          "company": "Friis Holm (Bonnat)",
          "ref": 1680,
          "date": 2015,
          "percent": 85,
          "location": "Denmark",
          "rating": 3.25,
          "origin": "Nicaragua"
      },
      {
          "company": "Friis Holm (Bonnat)",
          "ref": 1259,
          "date": 2014,
          "percent": 70,
          "location": "Denmark",
          "rating": 3.5,
          "origin": "Nicaragua"
      },
      {
          "company": "Friis Holm (Bonnat)",
          "ref": 1034,
          "date": 2013,
          "percent": 70,
          "location": "Denmark",
          "rating": 3.25,
          "origin": "Nicaragua"
      },
      {
          "company": "Friis Holm (Bonnat)",
          "ref": 1034,
          "date": 2013,
          "percent": 70,
          "location": "Denmark",
          "rating": 3.5,
          "origin": "Nicaragua"
      },
      {
          "company": "Friis Holm (Bonnat)",
          "ref": 895,
          "date": 2012,
          "percent": 70,
          "location": "Denmark",
          "rating": 3.25,
          "origin": "Nicaragua"
      },
      {
          "company": "Friis Holm (Bonnat)",
          "ref": 899,
          "date": 2012,
          "percent": 70,
          "location": "Denmark",
          "rating": 3.25,
          "origin": "Honduras"
      },
      {
          "company": "Friis Holm (Bonnat)",
          "ref": 899,
          "date": 2012,
          "percent": 70,
          "location": "Denmark",
          "rating": 3.25,
          "origin": "Nicaragua"
      },
      {
          "company": "Friis Holm (Bonnat)",
          "ref": 923,
          "date": 2012,
          "percent": 70,
          "location": "Denmark",
          "rating": 3.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Friis Holm (Bonnat)",
          "ref": 623,
          "date": 2011,
          "percent": 70,
          "location": "Denmark",
          "rating": 3.25,
          "origin": "Nicaragua"
      },
      {
          "company": "Friis Holm (Bonnat)",
          "ref": 623,
          "date": 2011,
          "percent": 70,
          "location": "Denmark",
          "rating": 3.5,
          "origin": "Nicaragua"
      },
      {
          "company": "Friis Holm (Bonnat)",
          "ref": 623,
          "date": 2011,
          "percent": 70,
          "location": "Denmark",
          "rating": 3.5,
          "origin": "Nicaragua"
      },
      {
          "company": "Fruition",
          "ref": 1780,
          "date": 2016,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Bolivia"
      },
      {
          "company": "Fruition",
          "ref": 1780,
          "date": 2016,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Costa Rica"
      },
      {
          "company": "Fruition",
          "ref": 1347,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Trinidad"
      },
      {
          "company": "Fruition",
          "ref": 1359,
          "date": 2014,
          "percent": 76,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Fruition",
          "ref": 1046,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Fruition",
          "ref": 1185,
          "date": 2013,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Fruition",
          "ref": 863,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Fruition",
          "ref": 753,
          "date": 2011,
          "percent": 66,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Costa Rica"
      },
      {
          "company": "Fruition",
          "ref": 781,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Costa Rica"
      },
      {
          "company": "Garden Island",
          "ref": 1367,
          "date": 2014,
          "percent": 85,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Hawaii"
      },
      {
          "company": "Georgia Ramon",
          "ref": 1642,
          "date": 2015,
          "percent": 65,
          "location": "Germany",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Georgia Ramon",
          "ref": 1642,
          "date": 2015,
          "percent": 70,
          "location": "Germany",
          "rating": 4,
          "origin": "Ghana"
      },
      {
          "company": "Georgia Ramon",
          "ref": 1646,
          "date": 2015,
          "percent": 70,
          "location": "Germany",
          "rating": 3.5,
          "origin": "Domincan Republic"
      },
      {
          "company": "Georgia Ramon",
          "ref": 1646,
          "date": 2015,
          "percent": 80,
          "location": "Germany",
          "rating": 3.5,
          "origin": "Domincan Republic"
      },
      {
          "company": "Georgia Ramon",
          "ref": 1646,
          "date": 2015,
          "percent": 75,
          "location": "Germany",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Glennmade",
          "ref": 1848,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Belize"
      },
      {
          "company": "Glennmade",
          "ref": 1672,
          "date": 2015,
          "percent": 66,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Brazil"
      },
      {
          "company": "Goodnow Farms",
          "ref": 1924,
          "date": 2016,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Mexico"
      },
      {
          "company": "Goodnow Farms",
          "ref": 1924,
          "date": 2016,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Nicaragua"
      },
      {
          "company": "Goodnow Farms",
          "ref": 1924,
          "date": 2016,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Guatemala"
      },
      {
          "company": "Grand Place",
          "ref": 741,
          "date": 2011,
          "percent": 72,
          "location": "Vietnam",
          "rating": 3,
          "origin": "Vietnam"
      },
      {
          "company": "Green & Black's (ICAM)",
          "ref": 15,
          "date": 2006,
          "percent": 70,
          "location": "U.K.",
          "rating": 2.5,
          "origin": ""
      },
      {
          "company": "Green Bean to Bar",
          "ref": 1896,
          "date": 2016,
          "percent": 70,
          "location": "Japan",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Grenada Chocolate Co.",
          "ref": 494,
          "date": 2010,
          "percent": 82,
          "location": "Grenada",
          "rating": 3.25,
          "origin": "Grenada"
      },
      {
          "company": "Grenada Chocolate Co.",
          "ref": 363,
          "date": 2009,
          "percent": 60,
          "location": "Grenada",
          "rating": 2.75,
          "origin": "Grenada"
      },
      {
          "company": "Grenada Chocolate Co.",
          "ref": 241,
          "date": 2008,
          "percent": 71,
          "location": "Grenada",
          "rating": 2.5,
          "origin": "Grenada"
      },
      {
          "company": "Guido Castagna",
          "ref": 355,
          "date": 2009,
          "percent": 64,
          "location": "Italy",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Guido Castagna",
          "ref": 355,
          "date": 2009,
          "percent": 64,
          "location": "Italy",
          "rating": 3,
          "origin": "Ghana"
      },
      {
          "company": "Guido Castagna",
          "ref": 355,
          "date": 2009,
          "percent": 64,
          "location": "Italy",
          "rating": 3,
          "origin": "Trinidad, Tobago"
      },
      {
          "company": "Guido Castagna",
          "ref": 355,
          "date": 2009,
          "percent": 76,
          "location": "Italy",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Guido Castagna",
          "ref": 355,
          "date": 2009,
          "percent": 64,
          "location": "Italy",
          "rating": 3.25,
          "origin": "Ven, Trinidad, Ecuador"
      },
      {
          "company": "Guittard",
          "ref": 1602,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": ""
      },
      {
          "company": "Guittard",
          "ref": 1053,
          "date": 2013,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Haiti"
      },
      {
          "company": "Guittard",
          "ref": 1053,
          "date": 2013,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Guittard",
          "ref": 1053,
          "date": 2013,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Jamaica"
      },
      {
          "company": "Guittard",
          "ref": 1053,
          "date": 2013,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Guittard",
          "ref": 654,
          "date": 2011,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": ""
      },
      {
          "company": "Guittard",
          "ref": 654,
          "date": 2011,
          "percent": 61,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": ""
      },
      {
          "company": "Guittard",
          "ref": 654,
          "date": 2011,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": ""
      },
      {
          "company": "Guittard",
          "ref": 552,
          "date": 2010,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Trinidad"
      },
      {
          "company": "Guittard",
          "ref": 316,
          "date": 2009,
          "percent": 55,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Hawaii"
      },
      {
          "company": "Guittard",
          "ref": 387,
          "date": 2009,
          "percent": 91,
          "location": "U.S.A.",
          "rating": 3,
          "origin": ""
      },
      {
          "company": "Guittard",
          "ref": 387,
          "date": 2009,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": ""
      },
      {
          "company": "Guittard",
          "ref": 259,
          "date": 2008,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Guittard",
          "ref": 276,
          "date": 2008,
          "percent": 64,
          "location": "U.S.A.",
          "rating": 3,
          "origin": ""
      },
      {
          "company": "Guittard",
          "ref": 276,
          "date": 2008,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Guittard",
          "ref": 147,
          "date": 2007,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": ""
      },
      {
          "company": "Guittard",
          "ref": 15,
          "date": 2006,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Colombia"
      },
      {
          "company": "Guittard",
          "ref": 87,
          "date": 2006,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Venezuela"
      },
      {
          "company": "Guittard",
          "ref": 87,
          "date": 2006,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Guittard",
          "ref": 93,
          "date": 2006,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Guittard",
          "ref": 93,
          "date": 2006,
          "percent": 61,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": ""
      },
      {
          "company": "Guittard",
          "ref": 99,
          "date": 2006,
          "percent": 61,
          "location": "U.S.A.",
          "rating": 3,
          "origin": ""
      },
      {
          "company": "Habitual",
          "ref": 1197,
          "date": 2014,
          "percent": 80,
          "location": "Canada",
          "rating": 2.75,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Habitual",
          "ref": 1197,
          "date": 2014,
          "percent": 74,
          "location": "Canada",
          "rating": 2.75,
          "origin": ""
      },
      {
          "company": "Habitual",
          "ref": 1197,
          "date": 2014,
          "percent": 75,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Habitual",
          "ref": 1197,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 3.5,
          "origin": ""
      },
      {
          "company": "Habitual",
          "ref": 1201,
          "date": 2014,
          "percent": 65,
          "location": "Canada",
          "rating": 2.75,
          "origin": ""
      },
      {
          "company": "Habitual",
          "ref": 1201,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 3,
          "origin": ""
      },
      {
          "company": "Habitual",
          "ref": 1201,
          "date": 2014,
          "percent": 80,
          "location": "Canada",
          "rating": 3,
          "origin": ""
      },
      {
          "company": "Habitual",
          "ref": 1201,
          "date": 2014,
          "percent": 66,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Hawaii"
      },
      {
          "company": "Habitual",
          "ref": 1205,
          "date": 2014,
          "percent": 100,
          "location": "Canada",
          "rating": 2,
          "origin": ""
      },
      {
          "company": "Hachez",
          "ref": 166,
          "date": 2007,
          "percent": 77,
          "location": "Germany",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Hacienda El Castillo",
          "ref": 1327,
          "date": 2014,
          "percent": 55,
          "location": "Ecuador",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Hacienda El Castillo",
          "ref": 1327,
          "date": 2014,
          "percent": 70,
          "location": "Ecuador",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Haigh",
          "ref": 701,
          "date": 2011,
          "percent": 70,
          "location": "Australia",
          "rating": 3,
          "origin": "South America, Africa"
      },
      {
          "company": "Harper Macaw",
          "ref": 1808,
          "date": 2016,
          "percent": 85,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Brazil"
      },
      {
          "company": "Harper Macaw",
          "ref": 1696,
          "date": 2015,
          "percent": 67,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Brazil"
      },
      {
          "company": "Harper Macaw",
          "ref": 1700,
          "date": 2015,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Harper Macaw",
          "ref": 1700,
          "date": 2015,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Heilemann",
          "ref": 1876,
          "date": 2016,
          "percent": 64,
          "location": "Germany",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Heirloom Cacao Preservation (Brasstown)",
          "ref": 1748,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Belize"
      },
      {
          "company": "Heirloom Cacao Preservation (Fruition)",
          "ref": 1748,
          "date": 2016,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Costa Rica"
      },
      {
          "company": "Heirloom Cacao Preservation (Guittard)",
          "ref": 1239,
          "date": 2014,
          "percent": 67,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Bolivia"
      },
      {
          "company": "Heirloom Cacao Preservation (Guittard)",
          "ref": 1243,
          "date": 2014,
          "percent": 67,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Bolivia"
      },
      {
          "company": "Heirloom Cacao Preservation (Guittard)",
          "ref": 1243,
          "date": 2014,
          "percent": 67,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "Heirloom Cacao Preservation (Guittard)",
          "ref": 1243,
          "date": 2014,
          "percent": 67,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Hawaii"
      },
      {
          "company": "Heirloom Cacao Preservation (Manoa)",
          "ref": 1744,
          "date": 2016,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Hawaii"
      },
      {
          "company": "Heirloom Cacao Preservation (Millcreek)",
          "ref": 1744,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Heirloom Cacao Preservation (Mindo)",
          "ref": 1748,
          "date": 2016,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Heirloom Cacao Preservation (Zokoko)",
          "ref": 1744,
          "date": 2016,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Bolivia"
      },
      {
          "company": "Heirloom Cacao Preservation (Zokoko)",
          "ref": 1744,
          "date": 2016,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Bolivia"
      },
      {
          "company": "hello cocoa",
          "ref": 1458,
          "date": 2015,
          "percent": 57,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Uganda"
      },
      {
          "company": "hello cocoa",
          "ref": 1462,
          "date": 2015,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "hexx",
          "ref": 1546,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Tanzania"
      },
      {
          "company": "hexx",
          "ref": 1546,
          "date": 2015,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "hexx",
          "ref": 1546,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "hexx",
          "ref": 1550,
          "date": 2015,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "hexx",
          "ref": 1550,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Hogarth",
          "ref": 1712,
          "date": 2016,
          "percent": 70,
          "location": "New Zealand",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Hogarth",
          "ref": 1712,
          "date": 2016,
          "percent": 72,
          "location": "New Zealand",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Hogarth",
          "ref": 1712,
          "date": 2016,
          "percent": 75,
          "location": "New Zealand",
          "rating": 3.25,
          "origin": "Domincan Republic"
      },
      {
          "company": "Hogarth",
          "ref": 1712,
          "date": 2016,
          "percent": 66,
          "location": "New Zealand",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Hoja Verde (Tulicorp)",
          "ref": 414,
          "date": 2009,
          "percent": 80,
          "location": "Ecuador",
          "rating": 2,
          "origin": "Ecuador"
      },
      {
          "company": "Hoja Verde (Tulicorp)",
          "ref": 414,
          "date": 2009,
          "percent": 80,
          "location": "Ecuador",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Hoja Verde (Tulicorp)",
          "ref": 414,
          "date": 2009,
          "percent": 72,
          "location": "Ecuador",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Hoja Verde (Tulicorp)",
          "ref": 414,
          "date": 2009,
          "percent": 58,
          "location": "Ecuador",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Hoja Verde (Tulicorp)",
          "ref": 414,
          "date": 2009,
          "percent": 58,
          "location": "Ecuador",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Holy Cacao",
          "ref": 1872,
          "date": 2016,
          "percent": 70,
          "location": "Israel",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Holy Cacao",
          "ref": 1466,
          "date": 2015,
          "percent": 70,
          "location": "Israel",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Holy Cacao",
          "ref": 1466,
          "date": 2015,
          "percent": 70,
          "location": "Israel",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Holy Cacao",
          "ref": 1466,
          "date": 2015,
          "percent": 70,
          "location": "Israel",
          "rating": 3.5,
          "origin": "Trinidad"
      },
      {
          "company": "Holy Cacao",
          "ref": 1466,
          "date": 2015,
          "percent": 70,
          "location": "Israel",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Holy Cacao",
          "ref": 431,
          "date": 2009,
          "percent": 70,
          "location": "Israel",
          "rating": 2.5,
          "origin": "Ivory Coast"
      },
      {
          "company": "Holy Cacao",
          "ref": 431,
          "date": 2009,
          "percent": 70,
          "location": "Israel",
          "rating": 2.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Holy Cacao",
          "ref": 431,
          "date": 2009,
          "percent": 70,
          "location": "Israel",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Holy Cacao",
          "ref": 431,
          "date": 2009,
          "percent": 75,
          "location": "Israel",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Honest",
          "ref": 1327,
          "date": 2014,
          "percent": 72,
          "location": "South Africa",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Hotel Chocolat",
          "ref": 1654,
          "date": 2015,
          "percent": 70,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "St. Lucia"
      },
      {
          "company": "Hotel Chocolat",
          "ref": 1030,
          "date": 2013,
          "percent": 70,
          "location": "U.K.",
          "rating": 4,
          "origin": "St. Lucia"
      },
      {
          "company": "Hotel Chocolat",
          "ref": 1113,
          "date": 2013,
          "percent": 100,
          "location": "U.K.",
          "rating": 1.75,
          "origin": "St. Lucia"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 1038,
          "date": 2013,
          "percent": 75,
          "location": "U.K.",
          "rating": 3,
          "origin": "Trinidad"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 1038,
          "date": 2013,
          "percent": 80,
          "location": "U.K.",
          "rating": 3.5,
          "origin": "Vietnam"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 1065,
          "date": 2013,
          "percent": 90,
          "location": "U.K.",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 1065,
          "date": 2013,
          "percent": 72,
          "location": "U.K.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 1065,
          "date": 2013,
          "percent": 82,
          "location": "U.K.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 1109,
          "date": 2013,
          "percent": 100,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 1113,
          "date": 2013,
          "percent": 100,
          "location": "U.K.",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 1113,
          "date": 2013,
          "percent": 100,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 809,
          "date": 2012,
          "percent": 66,
          "location": "U.K.",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 623,
          "date": 2011,
          "percent": 80,
          "location": "U.K.",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 623,
          "date": 2011,
          "percent": 65,
          "location": "U.K.",
          "rating": 3,
          "origin": "St. Lucia"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 623,
          "date": 2011,
          "percent": 65,
          "location": "U.K.",
          "rating": 3.25,
          "origin": "St. Lucia"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 552,
          "date": 2010,
          "percent": 70,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 552,
          "date": 2010,
          "percent": 70,
          "location": "U.K.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 600,
          "date": 2010,
          "percent": 70,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 245,
          "date": 2008,
          "percent": 72,
          "location": "U.K.",
          "rating": 3,
          "origin": "St. Lucia"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 296,
          "date": 2008,
          "percent": 80,
          "location": "U.K.",
          "rating": 2.5,
          "origin": "Uganda"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 296,
          "date": 2008,
          "percent": 75,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Tanzania"
      },
      {
          "company": "Hotel Chocolat (Coppeneur)",
          "ref": 300,
          "date": 2008,
          "percent": 72,
          "location": "U.K.",
          "rating": 3,
          "origin": "Sao Tome"
      },
      {
          "company": "Hummingbird",
          "ref": 1542,
          "date": 2015,
          "percent": 70,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Vietnam"
      },
      {
          "company": "Hummingbird",
          "ref": 1307,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 3,
          "origin": "Bolivia"
      },
      {
          "company": "Hummingbird",
          "ref": 1311,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 3,
          "origin": "Bolivia"
      },
      {
          "company": "Hummingbird",
          "ref": 1311,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 3,
          "origin": "Nicaragua"
      },
      {
          "company": "Hummingbird",
          "ref": 1311,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Hummingbird",
          "ref": 1387,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Hummingbird",
          "ref": 1097,
          "date": 2013,
          "percent": 70,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Hummingbird",
          "ref": 1097,
          "date": 2013,
          "percent": 70,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Idilio (Felchlin)",
          "ref": 1085,
          "date": 2013,
          "percent": 72,
          "location": "Switzerland",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Idilio (Felchlin)",
          "ref": 725,
          "date": 2011,
          "percent": 72,
          "location": "Switzerland",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Idilio (Felchlin)",
          "ref": 725,
          "date": 2011,
          "percent": 72,
          "location": "Switzerland",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Idilio (Felchlin)",
          "ref": 729,
          "date": 2011,
          "percent": 72,
          "location": "Switzerland",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Idilio (Felchlin)",
          "ref": 733,
          "date": 2011,
          "percent": 72,
          "location": "Switzerland",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Idilio (Felchlin)",
          "ref": 733,
          "date": 2011,
          "percent": 74,
          "location": "Switzerland",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Idilio (Felchlin)",
          "ref": 737,
          "date": 2011,
          "percent": 72,
          "location": "Switzerland",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Idilio (Felchlin)",
          "ref": 737,
          "date": 2011,
          "percent": 70,
          "location": "Switzerland",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Idilio (Felchlin)",
          "ref": 737,
          "date": 2011,
          "percent": 72,
          "location": "Switzerland",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Idilio (Felchlin)",
          "ref": 737,
          "date": 2011,
          "percent": 72,
          "location": "Switzerland",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Indah",
          "ref": 1788,
          "date": 2016,
          "percent": 61,
          "location": "India",
          "rating": 2.5,
          "origin": "India"
      },
      {
          "company": "Indaphoria",
          "ref": 821,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Indaphoria",
          "ref": 907,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Indi",
          "ref": 1255,
          "date": 2014,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Honduras"
      },
      {
          "company": "iQ Chocolate",
          "ref": 943,
          "date": 2012,
          "percent": 72,
          "location": "Scotland",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "iQ Chocolate",
          "ref": 943,
          "date": 2012,
          "percent": 72,
          "location": "Scotland",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Isidro",
          "ref": 1275,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Isidro",
          "ref": 1279,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 2.25,
          "origin": "Peru"
      },
      {
          "company": "Isidro",
          "ref": 1279,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Belize"
      },
      {
          "company": "Isidro",
          "ref": 1279,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Izard",
          "ref": 1542,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Belize"
      },
      {
          "company": "Izard",
          "ref": 1546,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Jacque Torres",
          "ref": 5,
          "date": 2006,
          "percent": 71,
          "location": "U.S.A.",
          "rating": 2,
          "origin": "Ghana"
      },
      {
          "company": "Jordis",
          "ref": 1534,
          "date": 2015,
          "percent": 63,
          "location": "Czech Republic",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Just Good Chocolate",
          "ref": 1375,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Belize"
      },
      {
          "company": "Just Good Chocolate",
          "ref": 1375,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Just Good Chocolate",
          "ref": 1375,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Peru"
      },
      {
          "company": "Kah Kow",
          "ref": 1061,
          "date": 2013,
          "percent": 70,
          "location": "Domincan Republic",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Kah Kow",
          "ref": 1069,
          "date": 2013,
          "percent": 82,
          "location": "Domincan Republic",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Kah Kow",
          "ref": 1069,
          "date": 2013,
          "percent": 55,
          "location": "Domincan Republic",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Kah Kow",
          "ref": 1073,
          "date": 2013,
          "percent": 62,
          "location": "Domincan Republic",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Kakao",
          "ref": 837,
          "date": 2012,
          "percent": 64,
          "location": "Germany",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Kakao",
          "ref": 387,
          "date": 2009,
          "percent": 65,
          "location": "Germany",
          "rating": 3.75,
          "origin": "Vanuatu"
      },
      {
          "company": "Kallari (Ecuatoriana)",
          "ref": 241,
          "date": 2008,
          "percent": 70,
          "location": "Ecuador",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Kallari (Ecuatoriana)",
          "ref": 241,
          "date": 2008,
          "percent": 70,
          "location": "Ecuador",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Kallari (Ecuatoriana)",
          "ref": 245,
          "date": 2008,
          "percent": 75,
          "location": "Ecuador",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Kallari (Ecuatoriana)",
          "ref": 248,
          "date": 2008,
          "percent": 85,
          "location": "Ecuador",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Kallari (Ecuatoriana)",
          "ref": 248,
          "date": 2008,
          "percent": 85,
          "location": "Ecuador",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Kallari (Ecuatoriana)",
          "ref": 248,
          "date": 2008,
          "percent": 85,
          "location": "Ecuador",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Kallari (Ecuatoriana)",
          "ref": 263,
          "date": 2008,
          "percent": 75,
          "location": "Ecuador",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Kallari (Ecuatoriana)",
          "ref": 269,
          "date": 2008,
          "percent": 85,
          "location": "Ecuador",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Kaoka (Cemoi)",
          "ref": 404,
          "date": 2009,
          "percent": 70,
          "location": "France",
          "rating": 2.75,
          "origin": ""
      },
      {
          "company": "Kaoka (Cemoi)",
          "ref": 423,
          "date": 2009,
          "percent": 80,
          "location": "France",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Kerchner",
          "ref": 1133,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Ki' Xocolatl",
          "ref": 431,
          "date": 2009,
          "percent": 72,
          "location": "Mexico",
          "rating": 2,
          "origin": "Mexico"
      },
      {
          "company": "Kiskadee",
          "ref": 1251,
          "date": 2014,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Kto",
          "ref": 1422,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Kto",
          "ref": 1422,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Kto",
          "ref": 1422,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Belize"
      },
      {
          "company": "Kto",
          "ref": 1422,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Kto",
          "ref": 1426,
          "date": 2014,
          "percent": 90,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Belize"
      },
      {
          "company": "Kto",
          "ref": 1426,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Kto",
          "ref": 1426,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "K'ul",
          "ref": 1840,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Haiti"
      },
      {
          "company": "K'ul",
          "ref": 1852,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "K'ul",
          "ref": 1852,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "K'ul",
          "ref": 1852,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Brazil"
      },
      {
          "company": "Kyya",
          "ref": 1359,
          "date": 2014,
          "percent": 72.5,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Uganda"
      },
      {
          "company": "Kyya",
          "ref": 1359,
          "date": 2014,
          "percent": 72.5,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Kyya",
          "ref": 1363,
          "date": 2014,
          "percent": 72.5,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Kyya",
          "ref": 1363,
          "date": 2014,
          "percent": 72.5,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "L.A. Burdick (Felchlin)",
          "ref": 891,
          "date": 2012,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "L.A. Burdick (Felchlin)",
          "ref": 891,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Brazil"
      },
      {
          "company": "L.A. Burdick (Felchlin)",
          "ref": 927,
          "date": 2012,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "L.A. Burdick (Felchlin)",
          "ref": 682,
          "date": 2011,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "L.A. Burdick (Felchlin)",
          "ref": 576,
          "date": 2010,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Grenada"
      },
      {
          "company": "L.A. Burdick (Felchlin)",
          "ref": 576,
          "date": 2010,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "L.A. Burdick (Felchlin)",
          "ref": 597,
          "date": 2010,
          "percent": 71,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "L.A. Burdick (Felchlin)",
          "ref": 431,
          "date": 2009,
          "percent": 64,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "L.A. Burdick (Felchlin)",
          "ref": 451,
          "date": 2009,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Bolivia"
      },
      {
          "company": "La Chocolaterie Nanairo",
          "ref": 1892,
          "date": 2016,
          "percent": 70,
          "location": "Japan",
          "rating": 2.25,
          "origin": "Peru"
      },
      {
          "company": "La Chocolaterie Nanairo",
          "ref": 1892,
          "date": 2016,
          "percent": 70,
          "location": "Japan",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "La Chocolaterie Nanairo",
          "ref": 1892,
          "date": 2016,
          "percent": 70,
          "location": "Japan",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "La Chocolaterie Nanairo",
          "ref": 1892,
          "date": 2016,
          "percent": 70,
          "location": "Japan",
          "rating": 3,
          "origin": "Belize"
      },
      {
          "company": "La Maison du Chocolat (Valrhona)",
          "ref": 1121,
          "date": 2013,
          "percent": 74,
          "location": "France",
          "rating": 2.75,
          "origin": "Africa, Carribean, C. Am."
      },
      {
          "company": "La Maison du Chocolat (Valrhona)",
          "ref": 1145,
          "date": 2013,
          "percent": 60,
          "location": "France",
          "rating": 3.25,
          "origin": "Tobago"
      },
      {
          "company": "La Maison du Chocolat (Valrhona)",
          "ref": 1189,
          "date": 2013,
          "percent": 56,
          "location": "France",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "La Maison du Chocolat (Valrhona)",
          "ref": 891,
          "date": 2012,
          "percent": 66,
          "location": "France",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "La Maison du Chocolat (Valrhona)",
          "ref": 741,
          "date": 2011,
          "percent": 68,
          "location": "France",
          "rating": 3.5,
          "origin": "Grenada"
      },
      {
          "company": "La Maison du Chocolat (Valrhona)",
          "ref": 346,
          "date": 2009,
          "percent": 68,
          "location": "France",
          "rating": 3.25,
          "origin": "Ghana"
      },
      {
          "company": "La Maison du Chocolat (Valrhona)",
          "ref": 346,
          "date": 2009,
          "percent": 69,
          "location": "France",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "La Maison du Chocolat (Valrhona)",
          "ref": 439,
          "date": 2009,
          "percent": 60,
          "location": "France",
          "rating": 3,
          "origin": ""
      },
      {
          "company": "La Maison du Chocolat (Valrhona)",
          "ref": 445,
          "date": 2009,
          "percent": 60,
          "location": "France",
          "rating": 3.75,
          "origin": ""
      },
      {
          "company": "La Maison du Chocolat (Valrhona)",
          "ref": 230,
          "date": 2008,
          "percent": 74,
          "location": "France",
          "rating": 3.5,
          "origin": "Ven., Indonesia, Ecuad."
      },
      {
          "company": "La Oroquidea",
          "ref": 721,
          "date": 2011,
          "percent": 72,
          "location": "Peru",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "La Pepa de Oro",
          "ref": 713,
          "date": 2011,
          "percent": 60,
          "location": "Ecuador",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Laia aka Chat-Noir",
          "ref": 1590,
          "date": 2015,
          "percent": 75,
          "location": "France",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Laia aka Chat-Noir",
          "ref": 1590,
          "date": 2015,
          "percent": 75,
          "location": "France",
          "rating": 2.75,
          "origin": "Vietnam"
      },
      {
          "company": "Laia aka Chat-Noir",
          "ref": 1590,
          "date": 2015,
          "percent": 75,
          "location": "France",
          "rating": 3,
          "origin": "Cuba"
      },
      {
          "company": "Laia aka Chat-Noir",
          "ref": 1590,
          "date": 2015,
          "percent": 75,
          "location": "France",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Laia aka Chat-Noir",
          "ref": 1594,
          "date": 2015,
          "percent": 75,
          "location": "France",
          "rating": 3,
          "origin": "Ivory Coast"
      },
      {
          "company": "Laia aka Chat-Noir",
          "ref": 1638,
          "date": 2015,
          "percent": 75,
          "location": "France",
          "rating": 3.5,
          "origin": "Sao Tome"
      },
      {
          "company": "Laia aka Chat-Noir",
          "ref": 1642,
          "date": 2015,
          "percent": 75,
          "location": "France",
          "rating": 3.25,
          "origin": "Brazil"
      },
      {
          "company": "Laia aka Chat-Noir",
          "ref": 1642,
          "date": 2015,
          "percent": 75,
          "location": "France",
          "rating": 3.75,
          "origin": "Vietnam"
      },
      {
          "company": "Laia aka Chat-Noir",
          "ref": 1434,
          "date": 2014,
          "percent": 70,
          "location": "France",
          "rating": 2.75,
          "origin": "Cuba"
      },
      {
          "company": "Laia aka Chat-Noir",
          "ref": 1438,
          "date": 2014,
          "percent": 68,
          "location": "France",
          "rating": 2.75,
          "origin": "Trinidad-Tobago"
      },
      {
          "company": "Lajedo do Ouro",
          "ref": 927,
          "date": 2012,
          "percent": 70,
          "location": "Brazil",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Lake Champlain (Callebaut)",
          "ref": 327,
          "date": 2009,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Tanzania"
      },
      {
          "company": "L'Amourette",
          "ref": 1784,
          "date": 2016,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Nicaragua"
      },
      {
          "company": "L'Amourette",
          "ref": 833,
          "date": 2012,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "L'Amourette",
          "ref": 833,
          "date": 2012,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "L'Amourette",
          "ref": 853,
          "date": 2012,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Peru, Ecuador, Venezuela"
      },
      {
          "company": "Letterpress",
          "ref": 1952,
          "date": 2017,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Honduras"
      },
      {
          "company": "Letterpress",
          "ref": 1952,
          "date": 2017,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Belize"
      },
      {
          "company": "Letterpress",
          "ref": 1728,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Liberia"
      },
      {
          "company": "Letterpress",
          "ref": 1562,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Bolivia"
      },
      {
          "company": "Letterpress",
          "ref": 1562,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Trinidad"
      },
      {
          "company": "Letterpress",
          "ref": 1566,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Costa Rica"
      },
      {
          "company": "Letterpress",
          "ref": 1566,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Domincan Republic"
      },
      {
          "company": "Letterpress",
          "ref": 1566,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Tanzania"
      },
      {
          "company": "Letterpress",
          "ref": 1371,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Levy",
          "ref": 1231,
          "date": 2014,
          "percent": 71,
          "location": "Finland",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Lilla",
          "ref": 1856,
          "date": 2016,
          "percent": 70,
          "location": "Finland",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Lillie Belle",
          "ref": 855,
          "date": 2012,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Lillie Belle",
          "ref": 903,
          "date": 2012,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Bolivia"
      },
      {
          "company": "Lillie Belle",
          "ref": 903,
          "date": 2012,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Lillie Belle",
          "ref": 947,
          "date": 2012,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela, Dom. Rep."
      },
      {
          "company": "Lillie Belle",
          "ref": 947,
          "date": 2012,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Lillie Belle",
          "ref": 947,
          "date": 2012,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Bolivia"
      },
      {
          "company": "Lindt & Sprungli",
          "ref": 157,
          "date": 2007,
          "percent": 85,
          "location": "Switzerland",
          "rating": 3,
          "origin": ""
      },
      {
          "company": "Loiza",
          "ref": 1049,
          "date": 2013,
          "percent": 65,
          "location": "Puerto Rico",
          "rating": 2.5,
          "origin": "Puerto Rico"
      },
      {
          "company": "Lonohana",
          "ref": 1383,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Hawaii"
      },
      {
          "company": "Lonohana",
          "ref": 1395,
          "date": 2014,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Hawaii"
      },
      {
          "company": "Lonohana",
          "ref": 1395,
          "date": 2014,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Hawaii"
      },
      {
          "company": "Lonohana",
          "ref": 1093,
          "date": 2013,
          "percent": 71,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Hawaii"
      },
      {
          "company": "Lonohana",
          "ref": 1097,
          "date": 2013,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Hawaii"
      },
      {
          "company": "Lonohana",
          "ref": 1097,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Hawaii"
      },
      {
          "company": "Love Bar",
          "ref": 1502,
          "date": 2015,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2,
          "origin": "Nicaragua"
      },
      {
          "company": "Luker",
          "ref": 552,
          "date": 2010,
          "percent": 46,
          "location": "Colombia",
          "rating": 2.75,
          "origin": "Colombia, Ecuador"
      },
      {
          "company": "Luker",
          "ref": 552,
          "date": 2010,
          "percent": 60,
          "location": "Colombia",
          "rating": 3,
          "origin": "Colombia, Ecuador"
      },
      {
          "company": "Luker",
          "ref": 552,
          "date": 2010,
          "percent": 58,
          "location": "Colombia",
          "rating": 3,
          "origin": "Colombia, Ecuador"
      },
      {
          "company": "Luker",
          "ref": 552,
          "date": 2010,
          "percent": 65,
          "location": "Colombia",
          "rating": 3.5,
          "origin": "Colombia"
      },
      {
          "company": "Machu Picchu Trading Co.",
          "ref": 721,
          "date": 2011,
          "percent": 70,
          "location": "Peru",
          "rating": 1.5,
          "origin": "Peru"
      },
      {
          "company": "Machu Picchu Trading Co.",
          "ref": 552,
          "date": 2010,
          "percent": 55,
          "location": "Peru",
          "rating": 2.25,
          "origin": "Peru"
      },
      {
          "company": "Madecasse (Cinagra)",
          "ref": 284,
          "date": 2008,
          "percent": 67,
          "location": "Madagascar",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Madecasse (Cinagra)",
          "ref": 284,
          "date": 2008,
          "percent": 70,
          "location": "Madagascar",
          "rating": 3.75,
          "origin": "Madagascar"
      },
      {
          "company": "Madecasse (Cinagra)",
          "ref": 284,
          "date": 2008,
          "percent": 63,
          "location": "Madagascar",
          "rating": 4,
          "origin": "Madagascar"
      },
      {
          "company": "Madecasse (Cinagra)",
          "ref": 288,
          "date": 2008,
          "percent": 75,
          "location": "Madagascar",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Madre",
          "ref": 1940,
          "date": 2017,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Solomon Islands"
      },
      {
          "company": "Madre",
          "ref": 1085,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Puerto Rico"
      },
      {
          "company": "Madre",
          "ref": 1085,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Madre",
          "ref": 1089,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Hawaii"
      },
      {
          "company": "Madre",
          "ref": 1089,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Mexico"
      },
      {
          "company": "Madre",
          "ref": 991,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Hawaii"
      },
      {
          "company": "Madre",
          "ref": 995,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Hawaii"
      },
      {
          "company": "Madre",
          "ref": 995,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Hawaii"
      },
      {
          "company": "Madre",
          "ref": 672,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Madre",
          "ref": 693,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Costa Rica"
      },
      {
          "company": "Madre",
          "ref": 607,
          "date": 2010,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Mexico"
      },
      {
          "company": "Maglio",
          "ref": 300,
          "date": 2008,
          "percent": 75,
          "location": "Italy",
          "rating": 2,
          "origin": "Tanzania"
      },
      {
          "company": "Maglio",
          "ref": 308,
          "date": 2008,
          "percent": 70,
          "location": "Italy",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Maglio",
          "ref": 308,
          "date": 2008,
          "percent": 70,
          "location": "Italy",
          "rating": 3.25,
          "origin": "Cuba"
      },
      {
          "company": "Maglio",
          "ref": 308,
          "date": 2008,
          "percent": 70,
          "location": "Italy",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Majani",
          "ref": 531,
          "date": 2010,
          "percent": 70,
          "location": "Italy",
          "rating": 2,
          "origin": "Ecuador"
      },
      {
          "company": "Malagasy (Chocolaterie Robert)",
          "ref": 184,
          "date": 2007,
          "percent": 75,
          "location": "Madagascar",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Malagasy (Chocolaterie Robert)",
          "ref": 184,
          "date": 2007,
          "percent": 73,
          "location": "Madagascar",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Malagos",
          "ref": 1121,
          "date": 2013,
          "percent": 65,
          "location": "Philippines",
          "rating": 3.5,
          "origin": "Philippines"
      },
      {
          "company": "Malie Kai (Guittard)",
          "ref": 502,
          "date": 2010,
          "percent": 55,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Hawaii"
      },
      {
          "company": "Malie Kai (Guittard)",
          "ref": 311,
          "date": 2009,
          "percent": 55,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Hawaii"
      },
      {
          "company": "Malmo",
          "ref": 1856,
          "date": 2016,
          "percent": 70,
          "location": "Sweden",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Mana",
          "ref": 1446,
          "date": 2015,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Mana",
          "ref": 1219,
          "date": 2014,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Mana",
          "ref": 1219,
          "date": 2014,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Mana",
          "ref": 821,
          "date": 2012,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Manifesto Cacao",
          "ref": 1331,
          "date": 2014,
          "percent": 70,
          "location": "Colombia",
          "rating": 2.75,
          "origin": "Colombia"
      },
      {
          "company": "Manoa",
          "ref": 1522,
          "date": 2015,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Manoa",
          "ref": 1522,
          "date": 2015,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Costa Rica"
      },
      {
          "company": "Manoa",
          "ref": 1089,
          "date": 2013,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Hawaii"
      },
      {
          "company": "Manoa",
          "ref": 1003,
          "date": 2012,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Liberia"
      },
      {
          "company": "Manoa",
          "ref": 1007,
          "date": 2012,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Hawaii"
      },
      {
          "company": "Manoa",
          "ref": 1007,
          "date": 2012,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Manoa",
          "ref": 1007,
          "date": 2012,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Hawaii"
      },
      {
          "company": "Manufaktura Czekolady",
          "ref": 1844,
          "date": 2016,
          "percent": 70,
          "location": "Poland",
          "rating": 3.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Manufaktura Czekolady",
          "ref": 1848,
          "date": 2016,
          "percent": 70,
          "location": "Poland",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Manufaktura Czekolady",
          "ref": 1255,
          "date": 2014,
          "percent": 70,
          "location": "Poland",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Manufaktura Czekolady",
          "ref": 1279,
          "date": 2014,
          "percent": 85,
          "location": "Poland",
          "rating": 3.5,
          "origin": "Colombia"
      },
      {
          "company": "Manufaktura Czekolady",
          "ref": 871,
          "date": 2012,
          "percent": 70,
          "location": "Poland",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Manufaktura Czekolady",
          "ref": 871,
          "date": 2012,
          "percent": 70,
          "location": "Poland",
          "rating": 3.5,
          "origin": "Ghana"
      },
      {
          "company": "Manufaktura Czekolady",
          "ref": 875,
          "date": 2012,
          "percent": 70,
          "location": "Poland",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Map Chocolate",
          "ref": 1896,
          "date": 2016,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Vietnam"
      },
      {
          "company": "Map Chocolate",
          "ref": 1474,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Map Chocolate",
          "ref": 1474,
          "date": 2015,
          "percent": 62,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Map Chocolate",
          "ref": 1478,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Map Chocolate",
          "ref": 1606,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Trinidad"
      },
      {
          "company": "Map Chocolate",
          "ref": 1606,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Nicaragua"
      },
      {
          "company": "Map Chocolate",
          "ref": 1606,
          "date": 2015,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Map Chocolate",
          "ref": 1610,
          "date": 2015,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Colombia"
      },
      {
          "company": "Map Chocolate",
          "ref": 1610,
          "date": 2015,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Tanzania"
      },
      {
          "company": "Map Chocolate",
          "ref": 1634,
          "date": 2015,
          "percent": 78,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Honduras"
      },
      {
          "company": "Marana",
          "ref": 1872,
          "date": 2016,
          "percent": 70,
          "location": "Peru",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Marana",
          "ref": 1884,
          "date": 2016,
          "percent": 70,
          "location": "Peru",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Marana",
          "ref": 1884,
          "date": 2016,
          "percent": 70,
          "location": "Peru",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Marigold's Finest",
          "ref": 1808,
          "date": 2016,
          "percent": 75,
          "location": "Canada",
          "rating": 3.25,
          "origin": ""
      },
      {
          "company": "Marou",
          "ref": 1650,
          "date": 2015,
          "percent": 85,
          "location": "Vietnam",
          "rating": 3.25,
          "origin": "Vietnam"
      },
      {
          "company": "Marou",
          "ref": 1650,
          "date": 2015,
          "percent": 68,
          "location": "Vietnam",
          "rating": 3.5,
          "origin": "Vietnam"
      },
      {
          "company": "Marou",
          "ref": 1650,
          "date": 2015,
          "percent": 70,
          "location": "Vietnam",
          "rating": 3.75,
          "origin": "Vietnam"
      },
      {
          "company": "Marou",
          "ref": 1149,
          "date": 2013,
          "percent": 75,
          "location": "Vietnam",
          "rating": 3.5,
          "origin": "Vietnam"
      },
      {
          "company": "Marou",
          "ref": 845,
          "date": 2012,
          "percent": 76,
          "location": "Vietnam",
          "rating": 3.5,
          "origin": "Vietnam"
      },
      {
          "company": "Marou",
          "ref": 845,
          "date": 2012,
          "percent": 72,
          "location": "Vietnam",
          "rating": 3.5,
          "origin": "Vietnam"
      },
      {
          "company": "Marou",
          "ref": 845,
          "date": 2012,
          "percent": 70,
          "location": "Vietnam",
          "rating": 3.5,
          "origin": "Vietnam"
      },
      {
          "company": "Marou",
          "ref": 849,
          "date": 2012,
          "percent": 78,
          "location": "Vietnam",
          "rating": 3.5,
          "origin": "Vietnam"
      },
      {
          "company": "Marou",
          "ref": 895,
          "date": 2012,
          "percent": 80,
          "location": "Vietnam",
          "rating": 3,
          "origin": "Vietnam"
      },
      {
          "company": "Marou",
          "ref": 955,
          "date": 2012,
          "percent": 74,
          "location": "Vietnam",
          "rating": 3.5,
          "origin": "Vietnam"
      },
      {
          "company": "Mars",
          "ref": 537,
          "date": 2010,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Costa Rica"
      },
      {
          "company": "Mars",
          "ref": 544,
          "date": 2010,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ivory Coast"
      },
      {
          "company": "Mars",
          "ref": 544,
          "date": 2010,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Nigeria"
      },
      {
          "company": "Mars",
          "ref": 544,
          "date": 2010,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ghana"
      },
      {
          "company": "Marsatta",
          "ref": 1189,
          "date": 2013,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 2.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Marsatta",
          "ref": 1189,
          "date": 2013,
          "percent": 89,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Martin Mayer",
          "ref": 1836,
          "date": 2016,
          "percent": 76,
          "location": "Austria",
          "rating": 2.75,
          "origin": "Bolivia"
      },
      {
          "company": "Martin Mayer",
          "ref": 1836,
          "date": 2016,
          "percent": 82,
          "location": "Austria",
          "rating": 3,
          "origin": "Haiti"
      },
      {
          "company": "Martin Mayer",
          "ref": 1836,
          "date": 2016,
          "percent": 74,
          "location": "Austria",
          "rating": 3.25,
          "origin": "Colombia"
      },
      {
          "company": "Mast Brothers",
          "ref": 1450,
          "date": 2015,
          "percent": 76,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Guatemala"
      },
      {
          "company": "Mast Brothers",
          "ref": 1450,
          "date": 2015,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Tanzania"
      },
      {
          "company": "Mast Brothers",
          "ref": 1359,
          "date": 2014,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Peru, Belize"
      },
      {
          "company": "Mast Brothers",
          "ref": 959,
          "date": 2012,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Peru, Mad., Dom. Rep."
      },
      {
          "company": "Mast Brothers",
          "ref": 999,
          "date": 2012,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": ""
      },
      {
          "company": "Mast Brothers",
          "ref": 999,
          "date": 2012,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Mast Brothers",
          "ref": 672,
          "date": 2011,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": ""
      },
      {
          "company": "Mast Brothers",
          "ref": 701,
          "date": 2011,
          "percent": 76,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Mast Brothers",
          "ref": 709,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Mast Brothers",
          "ref": 713,
          "date": 2011,
          "percent": 81,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Mast Brothers",
          "ref": 773,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Belize"
      },
      {
          "company": "Mast Brothers",
          "ref": 777,
          "date": 2011,
          "percent": 71,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Mast Brothers",
          "ref": 777,
          "date": 2011,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Mast Brothers",
          "ref": 777,
          "date": 2011,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Mast Brothers",
          "ref": 777,
          "date": 2011,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Mast Brothers",
          "ref": 572,
          "date": 2010,
          "percent": 81,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Mast Brothers",
          "ref": 572,
          "date": 2010,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Mast Brothers",
          "ref": 572,
          "date": 2010,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Matale",
          "ref": 1177,
          "date": 2013,
          "percent": 72,
          "location": "Australia",
          "rating": 3.5,
          "origin": "Vanuatu"
      },
      {
          "company": "Matale",
          "ref": 1177,
          "date": 2013,
          "percent": 68,
          "location": "Australia",
          "rating": 4,
          "origin": "Madagascar"
      },
      {
          "company": "Matale",
          "ref": 1177,
          "date": 2013,
          "percent": 74,
          "location": "Australia",
          "rating": 4,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Matale",
          "ref": 1181,
          "date": 2013,
          "percent": 70,
          "location": "Australia",
          "rating": 3.75,
          "origin": "PNG, Vanuatu, Mad"
      },
      {
          "company": "Maverick",
          "ref": 1367,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Belize"
      },
      {
          "company": "Maverick",
          "ref": 1367,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Maverick",
          "ref": 1430,
          "date": 2014,
          "percent": 82,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Maverick",
          "ref": 1430,
          "date": 2014,
          "percent": 63,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Mayacama",
          "ref": 1728,
          "date": 2016,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Domincan Republic"
      },
      {
          "company": "Meadowlands",
          "ref": 1287,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Bolivia"
      },
      {
          "company": "Meadowlands",
          "ref": 1287,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Meadowlands",
          "ref": 1287,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Belize"
      },
      {
          "company": "Meadowlands",
          "ref": 1291,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Nicaragua"
      },
      {
          "company": "Meadowlands",
          "ref": 1291,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Menakao (aka Cinagra)",
          "ref": 837,
          "date": 2012,
          "percent": 80,
          "location": "Madagascar",
          "rating": 2.5,
          "origin": "Madagascar"
      },
      {
          "company": "Menakao (aka Cinagra)",
          "ref": 841,
          "date": 2012,
          "percent": 72,
          "location": "Madagascar",
          "rating": 2.5,
          "origin": "Madagascar"
      },
      {
          "company": "Mesocacao",
          "ref": 1494,
          "date": 2015,
          "percent": 80,
          "location": "Honduras",
          "rating": 2.75,
          "origin": "El Salvador"
      },
      {
          "company": "Mesocacao",
          "ref": 1494,
          "date": 2015,
          "percent": 70,
          "location": "Honduras",
          "rating": 3,
          "origin": "El Salvador"
      },
      {
          "company": "Mesocacao",
          "ref": 1347,
          "date": 2014,
          "percent": 80,
          "location": "Honduras",
          "rating": 3.25,
          "origin": "Honduras"
      },
      {
          "company": "Mesocacao",
          "ref": 1347,
          "date": 2014,
          "percent": 70,
          "location": "Honduras",
          "rating": 3.5,
          "origin": "Honduras"
      },
      {
          "company": "Mesocacao",
          "ref": 1351,
          "date": 2014,
          "percent": 70,
          "location": "Honduras",
          "rating": 3.25,
          "origin": "Nicaragua"
      },
      {
          "company": "Mesocacao",
          "ref": 1351,
          "date": 2014,
          "percent": 80,
          "location": "Honduras",
          "rating": 3.5,
          "origin": "Nicaragua"
      },
      {
          "company": "Metiisto",
          "ref": 1267,
          "date": 2014,
          "percent": 70,
          "location": "Sweden",
          "rating": 3,
          "origin": "Brazil"
      },
      {
          "company": "Metiisto",
          "ref": 1267,
          "date": 2014,
          "percent": 72,
          "location": "Sweden",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Metropolitan",
          "ref": 1688,
          "date": 2015,
          "percent": 70,
          "location": "Amsterdam",
          "rating": 3.5,
          "origin": "South America"
      },
      {
          "company": "Michel Cluizel",
          "ref": 963,
          "date": 2012,
          "percent": 66,
          "location": "France",
          "rating": 3.75,
          "origin": "Mexico"
      },
      {
          "company": "Michel Cluizel",
          "ref": 117,
          "date": 2007,
          "percent": 66,
          "location": "France",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Michel Cluizel",
          "ref": 135,
          "date": 2007,
          "percent": 67,
          "location": "France",
          "rating": 3.5,
          "origin": "Sao Tome"
      },
      {
          "company": "Michel Cluizel",
          "ref": 24,
          "date": 2006,
          "percent": 60,
          "location": "France",
          "rating": 2,
          "origin": ""
      },
      {
          "company": "Michel Cluizel",
          "ref": 24,
          "date": 2006,
          "percent": 85,
          "location": "France",
          "rating": 2,
          "origin": ""
      },
      {
          "company": "Michel Cluizel",
          "ref": 24,
          "date": 2006,
          "percent": 70,
          "location": "France",
          "rating": 3,
          "origin": "Sao Tome"
      },
      {
          "company": "Michel Cluizel",
          "ref": 24,
          "date": 2006,
          "percent": 67,
          "location": "France",
          "rating": 4,
          "origin": "Dominican Republic"
      },
      {
          "company": "Michel Cluizel",
          "ref": 24,
          "date": 2006,
          "percent": 65,
          "location": "France",
          "rating": 4,
          "origin": "Madagascar"
      },
      {
          "company": "Michel Cluizel",
          "ref": 24,
          "date": 2006,
          "percent": 64,
          "location": "France",
          "rating": 4,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Michel Cluizel",
          "ref": 81,
          "date": 2006,
          "percent": 99,
          "location": "France",
          "rating": 2,
          "origin": ""
      },
      {
          "company": "Middlebury",
          "ref": 1490,
          "date": 2015,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Belize"
      },
      {
          "company": "Middlebury",
          "ref": 1490,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Trinidad"
      },
      {
          "company": "Middlebury",
          "ref": 1490,
          "date": 2015,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Middlebury",
          "ref": 1490,
          "date": 2015,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Middlebury",
          "ref": 1538,
          "date": 2015,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Tanzania"
      },
      {
          "company": "Middlebury",
          "ref": 1538,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Nicaragua"
      },
      {
          "company": "Middlebury",
          "ref": 1117,
          "date": 2013,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Middlebury",
          "ref": 1117,
          "date": 2013,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Belize"
      },
      {
          "company": "Middlebury",
          "ref": 887,
          "date": 2012,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 1.5,
          "origin": ""
      },
      {
          "company": "Middlebury",
          "ref": 887,
          "date": 2012,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2,
          "origin": "Bolivia"
      },
      {
          "company": "Middlebury",
          "ref": 887,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Indonesia"
      },
      {
          "company": "Millcreek Cacao Roasters",
          "ref": 1073,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Millcreek Cacao Roasters",
          "ref": 825,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Mindo",
          "ref": 607,
          "date": 2010,
          "percent": 67,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Mindo",
          "ref": 607,
          "date": 2010,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Minimal",
          "ref": 1920,
          "date": 2016,
          "percent": 70,
          "location": "Japan",
          "rating": 3.5,
          "origin": "Haiti"
      },
      {
          "company": "Mission",
          "ref": 1880,
          "date": 2016,
          "percent": 75,
          "location": "Brazil",
          "rating": 3.75,
          "origin": "Brazil"
      },
      {
          "company": "Mission",
          "ref": 1626,
          "date": 2015,
          "percent": 70,
          "location": "Brazil",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Mita",
          "ref": 955,
          "date": 2012,
          "percent": 65,
          "location": "Colombia",
          "rating": 2.5,
          "origin": "Colombia"
      },
      {
          "company": "Moho",
          "ref": 1026,
          "date": 2013,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Belize"
      },
      {
          "company": "Moho",
          "ref": 1030,
          "date": 2013,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Belize"
      },
      {
          "company": "Moho",
          "ref": 607,
          "date": 2010,
          "percent": 67,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Belize"
      },
      {
          "company": "Molucca",
          "ref": 1614,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Domincan Republic"
      },
      {
          "company": "Molucca",
          "ref": 1618,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Indonesia"
      },
      {
          "company": "Molucca",
          "ref": 1618,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Momotombo",
          "ref": 661,
          "date": 2011,
          "percent": 70,
          "location": "Nicaragua",
          "rating": 2.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Momotombo",
          "ref": 661,
          "date": 2011,
          "percent": 70,
          "location": "Nicaragua",
          "rating": 2.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Momotombo",
          "ref": 772,
          "date": 2011,
          "percent": 70,
          "location": "Nicaragua",
          "rating": 3.25,
          "origin": "Nicaragua"
      },
      {
          "company": "Monarque",
          "ref": 1812,
          "date": 2016,
          "percent": 72,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Monsieur Truffe",
          "ref": 1391,
          "date": 2014,
          "percent": 70,
          "location": "Australia",
          "rating": 3.25,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Montecristi",
          "ref": 1654,
          "date": 2015,
          "percent": 70,
          "location": "Ecuador",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Montecristi",
          "ref": 1654,
          "date": 2015,
          "percent": 63,
          "location": "Ecuador",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Montecristi",
          "ref": 1658,
          "date": 2015,
          "percent": 85,
          "location": "Ecuador",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Muchomas (Mesocacao)",
          "ref": 1462,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Nicaragua"
      },
      {
          "company": "Muchomas (Mesocacao)",
          "ref": 1462,
          "date": 2015,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Nicaragua"
      },
      {
          "company": "Mutari",
          "ref": 1896,
          "date": 2016,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Tanzania"
      },
      {
          "company": "Mutari",
          "ref": 1896,
          "date": 2016,
          "percent": 71,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Domincan Republic"
      },
      {
          "company": "Mutari",
          "ref": 1900,
          "date": 2016,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Mutari",
          "ref": 1900,
          "date": 2016,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Vietnam"
      },
      {
          "company": "Nahua",
          "ref": 1049,
          "date": 2013,
          "percent": 58,
          "location": "Costa Rica",
          "rating": 2.5,
          "origin": "Costa Rica"
      },
      {
          "company": "Nahua",
          "ref": 1049,
          "date": 2013,
          "percent": 70,
          "location": "Costa Rica",
          "rating": 3,
          "origin": "Costa Rica"
      },
      {
          "company": "Naive",
          "ref": 1046,
          "date": 2013,
          "percent": 70,
          "location": "Lithuania",
          "rating": 3.75,
          "origin": "Trinidad, Tobago"
      },
      {
          "company": "Naive",
          "ref": 1133,
          "date": 2013,
          "percent": 78,
          "location": "Lithuania",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Naive",
          "ref": 867,
          "date": 2012,
          "percent": 71,
          "location": "Lithuania",
          "rating": 2.5,
          "origin": "Grenada"
      },
      {
          "company": "Na�ve",
          "ref": 1379,
          "date": 2014,
          "percent": 70,
          "location": "Lithuania",
          "rating": 3.25,
          "origin": "Nicaragua"
      },
      {
          "company": "Na�ve",
          "ref": 1399,
          "date": 2014,
          "percent": 75,
          "location": "Lithuania",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Na�ve",
          "ref": 1399,
          "date": 2014,
          "percent": 70,
          "location": "Lithuania",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Nanea",
          "ref": 1007,
          "date": 2013,
          "percent": 85,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Hawaii"
      },
      {
          "company": "Nathan Miller",
          "ref": 1403,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 2.25,
          "origin": "Peru"
      },
      {
          "company": "Nathan Miller",
          "ref": 1403,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Nathan Miller",
          "ref": 1403,
          "date": 2014,
          "percent": 73.5,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Madagascar"
      },
      {
          "company": "Nathan Miller",
          "ref": 1403,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ghana"
      },
      {
          "company": "Neuhaus (Callebaut)",
          "ref": 531,
          "date": 2010,
          "percent": 70,
          "location": "Belgium",
          "rating": 2.5,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Neuhaus (Callebaut)",
          "ref": 230,
          "date": 2008,
          "percent": 67,
          "location": "Belgium",
          "rating": 3.75,
          "origin": "Trinidad"
      },
      {
          "company": "Neuhaus (Callebaut)",
          "ref": 135,
          "date": 2007,
          "percent": 73,
          "location": "Belgium",
          "rating": 1,
          "origin": ""
      },
      {
          "company": "Neuhaus (Callebaut)",
          "ref": 15,
          "date": 2006,
          "percent": 73,
          "location": "Belgium",
          "rating": 2,
          "origin": "West Africa"
      },
      {
          "company": "Neuhaus (Callebaut)",
          "ref": 15,
          "date": 2006,
          "percent": 75,
          "location": "Belgium",
          "rating": 2.75,
          "origin": "Sao Tome"
      },
      {
          "company": "Neuhaus (Callebaut)",
          "ref": 24,
          "date": 2006,
          "percent": 71,
          "location": "Belgium",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Nibble",
          "ref": 1526,
          "date": 2015,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 2.25,
          "origin": "Venezuela"
      },
      {
          "company": "Nibble",
          "ref": 1526,
          "date": 2015,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Nibble",
          "ref": 1526,
          "date": 2015,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Nibble",
          "ref": 1526,
          "date": 2015,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Night Owl",
          "ref": 1022,
          "date": 2013,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Night Owl",
          "ref": 1022,
          "date": 2013,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Noble Bean aka Jerjobo",
          "ref": 1295,
          "date": 2014,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ghana"
      },
      {
          "company": "Noble Bean aka Jerjobo",
          "ref": 1299,
          "date": 2014,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Belize"
      },
      {
          "company": "Noble Bean aka Jerjobo",
          "ref": 1299,
          "date": 2014,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Noir d' Ebine",
          "ref": 837,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Noir d' Ebine",
          "ref": 841,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Nova Monda",
          "ref": 931,
          "date": 2012,
          "percent": 70,
          "location": "Nicaragua",
          "rating": 3,
          "origin": "Nicaragua"
      },
      {
          "company": "Nova Monda",
          "ref": 935,
          "date": 2012,
          "percent": 75,
          "location": "Niacragua",
          "rating": 2.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Nova Monda",
          "ref": 935,
          "date": 2012,
          "percent": 80,
          "location": "Nicaragua",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Nuance",
          "ref": 1454,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Ghana"
      },
      {
          "company": "Nuance",
          "ref": 1458,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Nuance",
          "ref": 1458,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Nuance",
          "ref": 1458,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Nuance",
          "ref": 1470,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Nugali",
          "ref": 1876,
          "date": 2016,
          "percent": 70,
          "location": "Brazil",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Oakland Chocolate Co.",
          "ref": 478,
          "date": 2010,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Jamaica"
      },
      {
          "company": "Obolo",
          "ref": 1638,
          "date": 2015,
          "percent": 70,
          "location": "Chile",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Obolo",
          "ref": 1638,
          "date": 2015,
          "percent": 70,
          "location": "Chile",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Ocelot",
          "ref": 1558,
          "date": 2015,
          "percent": 70,
          "location": "Scotland",
          "rating": 3.75,
          "origin": "Congo"
      },
      {
          "company": "Ocelot",
          "ref": 1558,
          "date": 2015,
          "percent": 75,
          "location": "Scotland",
          "rating": 4,
          "origin": "Peru"
      },
      {
          "company": "Ocho",
          "ref": 1760,
          "date": 2016,
          "percent": 100,
          "location": "New Zealand",
          "rating": 2.75,
          "origin": "Samoa"
      },
      {
          "company": "Ocho",
          "ref": 1760,
          "date": 2016,
          "percent": 70,
          "location": "New Zealand",
          "rating": 3.5,
          "origin": "Samoa"
      },
      {
          "company": "Ocho",
          "ref": 1411,
          "date": 2014,
          "percent": 66,
          "location": "New Zealand",
          "rating": 2.75,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Ocho",
          "ref": 1411,
          "date": 2014,
          "percent": 70,
          "location": "New Zealand",
          "rating": 3,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Ocho",
          "ref": 1411,
          "date": 2014,
          "percent": 88,
          "location": "New Zealand",
          "rating": 3.25,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Ocho",
          "ref": 1411,
          "date": 2014,
          "percent": 74,
          "location": "New Zealand",
          "rating": 3.5,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Ohiyo",
          "ref": 1594,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Trinidad"
      },
      {
          "company": "Ohiyo",
          "ref": 1598,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Tanzania"
      },
      {
          "company": "Oialla by Bojessen (Malmo)",
          "ref": 761,
          "date": 2011,
          "percent": 70,
          "location": "Germany",
          "rating": 3.5,
          "origin": "Bolivia"
      },
      {
          "company": "Olive and Sinclair",
          "ref": 486,
          "date": 2010,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Olive and Sinclair",
          "ref": 486,
          "date": 2010,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ghana"
      },
      {
          "company": "Olive and Sinclair",
          "ref": 457,
          "date": 2009,
          "percent": 67,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Ghana, Domin. Rep"
      },
      {
          "company": "Olive and Sinclair",
          "ref": 457,
          "date": 2009,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ghana, Domin. Rep"
      },
      {
          "company": "Olivia",
          "ref": 688,
          "date": 2011,
          "percent": 76,
          "location": "Canada",
          "rating": 2,
          "origin": "Carribean"
      },
      {
          "company": "Olivia",
          "ref": 688,
          "date": 2011,
          "percent": 76,
          "location": "Canada",
          "rating": 2.75,
          "origin": "Carribean"
      },
      {
          "company": "Olivia",
          "ref": 688,
          "date": 2011,
          "percent": 85,
          "location": "Canada",
          "rating": 2.75,
          "origin": "Carribean"
      },
      {
          "company": "Olivia",
          "ref": 688,
          "date": 2011,
          "percent": 85,
          "location": "Canada",
          "rating": 3,
          "origin": "Carribean"
      },
      {
          "company": "Omanhene",
          "ref": 693,
          "date": 2011,
          "percent": 80,
          "location": "Ghana",
          "rating": 2.75,
          "origin": "Ghana"
      },
      {
          "company": "Omnom",
          "ref": 1816,
          "date": 2016,
          "percent": 70,
          "location": "Iceland",
          "rating": 3.75,
          "origin": "Tanzania"
      },
      {
          "company": "Omnom",
          "ref": 1247,
          "date": 2014,
          "percent": 70,
          "location": "Iceland",
          "rating": 3,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Omnom",
          "ref": 1247,
          "date": 2014,
          "percent": 66,
          "location": "Iceland",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "organicfair",
          "ref": 1161,
          "date": 2013,
          "percent": 74,
          "location": "Canada",
          "rating": 2.75,
          "origin": "Belize"
      },
      {
          "company": "organicfair",
          "ref": 1165,
          "date": 2013,
          "percent": 72,
          "location": "Canada",
          "rating": 2.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "organicfair",
          "ref": 1165,
          "date": 2013,
          "percent": 72,
          "location": "Canada",
          "rating": 2.75,
          "origin": "Nicaragua"
      },
      {
          "company": "organicfair",
          "ref": 1165,
          "date": 2013,
          "percent": 72,
          "location": "Canada",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "organicfair",
          "ref": 1165,
          "date": 2013,
          "percent": 72,
          "location": "Canada",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Original Beans (Felchlin)",
          "ref": 1438,
          "date": 2014,
          "percent": 68,
          "location": "Switzerland",
          "rating": 2.75,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Original Beans (Felchlin)",
          "ref": 1442,
          "date": 2014,
          "percent": 80,
          "location": "Switzerland",
          "rating": 3.25,
          "origin": ""
      },
      {
          "company": "Original Beans (Felchlin)",
          "ref": 733,
          "date": 2011,
          "percent": 66,
          "location": "Switzerland",
          "rating": 3.75,
          "origin": "Bolivia"
      },
      {
          "company": "Original Beans (Felchlin)",
          "ref": 331,
          "date": 2009,
          "percent": 70,
          "location": "Switzerland",
          "rating": 3,
          "origin": "Congo"
      },
      {
          "company": "Original Beans (Felchlin)",
          "ref": 341,
          "date": 2009,
          "percent": 75,
          "location": "Switzerland",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Original Beans (Felchlin)",
          "ref": 341,
          "date": 2009,
          "percent": 68,
          "location": "Switzerland",
          "rating": 3.25,
          "origin": "Bolivia"
      },
      {
          "company": "Original Hawaiin Chocolate Factory",
          "ref": 316,
          "date": 2009,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Hawaii"
      },
      {
          "company": "Original Hawaiin Chocolate Factory",
          "ref": 24,
          "date": 2006,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Hawaii"
      },
      {
          "company": "Orquidea",
          "ref": 859,
          "date": 2012,
          "percent": 65,
          "location": "Peru",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Orquidea",
          "ref": 859,
          "date": 2012,
          "percent": 72,
          "location": "Peru",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Pacari",
          "ref": 1848,
          "date": 2016,
          "percent": 70,
          "location": "Ecuador",
          "rating": 4,
          "origin": "Colombia"
      },
      {
          "company": "Pacari",
          "ref": 1415,
          "date": 2014,
          "percent": 70,
          "location": "Ecuador",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Pacari",
          "ref": 1415,
          "date": 2014,
          "percent": 70,
          "location": "Ecuador",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Pacari",
          "ref": 1415,
          "date": 2014,
          "percent": 70,
          "location": "Ecuador",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "Pacari",
          "ref": 1415,
          "date": 2014,
          "percent": 70,
          "location": "Ecuador",
          "rating": 4,
          "origin": "Ecuador"
      },
      {
          "company": "Pacari",
          "ref": 817,
          "date": 2012,
          "percent": 85,
          "location": "Ecuador",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Pacari",
          "ref": 863,
          "date": 2012,
          "percent": 70,
          "location": "Ecuador",
          "rating": 4,
          "origin": "Peru"
      },
      {
          "company": "Pacari",
          "ref": 721,
          "date": 2011,
          "percent": 70,
          "location": "Ecuador",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Pacari",
          "ref": 224,
          "date": 2008,
          "percent": 60,
          "location": "Ecuador",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Pacari",
          "ref": 224,
          "date": 2008,
          "percent": 65,
          "location": "Ecuador",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Pacari",
          "ref": 224,
          "date": 2008,
          "percent": 72,
          "location": "Ecuador",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Pacari",
          "ref": 266,
          "date": 2008,
          "percent": 100,
          "location": "Ecuador",
          "rating": 2,
          "origin": "Ecuador"
      },
      {
          "company": "Pacari",
          "ref": 266,
          "date": 2008,
          "percent": 70,
          "location": "Ecuador",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Palette de Bine",
          "ref": 1720,
          "date": 2016,
          "percent": 70,
          "location": "Canada",
          "rating": 2.75,
          "origin": "Guatemala"
      },
      {
          "company": "Palette de Bine",
          "ref": 1720,
          "date": 2016,
          "percent": 72,
          "location": "Canada",
          "rating": 3,
          "origin": "Belize"
      },
      {
          "company": "Palette de Bine",
          "ref": 1570,
          "date": 2015,
          "percent": 70,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Bolivia"
      },
      {
          "company": "Palette de Bine",
          "ref": 1570,
          "date": 2015,
          "percent": 70,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Trinidad"
      },
      {
          "company": "Palette de Bine",
          "ref": 1574,
          "date": 2015,
          "percent": 72,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Tanzania"
      },
      {
          "company": "Palette de Bine",
          "ref": 1574,
          "date": 2015,
          "percent": 72,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Vietnam"
      },
      {
          "company": "Palette de Bine",
          "ref": 1239,
          "date": 2014,
          "percent": 72,
          "location": "Canada",
          "rating": 2.75,
          "origin": "Bolivia"
      },
      {
          "company": "Palette de Bine",
          "ref": 1239,
          "date": 2014,
          "percent": 78,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Madagascar"
      },
      {
          "company": "Palette de Bine",
          "ref": 1303,
          "date": 2014,
          "percent": 75,
          "location": "Canada",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Palette de Bine",
          "ref": 1399,
          "date": 2014,
          "percent": 75,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Trinidad, Ecuador"
      },
      {
          "company": "Palette de Bine",
          "ref": 1399,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Trinidad"
      },
      {
          "company": "Pangea",
          "ref": 1860,
          "date": 2016,
          "percent": 76,
          "location": "Spain",
          "rating": 3,
          "origin": "Fiji"
      },
      {
          "company": "Park 75",
          "ref": 1363,
          "date": 2014,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "South America"
      },
      {
          "company": "Parliament",
          "ref": 1856,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Tanzania"
      },
      {
          "company": "Parliament",
          "ref": 1542,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Guatemala"
      },
      {
          "company": "Parliament",
          "ref": 1251,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Bolivia"
      },
      {
          "company": "Parliament",
          "ref": 1255,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Pascha",
          "ref": 1137,
          "date": 2013,
          "percent": 55,
          "location": "Peru",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Pascha",
          "ref": 1137,
          "date": 2013,
          "percent": 70,
          "location": "Peru",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Patric",
          "ref": 636,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": ""
      },
      {
          "company": "Patric",
          "ref": 331,
          "date": 2009,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Madagascar"
      },
      {
          "company": "Patric",
          "ref": 439,
          "date": 2009,
          "percent": 67,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Patric",
          "ref": 439,
          "date": 2009,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Patric",
          "ref": 196,
          "date": 2007,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Madagascar"
      },
      {
          "company": "Patric",
          "ref": 1034,
          "date": 2013,
          "percent": 67,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Peru"
      },
      {
          "company": "Paul Young",
          "ref": 1271,
          "date": 2014,
          "percent": 73,
          "location": "U.K.",
          "rating": 2.25,
          "origin": "Madagascar"
      },
      {
          "company": "Paul Young",
          "ref": 1271,
          "date": 2014,
          "percent": 64,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Peppalo",
          "ref": 1454,
          "date": 2015,
          "percent": 82,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Pierre Marcolini",
          "ref": 1658,
          "date": 2015,
          "percent": 70,
          "location": "Belgium",
          "rating": 3.25,
          "origin": "Cameroon"
      },
      {
          "company": "Pierre Marcolini",
          "ref": 478,
          "date": 2010,
          "percent": 75,
          "location": "Belgium",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Pierre Marcolini",
          "ref": 478,
          "date": 2010,
          "percent": 75,
          "location": "Belgium",
          "rating": 3.25,
          "origin": "Trinidad"
      },
      {
          "company": "Pierre Marcolini",
          "ref": 516,
          "date": 2010,
          "percent": 78,
          "location": "Belgium",
          "rating": 3.75,
          "origin": "Cuba"
      },
      {
          "company": "Pierre Marcolini",
          "ref": 531,
          "date": 2010,
          "percent": 85,
          "location": "Belgium",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Pierre Marcolini",
          "ref": 414,
          "date": 2009,
          "percent": 72,
          "location": "Belgium",
          "rating": 3,
          "origin": "Brazil"
      },
      {
          "company": "Pierre Marcolini",
          "ref": 445,
          "date": 2009,
          "percent": 72,
          "location": "Belgium",
          "rating": 3,
          "origin": "Mexico"
      },
      {
          "company": "Pierre Marcolini",
          "ref": 111,
          "date": 2007,
          "percent": 70,
          "location": "Belgium",
          "rating": 4,
          "origin": "Venezuela, Java"
      },
      {
          "company": "Pierre Marcolini",
          "ref": 129,
          "date": 2007,
          "percent": 72,
          "location": "Belgium",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "Pierre Marcolini",
          "ref": 141,
          "date": 2007,
          "percent": 72,
          "location": "Belgium",
          "rating": 4,
          "origin": "Madagascar"
      },
      {
          "company": "Pierre Marcolini",
          "ref": 166,
          "date": 2007,
          "percent": 85,
          "location": "Belgium",
          "rating": 3.5,
          "origin": "Venezuela/ Ghana"
      },
      {
          "company": "Pierre Marcolini",
          "ref": 81,
          "date": 2006,
          "percent": 72,
          "location": "Belgium",
          "rating": 4,
          "origin": "Mexico"
      },
      {
          "company": "Pierre Marcolini",
          "ref": 93,
          "date": 2006,
          "percent": 72,
          "location": "Belgium",
          "rating": 3,
          "origin": "Indonesia"
      },
      {
          "company": "Pierre Marcolini",
          "ref": 93,
          "date": 2006,
          "percent": 72,
          "location": "Belgium",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Pinellas",
          "ref": 1772,
          "date": 2016,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Honduras"
      },
      {
          "company": "Pitch Dark",
          "ref": 1506,
          "date": 2015,
          "percent": 62,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Nicaragua"
      },
      {
          "company": "Pitch Dark",
          "ref": 1506,
          "date": 2015,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Pitch Dark",
          "ref": 1510,
          "date": 2015,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Pitch Dark",
          "ref": 1510,
          "date": 2015,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Pitch Dark",
          "ref": 1510,
          "date": 2015,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Nicaragua"
      },
      {
          "company": "Pitch Dark",
          "ref": 1311,
          "date": 2014,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Pitch Dark",
          "ref": 1315,
          "date": 2014,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Fiji"
      },
      {
          "company": "Pitch Dark",
          "ref": 1319,
          "date": 2014,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Pitch Dark",
          "ref": 1319,
          "date": 2014,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Pomm (aka Dead Dog)",
          "ref": 829,
          "date": 2012,
          "percent": 76,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Pomm (aka Dead Dog)",
          "ref": 829,
          "date": 2012,
          "percent": 82,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Potomac",
          "ref": 1820,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Domincan Republic"
      },
      {
          "company": "Potomac",
          "ref": 1387,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Potomac",
          "ref": 647,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Costa Rica"
      },
      {
          "company": "Potomac",
          "ref": 654,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Costa Rica"
      },
      {
          "company": "Potomac",
          "ref": 789,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Potomac",
          "ref": 789,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Potomac",
          "ref": 607,
          "date": 2010,
          "percent": 82,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Costa Rica"
      },
      {
          "company": "Pralus",
          "ref": 1446,
          "date": 2015,
          "percent": 75,
          "location": "France",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Pralus",
          "ref": 717,
          "date": 2011,
          "percent": 75,
          "location": "France",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Pralus",
          "ref": 486,
          "date": 2010,
          "percent": 75,
          "location": "France",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Pralus",
          "ref": 451,
          "date": 2009,
          "percent": 75,
          "location": "France",
          "rating": 2,
          "origin": "Venezuela"
      },
      {
          "company": "Pralus",
          "ref": 199,
          "date": 2008,
          "percent": 75,
          "location": "France",
          "rating": 3,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Pralus",
          "ref": 202,
          "date": 2008,
          "percent": 100,
          "location": "France",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Pralus",
          "ref": 280,
          "date": 2008,
          "percent": 75,
          "location": "France",
          "rating": 2,
          "origin": "Dominican Republic"
      },
      {
          "company": "Pralus",
          "ref": 280,
          "date": 2008,
          "percent": 75,
          "location": "France",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Pralus",
          "ref": 162,
          "date": 2007,
          "percent": 75,
          "location": "France",
          "rating": 4,
          "origin": "Sao Tome"
      },
      {
          "company": "Pralus",
          "ref": 105,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 3,
          "origin": "Brazil"
      },
      {
          "company": "Pralus",
          "ref": 105,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 3.5,
          "origin": "Tanzania"
      },
      {
          "company": "Pralus",
          "ref": 5,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 3.5,
          "origin": "Sao Tome & Principe"
      },
      {
          "company": "Pralus",
          "ref": 5,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 3.5,
          "origin": "Trinidad"
      },
      {
          "company": "Pralus",
          "ref": 5,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 3.75,
          "origin": "Madagascar"
      },
      {
          "company": "Pralus",
          "ref": 32,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 3.5,
          "origin": "Indonesia"
      },
      {
          "company": "Pralus",
          "ref": 32,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Pralus",
          "ref": 32,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 4,
          "origin": "Jamaica"
      },
      {
          "company": "Pralus",
          "ref": 40,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Pralus",
          "ref": 40,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 3,
          "origin": "Vanuatu"
      },
      {
          "company": "Pralus",
          "ref": 40,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 3.25,
          "origin": "Ghana"
      },
      {
          "company": "Pralus",
          "ref": 40,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 3.5,
          "origin": "Colombia"
      },
      {
          "company": "Pralus",
          "ref": 93,
          "date": 2006,
          "percent": 80,
          "location": "France",
          "rating": 4,
          "origin": "Ecuador"
      },
      {
          "company": "Pralus",
          "ref": 99,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 3,
          "origin": "Cuba"
      },
      {
          "company": "Pralus",
          "ref": 99,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 3,
          "origin": "Venezuela, Ghana"
      },
      {
          "company": "Pralus",
          "ref": 99,
          "date": 2006,
          "percent": 75,
          "location": "France",
          "rating": 3.5,
          "origin": "Indonesia, Ghana"
      },
      {
          "company": "Pump Street Bakery",
          "ref": 1872,
          "date": 2016,
          "percent": 77,
          "location": "U.K.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Pump Street Bakery",
          "ref": 1502,
          "date": 2015,
          "percent": 70,
          "location": "U.K.",
          "rating": 3.5,
          "origin": "Grenada"
      },
      {
          "company": "Pump Street Bakery",
          "ref": 1530,
          "date": 2015,
          "percent": 74,
          "location": "U.K.",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Pump Street Bakery",
          "ref": 1688,
          "date": 2015,
          "percent": 80,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Honduras"
      },
      {
          "company": "Pump Street Bakery",
          "ref": 1223,
          "date": 2014,
          "percent": 75,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Pump Street Bakery",
          "ref": 1223,
          "date": 2014,
          "percent": 75,
          "location": "U.K.",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Pump Street Bakery",
          "ref": 1223,
          "date": 2014,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Pump Street Bakery",
          "ref": 1227,
          "date": 2014,
          "percent": 85,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Pura Delizia",
          "ref": 931,
          "date": 2012,
          "percent": 73,
          "location": "Italy",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Q Chocolate",
          "ref": 1057,
          "date": 2013,
          "percent": 75,
          "location": "Brazil",
          "rating": 3.25,
          "origin": "Brazil"
      },
      {
          "company": "Q Chocolate",
          "ref": 1057,
          "date": 2013,
          "percent": 85,
          "location": "Brazil",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Q Chocolate",
          "ref": 1069,
          "date": 2013,
          "percent": 55,
          "location": "Brazil",
          "rating": 2.75,
          "origin": "Brazil"
      },
      {
          "company": "Q Chocolate",
          "ref": 1069,
          "date": 2013,
          "percent": 80,
          "location": "Brazil",
          "rating": 3.25,
          "origin": "Brazil"
      },
      {
          "company": "Q Chocolate",
          "ref": 935,
          "date": 2012,
          "percent": 60,
          "location": "Brazil",
          "rating": 3,
          "origin": "Brazil"
      },
      {
          "company": "Q Chocolate",
          "ref": 935,
          "date": 2012,
          "percent": 65,
          "location": "Brazil",
          "rating": 3.25,
          "origin": "Brazil"
      },
      {
          "company": "Quetzalli (Wolter)",
          "ref": 1796,
          "date": 2016,
          "percent": 70,
          "location": "Mexico",
          "rating": 2.75,
          "origin": "Mexico"
      },
      {
          "company": "Quetzalli (Wolter)",
          "ref": 1800,
          "date": 2016,
          "percent": 74,
          "location": "Mexico",
          "rating": 3,
          "origin": "Mexico"
      },
      {
          "company": "Raaka",
          "ref": 1788,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Peru(SMartin,Pangoa,nacional)"
      },
      {
          "company": "Raaka",
          "ref": 1708,
          "date": 2015,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Congo"
      },
      {
          "company": "Raaka",
          "ref": 959,
          "date": 2012,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Raaka",
          "ref": 785,
          "date": 2011,
          "percent": 85,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Rain Republic",
          "ref": 470,
          "date": 2010,
          "percent": 70,
          "location": "Guatemala",
          "rating": 2.75,
          "origin": "Guatemala"
      },
      {
          "company": "Rancho San Jacinto",
          "ref": 565,
          "date": 2010,
          "percent": 75,
          "location": "Eucador",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Ranger",
          "ref": 1558,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Ranger",
          "ref": 1562,
          "date": 2015,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Ranger",
          "ref": 1562,
          "date": 2015,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Raoul Boulanger",
          "ref": 1872,
          "date": 2016,
          "percent": 75,
          "location": "France",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Raw Cocoa",
          "ref": 867,
          "date": 2012,
          "percent": 70,
          "location": "Poland",
          "rating": 2.5,
          "origin": ""
      },
      {
          "company": "Republica del Cacao (aka Confecta)",
          "ref": 494,
          "date": 2010,
          "percent": 75,
          "location": "Ecuador",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Republica del Cacao (aka Confecta)",
          "ref": 439,
          "date": 2009,
          "percent": 75,
          "location": "Ecuador",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Republica del Cacao (aka Confecta)",
          "ref": 147,
          "date": 2007,
          "percent": 75,
          "location": "Ecuador",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Republica del Cacao (aka Confecta)",
          "ref": 147,
          "date": 2007,
          "percent": 67,
          "location": "Ecuador",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Republica del Cacao (aka Confecta)",
          "ref": 170,
          "date": 2007,
          "percent": 75,
          "location": "Ecuador",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "Ritual",
          "ref": 1860,
          "date": 2016,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "Ritual",
          "ref": 1466,
          "date": 2015,
          "percent": 85,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Ritual",
          "ref": 1466,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": ""
      },
      {
          "company": "Ritual",
          "ref": 1089,
          "date": 2013,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Belize"
      },
      {
          "company": "Ritual",
          "ref": 1181,
          "date": 2013,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Ritual",
          "ref": 891,
          "date": 2012,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Madagascar"
      },
      {
          "company": "Ritual",
          "ref": 967,
          "date": 2012,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Ritual",
          "ref": 979,
          "date": 2012,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Trinidad"
      },
      {
          "company": "Ritual",
          "ref": 745,
          "date": 2011,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Costa Rica"
      },
      {
          "company": "Roasting Masters",
          "ref": 1844,
          "date": 2016,
          "percent": 70,
          "location": "South Korea",
          "rating": 3.25,
          "origin": "Costa Rica"
      },
      {
          "company": "Roasting Masters",
          "ref": 1844,
          "date": 2016,
          "percent": 70,
          "location": "South Korea",
          "rating": 3.25,
          "origin": "Costa Rica"
      },
      {
          "company": "Roasting Masters",
          "ref": 1844,
          "date": 2016,
          "percent": 70,
          "location": "South Korea",
          "rating": 3.25,
          "origin": "Costa Rica"
      },
      {
          "company": "Robert (aka Chocolaterie Robert)",
          "ref": 1061,
          "date": 2013,
          "percent": 75,
          "location": "Madagascar",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Robert (aka Chocolaterie Robert)",
          "ref": 1061,
          "date": 2013,
          "percent": 68,
          "location": "Madagascar",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Rococo (Grenada Chocolate Co.)",
          "ref": 923,
          "date": 2012,
          "percent": 66,
          "location": "U.K.",
          "rating": 3.5,
          "origin": "Grenada"
      },
      {
          "company": "Rogue",
          "ref": 1748,
          "date": 2016,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Honduras"
      },
      {
          "company": "Rogue",
          "ref": 1446,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Rogue",
          "ref": 1566,
          "date": 2015,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Bolivia"
      },
      {
          "company": "Rogue",
          "ref": 1209,
          "date": 2014,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Rogue",
          "ref": 1038,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Rogue",
          "ref": 1081,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Rogue",
          "ref": 1081,
          "date": 2013,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Bolivia"
      },
      {
          "company": "Rogue",
          "ref": 1193,
          "date": 2013,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Jamaica"
      },
      {
          "company": "Rogue",
          "ref": 979,
          "date": 2012,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "Rogue",
          "ref": 793,
          "date": 2011,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Bolivia"
      },
      {
          "company": "Rogue",
          "ref": 565,
          "date": 2010,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Rogue",
          "ref": 327,
          "date": 2009,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Rogue",
          "ref": 213,
          "date": 2008,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Rogue",
          "ref": 213,
          "date": 2008,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Jamaica"
      },
      {
          "company": "Rogue",
          "ref": 213,
          "date": 2008,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Rogue",
          "ref": 213,
          "date": 2008,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Trinidad"
      },
      {
          "company": "Rozsavolgyi",
          "ref": 809,
          "date": 2012,
          "percent": 84,
          "location": "Hungary",
          "rating": 2.5,
          "origin": "Venezuela"
      },
      {
          "company": "Rozsavolgyi",
          "ref": 871,
          "date": 2012,
          "percent": 76,
          "location": "Hungary",
          "rating": 2.25,
          "origin": "Venezuela"
      },
      {
          "company": "Rozsavolgyi",
          "ref": 871,
          "date": 2012,
          "percent": 72,
          "location": "Hungary",
          "rating": 2.5,
          "origin": "Madagascar"
      },
      {
          "company": "Rozsavolgyi",
          "ref": 713,
          "date": 2011,
          "percent": 73,
          "location": "Hungary",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Rozsavolgyi",
          "ref": 717,
          "date": 2011,
          "percent": 71,
          "location": "Hungary",
          "rating": 2.5,
          "origin": "Venezuela"
      },
      {
          "company": "Rozsavolgyi",
          "ref": 717,
          "date": 2011,
          "percent": 70,
          "location": "Hungary",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Rozsavolgyi",
          "ref": 765,
          "date": 2011,
          "percent": 77,
          "location": "Hungary",
          "rating": 2.75,
          "origin": "Principe"
      },
      {
          "company": "S.A.I.D.",
          "ref": 607,
          "date": 2010,
          "percent": 64,
          "location": "Italy",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "S.A.I.D.",
          "ref": 615,
          "date": 2010,
          "percent": 100,
          "location": "Italy",
          "rating": 1.5,
          "origin": ""
      },
      {
          "company": "S.A.I.D.",
          "ref": 615,
          "date": 2010,
          "percent": 70,
          "location": "Italy",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "S.A.I.D.",
          "ref": 615,
          "date": 2010,
          "percent": 72,
          "location": "Italy",
          "rating": 3.5,
          "origin": "Carribean"
      },
      {
          "company": "S.A.I.D.",
          "ref": 615,
          "date": 2010,
          "percent": 72,
          "location": "Italy",
          "rating": 3.5,
          "origin": ""
      },
      {
          "company": "Sacred",
          "ref": 813,
          "date": 2012,
          "percent": 83,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Central and S. America"
      },
      {
          "company": "Sacred",
          "ref": 813,
          "date": 2012,
          "percent": 69,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Central and S. America"
      },
      {
          "company": "Salgado",
          "ref": 288,
          "date": 2008,
          "percent": 70,
          "location": "Argentina",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Salgado",
          "ref": 288,
          "date": 2008,
          "percent": 70,
          "location": "Argentina",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Salgado",
          "ref": 288,
          "date": 2008,
          "percent": 70,
          "location": "Argentina",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Salgado",
          "ref": 292,
          "date": 2008,
          "percent": 70,
          "location": "Argentina",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Santander (Compania Nacional)",
          "ref": 404,
          "date": 2009,
          "percent": 75,
          "location": "Colombia",
          "rating": 2.75,
          "origin": "Colombia"
      },
      {
          "company": "Santander (Compania Nacional)",
          "ref": 414,
          "date": 2009,
          "percent": 70,
          "location": "Colombia",
          "rating": 3,
          "origin": "Colombia"
      },
      {
          "company": "Santander (Compania Nacional)",
          "ref": 32,
          "date": 2006,
          "percent": 53,
          "location": "Colombia",
          "rating": 2,
          "origin": "Colombia"
      },
      {
          "company": "Santander (Compania Nacional)",
          "ref": 32,
          "date": 2006,
          "percent": 65,
          "location": "Colombia",
          "rating": 3,
          "origin": "Colombia"
      },
      {
          "company": "Santander (Compania Nacional)",
          "ref": 32,
          "date": 2006,
          "percent": 70,
          "location": "Colombia",
          "rating": 4,
          "origin": "Colombia"
      },
      {
          "company": "Santome",
          "ref": 761,
          "date": 2011,
          "percent": 70,
          "location": "France",
          "rating": 2.75,
          "origin": "Sao Tome"
      },
      {
          "company": "Scharffen Berger",
          "ref": 959,
          "date": 2012,
          "percent": 78,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Peru"
      },
      {
          "company": "Scharffen Berger",
          "ref": 781,
          "date": 2011,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Scharffen Berger",
          "ref": 464,
          "date": 2010,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Grenada"
      },
      {
          "company": "Scharffen Berger",
          "ref": 464,
          "date": 2010,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Madagascar"
      },
      {
          "company": "Scharffen Berger",
          "ref": 336,
          "date": 2009,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Brazil"
      },
      {
          "company": "Scharffen Berger",
          "ref": 336,
          "date": 2009,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Ghana"
      },
      {
          "company": "Scharffen Berger",
          "ref": 445,
          "date": 2009,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Vietnam"
      },
      {
          "company": "Scharffen Berger",
          "ref": 227,
          "date": 2008,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ven., Trinidad, Mad."
      },
      {
          "company": "Scharffen Berger",
          "ref": 117,
          "date": 2007,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Carribean(DR/Jam/Tri)"
      },
      {
          "company": "Scharffen Berger",
          "ref": 135,
          "date": 2007,
          "percent": 62,
          "location": "U.S.A.",
          "rating": 3,
          "origin": ""
      },
      {
          "company": "Scharffen Berger",
          "ref": 135,
          "date": 2007,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Scharffen Berger",
          "ref": 188,
          "date": 2007,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Carribean"
      },
      {
          "company": "Scharffen Berger",
          "ref": 15,
          "date": 2006,
          "percent": 82,
          "location": "U.S.A.",
          "rating": 2,
          "origin": ""
      },
      {
          "company": "Scharffen Berger",
          "ref": 15,
          "date": 2006,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": ""
      },
      {
          "company": "Scharffen Berger",
          "ref": 40,
          "date": 2006,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 2,
          "origin": "Ghana & Madagascar"
      },
      {
          "company": "Scharffen Berger",
          "ref": 56,
          "date": 2006,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2,
          "origin": "Jamaica"
      },
      {
          "company": "Scharffen Berger",
          "ref": 56,
          "date": 2006,
          "percent": 62,
          "location": "U.S.A.",
          "rating": 3,
          "origin": ""
      },
      {
          "company": "Seaforth",
          "ref": 1658,
          "date": 2015,
          "percent": 70,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Domincan Republic"
      },
      {
          "company": "Seaforth",
          "ref": 1658,
          "date": 2015,
          "percent": 70,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Grenada"
      },
      {
          "company": "Shark Mountain",
          "ref": 1450,
          "date": 2015,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Jamaica"
      },
      {
          "company": "Shark Mountain",
          "ref": 1450,
          "date": 2015,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Shark Mountain",
          "ref": 1466,
          "date": 2015,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Shark Mountain",
          "ref": 1466,
          "date": 2015,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Shark Mountain",
          "ref": 1335,
          "date": 2014,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Shark Mountain",
          "ref": 1335,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Belize"
      },
      {
          "company": "Shark's",
          "ref": 713,
          "date": 2011,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 2,
          "origin": "Hawaii"
      },
      {
          "company": "Shark's",
          "ref": 721,
          "date": 2011,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Hawaii"
      },
      {
          "company": "Shattel",
          "ref": 1884,
          "date": 2016,
          "percent": 70,
          "location": "Peru",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Shattell",
          "ref": 757,
          "date": 2011,
          "percent": 75,
          "location": "Peru",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Sibu",
          "ref": 1586,
          "date": 2015,
          "percent": 82,
          "location": "Costa Rica",
          "rating": 3.25,
          "origin": "Costa Rica"
      },
      {
          "company": "Sibu",
          "ref": 1586,
          "date": 2015,
          "percent": 70,
          "location": "Costa Rica",
          "rating": 3.5,
          "origin": "Costa Rica"
      },
      {
          "company": "Sibu Sura",
          "ref": 911,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Silvio Bessone",
          "ref": 717,
          "date": 2011,
          "percent": 67,
          "location": "Italy",
          "rating": 3,
          "origin": "Belize"
      },
      {
          "company": "Silvio Bessone",
          "ref": 725,
          "date": 2011,
          "percent": 65,
          "location": "Italy",
          "rating": 3.25,
          "origin": "Sao Tome"
      },
      {
          "company": "Silvio Bessone",
          "ref": 729,
          "date": 2011,
          "percent": 60,
          "location": "Italy",
          "rating": 3.25,
          "origin": "Brazil"
      },
      {
          "company": "Silvio Bessone",
          "ref": 741,
          "date": 2011,
          "percent": 68,
          "location": "Italy",
          "rating": 3,
          "origin": "Colombia"
      },
      {
          "company": "Sirene",
          "ref": 1788,
          "date": 2016,
          "percent": 73,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Bolivia"
      },
      {
          "company": "Sirene",
          "ref": 1856,
          "date": 2016,
          "percent": 73,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Tanzania"
      },
      {
          "company": "Sirene",
          "ref": 1860,
          "date": 2016,
          "percent": 73,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "Sirene",
          "ref": 1502,
          "date": 2015,
          "percent": 100,
          "location": "Canada",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Sirene",
          "ref": 1506,
          "date": 2015,
          "percent": 100,
          "location": "Canada",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Sirene",
          "ref": 1614,
          "date": 2015,
          "percent": 73,
          "location": "Canada",
          "rating": 3,
          "origin": "Guatemala"
      },
      {
          "company": "Sirene",
          "ref": 1614,
          "date": 2015,
          "percent": 73,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Guatemala"
      },
      {
          "company": "Sirene",
          "ref": 1650,
          "date": 2015,
          "percent": 73,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Haiti"
      },
      {
          "company": "Sirene",
          "ref": 1339,
          "date": 2014,
          "percent": 67,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Madagascar"
      },
      {
          "company": "Sirene",
          "ref": 1339,
          "date": 2014,
          "percent": 73,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Madagascar"
      },
      {
          "company": "Sirene",
          "ref": 1343,
          "date": 2014,
          "percent": 73,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "Sjolinds",
          "ref": 1454,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Ghana"
      },
      {
          "company": "Sjolinds",
          "ref": 1462,
          "date": 2015,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Nicaragua"
      },
      {
          "company": "Smooth Chocolator, The",
          "ref": 1940,
          "date": 2017,
          "percent": 70,
          "location": "Australia",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Smooth Chocolator, The",
          "ref": 1740,
          "date": 2016,
          "percent": 70,
          "location": "Australia",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Smooth Chocolator, The",
          "ref": 1740,
          "date": 2016,
          "percent": 70,
          "location": "Australia",
          "rating": 4,
          "origin": "Ecuador"
      },
      {
          "company": "Smooth Chocolator, The",
          "ref": 1756,
          "date": 2016,
          "percent": 70,
          "location": "Australia",
          "rating": 3.75,
          "origin": "Belize"
      },
      {
          "company": "Smooth Chocolator, The",
          "ref": 1864,
          "date": 2016,
          "percent": 70,
          "location": "Australia",
          "rating": 3,
          "origin": "Vietnam"
      },
      {
          "company": "Smooth Chocolator, The",
          "ref": 1864,
          "date": 2016,
          "percent": 67,
          "location": "Australia",
          "rating": 3.75,
          "origin": "Australia"
      },
      {
          "company": "Smooth Chocolator, The",
          "ref": 1908,
          "date": 2016,
          "percent": 70,
          "location": "Australia",
          "rating": 3.25,
          "origin": "Guatemala"
      },
      {
          "company": "Smooth Chocolator, The",
          "ref": 1618,
          "date": 2015,
          "percent": 65,
          "location": "Australia",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Smooth Chocolator, The",
          "ref": 1622,
          "date": 2015,
          "percent": 70,
          "location": "Australia",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Smooth Chocolator, The",
          "ref": 1622,
          "date": 2015,
          "percent": 67,
          "location": "Australia",
          "rating": 3.75,
          "origin": "Tanzania"
      },
      {
          "company": "Smooth Chocolator, The",
          "ref": 1622,
          "date": 2015,
          "percent": 70,
          "location": "Australia",
          "rating": 3.75,
          "origin": "Trinidad"
      },
      {
          "company": "Smooth Chocolator, The",
          "ref": 1622,
          "date": 2015,
          "percent": 72,
          "location": "Australia",
          "rating": 4,
          "origin": "Ecuador"
      },
      {
          "company": "Smooth Chocolator, The",
          "ref": 1626,
          "date": 2015,
          "percent": 72,
          "location": "Australia",
          "rating": 2.75,
          "origin": "Bolivia"
      },
      {
          "company": "Smooth Chocolator, The",
          "ref": 1662,
          "date": 2015,
          "percent": 65,
          "location": "Australia",
          "rating": 3.5,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Smooth Chocolator, The",
          "ref": 1666,
          "date": 2015,
          "percent": 67,
          "location": "Australia",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Smooth Chocolator, The",
          "ref": 1666,
          "date": 2015,
          "percent": 70,
          "location": "Australia",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Snake & Butterfly",
          "ref": 693,
          "date": 2011,
          "percent": 67,
          "location": "U.S.A.",
          "rating": 1.5,
          "origin": "Ghana"
      },
      {
          "company": "Snake & Butterfly",
          "ref": 502,
          "date": 2010,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Snake & Butterfly",
          "ref": 502,
          "date": 2010,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Sol Cacao",
          "ref": 1812,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Sol Cacao",
          "ref": 1518,
          "date": 2015,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Solkiki",
          "ref": 1840,
          "date": 2016,
          "percent": 68,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Solkiki",
          "ref": 1840,
          "date": 2016,
          "percent": 85,
          "location": "U.K.",
          "rating": 2.75,
          "origin": "Domincan Republic"
      },
      {
          "company": "Solomons Gold",
          "ref": 1792,
          "date": 2016,
          "percent": 70,
          "location": "New Zealand",
          "rating": 3.25,
          "origin": "Solomon Islands"
      },
      {
          "company": "Solomons Gold",
          "ref": 1796,
          "date": 2016,
          "percent": 75,
          "location": "New Zealand",
          "rating": 3.25,
          "origin": "Solomon Islands"
      },
      {
          "company": "Solstice",
          "ref": 1335,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Uganda"
      },
      {
          "company": "Solstice",
          "ref": 1157,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Solstice",
          "ref": 1157,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Solstice",
          "ref": 1161,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Bolivia"
      },
      {
          "company": "Solstice",
          "ref": 1161,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Solstice",
          "ref": 1161,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": ""
      },
      {
          "company": "Soma",
          "ref": 1820,
          "date": 2016,
          "percent": 62,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Domincan Republic"
      },
      {
          "company": "Soma",
          "ref": 1820,
          "date": 2016,
          "percent": 70,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Soma",
          "ref": 1828,
          "date": 2016,
          "percent": 70,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Soma",
          "ref": 1828,
          "date": 2016,
          "percent": 75,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Ven.,Ecu.,Peru,Nic."
      },
      {
          "company": "Soma",
          "ref": 1828,
          "date": 2016,
          "percent": 70,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Soma",
          "ref": 1828,
          "date": 2016,
          "percent": 70,
          "location": "Canada",
          "rating": 4,
          "origin": "Vietnam"
      },
      {
          "company": "Soma",
          "ref": 1832,
          "date": 2016,
          "percent": 70,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Soma",
          "ref": 1594,
          "date": 2015,
          "percent": 70,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Soma",
          "ref": 1594,
          "date": 2015,
          "percent": 75,
          "location": "Canada",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Soma",
          "ref": 1227,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Nicaragua"
      },
      {
          "company": "Soma",
          "ref": 1259,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Soma",
          "ref": 1307,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Nicaragua"
      },
      {
          "company": "Soma",
          "ref": 1307,
          "date": 2014,
          "percent": 80,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Soma",
          "ref": 1307,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Vanuatu"
      },
      {
          "company": "Soma",
          "ref": 1339,
          "date": 2014,
          "percent": 70,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Madagascar & Ecuador"
      },
      {
          "company": "Soma",
          "ref": 1019,
          "date": 2013,
          "percent": 77,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Soma",
          "ref": 1030,
          "date": 2013,
          "percent": 70,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Indonesia"
      },
      {
          "company": "Soma",
          "ref": 1073,
          "date": 2013,
          "percent": 70,
          "location": "Canada",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Soma",
          "ref": 1073,
          "date": 2013,
          "percent": 70,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Trinidad"
      },
      {
          "company": "Soma",
          "ref": 1077,
          "date": 2013,
          "percent": 70,
          "location": "Canada",
          "rating": 3.25,
          "origin": ""
      },
      {
          "company": "Soma",
          "ref": 1077,
          "date": 2013,
          "percent": 70,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Soma",
          "ref": 1077,
          "date": 2013,
          "percent": 88,
          "location": "Canada",
          "rating": 4,
          "origin": "Guat., D.R., Peru, Mad., PNG"
      },
      {
          "company": "Soma",
          "ref": 1077,
          "date": 2013,
          "percent": 70,
          "location": "Canada",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Soma",
          "ref": 1081,
          "date": 2013,
          "percent": 67,
          "location": "Canada",
          "rating": 4,
          "origin": "Peru, Dom. Rep"
      },
      {
          "company": "Soma",
          "ref": 1173,
          "date": 2013,
          "percent": 70,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Soma",
          "ref": 1177,
          "date": 2013,
          "percent": 70,
          "location": "Canada",
          "rating": 4,
          "origin": "Jamaica"
      },
      {
          "company": "Soma",
          "ref": 817,
          "date": 2012,
          "percent": 70,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Haiti"
      },
      {
          "company": "Soma",
          "ref": 833,
          "date": 2012,
          "percent": 70,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Hawaii"
      },
      {
          "company": "Soma",
          "ref": 867,
          "date": 2012,
          "percent": 70,
          "location": "Canada",
          "rating": 4,
          "origin": "Dom. Rep., Madagascar"
      },
      {
          "company": "Soma",
          "ref": 867,
          "date": 2012,
          "percent": 70,
          "location": "Canada",
          "rating": 4,
          "origin": "Gre., PNG, Haw., Haiti, Mad"
      },
      {
          "company": "Soma",
          "ref": 951,
          "date": 2012,
          "percent": 70,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Guatemala"
      },
      {
          "company": "Soma",
          "ref": 951,
          "date": 2012,
          "percent": 70,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Soma",
          "ref": 967,
          "date": 2012,
          "percent": 70,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Mad., Java, PNG"
      },
      {
          "company": "Soma",
          "ref": 983,
          "date": 2012,
          "percent": 85,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Soma",
          "ref": 676,
          "date": 2011,
          "percent": 70,
          "location": "Canada",
          "rating": 2.75,
          "origin": "Grenada"
      },
      {
          "company": "Soma",
          "ref": 676,
          "date": 2011,
          "percent": 70,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Bolivia"
      },
      {
          "company": "Soma",
          "ref": 676,
          "date": 2011,
          "percent": 64,
          "location": "Canada",
          "rating": 4,
          "origin": "Peru"
      },
      {
          "company": "Soma",
          "ref": 676,
          "date": 2011,
          "percent": 70,
          "location": "Canada",
          "rating": 4,
          "origin": "Ven, Bolivia, D.R."
      },
      {
          "company": "Soma",
          "ref": 682,
          "date": 2011,
          "percent": 70,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Soma",
          "ref": 688,
          "date": 2011,
          "percent": 70,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Soma",
          "ref": 607,
          "date": 2010,
          "percent": 70,
          "location": "Canada",
          "rating": 3.75,
          "origin": "DR, Ecuador, Peru"
      },
      {
          "company": "Soma",
          "ref": 377,
          "date": 2009,
          "percent": 70,
          "location": "Canada",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Soma",
          "ref": 377,
          "date": 2009,
          "percent": 70,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Ghana"
      },
      {
          "company": "Soma",
          "ref": 387,
          "date": 2009,
          "percent": 70,
          "location": "Canada",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Soma",
          "ref": 387,
          "date": 2009,
          "percent": 70,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Soma",
          "ref": 387,
          "date": 2009,
          "percent": 70,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Madagascar"
      },
      {
          "company": "Soma",
          "ref": 387,
          "date": 2009,
          "percent": 70,
          "location": "Canada",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Somerville",
          "ref": 1367,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Nicaragua"
      },
      {
          "company": "Somerville",
          "ref": 1395,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Hawaii"
      },
      {
          "company": "Soul",
          "ref": 1932,
          "date": 2017,
          "percent": 70,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Soul",
          "ref": 1936,
          "date": 2017,
          "percent": 70,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Soul",
          "ref": 1936,
          "date": 2017,
          "percent": 75,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Soul",
          "ref": 1936,
          "date": 2017,
          "percent": 75,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Soul",
          "ref": 1936,
          "date": 2017,
          "percent": 77,
          "location": "Canada",
          "rating": 3.25,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Soul",
          "ref": 1940,
          "date": 2017,
          "percent": 80,
          "location": "Canada",
          "rating": 3.5,
          "origin": "Tanzania"
      },
      {
          "company": "Spagnvola",
          "ref": 793,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Spagnvola",
          "ref": 793,
          "date": 2012,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Spagnvola",
          "ref": 793,
          "date": 2012,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Spencer",
          "ref": 1932,
          "date": 2017,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Spencer",
          "ref": 1932,
          "date": 2017,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Spencer",
          "ref": 1932,
          "date": 2017,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Spencer",
          "ref": 1792,
          "date": 2016,
          "percent": 70,
          "location": "Australia",
          "rating": 3.5,
          "origin": "Domincan Republic"
      },
      {
          "company": "Spencer",
          "ref": 1792,
          "date": 2016,
          "percent": 70,
          "location": "Australia",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "Spencer",
          "ref": 1792,
          "date": 2016,
          "percent": 70,
          "location": "Australia",
          "rating": 3.75,
          "origin": "Madagascar"
      },
      {
          "company": "Spencer",
          "ref": 1434,
          "date": 2014,
          "percent": 72,
          "location": "Australia",
          "rating": 2.75,
          "origin": "Vanuatu"
      },
      {
          "company": "Sprungli (Felchlin)",
          "ref": 1057,
          "date": 2013,
          "percent": 70,
          "location": "Switzerland",
          "rating": 3,
          "origin": "Bolivia"
      },
      {
          "company": "SRSLY",
          "ref": 1113,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "SRSLY",
          "ref": 1121,
          "date": 2013,
          "percent": 84,
          "location": "U.S.A.",
          "rating": 2.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Starchild",
          "ref": 1634,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Starchild",
          "ref": 1692,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Domincan Republic"
      },
      {
          "company": "Starchild",
          "ref": 1692,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Guatemala"
      },
      {
          "company": "Starchild",
          "ref": 1692,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Nicaragua"
      },
      {
          "company": "Starchild",
          "ref": 1696,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Stella (aka Bernrain)",
          "ref": 859,
          "date": 2012,
          "percent": 68,
          "location": "Switzerland",
          "rating": 2.75,
          "origin": "Brazil"
      },
      {
          "company": "Stella (aka Bernrain)",
          "ref": 729,
          "date": 2011,
          "percent": 72,
          "location": "Switzerland",
          "rating": 3.25,
          "origin": "India"
      },
      {
          "company": "Stone Grindz",
          "ref": 1291,
          "date": 2014,
          "percent": 84,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Stone Grindz",
          "ref": 1291,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "StRita Supreme",
          "ref": 939,
          "date": 2012,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Philippines"
      },
      {
          "company": "StRita Supreme",
          "ref": 943,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Philippines"
      },
      {
          "company": "StRita Supreme",
          "ref": 943,
          "date": 2012,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Philippines"
      },
      {
          "company": "Sublime Origins",
          "ref": 1157,
          "date": 2013,
          "percent": 67,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Sublime Origins",
          "ref": 1157,
          "date": 2013,
          "percent": 78,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Belize"
      },
      {
          "company": "Summerbird",
          "ref": 1800,
          "date": 2016,
          "percent": 61,
          "location": "Denmark",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Summerbird",
          "ref": 1800,
          "date": 2016,
          "percent": 71,
          "location": "Denmark",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Suruca Chocolate",
          "ref": 1796,
          "date": 2016,
          "percent": 70,
          "location": "Venezuela",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Suruca Chocolate",
          "ref": 1796,
          "date": 2016,
          "percent": 60,
          "location": "Venezuela",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Svenska Kakaobolaget",
          "ref": 1618,
          "date": 2015,
          "percent": 70,
          "location": "Sweden",
          "rating": 2.75,
          "origin": "Sri Lanka"
      },
      {
          "company": "Szanto Tibor",
          "ref": 1668,
          "date": 2015,
          "percent": 70,
          "location": "Hungary",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Szanto Tibor",
          "ref": 1704,
          "date": 2015,
          "percent": 88,
          "location": "Hungary",
          "rating": 3.25,
          "origin": "Cuba"
      },
      {
          "company": "Szanto Tibor",
          "ref": 1704,
          "date": 2015,
          "percent": 70,
          "location": "Hungary",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Szanto Tibor",
          "ref": 1704,
          "date": 2015,
          "percent": 70,
          "location": "Hungary",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "Szanto Tibor",
          "ref": 1708,
          "date": 2015,
          "percent": 70,
          "location": "Hungary",
          "rating": 3.25,
          "origin": "Vietnam"
      },
      {
          "company": "Szanto Tibor",
          "ref": 1708,
          "date": 2015,
          "percent": 70,
          "location": "Hungary",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Szanto Tibor",
          "ref": 1263,
          "date": 2014,
          "percent": 70,
          "location": "Hungary",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Szanto Tibor",
          "ref": 1263,
          "date": 2014,
          "percent": 70,
          "location": "Hungary",
          "rating": 3.75,
          "origin": "Cuba"
      },
      {
          "company": "Szanto Tibor",
          "ref": 1185,
          "date": 2013,
          "percent": 70,
          "location": "Hungary",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Szanto Tibor",
          "ref": 1185,
          "date": 2013,
          "percent": 70,
          "location": "Hungary",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Szanto Tibor",
          "ref": 1193,
          "date": 2013,
          "percent": 70,
          "location": "Hungary",
          "rating": 3.25,
          "origin": "Nicaragua"
      },
      {
          "company": "Szanto Tibor",
          "ref": 939,
          "date": 2012,
          "percent": 70,
          "location": "Hungary",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Szanto Tibor",
          "ref": 939,
          "date": 2012,
          "percent": 70,
          "location": "Hungary",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Szanto Tibor",
          "ref": 939,
          "date": 2012,
          "percent": 70,
          "location": "Hungary",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Szanto Tibor",
          "ref": 761,
          "date": 2011,
          "percent": 70,
          "location": "Hungary",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Tabal",
          "ref": 1101,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Costa Rica"
      },
      {
          "company": "Tabal",
          "ref": 1101,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Tabal",
          "ref": 1105,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Mexico"
      },
      {
          "company": "Tabal",
          "ref": 1105,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Tablette (aka Vanillabeans)",
          "ref": 1450,
          "date": 2015,
          "percent": 70,
          "location": "Japan",
          "rating": 3,
          "origin": "Colombia"
      },
      {
          "company": "Tablette (aka Vanillabeans)",
          "ref": 1450,
          "date": 2015,
          "percent": 62,
          "location": "Japan",
          "rating": 3.25,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Tablette (aka Vanillabeans)",
          "ref": 1450,
          "date": 2015,
          "percent": 60,
          "location": "Japan",
          "rating": 3.25,
          "origin": "Vietnam"
      },
      {
          "company": "Tablette (aka Vanillabeans)",
          "ref": 1680,
          "date": 2015,
          "percent": 77,
          "location": "Japan",
          "rating": 2.75,
          "origin": "Trinidad"
      },
      {
          "company": "Tan Ban Skrati",
          "ref": 1868,
          "date": 2016,
          "percent": 70,
          "location": "Suriname",
          "rating": 3.25,
          "origin": "Suriname"
      },
      {
          "company": "Taza",
          "ref": 1271,
          "date": 2014,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Belize"
      },
      {
          "company": "Taza",
          "ref": 785,
          "date": 2011,
          "percent": 87,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Bolivia"
      },
      {
          "company": "Taza",
          "ref": 451,
          "date": 2009,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Mexico"
      },
      {
          "company": "Taza",
          "ref": 180,
          "date": 2007,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "TCHO",
          "ref": 1716,
          "date": 2016,
          "percent": 62,
          "location": "U.S.A.",
          "rating": 2,
          "origin": "West Africa"
      },
      {
          "company": "TCHO",
          "ref": 915,
          "date": 2012,
          "percent": 99,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Peru, Ecuador"
      },
      {
          "company": "TCHO",
          "ref": 387,
          "date": 2009,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": ""
      },
      {
          "company": "TCHO",
          "ref": 387,
          "date": 2009,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3,
          "origin": ""
      },
      {
          "company": "TCHO",
          "ref": 199,
          "date": 2008,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Ghana"
      },
      {
          "company": "TCHO",
          "ref": 280,
          "date": 2008,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "TCHO",
          "ref": 280,
          "date": 2008,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "TCHO",
          "ref": 284,
          "date": 2008,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Tejas",
          "ref": 801,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Tejas",
          "ref": 801,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ecuador, Mad., PNG"
      },
      {
          "company": "Tejas",
          "ref": 805,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Tejas",
          "ref": 805,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Tejas",
          "ref": 817,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Tejas",
          "ref": 821,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2,
          "origin": "Peru"
      },
      {
          "company": "Tejas",
          "ref": 825,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Tejas",
          "ref": 829,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Bolivia"
      },
      {
          "company": "Tejas",
          "ref": 829,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Tejas",
          "ref": 833,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Mexico"
      },
      {
          "company": "Tejas",
          "ref": 967,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Brazil"
      },
      {
          "company": "Tejas",
          "ref": 971,
          "date": 2012,
          "percent": 80,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Tejas",
          "ref": 971,
          "date": 2012,
          "percent": 67,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Bolivia"
      },
      {
          "company": "Tejas",
          "ref": 971,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Brazil"
      },
      {
          "company": "Terroir",
          "ref": 1478,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Terroir",
          "ref": 1478,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Belize"
      },
      {
          "company": "Terroir",
          "ref": 1478,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Madagascar"
      },
      {
          "company": "Terroir",
          "ref": 1482,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Terroir",
          "ref": 1554,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Domincan Republic"
      },
      {
          "company": "Terroir",
          "ref": 1558,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Guatemala"
      },
      {
          "company": "Terroir",
          "ref": 1323,
          "date": 2014,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Terroir",
          "ref": 1323,
          "date": 2014,
          "percent": 67,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Madagascar"
      },
      {
          "company": "Terroir",
          "ref": 1323,
          "date": 2014,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Uganda"
      },
      {
          "company": "The Barn",
          "ref": 1614,
          "date": 2015,
          "percent": 70,
          "location": "Sweden",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Theo",
          "ref": 903,
          "date": 2012,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Congo"
      },
      {
          "company": "Theo",
          "ref": 162,
          "date": 2007,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Theo",
          "ref": 184,
          "date": 2007,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Ivory Coast"
      },
      {
          "company": "Theo",
          "ref": 184,
          "date": 2007,
          "percent": 84,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ghana"
      },
      {
          "company": "Theo",
          "ref": 188,
          "date": 2007,
          "percent": 91,
          "location": "U.S.A.",
          "rating": 2,
          "origin": "Venezuela"
      },
      {
          "company": "Theo",
          "ref": 188,
          "date": 2007,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ghana, Panama, Ecuador"
      },
      {
          "company": "Theobroma",
          "ref": 1684,
          "date": 2015,
          "percent": 70,
          "location": "Japan",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Timo A. Meyer",
          "ref": 1836,
          "date": 2016,
          "percent": 72,
          "location": "Germany",
          "rating": 3.75,
          "origin": "Belize"
      },
      {
          "company": "To'ak (Ecuatoriana)",
          "ref": 1418,
          "date": 2014,
          "percent": 81,
          "location": "Ecuador",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Tobago Estate (Pralus)",
          "ref": 895,
          "date": 2012,
          "percent": 70,
          "location": "France",
          "rating": 4,
          "origin": "Tobago"
      },
      {
          "company": "Tocoti",
          "ref": 927,
          "date": 2012,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Bolivia"
      },
      {
          "company": "Tocoti",
          "ref": 789,
          "date": 2011,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Venezuela"
      },
      {
          "company": "Tocoti",
          "ref": 789,
          "date": 2011,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Treehouse",
          "ref": 1239,
          "date": 2014,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Tsara (Cinagra)",
          "ref": 753,
          "date": 2011,
          "percent": 72,
          "location": "Madagascar",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "twenty-four blackbirds",
          "ref": 1700,
          "date": 2015,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Domincan Republic"
      },
      {
          "company": "twenty-four blackbirds",
          "ref": 1700,
          "date": 2015,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "twenty-four blackbirds",
          "ref": 1235,
          "date": 2014,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "twenty-four blackbirds",
          "ref": 1022,
          "date": 2013,
          "percent": 68,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "twenty-four blackbirds",
          "ref": 1026,
          "date": 2013,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Bolivia"
      },
      {
          "company": "twenty-four blackbirds",
          "ref": 753,
          "date": 2011,
          "percent": 73,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Two Ravens",
          "ref": 1740,
          "date": 2016,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Un Dimanche A Paris",
          "ref": 709,
          "date": 2011,
          "percent": 63,
          "location": "France",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Undone",
          "ref": 1438,
          "date": 2014,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Nicaragua"
      },
      {
          "company": "Undone",
          "ref": 1438,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Upchurch",
          "ref": 1752,
          "date": 2016,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Upchurch",
          "ref": 1752,
          "date": 2016,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Tanzania"
      },
      {
          "company": "Urzi",
          "ref": 1327,
          "date": 2014,
          "percent": 65,
          "location": "Italy",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Valrhona",
          "ref": 1510,
          "date": 2015,
          "percent": 63,
          "location": "France",
          "rating": 4,
          "origin": "Peru"
      },
      {
          "company": "Valrhona",
          "ref": 1145,
          "date": 2013,
          "percent": 70,
          "location": "France",
          "rating": 3.5,
          "origin": ""
      },
      {
          "company": "Valrhona",
          "ref": 1153,
          "date": 2013,
          "percent": 64,
          "location": "France",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Valrhona",
          "ref": 931,
          "date": 2012,
          "percent": 69,
          "location": "France",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Valrhona",
          "ref": 709,
          "date": 2011,
          "percent": 56,
          "location": "France",
          "rating": 3.25,
          "origin": ""
      },
      {
          "company": "Valrhona",
          "ref": 757,
          "date": 2011,
          "percent": 64,
          "location": "France",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Valrhona",
          "ref": 327,
          "date": 2009,
          "percent": 64,
          "location": "France",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Valrhona",
          "ref": 370,
          "date": 2009,
          "percent": 66,
          "location": "France",
          "rating": 3.75,
          "origin": "Ecuador"
      },
      {
          "company": "Valrhona",
          "ref": 395,
          "date": 2009,
          "percent": 68,
          "location": "France",
          "rating": 3.5,
          "origin": "Ghana"
      },
      {
          "company": "Valrhona",
          "ref": 117,
          "date": 2007,
          "percent": 72,
          "location": "France",
          "rating": 3,
          "origin": "Venezuela, Carribean"
      },
      {
          "company": "Valrhona",
          "ref": 129,
          "date": 2007,
          "percent": 65,
          "location": "France",
          "rating": 3.75,
          "origin": "Venezuela"
      },
      {
          "company": "Valrhona",
          "ref": 129,
          "date": 2007,
          "percent": 64,
          "location": "France",
          "rating": 4,
          "origin": "Madagascar"
      },
      {
          "company": "Valrhona",
          "ref": 147,
          "date": 2007,
          "percent": 85,
          "location": "France",
          "rating": 1.5,
          "origin": ""
      },
      {
          "company": "Valrhona",
          "ref": 153,
          "date": 2007,
          "percent": 85,
          "location": "France",
          "rating": 2.5,
          "origin": "West Africa"
      },
      {
          "company": "Valrhona",
          "ref": 157,
          "date": 2007,
          "percent": 71,
          "location": "France",
          "rating": 2.75,
          "origin": "West Africa"
      },
      {
          "company": "Valrhona",
          "ref": 162,
          "date": 2007,
          "percent": 64,
          "location": "France",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Valrhona",
          "ref": 63,
          "date": 2006,
          "percent": 66,
          "location": "France",
          "rating": 3,
          "origin": "Carribean"
      },
      {
          "company": "Valrhona",
          "ref": 63,
          "date": 2006,
          "percent": 70,
          "location": "France",
          "rating": 4,
          "origin": "South America"
      },
      {
          "company": "Valrhona",
          "ref": 75,
          "date": 2006,
          "percent": 64,
          "location": "France",
          "rating": 2.5,
          "origin": "Trinidad"
      },
      {
          "company": "Valrhona",
          "ref": 75,
          "date": 2006,
          "percent": 64,
          "location": "France",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Valrhona",
          "ref": 75,
          "date": 2006,
          "percent": 64,
          "location": "France",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Vanleer (Barry Callebaut)",
          "ref": 963,
          "date": 2012,
          "percent": 72,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Ghana"
      },
      {
          "company": "Vanleer (Barry Callebaut)",
          "ref": 963,
          "date": 2012,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Ghana"
      },
      {
          "company": "Vao Vao (Chocolaterie Robert)",
          "ref": 404,
          "date": 2009,
          "percent": 72,
          "location": "Madagascar",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Vao Vao (Chocolaterie Robert)",
          "ref": 404,
          "date": 2009,
          "percent": 76,
          "location": "Madagascar",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Vao Vao (Chocolaterie Robert)",
          "ref": 404,
          "date": 2009,
          "percent": 80,
          "location": "Madagascar",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Vao Vao (Chocolaterie Robert)",
          "ref": 404,
          "date": 2009,
          "percent": 70,
          "location": "Madagascar",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Vao Vao (Chocolaterie Robert)",
          "ref": 404,
          "date": 2009,
          "percent": 68,
          "location": "Madagascar",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Vao Vao (Chocolaterie Robert)",
          "ref": 404,
          "date": 2009,
          "percent": 64,
          "location": "Madagascar",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Vicuna",
          "ref": 1470,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Bolivia"
      },
      {
          "company": "Vicuna",
          "ref": 1470,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Bolivia"
      },
      {
          "company": "Videri",
          "ref": 1211,
          "date": 2014,
          "percent": 90,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Dominican Republic"
      },
      {
          "company": "Videri",
          "ref": 1211,
          "date": 2014,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Trinidad"
      },
      {
          "company": "Videri",
          "ref": 1227,
          "date": 2014,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Ecuador"
      },
      {
          "company": "Videri",
          "ref": 1117,
          "date": 2013,
          "percent": 90,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Central and S. America"
      },
      {
          "company": "Videri",
          "ref": 991,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Central and S. America"
      },
      {
          "company": "Vietcacao (A. Morin)",
          "ref": 951,
          "date": 2012,
          "percent": 70,
          "location": "France",
          "rating": 3.5,
          "origin": "Vietnam"
      },
      {
          "company": "Vintage Plantations",
          "ref": 1205,
          "date": 2014,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Vintage Plantations (Tulicorp)",
          "ref": 153,
          "date": 2007,
          "percent": 100,
          "location": "U.S.A.",
          "rating": 2,
          "origin": "Ecuador"
      },
      {
          "company": "Vintage Plantations (Tulicorp)",
          "ref": 153,
          "date": 2007,
          "percent": 90,
          "location": "U.S.A.",
          "rating": 2,
          "origin": "Ecuador"
      },
      {
          "company": "Vintage Plantations (Tulicorp)",
          "ref": 153,
          "date": 2007,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Vintage Plantations (Tulicorp)",
          "ref": 153,
          "date": 2007,
          "percent": 65,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Violet Sky",
          "ref": 1458,
          "date": 2015,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Violet Sky",
          "ref": 1458,
          "date": 2015,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Belize"
      },
      {
          "company": "Violet Sky",
          "ref": 1458,
          "date": 2015,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Violet Sky",
          "ref": 1458,
          "date": 2015,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Violet Sky",
          "ref": 1502,
          "date": 2015,
          "percent": 77,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Guatemala"
      },
      {
          "company": "Vivra",
          "ref": 1720,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Vivra",
          "ref": 1720,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Venezuela"
      },
      {
          "company": "Vivra",
          "ref": 1724,
          "date": 2016,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Domincan Republic"
      },
      {
          "company": "Wellington Chocolate Factory",
          "ref": 1756,
          "date": 2016,
          "percent": 70,
          "location": "New Zealand",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Wellington Chocolate Factory",
          "ref": 1756,
          "date": 2016,
          "percent": 70,
          "location": "New Zealand",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Whittakers",
          "ref": 733,
          "date": 2011,
          "percent": 72,
          "location": "New Zealand",
          "rating": 2.5,
          "origin": "Ghana"
      },
      {
          "company": "Wilkie's Organic",
          "ref": 1169,
          "date": 2013,
          "percent": 75,
          "location": "Ireland",
          "rating": 2.5,
          "origin": "Peru"
      },
      {
          "company": "Wilkie's Organic",
          "ref": 1169,
          "date": 2013,
          "percent": 89,
          "location": "Ireland",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Wilkie's Organic",
          "ref": 1169,
          "date": 2013,
          "percent": 75,
          "location": "Ireland",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Wilkie's Organic",
          "ref": 1173,
          "date": 2013,
          "percent": 75,
          "location": "Ireland",
          "rating": 2.75,
          "origin": "Peru"
      },
      {
          "company": "Willie's Cacao",
          "ref": 1848,
          "date": 2016,
          "percent": 70,
          "location": "U.K.",
          "rating": 4,
          "origin": "Colombia"
      },
      {
          "company": "Willie's Cacao",
          "ref": 1227,
          "date": 2014,
          "percent": 88,
          "location": "U.K.",
          "rating": 3,
          "origin": "Colombia"
      },
      {
          "company": "Willie's Cacao",
          "ref": 1109,
          "date": 2013,
          "percent": 100,
          "location": "U.K.",
          "rating": 2.25,
          "origin": "Indonesia"
      },
      {
          "company": "Willie's Cacao",
          "ref": 593,
          "date": 2010,
          "percent": 71,
          "location": "U.K.",
          "rating": 3,
          "origin": "Madagascar"
      },
      {
          "company": "Willie's Cacao",
          "ref": 593,
          "date": 2010,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.5,
          "origin": "Venezuela"
      },
      {
          "company": "Willie's Cacao",
          "ref": 593,
          "date": 2010,
          "percent": 69,
          "location": "U.K.",
          "rating": 3.75,
          "origin": "Indonesia"
      },
      {
          "company": "Willie's Cacao",
          "ref": 457,
          "date": 2009,
          "percent": 70,
          "location": "U.K.",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Willie's Cacao",
          "ref": 457,
          "date": 2009,
          "percent": 72,
          "location": "U.K.",
          "rating": 3.25,
          "origin": "Venezuela"
      },
      {
          "company": "Wm",
          "ref": 1912,
          "date": 2016,
          "percent": 74,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Venezuela"
      },
      {
          "company": "Wm",
          "ref": 1912,
          "date": 2016,
          "percent": 76,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Bolivia"
      },
      {
          "company": "Wm",
          "ref": 1916,
          "date": 2016,
          "percent": 75,
          "location": "U.S.A.",
          "rating": 3.75,
          "origin": "Ghana"
      },
      {
          "company": "Woodblock",
          "ref": 1243,
          "date": 2014,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Woodblock",
          "ref": 1042,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Ecuador"
      },
      {
          "company": "Woodblock",
          "ref": 1042,
          "date": 2013,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Trinidad"
      },
      {
          "company": "Woodblock",
          "ref": 825,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Ecuador"
      },
      {
          "company": "Woodblock",
          "ref": 825,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Costa Rica"
      },
      {
          "company": "Woodblock",
          "ref": 951,
          "date": 2012,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Woodblock",
          "ref": 741,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 4,
          "origin": "Venezuela"
      },
      {
          "company": "Woodblock",
          "ref": 769,
          "date": 2011,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Xocolat",
          "ref": 1057,
          "date": 2013,
          "percent": 66,
          "location": "Domincan Republic",
          "rating": 3,
          "origin": "Dominican Republic"
      },
      {
          "company": "Xocolla",
          "ref": 1948,
          "date": 2017,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.75,
          "origin": "Madagascar"
      },
      {
          "company": "Xocolla",
          "ref": 1948,
          "date": 2017,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 2.5,
          "origin": "Dominican Republic"
      },
      {
          "company": "Zak's",
          "ref": 1574,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Zak's",
          "ref": 1578,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Domincan Republic"
      },
      {
          "company": "Zak's",
          "ref": 1578,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Madagascar"
      },
      {
          "company": "Zak's",
          "ref": 1578,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.25,
          "origin": "Peru"
      },
      {
          "company": "Zak's",
          "ref": 1578,
          "date": 2015,
          "percent": 70,
          "location": "U.S.A.",
          "rating": 3.5,
          "origin": "Belize"
      },
      {
          "company": "Zak's",
          "ref": 1582,
          "date": 2015,
          "percent": 60,
          "location": "U.S.A.",
          "rating": 3,
          "origin": ""
      },
      {
          "company": "Zart Pralinen",
          "ref": 1820,
          "date": 2016,
          "percent": 70,
          "location": "Austria",
          "rating": 3.5,
          "origin": "Madagascar"
      },
      {
          "company": "Zart Pralinen",
          "ref": 1824,
          "date": 2016,
          "percent": 70,
          "location": "Austria",
          "rating": 2.75,
          "origin": "Ecuador"
      },
      {
          "company": "Zart Pralinen",
          "ref": 1824,
          "date": 2016,
          "percent": 85,
          "location": "Austria",
          "rating": 2.75,
          "origin": "Trinidad"
      },
      {
          "company": "Zart Pralinen",
          "ref": 1824,
          "date": 2016,
          "percent": 85,
          "location": "Austria",
          "rating": 3,
          "origin": "Tanzania"
      },
      {
          "company": "Zart Pralinen",
          "ref": 1824,
          "date": 2016,
          "percent": 70,
          "location": "Austria",
          "rating": 3.5,
          "origin": "Tanzania"
      },
      {
          "company": "Zart Pralinen",
          "ref": 1880,
          "date": 2016,
          "percent": 78,
          "location": "Austria",
          "rating": 3.5,
          "origin": "Trinidad"
      },
      {
          "company": "Zokoko",
          "ref": 1716,
          "date": 2016,
          "percent": 78,
          "location": "Australia",
          "rating": 3.75,
          "origin": "Solomon Islands"
      },
      {
          "company": "Zokoko",
          "ref": 1780,
          "date": 2016,
          "percent": 65,
          "location": "Australia",
          "rating": 3.25,
          "origin": ""
      },
      {
          "company": "Zokoko",
          "ref": 697,
          "date": 2011,
          "percent": 68,
          "location": "Australia",
          "rating": 3.5,
          "origin": "Bolivia"
      },
      {
          "company": "Zokoko",
          "ref": 701,
          "date": 2011,
          "percent": 66,
          "location": "Australia",
          "rating": 3.5,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Zokoko",
          "ref": 701,
          "date": 2011,
          "percent": 72,
          "location": "Australia",
          "rating": 3.75,
          "origin": "Bolivia"
      },
      {
          "company": "Zotter",
          "ref": 1205,
          "date": 2014,
          "percent": 80,
          "location": "Austria",
          "rating": 2.75,
          "origin": ""
      },
      {
          "company": "Zotter",
          "ref": 801,
          "date": 2012,
          "percent": 72,
          "location": "Austria",
          "rating": 3.5,
          "origin": "Panama"
      },
      {
          "company": "Zotter",
          "ref": 801,
          "date": 2012,
          "percent": 65,
          "location": "Austria",
          "rating": 3.5,
          "origin": ""
      },
      {
          "company": "Zotter",
          "ref": 875,
          "date": 2012,
          "percent": 70,
          "location": "Austria",
          "rating": 3,
          "origin": "Peru"
      },
      {
          "company": "Zotter",
          "ref": 875,
          "date": 2012,
          "percent": 70,
          "location": "Austria",
          "rating": 3.5,
          "origin": "Peru"
      },
      {
          "company": "Zotter",
          "ref": 875,
          "date": 2012,
          "percent": 62,
          "location": "Austria",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Zotter",
          "ref": 879,
          "date": 2012,
          "percent": 75,
          "location": "Austria",
          "rating": 3,
          "origin": "Ecuador"
      },
      {
          "company": "Zotter",
          "ref": 879,
          "date": 2012,
          "percent": 75,
          "location": "Austria",
          "rating": 3,
          "origin": "Papua New Guinea"
      },
      {
          "company": "Zotter",
          "ref": 879,
          "date": 2012,
          "percent": 90,
          "location": "Austria",
          "rating": 3.25,
          "origin": "Bolivia"
      },
      {
          "company": "Zotter",
          "ref": 879,
          "date": 2012,
          "percent": 70,
          "location": "Austria",
          "rating": 3.75,
          "origin": "Dominican Republic"
      },
      {
          "company": "Zotter",
          "ref": 883,
          "date": 2012,
          "percent": 68,
          "location": "Austria",
          "rating": 3.25,
          "origin": "Congo"
      },
      {
          "company": "Zotter",
          "ref": 883,
          "date": 2012,
          "percent": 58,
          "location": "Austria",
          "rating": 3.5,
          "origin": ""
      },
      {
          "company": "Zotter",
          "ref": 647,
          "date": 2011,
          "percent": 70,
          "location": "Austria",
          "rating": 3.75,
          "origin": "Peru"
      },
      {
          "company": "Zotter",
          "ref": 749,
          "date": 2011,
          "percent": 65,
          "location": "Austria",
          "rating": 3,
          "origin": "Congo"
      },
      {
          "company": "Zotter",
          "ref": 749,
          "date": 2011,
          "percent": 65,
          "location": "Austria",
          "rating": 3.5,
          "origin": "India"
      },
      {
          "company": "Zotter",
          "ref": 781,
          "date": 2011,
          "percent": 62,
          "location": "Austria",
          "rating": 3.25,
          "origin": "India"
      },
      {
          "company": "Zotter",
          "ref": 486,
          "date": 2010,
          "percent": 65,
          "location": "Austria",
          "rating": 3,
          "origin": "Brazil"
      }
  ];

  let beeswarm2 = beeswarm1.filter(function (d, i) {
      return i < 200;
  });

  var demoData = {
      sankeyData: sankey1,
      bubbleData: bubble1,
      bubbleData2: bubble2,
      forceDirectedGraphData: forceDirected1,
      constrainedLayoutData: constrainedLayout1,
      beeswarmDataLarge: beeswarm1,
      beeswarmDataSmall: beeswarm2
  };

  return demoData;

})));
