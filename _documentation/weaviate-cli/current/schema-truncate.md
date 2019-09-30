---
layout: layout-documentation
product: weaviate-cli
product-order: 3
title: Documenttion on how to truncate a Weaviate schema
description: Truncate a Weaviate schema.
tags: ['weaviate-cli', 'schema', 'truncate']
menu-order: 7
open-graph-type: article
---

# Schema Truncate Guide

{% include badges.html %}

## Index

- [Basics](#basics)
- [Schema Truncate](#schema-truncate)

## Basics

If a weaviate [is empty](./empty.html), you can truncate the schema.

## Schema Truncate

You can truncate a weaviate by running:

```bash
$ weaviate-cli schema-truncate
```

Additional commands:

```markdown
usage: weaviate-cli schema-truncate [-h] [--force]

positional arguments:
  schema-truncate

optional arguments:
  -h, --help       show this help message and exit
  --force          Force the truncation of the schema
```

## Frequently Asked Questions

{% include support-links.html %}