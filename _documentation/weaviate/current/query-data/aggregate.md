---
layout: layout-documentation
product: weaviate
sub-menu: Query data
product-order: 1
title: Aggregate
description: How to work with Weaviate's Aggregate function.
tags: ['Aggregate', 'GraphQL']
menu-order: 3
open-graph-type: article
og-img: documentation.jpg
---

# Aggregation Guide

{% include badges.html %}

You can use Weaviate's `Aggregation{}` function to obtain meta information about collections of data.

## Index

- [Basics](#basics)
- [Introduction](#introduction)
  - [Define a query](#define-a-query)
- [Aggregate{} Function](#aggregate-function)
- [FAQ](#frequently-asked-questions)

## Basics

- You can use the `Aggregate{}` function to get meta information about filtered groups in the data.
- Some aggregate functions have (semantic) [filters](./filters.html) available.

## Introduction

The `Aggregate{}` function can be used if you want to obtain meta information about the dataobjects in a Weaviate instance. Metainformation can be queried over all objects in a class (see [Aggregate function](#aggregate-function)), or by groups in a class.

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

## Aggregate Function

The `Aggregate{}` function is structured the following:

```graphql
{
  Aggregate {
    <SematicKind> {
      <Class> {
        groupedBy {
            path
            value
        }
        meta {
          count
        }
        <propertyOfDatatypeString> {
            count
            type
            topOccurrences {
                value
                occurs
            }
        }
        <propertyOfDatatypeText> {
            count
            type
            topOccurrences {
                value
                occurs
            }
        }
        <propertyOfDatatypeNumberOrInteger> {
            count
            type
            minimum
            maximum
            mean
            median
            mode
            sum
        }
        <propertyOfDatatypeBoolean> {
            count
            type
            totalTrue
            totalFalse
            percentageTrue
            percentageFalse
        }
        <PropertyWithReference>
          pointingTo
          type
      }
    }
  }
}
```

An example query to obtain meta information about the data in the class `City` can be queried as follows. Note that the data is not grouped yet, the meta information is about all the data objects found with the class `City`.

```graphql
{
  Aggregate {
    Things {
      Article {
        meta {
          count
        }
        InPublication {
          pointingTo
          type
        }
        name {
          count
          type
          topOccurrences {
            occurs
            value
          }
        }
        wordCount {
          count
          maximum
          mean
          median
          minimum
          mode
          sum
          type
        }
      }
    }
  }
}
```
{% include molecule-gql-demo.html %}

## Frequently Asked Questions

{% include support-links.html %}
