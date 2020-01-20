---
layout: layout-documentation
product: weaviate
sub-menu: Query data
product-order: 1
title: Filters
description: How to filter queries to weaviate.
tags: ['Query', 'GraphQL', 'Filter']
menu-order: 6
open-graph-type: article
og-img: documentation.jpg
---

# Filter

{% include badges.html %}

Filters can be set to order or sort your dataset or to find specific data objects. Some filters are available in multiple functions where others are only available in specific ones.

## Index

- [Basics](#basics)
- [Introduction](#introduction)
- [Where filter](#where-filter)
  - [Operator filter](#operator-filter)
  - [Multiple operator filters](#multiple-operator-filters)
  - [Like operator](#like-operator)
  - [Beacon filters operator](#like-operator)
- [GeoCoordinates filter](#geocoordinates-filter)
- [Limit filter](#limit-filter)
- [Explore filter](#explore-filter)
  - [Get function](#get-function)
- [Group filter](#group-filter)
  - [Types of grouping](#types-of-grouping)
- [GroupBy filter](#groupby-filter)
- [More resources](#more-resources)

## Basics

- Weaviate filters are always used inside one of the following functions:
  - [`Get{}`](./get.html)
  - [`Explore{}`](./explore.html)
  - [`Aggregate{}`](./aggregate.html)
- Some filters can be used with multiple functions.

## Introduction

Filters can be set to order or sort your dataset or to find specific data objects. Some filters are available in multiple functions where others are only available in specific ones.

## Where filter

Supported by the `Get{}` and `Aggregate{}` function.

The `where` filter is an [algebraic object](https://en.wikipedia.org/wiki/Algebraic_structure), which takes the following arguments:

- `Operator` (which takes one of the following values)
  - `And`
  - `Or`
  - `Equal`
  - `NotEqual`
  - `GreaterThan`
  - `GreaterThanEqual`
  - `LessThan`
  - `LessThanEqual`
  - `Like`
- `Operands`: Is a list of filter objects of this same structure.
- `Path`: Is a list of strings indicating the property name of the class. If the property is a beacon (i.e., cross-reference), the path should be followed to the property of the beacon which should be specified as a list of strings.
- `valueInt`: The integer value where the `Path`'s last property name should be compared to.
- `valueBoolean`: The boolean value that the `Path`'s last property name should be compared to.
- `valueString`: The string value that the `Path`'s last property name should be compared to.
- `valueNumber`: The number (float) value that the `Path`'s last property name should be compared to.
- `valueDate`: The date (ISO 8601 timestamp) value that the `Path`'s last property name should be compared to.

```graphql
{
  Get {
    <SematicKind> {
      <Class>(where: {
          operator: <operator>,
          operands: [{
            path: [path],
            operator: <operator>
            <valueType>: <value>
          }, {
            path: [<matchPath>],
            operator: <operator>,
            <valueType>: <value>
          }]
        }) {
        <propertyWithBeacon> {
          <property>
          ... on <ClassOfWhereBeaconGoesTo> {
            <propertyOfClass>
          }
        }
      }
    }
  }
}
```

### Operator filter

You can create operator filters by setting the `where` key. You always need to include the GraphQL property path, the operator type, and the valueType plus a value. You can read more about the type definitions [here](#where-filter).

For example, this filter selects articles from the class Article with a wordcount higher than 1000.

```graphql
{
  Get {
    Things {
      Article(where: {
            path: ["wordCount"],    # Path to the property that should be used
            operator: GreaterThan,  # operator
            valueInt: 1000          # value (which is always = to the type of the path property)
        }) {
        name
      }
    }
  }
}
```
{% include molecule-gql-demo.html %}

### Multiple operator filters

You can set multiple operands by providing an array.

For example, these filters select based on the class Article with a wordCount higher than 1000 and who are published before January 1st 2020. Note that you can filter a date and time just similar to numbers, with the `valueDate` given as `string`. 

```graphql
{
  Get {
    Things {
      Article(where: {
        operator: And,
        operands: [{
            path: ["wordCount"],
            operator: GreaterThan
            valueInt: 1000
          }, {
            path: ["publicationDate"],
            operator: LessThan,
            valueDate: "2020-01-01T00:00:00"
          }]
        }) {
        name
      }
    }
  }
}
```
{% include molecule-gql-demo.html %}

### Like operator

Using the `Like` operator allows you to do string searches based on partial match. For example, wildcard searches are possible: 

``` graphql
{
  Get {
    Things {
      Publication(where: {
            path: ["name"],
            operator: Like,
            valueString: "New *"
        }) {
        name
      }
    }
  }
}
```

{% include molecule-gql-demo.html %}

This query would return both the publications with the name `New Yorker`, `New York Times` and `New Scientist` if they are present in the Weaviate instance.

### Beacon filters

You can also search for the value of the property of a beacon.

For example, these filters select based on the class Article but who have `inPublication` set to The New Yorker.

```graphql
{
  Get {
    Things {
      Article(where: {
          path: ["inPublication", "Publication", "name"],
          operator: Equal,
          valueString: "The New Yorker"
        }) {
        name
        inPublication{
          ... on Publication{
            name
          }
        }
      }
    }
  }
}
```
{% include molecule-gql-demo.html %}

You can also combine all filters into one request.

For example, these filters select based on the class Article with a wordcount higher then 1000, published before January 1st 2020 and who have `inPublication` set to The New Yorker.

```graphql
{
  Get {
    Things {
      Article(where: {
        operator: And,
        operands: [{
            path: ["wordCount"],
            operator: GreaterThan
            valueInt: 1000
          }, {
            path: ["publicationDate"],
            operator: LessThan,
            valueDate: "2020-01-01T00:00:00"
          },{
            path: ["inPublication", "Publication", "name"],
            operator: Equal,
            valueString: "The New Yorker"
          }]
        }) {
        name
        inPublication{
          ... on Publication{
            name
          }
        }
      }
    }
  }
}
```
{% include molecule-gql-demo.html %}

## GeoCoordinates filter

Supported by the `Get{}` function.

If you've set the [geoCoordinates](../add-data/define_schema.html#property-types) property type, you can search in an area based on kilometers.

For example, this curious returns all in a radius of 2KM around a specific geo-location:

```graphql
{
  Get {
    Things {
      Publication(where: {
        operator: WithinGeoRange,
        valueGeoRange: {
          geoCoordinates: {
            latitude: 52.4,   # latitude
            longitude: 4.9    # longitude
          },
          distance: {
            max: 2000           # distance in meters
          }
        },
        path: ["headquartersGeoLocation"] # property needs to be of geoLocation type.
      }) {
        name
        headquartersGeoLocation {
          latitude
          longitude 
        }
      }
    }
  }
}
```
{% include molecule-gql-demo.html %}

## Limit filter

Supported by the `Get{}`, `Explore{}` and `Aggregate{}` function.

A limit filter limits the number of results.

An example of a stand-alone limit filter:

```graphql
{
  Get {
    Things {
      Article(limit:5) {
        name
      }
    }
  }
}
```

## Explore filter

Supported by the `Get{}` and `Explore{}` function.

You can use an explore filter to find concepts in your dataset.

### Get function

The `explore{}` filter is structured as follows for the `Get{}` function:

```json
{
  Get{
    <SematicKind>{
      <Class>(
        explore: {
          concepts: [<String>]!   # Required; an array of concepts.
          moveAwayFrom: {         # Concepts the user wants to move away from.
            concepts: [<String>]! # Required; an array of concepts.
            force: <Float>!       # Required; a force between 0 and 1.0 that moves away from the core concept.
          },
          moveTo: {               # Concepts the user wants to move towards.
            concepts: [<String>]! # Required; an array of concepts.
            force: <Float>!       # Required; a force between 0 and 1.0 that moves away from the core concept.
          }
        }
      ){
        <property>
      }
    }
  }
}
```

Note that all words in the `concepts` argument array should be present in the Contextionary.

An example query:

```graphql
{
  Get{
    Things{
      Article(
        explore: {
          concepts: ["Joker"],
          moveAwayFrom: {
            concepts: ["cardgame"],
            force: 0.9
          },
          moveTo: {
            concepts: ["movie"],
            force: 0.85
          }
        }
      ){
        name
      }
    }
  }
}
```
{% include molecule-gql-demo.html %}

## Group filter

Supported by the `Get{}` function.

You can use a group filter to combine similar concepts (aka _entity merging_).

The `group{}` filter is structured as follows for the `Get{}` function:

```json
{
  Get{
    <SematicKind>{
      <Class>(
        group: {
          type: <String>  # "closest" or "merge"
          force: <Number> # percentage as float (0.75 = 75%) how closely merge items should be related       
        }
      ){
        <property>
      }
    }
  }
}
```

Note that all words in the `concepts` argument array should be present in the Contextionary.

An example query:

```graphql
{
  Get {
    Things {
      Publication(
        group:{
          type: merge
          force:0.05
        }
      ) {
        name
      }
    }
  }
}

```
{% include molecule-gql-demo.html %}

### Types of grouping

There are two ways of grouping objects with a semantic similarity together.

- `closest`, which shows the one result closest to the others.
- `merge`, which merges all results into one.

## GroupBy filter

Supported by the `Aggregate{}` function.

You can use a groupBy filter to get meta information about groups of dataobjects.

The `group{}` filter is structured as follows for the `Get{}` function:

```json
{
  Aggregate {
    <SematicKind> {
      <Class> ( groupBy: ["<propertyName>"] ) {
        groupedBy {
            path
            value
        }
        meta {
          count
        }
        <propertyName> {
          count
        }
      }
    }
  }
}
```

In the following example, the articles are grouped by the property `isAccessible`, where one group contains accessible artibles, and the second group contains articles of which the `isAccessible` property is set to False.

```graphql
{
  Aggregate {
    Things {
      Article (groupBy:["isAccessible"]) {
        meta {
          count
        }
        wordCount {
          mean
        }
        groupedBy {
          value
          path
        }
      }
    }
  }
}
```
{% include molecule-gql-demo.html %}

## More Resources

{% include support-links.html %}