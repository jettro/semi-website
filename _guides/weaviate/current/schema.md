---
layout: layout-guide
product: weaviate
product-order: 1
title: Schema
description: How to setup a weaviate schema.
tags: ['Installation', 'Schema']
video-link:
video-caption:
menu-order: 4
open-graph-type: article
---

# Schema Guide

A Weaviate schema is used to define what kind of [semantic kinds](./index#basic-terminology) you will be adding to a Weaviate.

{% include badges.html %}

## Index

- [Video Guide](#video-guide)
- [Basics](#basics)
- [Introduction](#introduction)
- [Property Types](#property-types)
- [RESTful API reference](#restful-api)
- [Example Requests](#example-requests)

## Video Guide

If you prefer video over text, you can use the video edition of this guide.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5bqpcIX2VDQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Basics

- ...
- ...

## Introduction

When you startup an empty Weaviate, you need to define a schema to explain what kind of data you will add. Because Weaviate is a knowledge graph, the linguistic element plays an important role when creating concepts Weaviate will validate if it can understand the schema concepts you want to add based on the [Contextionary](#). You might notice that a lot of defintions are related to everyday language we use. And this is the first best practice to bear in mind. When defining the schema, you should do this in the form like you would explain it to antother person, not like tables and columns you would add to a traditional data solution.

### Concepts and Their Structures

Within Weaviate you will work with **concepts**. A concept makes a reference to something which can be **things** or **actions**. The way you will define things or actions is always the same, but conceptually they are different.

### Classes

A concept definition is what we call a **class** and a class is always written with a capital first character. A class for a thing descripbes what it is in the form of a noun (e.g., Person, Product, Timezone, etcetera). For actions this would be verb (e.g., Move, Buy, Eats, etcetera). Bear in mind that Weaviate always valiates if it contextioally understands the words. If you add a thing or action that it can't rocgnize it will not accept the schema.

Examples expressed in YAML might look like this:

```yaml
Company
Person
```

### Properties

Every class has a property which is always written with a lower case first character. For example the class **Person** might have the property **name**.

Examples expressed in YAML might look like this:

```yaml
Company
    name
    industry
Person
    name
    nickname
    email
```

### Concetenate Classes and Proerties

Sometimes you might want to use multiple words to set as a class or property definition. For example the year a person is born in you might want to define with the two words: `born` and `in`. You can do this by capitalizing per word, for example `bornIn`. Weaviate will validate both words in the Contextionary.

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
```

## Property Types

When creating a property Weaviate needs to know what type of data you will give it. Weaviate accepts the following types:

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

### Date Type

Weaviate accepts dates formatted in following the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard.

For example: `1-1-1`.

### Geo Coordinates Type

Weaviate allows you to store geo coordinates related to a thing or action. When querying Weaviate, you can use this type to certain for distances or in certain areas.

An example of how geo coordinates are defined as:

```yaml
Bike:
    location:
        latitude: 52.366667
        longitude: 4.9
```

### Cross Reference Type

The cross reference type is the graph element of Weaviate. Weaviate has two types of references, direct references to point to a thing or action directly or a...
EDIT THIS

#### Direct References

A direct reference connects a concept directly to another concept. The use case for this type of reference is that you want to want to make 100% sure that you make a correct reference. A Person to a BankAccount might be an example.

References are always set like this:

```yaml
...
```

#### Indirect References

Indirect references tap into the natural language processing part of Weaviate. You can set a reference to something that is _close enough_ for Weaviate to recognize it. The use case here is that if you have multiple data entries that describe the same thing, it will help Weaviate recognize the entry and make the relations for you.

Concider the following two entries that might be in you database:

```yaml
Company:
    name: Apple
    hasCeo:
        name: Tim Cook
```

and

```yaml
Person:
    name: Timmothy Cook
```

Although the references are not identical, this is enough for Weaviate to conncet the two data items to eachother when searching.

### Cross Reference Location (URL)

Weaviate uses it's own transportaion schema. A URL is always defined in the same way;

| schema | location | concept | UUID |
| ------ | -------- | ------- | ---- |
| `weaviate://` | `localhost` or `peername` | `things` or `actions` | UUID |

For example:

```bash
weaviate://localhost/things/6406759e-f6fb-47ba-a537-1a62728d2f55
```

## RESTful API

- Weaviate uses a full RESTful API. For you convenience you can find the complete OpenAPI schema for this version [here](#).
- Examples are described in JSON and curl but you can use it in any application.
- The examples assume that Weaviate runs on port 80 on the localhost.
- The entrypoint to a Weaviate is always `/v1`.

### Add a Schema Item

Adding a schema can be done by POSTing to the schema endpoint. A schema item always concists of the following schema definition:

```json
{
	"class": "string", // The name of the class in string format
	"description": "string", // A description for your reference
	"keywords": [{  // an array of keywords that Weaviate uses when a classname is ambigious
		"keyword": "string", // a keyword in string format. For example, with the class "Company" you might want to add the keyword "business"
		"weight": 0.0 // the importance of the keyword. Min 0.0 and max 1.0
	}],
	"properties": [{ // An array of the properties you are adding
		"dataType": [ // the data type of the object as described above, When creating cross refferences, a property can have multiple dataTypes.
			"string"
		],
		"cardinality": "atMostOne OR many", // Only used with cross refferences. Will there only be one refference made (e.g., "bornIn") or multiple ones (e.g., "hasProducts")
		"description": "Name of the Zoo", // A description for your reference
		"name": "string", // the name of the property
		"keywords": [{ // an array of keywords that Weaviate uses when a property is ambigious
			"keyword": "identifier",  // a keyword in string format.
			"weight": 0.0 // the importance of the keyword. Min 0.0 and max 1.0
		}]
	}]
}
```

An example of creating a schema Thing-item might look like this:

```bash
$ curl http://localhost/v1/schema/things -X POST -d '{
	"class": "Product",
	"description": "A product in our catalog", 
	"keywords": [{
		"keyword": "item",
		"weight": 0.2
	}],
	"properties": [{
		"dataType": [
			"string"
		],
		"description": "Name of the Product",
		"name": "name",
		"keywords": [{
			"keyword": "identifier",
			"weight": 0.25
		}]
	}]
}'
```

You can also update the schema by adding a property later on:

## Example Requests

...