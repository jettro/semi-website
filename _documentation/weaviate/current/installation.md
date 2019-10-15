---
layout: layout-documentation
product: weaviate
product-order: 1
title: Installation
description: How to install a weaviate setup.
tags: ['Installation', 'Running', 'Kubernetes']
menu-order: 3
open-graph-type: article
og-img: documentation.jpg
---

# Installation Guide

{% include badges.html %}

Weaviate is completely containerized, you can use Docker Compose and/or Kubernetes to run it.

## Index

- [Video tutorial](#video-tutorial)
- [Basics](#basics)
- [Weaviate Cluster Service (WCS)](#weaviate-cluster-service-wcs)
- [Docker Compose](#docker-compose)
- [Kubernetes](#kubernetes)
- [Weaviate Configuration](#weaviate-configuration-file)
- [OpenID (OICD) Authentication](#openid-authentication)
- [FAQ](#frequently-asked-questions)

## Video Tutorial

Do you prefer video over text or do you want more background information?

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/ye-dmGBsxf4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Basics

- The main entrypoint for the Weaviate API is `/v1`.
- If your Weaviate is available over the internet or locally, you can use the [Weaviate Playground](http://playground.semi.technology) to interact with it.
- All environments run out of the box.

## Weaviate Cluster Service (WCS)

Weaviate Clusters are managed instances hosted on the SeMI network. Weaviate Clusters are ideal to quickly setup and run or test out Weaviate's capabilities. You can request a free Weaviate Cluster;

- [Through the weaviate-cli](/documentation/weaviate-cli/current/cluster-create.html).

## Docker Compose

You can run a Weaviate instance with [Docker Compose](https://docs.docker.com/compose/) as follows on Linux and MacOS:

Want another language? Make sure to let us know [here](https://github.com/semi-technologies/weaviate/issues).

### Weaviate with an English contextionary

```bash
# Download the Weaviate configuration file
$ curl -O https://raw.githubusercontent.com/semi-technologies/weaviate/{{ site.weaviate_version }}/docker-compose/runtime/en/config.yaml
# Download the Weaviate docker-compose file
$ curl -O https://raw.githubusercontent.com/semi-technologies/weaviate/{{ site.weaviate_version }}/docker-compose/runtime/en/docker-compose.yml
# Run Docker compose
$ docker-compose up
```

### Weaviate with a Dutch contextionary

```bash
# Download the Weaviate configuration file
$ curl -O https://raw.githubusercontent.com/semi-technologies/weaviate/{{ site.weaviate_version }}/docker-compose/runtime/nl/config.yaml
# Download the Weaviate docker-compose file
$ curl -O https://raw.githubusercontent.com/semi-technologies/weaviate/{{ site.weaviate_version }}/docker-compose/runtime/nl/docker-compose.yml
# Run Docker compose
$ docker-compose up
```

Warning: The output is quite verbose, for an alternative see [attaching to only
the log output of weaviate](#attaching-to-the-log-output-of-only-weaviate).

### Attaching to the log output of only weaviate

The log output of weaviate's backing databases can be quite verbose. We instead
recommend to attach only to weaviate itself. In this case run `docker-compose
up` like so:

- Download the `config.yaml` and `docker-compose.yml` compose files as mentioned [here](#docker-compose).
- Instead of running `docker-compose up` run the following command;

```bash
# Run Docker compose
$ docker-compose up -d && docker-compose logs -f weaviate
```

Alternatively you can run docker-compose entirely detached with `docker-compose
up -d` and poll `{bind_address}:{port}/v1/meta` until you receive
status `200 OK`.

### Docker Compose (manual installation)

You can also download the files manually if you have trouble with the above script.

1. `$ mkdir weaviate && cd weaviate` 
2. Download [the files located in this folder](https://github.com/semi-technologies/weaviate/blob/{{ site.weaviate_version }}/docker-compose/runtime).
3. Run `docker-compose up` in the same location you've downloaded the files.

The output of the above setup is quite verbose, you can also run the above command with Weaviate related logs only;

## Kubernetes

_coming soon_

## Weaviate Configuration File

Configuration customizations can be made in the configuration YAML file.

_Note: in principle Weaviate runs out of the box and the configuration should only be changed in very customized situations._

## OpenID Authentication

In the configuration YAML file, you can specify the desired mode of authentication, such as OpenID Connect.

Currently [Anonymous Access](authentication.html#anonymous-access) and [OpenID
Connect](authentication.html#openid-connect-oidc) are supported. Other Authentication schemes
might become available in the near future.

You can read more about how to setup (OpenID) authentication [here](authentication.html#openid-details).

If all authentication schemes - including anonymous access - are disabled,
Weaviate will fail to start up and ask you to configure at least one.

## Frequently Asked Questions

{% include support-links.html %}