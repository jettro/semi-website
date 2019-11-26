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

- All datasets can be imported by using Docker. You need to specify the complete endpoint (e.g., `https://foobar.semi.network`).

## Datasets

Below a list of the available datasets.

### News publications

This dataset contains 250 random news articles from; Financial Times, New York Times, Guardian, Wallstreet Journal, CNN, Fox News, The Economist, New Yorker, Wired, Vogue, Game Informer.

Usage with Docker on **external** host or localhost **without** Docker Compose;

```bash
# WEAVIATE HOST (e.g., https://foobar.semi.network), note paragraph basics for setting the local IP
$ export WEAVIATE_HOST=WEAVIATE HOST
# Make sure to replace YOUR_HOST with the Weaviate host as mentioned in the basics above
$ docker run -i -e weaviate_host=$WEAVIATE_HOST semitechnologies/weaviate-demo-newspublications
```

Usage with Docker on **local** host **with** Docker Compose;

_Note: run this from the same directory where the Weaviate Docker-compose files are located_

{% raw %}
```bash
# WEAVIATE HOST (e.g., http://localhost:8080), note the paragraph "basics" for setting the local IP
$ export WEAVIATE_HOST="http://$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' ${PWD##*/}_weaviate_1):8080"
# WEAVIATE NETWORK (see paragraph: Running on the localhost)
$ export WEAVIATE_NETWORK=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.NetworkID}}{{end}}' ${PWD##*/}_weaviate_1)
# Run docker
$ docker run -i --network=$WEAVIATE_NETWORK -e weaviate_host=$WEAVIATE_HOST semitechnologies/weaviate-demo-newspublications
```
{% endraw %}

## FAQ

{% include support-links.html %}