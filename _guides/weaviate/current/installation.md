---
layout: layout-guide
product: weaviate
product-order: 1
title: Installation
description: How to install a weaviate setup.
tags: ['Installation', 'Running', 'Kubernetes']
video-link:
video-caption:
menu-order: 3
open-graph-type: article
---

# Installation Guide

{% include badges.html %}

Weaviate is completely containerized, you can use Docker Compose, Kubernetes or Terraform.

## Index

- [Video Guide](#video-guide)
- [Basics](#basics)
- [Weaviate Sandbox](#weaviate-sandbox)
- [Docker Compose](#docker-compose)
- [Kubernetes](#kubernetes)
- [Terraform](#terraform)
- [Weaviate Configuration](#weaviate-configuration-file)
- [OpenID (OICD) Authentication](#openid-authentication)
- [FAQ](#frequently-asked-questions)

## Video Guide

If you prefer video over text, you can use the video edition of this guide.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5bqpcIX2VDQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Basics

- The main entrypoint for the Weaviate API is `/v1`.
- If your Weaviate is available over the internet or locally, you can use the [Weaviate Playground](/guides/weaviate-playground/current/) to interact with it.
- All environments run out of the box.

## Weaviate Sandbox

Sandboxes are Weaviate instances hosted on the SeMI network. Sandboxes are ideal to quickly setup and test out Weaviate's capabilities. You can request sandboxes;

- [Through this web-form](/weaviate-sandbox/)
- [Through the weaviate-cli](/guides/weaviate-cli/current/sandbox-create)

## Docker Compose

You can run a Weaviate instance with [Docker Compose](https://docs.docker.com/compose/) as follows on Linux and MacOS:

```bash
# Download the runtime files (depends on jq and basename)
$ curl -s https://raw.githubusercontent.com/semi-technologies/weaviate/{{ site.weaviate_version }}/tools/download-docker-compose-deps.sh "{{ site.weaviate_version }}" | bash
# Run Docker compose
$ docker-compose up
```

You are now ready to get started! If you run into issues, please use the:
1. [Knowledge base of old issues](https://github.com/semi-technologies/weaviate/issues?utf8=%E2%9C%93&q=label%3Abug). Or,
2. For questions: [Stackoverflow](https://stackoverflow.com/questions/tagged/weaviate) . Or,
3. For issues: [Github](//github.com/semi-technologies/weaviate/issues).

### Attaching to the log output of only weaviate
The log output of weaviate's backing databases can be quite verbose. We instead
recommend to attach only to weaviate itself. In this case run `docker-compose
up` like so:

```bash
# Download the runtime files (depends on jq and basename)
$ curl -s https://raw.githubusercontent.com/semi-technologies/weaviate/{{ site.weaviate_version }}/tools/download-docker-compose-deps.sh "{{ site.weaviate_version }}" | bash
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

...

## Terraform

...

## Weaviate Configuration File

Configuration customizations can be made in the [configuration YAML file](https://github.com/semi-technologies/weaviate/blob/master/docker-compose/runtime/config.yaml).

_Note: in principle Weaviate runs out of the box and the configuration should only be changed in very customized situations._

## OpenID Authentication

In the [configuration YAML file](https://github.com/semi-technologies/weaviate/blob/master/docker-compose/runtime/config.yaml), you can specify the open ID authentication.

Currently [Anonymous Access](authentication#anonymous-access) and [OpenID
Connect](authentication#openid-connect-oidc) are supported. Other Authentication schemes
might become available in the near future.

You can read more about how to setup (OpenID) authentication [here](authentication#openid-details).

If all authentication schemes - including anonymous access - are disabled,
Weaviate will fail to start up and ask you to configure at least one.

## Frequently Asked Questions

...


If you can't find the answer to your question here, please use the:
1. [Knowledge base of old issues](https://github.com/semi-technologies/weaviate/issues?utf8=%E2%9C%93&q=label%3Abug). Or,
2. For questions: [Stackoverflow](https://stackoverflow.com/questions/tagged/weaviate) . Or,
3. For issues: [Github](//github.com/semi-technologies/weaviate/issues).