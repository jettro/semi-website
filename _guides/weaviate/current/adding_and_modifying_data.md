---
layout: layout-guide
product: weaviate
product-order: 1
title: Adding and Modifying Data
description: How to fill a weaviate with data.
tags: ['Add', 'Data', 'Modify']
menu-order: 7
open-graph-type: article
---

# Adding and Modifying Data Guide

{% include badges.html %}

When a Weaviate [schema](./schema.html) is created, you can populate a Weaviate with data.

## Index

- [Video Guide](#video-guide)
- [Basics](#basics)
- [Introduction](#introduction)
- [References guide](#references-guide)
- [Concept Data Object](#concept-data-object)
- [Add a concept data object](#add-a-concept-data-object)
- [Update a concept data object](#update-a-concept-data-object)
- [Get a concept data object](#get-a-concept-data-object)
- [Delete a concept data object](#delete-a-concept-data-object)
- [Add individual references](#add-individual-references)
- [Replace all references](#replace-all-references)
- [Delete individual references](#delete-individual-references)
- [Batching](#batching)
- [FAQ](#frequently-asked-questions)


## Video Guide

If you prefer video over text, you can use the video edition of this guide.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5bqpcIX2VDQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Basics

- Data is added through the RESTful API.
- Individual [semantic kinds](./#basic-terminology) can be collected or listed. However, there are seperate documentation pages for [querying](./query.html) and [exploring](./explore.html).
- The examples assume that Weaviate runs on port 80 on the localhost without authentication.
- The entry point to a Weaviate is always `/v1`.

## Introduction

Adding data to Weaviate is very similar to filling traditional graph databases with data. The two differentiating factors within Weaviate are:

1. The ability to make direct and indirect references to nodes in the graph.
2. Realtime semantic indexing in the [Contextionary](.#about-the-contextionary).

## References guide

Weaviate has two types of references;

1. Direct references which are references to nodes in the graph (like a traditional graph-DB).
2. Indirect references are references that are semantically similar to each other.

### Direct References

A direct reference connects a concept directly to another concept. The use case for this type of reference is that you want to want to make 100% sure that you make a correct reference. A `Company` to a `hasCEO` might be an example.

Direct references are always set like this:

```yaml
class: Company
schema:
  name: Apple
  hasCeo:
    beacon: weaviate://localhost/things/{concept ID}
```

- _Note: for more information about setting references, see the documentation below._
- _Note: click [here](#cross-reference-location-url) for more information about CREF location definitions_

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

Indirect references are always set like this:

```yaml
class: Company
schema:
  name: Apple
  hasCeo:
    Person:
      name: Tim Cook
```

_Note: for more information about setting references, see the documentation below._

### Cross Reference Location (URL)

Weaviate uses it's own transportaion schema. A URL is always defined in the same way;

| schema | location | concept | UUID |
| ------ | -------- | ------- | ---- |
| `weaviate://` | `localhost` or `peername` | `things` or `actions` | UUID |

For example:

```bash
weaviate://localhost/things/6406759e-f6fb-47ba-a537-1a62728d2f55
```

## Concept Data Object

A concept data object syntax is defined as follows:

```yaml
class: string # as defined during schema creation
id: "{UUID}" # optional, should be in UUID format.
schema:
  property I: defined as datatypes # as defined during schema creation
  property II: defined as datatypes # as defined during schema creation
  # etcetera
```

## Add a concept data object

A concept data object can be added to a Weaviate via the following endpoint:

```bash
$ curl http://localhost/v1/{semanticKind} -X POST -H '{contentType}' -d '{data}'
```

- `{semanticKind}` = _things_ or _actions_ ([more info](./#basic-terminology)).
- `{contentType}` = JSON or YAML.
- `{data}` = [concept data object](#concept-data-object).

Example of adding a _Thing_.

```bash
$ curl http://localhost/v1/things -X POST -H 'Content-type: text/x-yaml' -d \
'class: Company
id: f81bfe5e-16ba-4615-a516-46c2ae2e5a80
schema:
  name: Apple
  foundedIn: 1974
  inCountry:
    beacon: weaviate://localhost/a3c...a6c
  hasCeo:
    name: Timmothy Cook
    bornIn:
      beacon: weaviate://localhost/a3c...a6c'
```

- _Note, it is assumed that the CREF a3c...a6c exsists_
- _Note, the above example contains both a [direct](#direct-references) and an [indirect](#indirect-references) reference._

## Update a concept data object

A concept data object can be updated inside a Weaviate via the following endpoint:

```bash
$ curl http://localhost/v1/{semanticKind}/{semanticKindUUID} -X PUT -H '{contentType}' -d '{data}'
```

- `{semanticKind}` = _things_ or _actions_ ([more info](./#basic-terminology)).
- `{semanticKindUUID}` = the UUID that points to a concept.
- `{contentType}` = JSON or YAML.
- `{data}` = [concept data object](#concept-data-object).

Example of updating a _Thing_.

```bash
$ curl http://localhost/v1/things/f81bfe5e-16ba-4615-a516-46c2ae2e5a80 -X PUT -H 'Content-type: text/x-yaml' -d 
'class: Person
schema:
  name: Tim Cook'
```

## Get a concept data object

A concept data object can be retrieved from a Weaviate directly via the following endpoint;

```bash
$ curl http://localhost/v1/{semanticKind}/{semanticKindUUID}
```

- `{semanticKind}` = _things_ or _actions_ ([more info](./#basic-terminology)).
- `{semanticKindUUID}` = the UUID that points to a concept.

Example of requesting a _thing_.

```bash
$ curl http://localhost/v1/things/f81bfe5e-16ba-4615-a516-46c2ae2e5a80
```

- _Note, the result will be in the form of a [concept data object](#concept-data-object)._
- _Note, this endpoint is created the collect individual concepts directly, there are specific endpoints for [querying](./query.html) and [exploring](./explore.html)._

## Delete a concept data object

A concept data object can be deleted from a Weaviate directly via the following endpoint;

```bash
$ curl http://localhost/v1/{semanticKind}/{semanticKindUUID} -X DELETE
```

- `{semanticKind}` = _things_ or _actions_ ([more info](./#basic-terminology)).
- `{semanticKindUUID}` = the UUID that points to a concept.

Example of deleting a _thing_.

```bash
$ curl http://localhost/v1/things/f81bfe5e-16ba-4615-a516-46c2ae2e5a80 -X DELETE
```

## Add individual references

An individual reference can be added to a concept data object as follows;

```bash
$ curl http://localhost/v1/{semanticKind}/{semanticKindUUID}/references/{propertyName} -X POST -H '{contentType}' -d '{data}'
```

- `{semanticKind}` = _things_ or _actions_ ([more info](./#basic-terminology)).
- `{semanticKindUUID}` = the UUID that points to a concept.
- `{propertyName}` = the name of the property related to this class.
- `{contentType}` = JSON or YAML.
- `{data}` = direct or indirect reference.

Example of adding a direct reference:

```bash
$ curl http://localhost/v1/things/f81bfe5e-16ba-4615-a516-46c2ae2e5a80/references/inCountry -X POST -H 'Content-type: text/x-yaml' -d 'beacon: weaviate://localhost/lo9...b2c'
```

Example of adding an indirect reference:

```bash
$ curl http://localhost/v1/things/f81bfe5e-16ba-4615-a516-46c2ae2e5a80/references/hasCeo -X POST -H 'Content-type: text/x-yaml' -d \
'name: Steve Jobs
  bornIn:
    beacon: weaviate://localhost/lo9...b2c'
```

- _Note, you can only add multiple references if [the `cardinality` of the schema id set to `many`](./schema.html#create-a-schema-item)_

## Replace all references

All references related to a property can be updated as follows;

```bash
$ curl http://localhost/v1/{semanticKind}/{semanticKindUUID}/references/{propertyName} -X PUT -H '{contentType}' -d '{data}'
```

- `{semanticKind}` = _things_ or _actions_ ([more info](./#basic-terminology)).
- `{semanticKindUUID}` = the UUID that points to a concept.
- `{propertyName}` = the name of the property related to this class.
- `{contentType}` = JSON or YAML.
- `{data}` = array of direct or indirect reference.

Example of replacing a direct reference:

```bash
$ curl http://localhost/v1/things/f81bfe5e-16ba-4615-a516-46c2ae2e5a80/references/hasCustomers -X POST -H 'Content-type: text/x-yaml' -d \
'- 
  beacon: "weaviate://localhost/lo9...b2c"
-
  beacon: "weaviate://localhost/kjd...d8s"'
```

- _Note, you can only update multiple references if [the `cardinality` of the schema is set to `many`](./schema.html#create-a-schema-item)_

## Delete individual references

You can delete a single reference that is given in the body from the list of references that this property has.

...

## Batching

...


## Frequently Asked Questions

...


If you can't find the answer to your question here, please use the:
1. [Knowledge base of old issues](https://github.com/semi-technologies/weaviate/issues?utf8=%E2%9C%93&q=label%3Abug). Or,
2. For questions: [Stackoverflow](https://stackoverflow.com/questions/tagged/weaviate) . Or,
3. For issues: [Github](//github.com/semi-technologies/weaviate/issues).