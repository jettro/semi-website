---
layout: layout-guide
product: weaviate
product-order: 1
title: Aggregate data
description: How to work with Weaviate's Aggregate function.
tags: ['Aggregate', 'GraphQL']
video-link:
video-caption:
menu-order: 10
open-graph-type: article
---

# Aggregation Guide

{% include badges.html %}

Data objects in Weaviate can be grouped, based on your filters. You can use GraphQL's `Aggregation{}` function to then obtain meta information about these groups. Direct data querying can be done by the [`Get{}`](./explore) function, and exploration can be done by the [`Explore{}`](./explore) function.

## Index

- [Basics](#basics)
- [Introduction](#introduction)
- [Aggregate{} Function](#aggregate-function)
- [Filters](#filters)
  - [GroupBy](#groupby)
  - [Where and Limit](#where-and-limit)
  - [OLAP](#olap)
- [FAQ](#frequently-asked-questions)


## Basics

- You can use the `Aggregation` function to get meta information about filtered groups in the data.

## Introduction

The `Aggregate{}` function can be used if you want to obtain meta information about the dataobjects in a Weaviate instance. Metainformation can be queried over all objects in a class (see [Aggregate function](#aggregate-function)), or by groups in a class (see [Filters](#filters)).

`Aggregate{}` requests can be made using the same `graphql` REST endpoint using POST requests:

```bash
$ curl http://localhost/v1/graphql -X POST -H 'Content-type: application/json' -d '{GraphQL query}'
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
      City {
        InCountry {
          pointingTo
          type
        }
        isCapital {
          count
          percentageFalse
          percentageTrue
          totalFalse
          totalTrue
          type
        }
        meta {
          count
        }
        name {
          count
          type
          topOccurrences {
            occurs
            value
          }
        }
        population {
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

### Filters

#### GroupBy
If you want meta information about groups of dataobjects, you can group them using the `groupBy` filter in the `Aggregate` function. 

The stucture of this filter in the query is as follows:

```graphql
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
        <propertyName {
          count
        }
      }
    }
  }
}
```

In the following example, the cities are grouped by the property `isCapital`, where one group contains capital cities, and the second group contains cities of which the property `isCapital` is set to `False`.

```graphql
{
  Aggregate {
    Things {
      City (groupBy:["isCapital"]) {
        meta {
          count
        }
        population {
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

which might result in something like this result:

```json
{
  "data": {
    "Aggregate": {
      "Things": {
        "City": [
          {
            "groupedBy": {
              "path": [
                "isCapital"
              ],
              "value": "1"
            },
            "meta": {
              "count": 2
            },
            "population": {
              "mean": 9900000
            }
          },
          {
            "groupedBy": {
              "path": [
                "isCapital"
              ],
              "value": "0"
            },
            "meta": {
              "count": 2
            },
            "population": {
              "mean": 5500000
            }
          }
        ]
      }
    }
  },
  "errors": null
}
```

#### Where and Limit
In the `Aggregate{}` function, as well as the `Get{}` function, a `where` filter and `limit` filter can be used on class-level to filter data. A detailed explanation of these filters can be found on the `Query` page ([here for `where` filter](./query#filters), and [here for `limit` filter](./query#limit-filter)).

In addition, the `limit` filter can be used on the `topOccurrences` fields.

#### OLAP

OLAP queries take a long time (minutes to hours) to complete, so there is a way to send an OLAP query, let it run in the background, and come back later to get the results. The query result will be stored in cache.

This applies to `Aggregate{}` queries only, where large amount of data may be processed. Currently, this is offered for queries to a local network. OLAP queries send to other nodes in a network outside the local network can be computationally very expensive, and a design for this is not implemented yet.

The following two parameters can be set in the `<class>` level of GraphQL queries, which both allow boolean values:
- `useAnalyticsEngine`
- `forceRecalculate` 
- Default setting is both `forceRecalculate` and `useAnalyticsEngine` to `false`. When these settings are set to other settings in the configuration file of Weaviate, these settings will be adopted. When these parameters are used in direct GraphQL queries, these settings are used rather than the default and configuration settings. Note that the following settings are not a valid combination and will fail in configuration: `(forceRecalculate: true, useAnalyticsEngine: false)`

When you send a specific OLAP query for the first time for the first time, you will get an error message. This error message will let you know that the analytics engine is running to calculate the query results for you. When you run the same query again while the result is not ready yet, you will see another message to let you know the job is still running, under the same hash code. When you run the query again when the job is done, you will see the results. If you send the same query again without `forceRecalculate` set to `true`, the cached result will be retrieved and no recalculation will to be done.

### Example
``` graphql
{
  Aggregate {
    Things {
      City(groupBy: ["isCapital"],
        forceRecalculate: false,
        useAnalyticsEngine: true,
      ) {
        population {
          mean
        }
        groupedBy {
          value
        }
      }
    }
  }
}
```

## Frequently Asked Questions

...

If you can't find the answer to your question here, please use the:
1. [Knowledge base of old issues](https://github.com/semi-technologies/weaviate/issues?utf8=%E2%9C%93&q=label%3Abug). Or,
2. For questions: [Stackoverflow](https://stackoverflow.com/questions/tagged/weaviate). Or,
3. For issues: [Github](//github.com/semi-technologies/weaviate/issues).