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
    - [Running on the localhost](#running-on-the-localhost)
- [Datasets](#datasets)
    - [News publications](#news-publications)
- [FAQ](#faq)

## Basics

- All datasets can be imported by using Docker. You need to specify the complete endpoint (e.g., `https://foobar.semi.network`).

### Running on the localhost

Running on the localhost? No problem, but first set the WEAVIATE_HOST and the WEAVIATE_NETWORK with the following commands;

{% raw %}
```bash
# Set local Weaviate English
$ export WEAVIATE_HOST="http://$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' en_weaviate_1):8080"
# Set local Weaviate Dutch
$ export WEAVIATE_HOST=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.NetworkID}}{{end}}' en_weaviate_1)
```
{% endraw %}

also connect to the right network

{% raw %}
```bash
# Set the correct network for Weaviate English
$ export WEAVIATE_NETWORK=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.NetworkID}}{{end}}' en_weaviate_1)
# Set the correct network for Weaviate Dutch
$ export WEAVIATE_HOST=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.NetworkID}}{{end}}' nl_weaviate_1)
```
{% endraw %}

## Datasets

Below a list of the available datasets.

### News publications

This dataset contains 250 random news articles from; Financial Times, New York Times, Guardian, Wallstreet Journal, CNN, Fox News, The Economist, New Yorker, Wired, Vogue, Game Informer.

Usage with Docker on **external** host;

```bash
# Weaviate host (e.g., https://foobar.semi.network), note paragraph basics for setting the local IP
$ export WEAVIATE_HOST=WEAVIATE HOST
# Make sure to replace YOUR_HOST with the Weaviate host as mentioned in the basics above
$ docker run -i --network=$WEAVIATE_NETWORK semitechnologies/weaviate-demo-newspublications
```

Usage with Docker on **local** host;

```bash
# Weaviate host (e.g., https://foobar.semi.network), note paragraph basics for setting the local IP
$ export WEAVIATE_HOST=YOUR WEAVIATE HOST
# Weaviate network (see paragraph: Running on the localhost)
$ export WEAVIATE_NETWORK=WEAVIATE NETWORK
# Make sure to replace YOUR_HOST with the Weaviate host as mentioned in the basics above
$ docker run -i --network=$WEAVIATE_NETWORK -e weaviate_host=$WEAVIATE_HOST semitechnologies/weaviate-demo-newspublications
```

## FAQ

{% include support-links.html %}