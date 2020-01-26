---
layout: layout-documentation
product: weaviate
sub-menu: Features
product-order: 1
title: Contextual Classification
description: How to perform Contextual classification for properties of data objects.
tags: ['Contextual Classification', 'Data', 'Modify']
menu-order: 1
open-graph-type: article
og-img: documentation.jpg
---

# Contextual Classification Guide

{% include badges.html %}

Perform contextual classifications through the RESTapi to enhance your dataset. 

## Index

- [Basics](#basics)
- [Introduction](#introduction)
- [How to use](#how-to-use)
    - [Start a Classification](#start-a-classification)
    - [See the Status of a Classification](#see-the-status-of-a-classification)
    - [Get Classification Meta Information of Data Objects](#get-classification-meta-information-of-data-objects)
- [Example](#example)
- [More resources](#more-resources)

## Basics

- Reference properties of data objects can be classified with contextual classification.
- There is no training data in contextual classification.
- Use the RESTful api queries `v1/classification/` for classification.
- Classification meta information of data objects can be requested by setting `?meta=true` in `GET /things/{kinds}/{id}` requests for things and actions.

## Introduction

Weaviate's classification features allows you to classify data objects. Cross-references will be predicted. In contextual classification, no labeled data (training data) is needed. Instead, for each to-be-classified object, the classification target is chosen by a distance metric. Note that the results will only good if the description of sources is semantically close to the destination.

## How to use

Classification can be performed via the `v1/classification/` endpoint on the RESTful API. There are two operations possible. To start a classification job, send a `POST` request to `v1/classification/`, and specify the `type` of the classification to `contextual`  in the body (see below). To view previously created classifications, send a `GET` request to `v1/classification/{classificationId}`.

### Start a Classification

To start a classification, send a `POST` request to `v1/classification/` with the following body:

```js
POST /v1/classifications

{
  "class": "className",
  "classifyProperties": ["<property1>", "<property2>"],
  "basedOnProperties": ["<property3>"],  // This field must be specified, but the current implementation takes the whole vector of the class (objects) into account
  "type": "contextual"
}

// returns GET response + Header 'Location: /v1/classifications/<classificationId>'
```

Which returns a body like the following if the classification was successfully started:

```json
{
  "id": "<classificationId>",
  "class": "<className>",
  "classifyProperties": [
    "<property1>", "<property3>"
  ],
  "basedOnProperties": [
    "<property3>"
  ],
  "status": "running",
  "meta": {
    "started": "<timestamp>",
    "completed": "<timestamp>" || null,
    "count": 147,
    "countSucceeded": 140,
    "countFailed": 7
  },
  "type": "contextual",
  "certainty": 0.8
}
```

### See the Status of a Classification

The ID returned in the POST request can be used to request information about the classification process, by performing a `GET` on `v1/classification/{classificationId}`. A similar result as above will be returned, containing information about the classification. The status of the classification van 

```json
GET /v1/classifications/<classificationID>

{
  "id": "<classificationId>",
  "class": "<className>",
  "classifyProperties": [
    "<property1>", "<property3>"
  ],
  "basedOnProperties": [
    "<property3>"
  ],
  "status": "running",
  "meta": {
    "started": "<timestamp>",
    "completed": "<timestamp>" || null,
    "count": 147,
    "countSucceeded": 140,
    "countFailed": 7
  },
  "type": "contextual",
  "certainty": 0.8
}
```

### Get Classification Meta Information of Data Objects 

After the classification is completed, the concerning reference properties data objects in the Weaviate instance are updated according to the classification. These data objects will be represented similarly to other data objects. When you perform a `GET` request to a specific `Thing` or `Action`, no additional information about classifiction will be shown, unless you specifically add a parameter `meta=true` to the request:
 
```json
GET /v1/things/<id>/?meta=true

{
  "class": "<className>",
  "id": "<uuid>",
  "schema": {
    "<property1>": [
      {
         "beacon": "...",
         "meta": null  <----- indicates this has not been classified, but set by a user
      }
    ],
    "<property2>": [
      {
         "beacon": "...",
         "meta": {
            "classification": {
              "distanceWinning": float
            },
          },
      }
    ],
    "<property3>": [
      {
         "beacon": "...",
         "meta": null  <----- indicates this has not been classified, but set by a user
      }
    ],
  },
  "meta": {
    "classification": {
      "id": "<classificationId>",
      "completed": "<timestamp>",
      "classifiedFields": ["<property2>"],
      "scope": ["<property1>", "<property2>"]  <----- note that the scope was to classify both fields, but since the user had already set <property1> the actual classified Fields (see one row up) is only a single field (<property2>),
      "basedOn": ["<property3>"],
    }
  }
}
```

This returned information does not only show the values of the properties of the requested `Thing`, but also `meta` information about how the property values are obtained. If a property value is obtained by user input, not by classification, then the `meta` fields in the property schema will be `null`. This is the case for `<property1>` and `<property3>`. 

When a property value of a reference property is filled by classification, then `classification` information will appear in the `meta` field of this property. It contains information about `distanceWinning`, which gives information about how the reference has been classified. The float number are a normalized distance (between 0 and 1), where 0 means equal and 1 would mean a perfect opposite.

Then, additional meta information about the classication of this data object is shown in the last `meta` field on a higher level.

## Example

To explain how to use the API calls to perform classification less abstract, let's go into an example. Let's say we want to classify to which Category Articles belong to, using the schema of previous examples in the documentation. We have the following information:
- A schema class `Category`, with a property `name`.
- A schema class `Article`, with at least the properties `description` and `ofCategory` which refers to `Category`. (`Article(description) --> ofCategory --> Category(name)`).
- Data objects of the class `Category`, with the `name` property filled.
- Data objects of the class `Article`, with the reference property `ofCategory` not filled yet.

We can now send `POST` request with the following body to `/v1/classification`:

```json
{
  "class": "Aricle",
  "classifyProperties": ["ofCategory"],
  "basedOnProperties": ["description"],
  "type": "contextual"
}
```

which will return the following `meta` information:

```json
{
  "id": "ee722219-b8ec-4db1-8f8d-5150bb1a9e0c",
  "class": "Aricle",
  "classifyProperties": [
    "ofCategory"
  ],
  "basedOnProperties": [
    "description"
  ],
  "status": "running",
  "meta": {
    "started": "2017-07-21T17:32:28Z",
    "completed": null,
    "count": 147,
    "countSucceeded": 140,
    "countFailed": 7
  },
  "type": "contextual"
}
```

If we later check the status by performing a GET request to `v1/classification/ee722219-b8ec-4db1-8f8d-5150bb1a9e0c`, we will get the following information if the classification has finished.

```json
{
  "id": "ee722219-b8ec-4db1-8f8d-5150bb1a9e0c",
  "class": "Article",
  "classifyProperties": [
    "ofCategory"
  ],
  "basedOnProperties": [
    "description"
  ],
  "status": "completed",
  "meta": {
    "started": "2017-07-21T17:32:28Z",
    "completed": "2017-07-21T17:56:23Z",
    "count": 304,
    "countSucceeded": 296,
    "countFailed": 8
  },
  "type": "contextual"
}
```

If we later want to know to which `Category` the `Article` refers to, we can send the following `GET` request to `/v1/things/c370fd85-c2d8-4321-80c4-ae6744abe671/?meta=true`, which will return:

```json
{
  "class": "Article",
  "id": "c370fd85-c2d8-4321-80c4-ae6744abe671",
  "schema": {
    "description": "Scientists discover new species",
    "ofCategory": [
      {
         "beacon": "<beaconToCategoryWithNameScience>",
         "meta": {
            "classification": {
              "distanceWinning": 0.5,
            },
          }
      }
    ]
  },
  "meta": {
    "classification": {
      "id": "ee722219-b8ec-4db1-8f8d-5150bb1a9e0c",
      "completed": "2017-07-21T17:56:23Z",
      "classifiedFields": ["ofCategory"],
      "scope": ["ofCategory"],
      "basedOn": ["description"]
    }
  }
}
```

## More Resources

{% include support-links.html %}