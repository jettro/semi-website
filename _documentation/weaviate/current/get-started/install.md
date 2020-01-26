---
layout: layout-documentation
product: weaviate
sub-menu: Get started
product-order: 1
title: Installation
description: How to install a Weaviate or Weaviate Kubernetes cluster.
tags: ['Installation', 'Running', 'Kubernetes']
menu-order: 2
open-graph-type: article
og-img: documentation.jpg
---

# Installation Guide

{% include badges.html %}

Weaviate is completely containerized, you can use Docker Compose and/or Kubernetes to run it.

## Index

- [Basics](#basics)
- [Docker Compose](#docker-compose)
- [Kubernetes](#kubernetes)
  - [K8s configuration](#k8s-configuration)
  - [Get the Helm Chart](#get-the-helm-chart)
  - [Deploy](#deploy)
  - [Additional configuration](#additional-configuration-help)
  - [Etcd Disaster Recovery](#etcd-disaster-recovery)
- [Weaviate Configuration](#weaviate-configuration-file)
- [OpenID (OICD) Authentication](#openid-authentication)
- [More resources](#more-resources)

## Basics

- The main entrypoint for the Weaviate API is `/v1`.
- If your Weaviate is available over the internet or locally, you can use the [Weaviate Playground](http://playground.semi.technology) to interact with it.
- All environments run out of the box.

## Docker Compose

You can run a Weaviate instance with [Docker Compose](https://docs.docker.com/compose/) as follows on Linux and MacOS:

Want another natural language? Make sure to let us know [here](https://github.com/semi-technologies/weaviate/issues).

### Weaviate with an English contextionary

```bash
# Download the Weaviate configuration file
$ curl -O https://raw.githubusercontent.com/semi-technologies/weaviate/{{ site.weaviate_version }}/docker-compose/runtime/en/config.yaml
# Download the Weaviate docker-compose file
$ curl -O https://raw.githubusercontent.com/semi-technologies/weaviate/{{ site.weaviate_version }}/docker-compose/runtime/en/docker-compose.yml
# Run Docker Compose
$ docker-compose up
```

### Weaviate with a Dutch contextionary (EXPERIMENTAL)

```bash
# Download the Weaviate configuration file
$ curl -O https://raw.githubusercontent.com/semi-technologies/weaviate/{{ site.weaviate_version }}/docker-compose/runtime/nl/config.yaml
# Download the Weaviate docker-compose file
$ curl -O https://raw.githubusercontent.com/semi-technologies/weaviate/{{ site.weaviate_version }}/docker-compose/runtime/nl/docker-compose.yml
# Run Docker Compose
$ docker-compose up
```

Warning: The output is quite verbose, for an alternative see [attaching to only
the log output of weaviate](#attaching-to-the-log-output-of-only-weaviate).

### Attaching to the log output of only weaviate

The log output of weaviate's backing databases can be quite verbose. We instead
recommend to attach only to weaviate itself. In this case run `docker-compose
up` like so:

- Download the `config.yaml` and `docker-compose.yml` compose files as mentioned [here](#docker-compose).
- Instead of running `docker-compose up` run the following command:

```bash
# Run Docker Compose
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

The output of the above setup is quite verbose, you can also run the above command with Weaviate related logs only:

## Kubernetes

_Note I: the Kubernetes setup is only for large scale deployments of Weaviate. In case you want to work with smaller deployments, you can always user Docker Compose or the Weaviate Cluster Service._

_Note II: tested until Kubernetes 1.14.x_

_Note III: In case your are running a very small setup. We would advice to use Docker Compose, but you can also this [minimal configuration](https://github.com/semi-technologies/weaviate-helm/blob/v{{ site.helm_version }}/weaviate/values-minimal.yaml)._

To run Weaviate with Kubernetes take the following steps.

```bash
# Check if helm is installed
$ helm version
# Check if pods are running properly
$ kubectl -n kube-system get pods
```

### Get the Helm Chart

Get the Helm chart and configuration files.

```bash
# Set the Weaviate chart version
export CHART_VERSION="v{{ site.helm_version }}"
# Download Helm charts
wget https://github.com/semi-technologies/weaviate-helm/releases/download/$CHART_VERSION/weaviate.tgz
# Download configuration values
wget https://raw.githubusercontent.com/semi-technologies/weaviate-helm/$CHART_VERSION/weaviate/values.yaml
```

### K8s configuration

In the values.yaml file you can tweak the configuration to align it with your setup. The yaml file is extensively documented to help you align the configuration with your setup.

Out of the box, the configuration file is setup for:

- 1 Weaviate replica.
- `anonymous_access` = enabled.
- 3 esvector replicas.
- 3 etcd replicas.

As a rule of thumb, you can:

- increase Weaviate replicas if you have a high load.
- increase esvector replicas if you have a high load and/or a lot of data.

### Deploy

You can deploy the helm charts as follows:

```bash
# Init helm (if you use Helm 2)
$ helm init --upgrade
# Create a Weaviate namespace
$ kubectl create namespace weaviate
# Deploy
$ helm upgrade \
  --values ./values.yaml \
  --install \
  --wait \
  --namespace "weaviate" \
  "weaviate" \
  weaviate.tgz
  ```

### Additional Configuration Help

- [Cannot list resource “configmaps” in API group when deploying Weaviate k8s setup on GCP](https://stackoverflow.com/questions/58501558/cannot-list-resource-configmaps-in-api-group-when-deploying-weaviate-k8s-setup)
- [Error: UPGRADE FAILED: configmaps is forbidden](https://stackoverflow.com/questions/58501558/cannot-list-resource-configmaps-in-api-group-when-deploying-weaviate-k8s-setup)

### etcd Disaster Recovery

_coming soon_

## Weaviate Configuration File

Configuration customizations can be made in the configuration YAML file.

_Note: in principle Weaviate runs out of the box and the configuration should only be changed in very customized situations._

## OpenID Authentication

In the configuration YAML file, you can specify the desired mode of authentication, such as OpenID Connect.

Currently [Anonymous Access](../setup/../setup/authenticate.html#anonymous-access) and [OpenID
Connect](../setup/../setup/authenticate.html#openid-connect-oidc) are supported. Other Authentication schemes
might become available in the near future.

You can read more about how to setup (OpenID) authentication [here](../setup/../setup/authenticate.html#openid-details).

If all authentication schemes - including anonymous access - are disabled,
Weaviate will fail to start up and ask you to configure at least one.

## More Resources

{% include support-links.html %}