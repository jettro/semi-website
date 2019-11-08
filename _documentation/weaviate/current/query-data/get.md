---
layout: layout-documentation
product: weaviate
sub-menu: Add data
product-order: 1
title: Get
description: How to query weaviate.
tags: ['Query', 'GraphQL']
menu-order: 1
open-graph-type: article
og-img: documentation.jpg
---

# Get Guide

{% include badges.html %}

You can directly query the Weaviate knowledge graph. Finding concepts in the knowledge graph based on the Contextionary can be done through [exploring](explore.html).

_Note: You can mix [explore](explore.html) functions with regular query functions._

## Index

- [Basics](#basics)
- [Introduction](#introduction)
- [Weaviate's GraphQL function structure](#weaviates-graphql-function-structure)
- [Get{} Function](#get-function)
    - [Get{} query structure and syntax](#get-query-structure-and-syntax)
- [Filters](#filters)
    - [Simple filter](#simple-filter)
    - [Multiple filters](#multiple-filters)
    - [Beacon filter](#beacon-filter)
    - [Multiple filters and beacon filter](#multiple-filters-and-beacon-filter)
    - [Geo coordinates](#geo-coordinates-filter)
    - [Group filter](#group-filter)
    - [Explore filter](#explore-filter)
- [FAQ](#frequently-asked-questions)


## Basics

- Weaviate's query language is [GraphQL](https://graphql.org/).
- You can query a Weaviate after you've created a [schema](../add-data/define_schema.html) and [populated it](../add-data/add_and_modify.html) with data.
- You can easily query a Weaviate by using the GraphQL interface inside a [Weaviate Playground](http://playground.semi.technology).

## Introduction

You can query Weaviate for semantic kinds based on standard GraphQL queries. The examples below only contain the GraphQL query. You can POST a GraphQL query to Weaviate as follows:

```bash
$ curl http://localhost/v1/graphql -X POST -H 'Content-type: application/json' -d '{GraphQL query}'
```

## Weaviate's GraphQL function structure

The basic function structure of a Weaviate is as follows:

```graphql
{
  Get       # Gets concepts from Weaviate
  Explore   # Explores concepts within Weaviate
  Aggregate # Aggregates data from a Weaviate
}
```

- _Note: This page describes the `Get{}` function. Learn more about `Explore{}` [here](./explore.html), and about `Aggregate{}` [here](./aggregate.html)._

# Get{} Function

### Get{} query structure and syntax

The `Get{}` function is always defined based on the following principle:

```graphql
{
  Get {
    <SematicKind> {
      <Class> {
        <property>
        <PropertyWithReference>
          ... on <ClassOfBeacon> {
            <property>
          }
      }
    }
  }
}
```

A `Get{}` function is always based on the schema. For example, if you've created a schema with a class `Company` which has the properties `name` and `foundedIn`, you can query it as follows:

```graphql
{
  Get {
    Things {
      Company {
        name
        foundedIn
      }
    }
  }
}
```

The above query will result in something like the following:

```json
{
  "data": {
    "Get": {
      "Things": {
        "Company": [{
          "name": "Apple Inc.",
          "foundedIn": "1976"
        }, {
          "name": "Google LLC",
          "foundedIn": "1998"
        }, {
          "name": "Microsoft",
          "foundedIn": "1975"
        }]
      }
    }
  }
}
```

If you've set a cross-reference (aka [beacon](../about/philosophy#basic-terminology)) in the schema, you can query it as follows:

```graphql
{
  Get {
    Things {
      Company {
        name
        foundedIn
        inCountry {        # the reference
          ... on Country { # you always set the destination class
            name           # the property related to target class
          }
        }
      }
    }
  }
}
```

Note that if you've set the [cardinality](../add-data/define_schema.html#property-object) to `many`, you might have multiple data types. For example:

```graphql
{
  Get {
    Things {
      Company {
        name
        foundedIn
        sells {
          ... on Products {
            name
          }
          ... on Services {
            name
          }
        }
      }
    }
  }
}
```

## Filters

Weaviate comes with a variety of available filters. The `where` filter is an algebraic object, which takes the following arguments:

- `Operator` (which takes one of the following values)
  - `And`
  - `Or`
  - `Equal`
  - `NotEqual`
  - `GreaterThan`
  - `GreaterThanEqual`
  - `LessThan`
  - `LessThanEqual`
- `Operands`: Is a list of filter objects of this same structure.
- `Path`: Is a list of strings indicating the property name of the class. If the property is a beacon (i.e., cross-reference), the path should be followed to the property of the beacon which should be specified as a list of strings.
- `ValueInt`: The integer value where the `Path`'s last property name should be compared to.
- `ValueBoolean`: The boolean value that the `Path`'s last property name should be compared to.
- `ValueString`: The string value that the `Path`'s last property name should be compared to.
- `ValueNumber`: The number (float) value that the `Path`'s last property name should be compared to.
- `ValueDate`: The date (ISO 8601 timestamp) value that the `Path`'s last property name should be compared to.

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

### Simple filter

You can create simple filters by setting the `where` key. You always need to include the GraphQL property path, the operator type, and the valueType plus a value. You can read more about the type definitions [here](#filters).

For example, this filter selects the class Company with a higher revenue than 10.000.000.

```graphql
{
  Get {
    Things {
      Company(where: {
            path: ["revenue"],
            operator: GreaterThan
            valueInt: 10000000
        }) {
        name
        revenue
      }
    }
  }
}
```

### Multiple filters

You can set multiple operands by providing an array.

For example, these filters select based on the class Company with a revenue higher than 10.000.000 and who have less than 20.000 employees.

```graphql
{
  Get {
    Things {
      Company(where: {
        operator: And,
        operands: [{
            path: ["population"],
            operator: GreaterThan
            valueInt: 1000000
          }, {
            path: ["employees"],
            operator: LessThan,
            valueInt: 20000
          }]
        }) {
        name
      }
    }
  }
}
```

### Beacon filter

You can also search for the value of the property of a beacon.

For example, these filters select based on the class Company but who have `inCountry` set to The Netherlands.

```graphql
{
  Get {
    Things {
      Company(where: {
          path: ["inCountry", "Country", "name"],
          operator: Equal,
          valueString: "The Netherlands"
        }) {
        name
        inCountry{
          ... on Country{
            name
          }
        }
      }
    }
  }
}
```

### Multiple filters and beacon filter

You can also combine all filters into one request.

For example, these filters select based on the class Company with a higher revenue then 10.000.000, who have more than 20.000 employees and who have `inCountry` set to The Netherlands.

```graphql
{
  Get {
    Things {
      Company(where: {
        operator: GreaterThan,
        operands: [{
            path: ["population"],
            operator: GreaterThan
            valueInt: 1000000
          }, {
            path: ["employees"],
            operator: LessThan,
            valueInt: 20000
          }, {
            path: ["inCountry", "Country", "name"],
            operator: Equal,
            valueString: "The Netherlands"
          }]
        }) {
        name
        inCountry{
          ... on Country{
            name
          }
        }
      }
    }
  }
}
```

### Geo Coordinates filter

If you've set the [geo location](../add-data/define_schema.html#property-types) property type, you can search in an area based on kilometers.

For example, this curious returns all in a radius of 2KM around a specific geo-location:

```graphql
{
  Get {
    Things {
      Company(where: {
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
        path: ["geoLocation"] # property needs to be of geoLocation type.
      }) {
        name
        geoLocation {
          latitude
          longitude 
        }
      }
    }
  }
}
```

### Limit filter

A limit filter limits the number of results.

An example of a stand-alone limit filter:

```graphql
{
  Get {
    Things {
      Company(limit:5) {
        name
      }
    }
  }
}
```

An example of a combination of filters and a limit filter:

```graphql
{
  Get {
    Things {
      Company(where: {
        operator: WithinGeoRange,
        valueGeoRange: {
          geoCoordinates: {
            latitude: 52.4,
            longitude: 4.9},
          distance: {
            max:2.0
          }
        },
        path: ["geolocation"]
      },
      limit: 5) { # limit to max 5 results
        name
        geolocation {
          latitude
          longitude 
        }
      }
    }
  }
}
```

### Group filter


### Explore filter

Click [here](./explore.html#explore-filter) for more information about the explore filter.

## Frequently Asked Questions

{% include support-links.html %}