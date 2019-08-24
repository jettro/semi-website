---
layout: layout-guide
product: weaviate
product-order: 1
title: Schema
description: How to setup a weaviate schema.
tags: ['Schema']
video-link:
video-caption:
menu-order: 4
open-graph-type: article
---

# Schema Guide

A Weaviate schema is used to define what kind of [semantic kinds](./index#basic-terminology) you will be adding to a Weaviate. It will function as the overall data model.

{% include badges.html %}

## Index

- [Video Guide](#video-guide)
- [Basics](#basics)
- [Introduction](#introduction)
- [Property types](#property-types)
- [RESTful API reference](#restful-api)
- [Schema object](#schema-object)
- [Property object](#property-object)
- [Add a schema item](#add-a-schema-item)
- [Get the schema](#get-the-schema)
- [Add a property to a schema item](#add-a-property-to-a-schema-item)
- [Delete a property from a schema item](#delete-a-property-from-a-schema-item)
- [Delete a schema item](#delete-a-schema-item)

## Video Guide

If you prefer video over text, you can use the video edition of this guide.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5bqpcIX2VDQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Basics

- Words used in the schema must be part of the [contextionary](./#about-the-contextionary).
- The schema is manipulated through the RESTful API.

## Introduction

When you startup an empty Weaviate, you need to define a schema to explain what kind of data you will add. Because Weaviate is a knowledge graph, the linguistic element plays an important role. When creating concepts, Weaviate will validate if it can understand the schema concepts you want to add based on the [contextionary](./#about-the-contextionary). You might notice that a lot of definitions are related to the everyday language we use. And this is the first best practice to bear in mind. When defining the schema, you should do this in the form like you would explain it to another person, not like tables and columns you would add to a traditional data solution.

### Concepts and Their Structures

Within Weaviate you will work with **concepts**. A concept refers to something which can be **things** or **actions**. The way you will define things or actions is always the same, but conceptually, they are different.

### Classes

A concept definition is what we call a **class** and a class is always written with a capital first character. A class for a thing describes what it is in the form of a noun (e.g., Person, Product, Timezone, etcetera). For actions, this would be a verb (e.g., Move, Buy, Eats, etcetera). Bear in mind that Weaviate always validates if it contextually understands the words. If you add a thing or action that it can't recognize, it will not accept the schema.

Examples expressed in YAML might look like this:

```yaml
Company
Person
```

### Properties

Every class has a property which is always written with a lower case first character. For example, the class **Person** might have the property **name**.

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

Sometimes you might want to use multiple words to set as a class or property definition. For example, the year a person is born in, you might want to define with the two words: `born` and `in`. You can do this by capitalizing per word, for example, ` bornIn`. Weaviate will validate both words in the Contextionary.

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

### Date Type

Weaviate accepts dates formatted in following the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard.

For example: `2019-08-24T14:25:57Z`.

### Geo Coordinates Type

Weaviate allows you to store geo-coordinates related to a thing or action. When querying Weaviate, you can use this type to find items in a radius around this area.

An example of how geo coordinates are defined as:

```yaml
Bike:
  location:
    latitude: 52.366667
    longitude: 4.9
```

### Cross Reference Type

The cross-reference type is the graph element of Weaviate. When setting a data type, you can set multiple classes.

The following example is seen as a valid set of datatypes.

```yaml
properties:
  -
	dataType:
	  - Company
	  - Business
```

## RESTful API

- Weaviate uses a full RESTful API.
- Examples are described in YAML and curl, but you can use it in any application.
- The examples assume that Weaviate runs on port 80 on the localhost.
- The entry point to a Weaviate is always `/v1`.

## Schema Object

A schema object is defined as follows;

```yaml
class: string # The name of the class in string format
description: string # A description for your reference
keywords: # An array of keywords that Weaviate uses when a classname is ambigious
- keyword: string # A keyword in string format. For example, with the class "Company" you might want to add the keyword "business"
  weight: 0 # The importance of the keyword. Min 0.0 and max 1.0
properties: # An array of the properties you are adding, same as a Property Object
  -
    dataType: # The data type of the object as described above, When creating cross refferences, a property can have multiple dataTypes.
    - string
    name: string # The name of the property
    keywords: # An array of keywords that Weaviate uses when a property is ambigious
    - keyword: string # A keyword in string format.
      weight: 0 # The importance of the keyword. Min 0.0 and max 1.0
    cardinality: atMostOne OR many # Only used with cross references. Will there only be one refference made (e.g., "bornIn") or multiple ones (e.g., "hasProducts")
    description: string # A description for your reference
```

## Property Object

A property object is defined as follows;

```yaml
dataType: # The data type of the object as described above, When creating cross refferences, a property can have multiple dataTypes.
  - string
name: string # The name of the property
keywords: # An array of keywords that Weaviate uses when a property is ambigious
  - keyword: string # A keyword in string format.
    weight: 0 # The importance of the keyword. Min 0.0 and max 1.0
cardinality: atMostOne OR many # Only used with cross references. Will there only be one refference made (e.g., "bornIn") or multiple ones (e.g., "hasProducts")
description: string # A description for your reference
```

## Create a Schema Item

Adding a schema can be done by POSTing a [schema object](#schema-object) to the `/v1/schema/{semantic kind}` endpoint.

An example of creating a schema item of the semantic kind _Thing_ might look like this:

```bash
$ curl http://localhost/v1/schema/things -X POST -H 'Content-type: text/x-yaml' -d \
'class: Company
description: A company in our dataset
keywords:
- keyword: business
  weight: 0.8
properties:
- dataType:
  - string
  name: name
  keywords:
  - keyword: identifier
    weight: 0.25
  description: Name of the Company'
```

An example of creating a schema item of the semantic kind _Action_ might look like this:

```bash
$ curl http://localhost/v1/schema/actions -X POST -H 'Content-type: text/x-yaml' -d \
'class: Payment
description: "A payment that happened"
properties: 
  - 
    dataType: 
      - date
    description: "date of the payment"
    name: transactionDate
  - 
    cardinality: atMostOne
    dataType: 
      - Company
    description: "the company that receives the payment"
    name: toCompany
  - 
    cardinality: atMostOne
    dataType: 
      - Company
    description: "the company that sends the payment"
    name: fromCompany
  - 
    dataType: 
      - boolean
    description: "was the payment succesful?"
    name: wasSuccesful'
```

## Get the Schema

The current schema can be viewed as follows:

```bash
$ curl http://localhost/v1/schema
```

## Add a property to a Schema item

Adding a schema can be done by POSTing a [property object](#property-object) to the `/v1/schema/{semantic kind}/{class name}/properties` endpoint.

An example of adding a schema item of the semantic kind _Thing_ might look like this:

```bash
$ curl http://localhost/v1/schema/actions/Company/properties -X POST -H 'Content-type: text/x-yaml' -d \
'dataType:
  - geoCoordinates
name: location
keywords:
  - keyword: geoLocation
    weight: 0.8
description: "The location of the company"'
```

An example of adding a schema item of the semantic kind _Action_ might look like this:

```bash
$ curl http://localhost/v1/schema/actions/Payment/properties -X POST -H 'Content-type: text/x-yaml' -d \
'dataType:
  - number
name: amount
keywords:
  - keyword: value
    weight: 0.8
description: "The amount paid"'
```

## Delete a property from a schema item

Deleting a schema property can be done by sending a DELETE request to `/v1/schema/{semantic kind}/{class name}/properties/{property name}` endpoint.

An example of deleting a property item of the semantic kind _Thing_ might look like this:

```bash
$ curl http://localhost/v1/schema/things/Company/properties/name -X DELETE
```

An example of deleting a property item of the semantic kind _Action_ might look like this:

```bash
$ curl http://localhost/v1/schema/actions/Payment/properties/transactionDate -X DELETE
```

## Delete a schema item

Deleting a schema class can be done by sending a DELETE request to `/v1/schema/{semantic kind}/{class name}` endpoint.

An example of deleting a schema class item of the semantic kind _Thing_ might look like this:

```bash
$ curl http://localhost/v1/schema/things/Company -X DELETE
```

An example of deleting a schema class item of the semantic kind _Action_ might look like this:

```bash
$ curl http://localhost/v1/schema/actions/Payment -X DELETE
```