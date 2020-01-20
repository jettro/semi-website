---
layout: layout-documentation
product: weaviate
sub-menu: Query data
product-order: 1
title: Explore
description: How to explore weaviate.
tags: ['Explore', 'GraphQL', 'Contextionary']
menu-order: 3
open-graph-type: article
og-img: documentation.jpg
---

# Explore Guide

{% include badges.html %}

You can explore the smart graph based on the semantic meaning of the data concepts in a Weaviate using the GraphQL `Explore{}` function or the the `explore{}` filter.

## Index

- [Basics](#basics)
- [Introduction](#introduction)
  - [Calculation](#calculation)
  - [Certainty](#certainty)
  - [CamelCase interpretation](#camelcase-interpretation)
  - [Moving](#moving)
- [Explore{} Filter](#explore-filter)
- [Explore{} Function](#explore-function)
- [FAQ](#frequently-asked-questions)

## Basics

- With the `explore{}` filter in `Get{}` queries you can filter to find concepts.
- With the `Explore{}` query function, you can fuzzy search for data objects in Weaviate.
- Search results are based on given data, meta data and the `Contextionary` used in Weaviate.

## Introduction

You can explore (i.e., fuzzy) through the data in the Weaviate smart graph using the GraphQL `Explore{}` function. Using arguments in the filters you are able to direct what concepts you are looking for. Classnames, [beacons](../about/philosophy.html#basic-terminology) and certainty levels of the results can be returned. Exploration can be done in your own local Weaviate, or in a network of Weaviate instances. Weaviate computes certainty levels of matching objects to your search results based on the `Contextionary`. It moves through the vector space of Weaviate, which is enriched with data objects. The data objects are positioned based on the available meta-information of these objects, like `className`, `keywords`, `properties`, `property values`, etc. 

`Explore{}` requests can be made using the same `graphql` REST endpoint using POST requests:

```bash
$ curl http://localhost/v1/graphql -X POST -H 'Content-type: application/json' -d '{GraphQL query}'
```

### Calculation

Weaviate indexes and queries through the vector space in near-realtime (i.e., no training is needed) this allows to explore and search fast and efficiently. Calculations are based on the number of times the word occurs in the contextionary and the geographical centroid position.

### Certainty

Certainty means how close the explore query is to the object.

### CamelCase interpretation

Weaviate splits words based on CamelCase. For example, if a user wants to explore for the iPhone (the Apple device) they should use `iphone` rather than `iPhone` because the latter will be interpreted as `[i, phone]`.

### Moving

Because pagination is not possible in multidimensional storage, you can improve your results with additional explore functions which can move away from semantic concepts or towards semantic concepts. E.g., if you look for the concept 'New York Times' but don't want to find the city New York, you can use the  `moveAway{}` function by using the words 'New York'.

## Explore{} filter

You can extend a Get{} function can with an explore{} filter to find concepts in your dataset. This function is used to find _concepts_ inside your Weaviate.

The `Explore{}` filter is structured as follows:

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

## Explore{} function

The Explore function can be used if a user doesn't know what to look for at all. For example, you might not be familiar with the exact class names of the concept you are looking for. The explore function will return everything it found around a particular set of given concepts.

The `Explore{}` function is structured as follows:

```json
{
  Explore (
    network: <Boolean>,      # If set to True, peers on the P2P network will be included in the search
    concepts: [<String>]!,   # Required; an array of search items, which should be present in the Contextionary
    limit: <Int>,            # The maximum amount of objects to return
    certainty: <Float>,      # Minimal level of certainty, computed by normalized distance. See [Certainty](#certainty) for more information
    moveTo: {                # Giving directions to the search
      concepts: [<String>]!, # List of search items
      force: <Float>!        # The force to applu for a particular movement. Must be between 0 (no movement) and 1 (largest possible movement).
    },
    moveAwayFrom: {          # Giving directions to the search
      concepts: [<String>]!, # List of search items
      force: <Float>!        # The force to applu for a particular movement. Must be between 0 (no movement) and 1 (largest possible movement).
    }
  ) {
    beacon
    certainty                # certainty value based on a normalized distance calculation
    className
  }
}
```

Note that all words in the `concepts` argument array should be present in the Contextionary. More information about beacon interpretation can be found [here](../about/philosophy#basic-terminology).

An example query:

```graphql
{
  Explore (
    concepts: ["New Yorker"],
    certainty: 0.95,
    moveTo: {
      concepts: ["publisher", "articles"],
      force: 0.5
    },
    moveAwayFrom: {
      concepts: ["city", "fashion", "shop"],
      force: 0.5
    }
  ) {
    beacon
    certainty
    className
  }
}
```
{% include molecule-gql-demo.html %}

## Frequently Asked Questions

{% include support-links.html %}