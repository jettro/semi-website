---
layout: layout-documentation
product: weaviate
product-order: 1
title: Demo datasets
description: demo datasets for Weaviate
tags: ['Demo', 'datasets']
menu-order: 13
open-graph-type: article
og-img: documentation.jpg
---

# Demo Datasets

{% include badges.html %}

Demo datasets that you can use to learn about Weaviate.

## Index

- [Basics](#basics)
- [Datasets](#datasets)
    - [News publications](#news-publications)
- [FAQ](#faq)

## Basics

- All datasets can be imported by using Docker. You need to specify the complete endpoint (e.g., `http://localhost:8080` or `https://foobar.semi.network`).

## Datasets

Below a list of the available datasets.

### News publications

This dataset contains 250 random news articles from; Financial Times, New York Times, Guardian, Wallstreet Journal, CNN, Fox News, The Economist, New Yorker, Wired, Vogue, Game Informer.

Usage with Docker;

```bash
# Make sure to replace YOUR_HOST with the Weaviate host as mentioned in the basics above
$ docker run -i -e weaviate_host=YOUR_HOST semitechnologies/weaviate-demo-newspublications
```

## FAQ

{% include support-links.html %}