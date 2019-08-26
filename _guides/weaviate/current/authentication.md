---
layout: layout-guide
product: weaviate
product-order: 1
title: Authentication
description: How to setup weaviate auhtentication.
tags: ['Installation', 'Authentication']
video-link:
video-caption:
menu-order: 3
open-graph-type: article
---

# Authentication Guide

If you run Weaviate with an [OpenID authentication scheme](./installation#openid-authentication), you need to send the correct credentials in a request.

{% include badges.html %}

## Index

- [Video Guide](#video-guide)
- [Basics](#basics)
- [OpenID details](#openid-details)
- [Add a Bearer to a request](#add-a-bearer-to-a-request)

## Video Guide

If you prefer video over text, you can use the video edition of this guide.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5bqpcIX2VDQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Basics

- By default a Weaviate runs without any form of authentication.
- You need to include a `Bearer` to authenticate.
- The examples assume that Weaviate runs on port 80 on the localhost.
- The entry point to a Weaviate is always `/v1`.
- [Configure](./installation#openid-authentication) OpenID on a Weaviate instance.
- [Learn more about OpenID](http://openidexplained.com/)

## OpenID details

You can request all details needed from the following endpoint:

```bash
$ curl http://localhost/v1/.well-known/openid-configuration
```

## Add a Bearer to a request

When you've received a Bearer, you can authenticate in the following manner where `{Bearer}` is the bearer-code.

```bash
# List all things with a Bearer
$ curl http://localhost/v1/things -H "Authorization: Bearer {Bearer}"
```