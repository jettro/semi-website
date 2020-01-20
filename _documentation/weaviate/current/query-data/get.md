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

The `Get{}` function is Weaviate's bread and butter. The most direct way to access data.

## Index

- [Basics](#basics)
- [Introduction](#introduction)
  - [Define a query](#define-a-query)
  - [Work with graph beacons](#work-with-graph-beacons)
- [Get{} Function](#get-function)
- [FAQ](#frequently-asked-questions)

## Basics

- Weaviate's query language is [GraphQL](https://graphql.org/).
- You can query a Weaviate after you've created a [schema](../add-data/define_schema.html) and [populated it](../add-data/add_and_modify.html) with data.
- You can easily query a Weaviate by using the GraphQL interface inside a [Weaviate Playground](http://playground.semi.technology).
- Some functions have (semantic) [filters](./filters.html) available.

## Introduction

The `Get{}` function is the most straight-ahead function Weaviate has. It is the most direct wat to collect data from a weaviate. Especially when you combine them with [filters](#filters), you can easily browse your Weaviate.

### Define a query

You can query Weaviate for semantic kinds based on standard GraphQL queries. The examples below only contain the GraphQL query. You can POST a GraphQL query to Weaviate as follows:

```bash
$ curl http://localhost/v1/graphql -X POST -H 'Content-type: application/json' -d '{GraphQL query}'
```

A GraphQL JSON object is defined as:

```json
{
    "query": "{ # GRAPHQL QUERY }"
}
```

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

A `Get{}` function is always based on the schema. For example, if you've created a schema with a class `Articles` which has the properties `name` and `publicationDate`, you can query it as follows:

```graphql
{
  Get {
    Things {
      Articles {
        title
        url
        wordCount
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
        "Articles": [{
          "title": "“Joker” Is a Viewing Experience of Rare, Numbing Emptiness",
          "url": "https://www.newyorker.com/culture/the-front-row/joker-is-a-viewing-experience-of-rare-numbing-emptiness",
          "wordCount": 1794
        }]
      }
    }
  }
}
```

### Work with graph beacons

If you've set a [beacon reference](../about/philosophy#basic-terminology) in the schema, you can query it as follows:

```graphql
{
  Get {
    Things {
      Articles {
        title
        url
        wordCount
        inPublication {           # the reference
          ... on Publication {    # you always set the destination class
            name                  # the property related to target class
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
      Articles {
        title
        url
        wordCount
        hasAuthors {
          ... on Author {
            name
          }
          ... on Publication {
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