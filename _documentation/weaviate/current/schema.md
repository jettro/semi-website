---
layout: layout-documentation
product: weaviate
product-order: 1
title: Schema
description: How to setup a weaviate schema.
tags: ['Schema']
menu-order: 6
open-graph-type: article
og-img: documentation.jpg
---

# Schema Guide

{% include badges.html %}

A Weaviate schema is used to define what kind of [semantic kinds](./index.html#basic-terminology) you will be adding to a Weaviate. It will function as the overall data model.

## Index

- [Video tutorial](#video-tutorial)
- [Basics](#basics)
- [Introduction](#introduction)
- [Defining Objects](#defining-objects)
- [RESTful API](#restful-api)
- [Get the schema](#get-the-schema)
- [Create a schema item](#create-a-schema-item)
- [Delete a schema item](#delete-a-schema-item)
- [Add a property to a schema item](#add-a-property-to-a-schema-item)
- [Delete a property from a schema item](#delete-a-property-from-a-schema-item)
- [FAQ](#frequently-asked-questions)

## Video Tutorial

Do you prefer video over text or do you want more background information?

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/xxRl5lATkuo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Basics

- A schema consists of classes and properties.
- Things are distinguished from Actions in schema classes.
- Words used in the schema must be part of the [contextionary](./#about-the-contextionary).
- The schema can be modified through the RESTful API.

## Introduction

When you startup an empty Weaviate, you need to define a schema to explain what kind of data you will add. Because Weaviate is a knowledge graph, the linguistic element plays an important role. When creating concepts, Weaviate will validate if it can understand the schema concepts you want to add based on the [contextionary](./#about-the-contextionary). You might notice that a lot of definitions are related to the everyday language we use. And this is the first best practice to bear in mind. When defining the schema, you should do this in the form like you would explain it to another person, not like tables and columns you would add to a traditional data solution.

### Concepts and their Structures

Within Weaviate you will work with **concepts**. A concept refers to something which can be **things** or **actions**. The way you will define things or actions is always the same, but conceptually, they are different.

### Classes

A concept definition is what we call a **class** and a class is always written with a **capital first character**. A class for a thing describes what it is in the form of a noun (e.g., *Person*, *Product*, *Timezone*, etcetera). For actions, this would be a verb (e.g., *Move*, *Buy*, *Eat*, etcetera). Bear in mind that Weaviate always validates if it contextually understands the words. If you add a thing or action that it can't recognize, it will not accept the schema.

Examples expressed in YAML might look like this:

```yaml
Company
Person
City
```

### Properties

Every class has properties, which are always written with a **lower case first character**. For example, the class **Person** might have the property **name**.

Examples expressed in YAML might look like this:

```yaml
Company
    name
    industry
Person
    name
    nickname
    email
City
    name
```

### Keywords

Keywords give context to a class or property. They help a Weaviate instance to interpret different words that are spelled the same way (so-called homographs). A good example of this is the word seal. Do you mean a stamp or the sea animal? You can define this by setting keywords. The weights determine how important the keyword is. Setting low values is often already enough to determine the context of a thing or action.

```yaml
class: Company
description: A company in the army
keywords:
- keyword: army
  weight: 1.0
- keyword: militaryUnit
  weight: 0.75
```

### Weaviate Schema versus Ontology

Because Weaviate uses the [Contextionary](./index.html#about-the-contextionary) to index data, the use of the schema becomes fuzzy. This means that a reference formatted like this: `{Class} {property} {value}` (e.g., `a Company with the name Apple`) is semantically similar to `a Business with the label Apple Inc.`

Within Weaviate, the schema is _only_ used to define the query and explore syntax.

## Defining objects

### Schema object

A schema object is defined as follows;

```js
{
  "class": "string",       // The name of the class in string format
  "description": "string", // A description for your reference
  "keywords": [            // An array of keywords that Weaviate uses when a classname is ambigious
    {
      "keyword": "string", // A keyword in string format. For example, with the class "Company" you might want to add the keyword "business"
      "weight": 0.0        // The importance of the keyword. Min 0.0 and max 1.0
    }
  ],
  "properties": [          // An array of the properties you are adding, same as a Property Object
    {
      "dataType": [        // The data type of the object as described above, When creating cross references, a property can have multiple dataTypes.
        "string"
      ],
      "name": "string",    // The name of the property
      "keywords": [        // An array of keywords that Weaviate uses when a property is ambigious
        {
          "keyword": "string", // A keyword in string format.
          "weight": 0.0        // The importance of the keyword. Min 0.0 and max 1.0
        }
      ],
      "cardinality": "atMostOne OR many", // Only used with cross references. Will there only be one refference made (e.g., "bornIn") or multiple ones (e.g., "hasProducts")
      "description": "string"             // A description for your reference
    }
  ]
}
```

### Property Object

A property object is defined as follows;

```js
{
  "dataType": [     // The data type of the object as described above, When creating cross refferences, a property can have multiple dataTypes.
    "string"
  ],
  "name": "string", // The name of the property
  "keywords": [     // An array of keywords that Weaviate uses when a property is ambigious
    {
      "keyword": "string", // A keyword in string format.
      "weight": 0.0        // The importance of the keyword. Min 0.0 and max 1.0
    }
  ],
  "cardinality": "atMostOne OR many", // Only used with cross references. Will there only be one refference made (e.g., "bornIn") or multiple ones (e.g., "hasProducts")
  "description": "string"             // A description for your reference
}
```

### Concetenate Classes and Properties

Sometimes you might want to use multiple words to set as a class or property definition. For example, the year a person is born in, you might want to define with the two words: `born` and `in`. You can do this by capitalizing per word (CamelCase), for example, `bornIn`. Weaviate will validate both words in the Contextionary.

Examples expressed in YAML might look like this:

```yaml
Company
    name
    industry
    foundedIn
Person
    name
    nickname
    email
    bornIn
City
    name
    isCapital
```

[Keywords](#keywords) cannot be chained, they have to match exactly one word. However, there is no limit on the amount of keywords per class or per class property.

### Stopwords

Note that stopwords automatically removed from camelCased and CamelCased names.

### What stopwords are and why they matter

Stopwords are words that don't add semantic meaning to your concepts and are
extremely common in texts across different contexts. For example, the sentence
"a car is parked on the street" contains the following stopwords: "a", "is",
"on", "the". If we look at the sentence "a banana is lying on
the table", you would find the exact same stop words. So in those two sentences
over 50% of the words overlap. Therefore they would be considered somewhat
similar (based on the overall vector position).

However, if we remove stopwords from both sentences, they become "car parked
street" and "banana lying table". Suddently there are 0% identical words in the
sentences, so it becomes easier to perform vector comparisons. Note at this
point we cannot say whether both sentences are related or not. For this we'd
need to know how close the vector position of the sentence "car parked street"
is to the vector position of "banana lying table". But we do know that the
result can now be calculated with a lot less noise.

### Behavior around stop words

Stopwords are useful for humans, so we don't want to encourage you to leave
them out completely. Instead weaviate will remove them whenever your schema
information is translated to vector positions.

In most cases you won't even notice that this happens in the background,
however, there are a few edge cases that might cause a validation error:

* If your camelCased class or property name consists **only** of stopwords,
  validation will fail. Example: `TheInA` is not a valid class name, however,
  `TheCarInAField` is (and would internally be represented as `CarField`).

* If your keyword list contains stop words, they will be removed. However, if
  every single keyword is a stop word, validation will fail.

### How does weaviate decide wether a word is a stop word or not?

The list of stopwords is derived from the contextionary version used and is
published alongside the contextionary files.

Check the [contextionary](./contextionary) or a list of stopwords using
the desired language and version. For example, to see the stopwords used in the
english language contextionary version 0.5.0, check
[https://c11y.semi.technology/0.5.0/en/stopwords.json](https://c11y.semi.technology/0.5.0/en/stopwords.json).

### Property Types

When creating a property, Weaviate needs to know what type of data you will give it. Weaviate accepts the following types:

| Weaviate Type | Exact Data Type | Formatting |
| ---------|--------|-----------|
| string   | string | `string` |
| int      | int64  | `0` |
| boolean  | boolean | `true`/`false` |
| number   | float64 | `0.0` |
| date     | string | [more info](#) |
| text     | text   | `string` |
| geoCoordinates | string | [more info](#geo-coordinates-type) |
| CrossRef | string | [more info](#cross-reference-type) |

#### Date Type

Weaviate accepts dates formatted in following the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard.

For example: `2019-08-24T14:25:57Z`.

#### Geo Coordinates Type

Weaviate allows you to store geo-coordinates related to a thing or action. When querying Weaviate, you can use this type to find items in a radius around this area.

An example of how geo coordinates are defined as:

```json
{
  "Bike": {
    "location": {
      "latitude": 52.366667,
      "longitude": 4.9
    }
  }
}
```

#### Cross Reference Type

The cross-reference type is the graph element of Weaviate. When setting a data type, you can set multiple classes.

The following example is seen as a valid set of datatypes.

```json
{
  "properties": [
    {
      "dataType": [
        "Company",
        "Business"
      ]
    }
  ]
}
```

### Cardinality 

A property's `dataType` is always set as one (`atMostOne`) meaning that it can
have only one type (or class) to direct to. However, when setting cross-references, you
sometimes want to be able to point to multiple things or action classes.

For example, the class `Company` might have the property `hasCustomer` which can be
a cross-reference to other compannies as well as businesses and individual persons. When using GraphQL to retrieve data
from the graph, the cardinality will determine how the query is constructed.

```json
{
  "class": "Company",
  "description": "A company in our dataset",
  "keywords": [],
  "properties": [
    {
      "name": "hasCustomer",
      "dataType": [
        "Company",
        "Person",
        "Business"
      ],
      "cardinality": "many",
      "description": "An entity that buys from this company",
      "keywords": []
    }
  ]
}
```

## RESTful API

- Weaviate uses a full RESTful API.
- Examples are described in YAML and curl, but you can use it in any application.
- The examples assume that Weaviate runs on port 80 on the localhost without authentication.
- The entry point to a Weaviate is always `/v1`.

## Get the Schema

The current schema can be viewed as follows:

```bash
$ curl http://localhost:8080/v1/schema
```

## Create a Schema Item

Adding a schema can be done by POSTing a [schema object](#schema-object) to the `/v1/schema/{semantic kind}` endpoint.

An example of creating a schema item of the semantic kind _Thing_ might look like this:

```bash
$ curl http://localhost:8080/v1/schema/things -X POST -H 'Content-type: application/json' -d \
'{
  "class": "Company",
  "description": "A company in our dataset",
  "keywords": [
    {
      "keyword": "business",
      "weight": 0.8
    }
  ],
  "properties": [
    {
      "dataType": [
        "string"
      ],
      "name": "name",
      "keywords": [
        {
          "keyword": "identifier",
          "weight": 0.25
        }
      ],
      "description": "Name of the Company"
    }
  ]
}'
```

An example of creating a schema item of the semantic kind _Action_ might look like this. Note that the properties `fromCompany` and `toCompany` are cross-references to the class `Company`:

```bash
$ curl http://localhost:8080/v1/schema/actions -X POST -H 'Content-type: application/json' -d \
'{
  "class": "Payment",
  "description": "A payment that happened",
  "properties": [
    {
      "dataType": [
        "date"
      ],
      "description": "date of the payment",
      "name": "transactionDate"
    },
    {
      "cardinality": "many",
      "dataType": [
        "Company"
      ],
      "description": "the company that receives the payment",
      "name": "toCompany"
    },
    {
      "cardinality": "atMostOne",
      "dataType": [
        "Company"
      ],
      "description": "the company that sends the payment",
      "name": "fromCompany"
    },
    {
      "dataType": [
        "boolean"
      ],
      "description": "was the payment succesful?",
      "name": "success"
    }
  ]
}'
```

## Delete a schema item

Deleting a schema class can be done by sending a DELETE request to `/v1/schema/{semantic kind}/{class name}` endpoint.

An example of deleting a schema class item of the semantic kind _Thing_ might look like this:

```bash
$ curl http://localhost:8080/v1/schema/things/Company -X DELETE
```

An example of deleting a schema class item of the semantic kind _Action_ might look like this:

```bash
$ curl http://localhost:8080/v1/schema/actions/Payment -X DELETE
```

## Add a property to a Schema item

Adding a schema can be done by POSTing a [property object](#property-object) to the `/v1/schema/{semantic kind}/{class name}/properties` endpoint.

An example of adding a schema item of the semantic kind _Thing_ might look like this:

```bash
$ curl http://localhost:8080/v1/schema/things/Company/properties -X POST -H 'Content-type: application/json' -d \
'{
  "dataType": [
    "geoCoordinates"
  ],
  "name": "location",
  "keywords": [
    {
      "keyword": "geoLocation",
      "weight": 0.8
    }
  ],
  "description": "The location of the company"
}'
```

An example of adding a schema item of the semantic kind _Action_ might look like this:

```bash
$ curl http://localhost:8080/v1/schema/actions/Payment/properties -X POST -H 'Content-type: application/json' -d \
'{
  "dataType": [
    "number"
  ],
  "name": "amount",
  "keywords": [
    {
      "keyword": "value",
      "weight": 0.8
    }
  ],
  "description": "The amount paid"
}'
```

## Delete a property from a schema item

Deleting a schema property can be done by sending a DELETE request to `/v1/schema/{semantic kind}/{class name}/properties/{property name}` endpoint.

An example of deleting a property item of the semantic kind _Thing_ might look like this:

```bash
$ curl http://localhost:8080/v1/schema/things/Company/properties/name -X DELETE
```

An example of deleting a property item of the semantic kind _Action_ might look like this:

```bash
$ curl http://localhost:8080/v1/schema/actions/Payment/properties/transactionDate -X DELETE
```

## Frequently Asked Questions

{% include support-links.html %}