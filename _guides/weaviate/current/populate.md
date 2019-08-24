---
layout: layout-guide
product: weaviate
product-order: 1
title: Populate
description: How to populate a weaviate with data.
tags: ['Populate']
menu-order: 5
open-graph-type: article
---

# Populate Guide

When a Weaviate [schema](./schema.html) is created, you can populate a Weaviate with data.

{% include badges.html %}

## Index

- [Video Guide](#video-guide)
- [Basics](#basics)
- [Introduction](#introduction)
- [Reference guide](#reference-guide)
- [Add a data object](#add-a-data-object)
- [Update a data object](#update-a-data-object)
- [Get a data object](#get-a-data-object)
- [Delete a data object](#delete-a-data-object)
- [Add individual references](#add-individual-references)
- [Update individual references](#update-individual-references)
- [Replace individual references](#replace-individual-references)
- [Delete individual references](#delete-individual-references)
- [Batching](#batching)

## Video Guide

If you prefer video over text, you can use the video edition of this guide.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5bqpcIX2VDQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Basics

- Data is added through the RESTful API.

## Introduction

...

## Reference guide

Weaviate has types of references...

### Direct References

A direct reference connects a concept directly to another concept. The use case for this type of reference is that you want to want to make 100% sure that you make a correct reference. A Person to a BankAccount might be an example.

References are always set like this:

```yaml
...
```

### Indirect References

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

## Add a data object

...

## Update a data object

...

## Get a data object

...

## Delete a data object

...

## Add individual references

...

## Update individual references

...

## Replace individual references

...

## Delete individual references

...

## Batching

...
