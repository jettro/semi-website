---
layout: layout-documentation
product: weaviate-cli
product-order: 3
title: Introduction to the Weaviate CLI tool
description: Weaviate CLI tool
tags: ['weaviate-cli', 'introduction']
menu-order: 1
open-graph-type: article
---

# Introduction to Weaviate-CLI

{% include badges.html %}

## Index

- [Basics](#basics)
- [Initiation](#initiation)

## Basics

You can ping a Weaviate to validate if it's up and running.

## Initiation

You can get an overview of available commands with the `--help` flag.

```bash
$ weaviate-cli --help
```

Overview of current commands:

```markdown
usage: weaviate-cli [-h]
                    {init,schema-import,schema-export,schema-truncate,empty,sandbox-create,sandbox-remove,sandbox-list,ping,version}
                    ...

CLI tool to interact with Weaviate instances. Mre information:
https://semi.technology/documentation/weaviate-cli

positional arguments:
  {init,schema-import,schema-export,schema-truncate,empty,sandbox-create,sandbox-remove,sandbox-list,ping,version}
    init                Initiate a Weaviate. This function is used to connect
                        the CLI to a Weaviate instance
    schema-import       The schema file should be in the same format as
                        the/weaviate/v1/schema RESTful output
    schema-export       Save a copy of the Weaviate's schema to disk
    schema-truncate     Truncate the schema, the Weaviate must be empty.
    empty               Empty the Weaviate (i.e., all concepts will be
                        removed)
    sandbox-create      Create a Weaviate sandbox on the SeMI network
    sandbox-remove      Delete a sandbox
    sandbox-list        Delete a sandbox
    ping                Validate if a Weaviate can be pinged with or without
                        authentication
    version             Get the current version number

optional arguments:
  -h, --help            show this help message and exit
```

## Frequently Asked Questions

{% include support-links.html %}