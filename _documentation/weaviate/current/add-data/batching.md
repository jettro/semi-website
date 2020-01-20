---
layout: layout-documentation
product: weaviate
sub-menu: Add data
product-order: 1
title: Batching
description: How to setup a weaviate schema.
tags: ['Batching']
menu-order: 3
open-graph-type: article
og-img: documentation.jpg
---

# Batching

{% include badges.html %}

Add many data objects in one API call.

## Index

- [Basics](#basics)
- [Introduction](#introduction)
- [RESTful API](#restful-api)
- [FAQ](#frequently-asked-questions)

## Basics

- For larger datasets you can use batching to quickly import a lot of data.
- A batch can contain:
  - Up to 1000 objects. Or
  - Max XXX MB.

## Introduction

For larger datasets you can use batching to quickly import a lot of data. The concept is similar to adding individual objects, but with batching they will be added as an array.

## RESTful API

A bulk of objects can be added to Weaviate by using a batch POST. A seperate request should be done for the semantic kinds (`Things` or `Actions`). The definitions of the data objects is similar to adding [single data objects](./add_and_modify.html#add-a-data-object).

Example based on _things_:

```bash
$ curl http://localhost:8080/v1/batching/things -X POST -H 'Content-type: application/json' -d \
'{
  "fields": [
    "ALL"
  ],
  "things": [
    {
      "class": "Publication",
      "schema": {
        "name": "Wired Magazine"
      },
      "id": "0a85f1db-fbf3-4343-b45b-25c794c5419d"
    },
    {
      "class": "Publication",
      "schema": {
        "name": "New Yorker"
      },
      "id": "b0c18f80-d7c1-44bf-a745-14b9df5b1055"
    }
  ]
}'
```

## Frequently Asked Questions

{% include support-links.html %}