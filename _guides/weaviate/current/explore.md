---
layout: layout-guide
product: weaviate
product-order: 1
title: Explore data
description: How to explore weaviate.
tags: ['Explore', 'Contextionary']
video-link:
video-caption:
menu-order: 9
open-graph-type: article
---

# Explore Guide

{% include badges.html %}

You can explore through the data in the Weaviate knowledge graph using the GraphQL `Explore{}` function.

## Index

- [Basics](#basics)
- [Introduction](#introduction)
- [Explore{} Function](#explore-function)
    - [Background](#background)
    - [Usage](#usage)
- [FAQ](#frequently-asked-questions)


## Basics

- Data objects in Weaviate can be found using a fuzzy search with the `Explore{}` function of the GraphQL API.
- Search results are based on given data, meta data and the `Contextionary` used in Weaviate.

## Introduction

You can explore through the data in the Weaviate knowledge graph using the GraphQL `Explore{}` function. Using arguments in the filters you are able to direct what concepts you are looking for. Classnames, beacons and certainty levels of the results can be returned. Exploration can be done in your own local Weaviate, or in a network of Weaviate instances. Weaviate computes certainty levels of matching objects to your search results based on the `Contextionary`. It moves through the vector space of Weaviate, which is enriched with data objects. The data objects are positioned based on the available meta-information of these objects, like `className`, `keywords`, `properties`, `property values`, etc. 

`Explore{}` requests can be made using the same `graphql` REST endpoint using POST requests:

```bash
$ curl http://localhost/v1/graphql -X POST -H 'Content-type: application/json' -d '{GraphQL query}'
```

## Explore{} Function

### Background

#### Calculation

#### Certainty

#### Moving


### Usage

The `Explore{}` function is structured as follows:

```graphql
{
  Explore (
    network: <Boolean>,         # If set to True, peers on the P2P network will be included in the search
    concepts: [<String>]!,      # Required; an array of search items, which should be present in the Contextionary
    limit: <Int>,               # The maximum amount of objects to return
    certainty: <Float>,         # Minimal level of certainty, computed by normalized distance. See [Certainty](#certainty) for more information
    moveTo: {               # Giving directions to the search
      concepts: [<String>]!, # List of search items
      force: <Float>!   # The force to applu for a particular movement. Must be between 0 (no movement) and 1 (largest possible movement).
    },
    moveAwayFrom: { # Giving directions to the search
      concepts: [<String>]!, # List of search items
      force: <Float>!   # The force to applu for a particular movement. Must be between 0 (no movement) and 1 (largest possible movement).
    }
  ) {
    beacon
    certainty   # certainty value based on a normalized distance calculation
    className
  }
}
```

Note that all words in the `concepts` argument array should be present in the Contextionary.

An example query:

```json
{
  Explore (
    concepts: ["bank"],
    certainty: 0.95,
    moveTo: {
      concepts: ["transation", "money"],
      force: 0.5
    },
    moveAwayFrom: {
      concepts: ["river", "animal"],
      force: 0.5
    }
  ) {
    beacon
    certainty
    className
  }
}
```


## Frequently Asked Questions

...

If you can't find the answer to your question here, please use the:
1. [Knowledge base of old issues](https://github.com/semi-technologies/weaviate/issues?utf8=%E2%9C%93&q=label%3Abug). Or,
2. For questions: [Stackoverflow](https://stackoverflow.com/questions/tagged/weaviate). Or,
3. For issues: [Github](//github.com/semi-technologies/weaviate/issues).