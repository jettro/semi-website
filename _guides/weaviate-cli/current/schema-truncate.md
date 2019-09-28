---
layout: layout-guide
product: weaviate-cli
product-order: 3
title: Schema Truncate
description: At it's root, Weaviate 
tags: ['Business', 'Summary', 'Blog']
video-link:
video-caption:
menu-order: 7
---

# Schema Truncate Guide

{% include badges.html %}

## Index

- [Basics](#basics)
- [Schema Truncate](#initiation)

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