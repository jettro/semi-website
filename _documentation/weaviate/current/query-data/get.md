---
layout: layout-documentation
product: weaviate
sub-menu: Query data
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

You can directly query the Weaviate smart graph. Finding concepts in the smart graph based on the Contextionary can be done through [exploring](explore-filter.html).

_Note: You can mix [explore](explore-filter.html) functions with regular query functions._

## Index

- [Basics](#basics)
- [Introduction](#introduction)
- [Weaviate's GraphQL function structure](#weaviates-graphql-function-structure)
- [Get{} Function](#get-function)
    - [Get{} query structure and syntax](#get-query-structure-and-syntax)
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

- _Note: This page describes the `Get{}` function. Learn more about `Explore{}` [here](./explore-filter.html), and about `Aggregate{}` [here](./aggregate.html)._

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
{% include molecule-gql-demo.html %}

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
{% include molecule-gql-demo.html %}

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
{% include molecule-gql-demo.html %}

## Frequently Asked Questions

{% include support-links.html %}