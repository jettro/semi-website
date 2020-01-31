---
layout: layout-documentation
product: weaviate
sub-menu: Client libs
product-order: 1
title: Python
description: Weaviate Python client library.
tags: ['Python', 'Library', 'authentication']
menu-order: 1
open-graph-type: article
og-img: documentation.jpg
---

# Python Client Library Guide

{% include badges.html %}

## Index

- [Authentication](#Authentication)
- [More resources](#more-resources)


## Authentication
A weaviate instance that uses authentication can also be accessed using the client. Simply create an authentication secret and pass it to the client.

```python
import weaviate

auth = weaviate.AuthClientPassword(<user>, <password>)
client = weaviate.Client(<weaviate URL>, auth)
```

Currently the floowing grand types are currently supported:
 - password \
 `weaviate.AuthClientPassword(<user>, <password>)`
 - client credentials \
 `weaviate.AuthClientCredentials(<token>)`


## More Resources

{% include support-links.html %}